#The following script gets global-settings information about the BigIP 
#from the iControl REST API

use strict;
use warnings;
use LWP::UserAgent;
use open qw(:std :utf8);
my $ua = LWP::UserAgent->new( ssl_opts => { verify_hostname => 0 } );

$ua->credentials(
    '<managment_ip>:443',
    'Enterprise Manager',
    'admin' => 'admin'
  );

my $response = $ua->get('https://<managment_ip>/mgmt/tm/sys/global-settings');
if ( $response->is_success ) {
    open(my $fh, '>', 'doodle.json');
    print $fh $response->decoded_content;
    close $fh;
}
else {
    die $response->status_line;
}