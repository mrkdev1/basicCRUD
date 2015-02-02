#Puts global-settings info of test.data into BIGIP
use strict;
use warnings;
use LWP::UserAgent;
use open qw(:std :utf8);
 
my $ua = LWP::UserAgent->new( ssl_opts => { verify_hostname => 0 } );

$ua->credentials(
    '<management_ip>:443',
    'Enterprise Manager',
    'admin' => 'admin'
  );
 
my $server_endpoint = "https://<management_ip>:443/mgmt/tm/sys/global-settings";
 
# set custom HTTP request header fields
my $req = HTTP::Request->new(PUT => $server_endpoint);
$req->header('content-type' => 'application/json');
 
# add PUT data to HTTP request body
open INPUT, "<test3.json";
undef $/;
my $post_data = <INPUT>;
close INPUT;
$/ = "\n";     #Restore for normal behaviour later in script

$req->content($post_data);
 
my $resp = $ua->request($req);
if ($resp->is_success) {
    open(my $fh, '>', 'doodle.json');
    print $fh $resp->decoded_content;
    close $fh;
}
else {
    print "HTTP POST error code: ", $resp->code, "\n";
    print "HTTP POST error message: ", $resp->message, "\n";
}
 