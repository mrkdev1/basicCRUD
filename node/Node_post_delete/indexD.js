//DELETE testfolder

var MGMT_ADDRESS = 'xxx.xxx.xxx.xxx'; //management ip address
var USER = 'some_admin';
var PASS = 'some_password';
var MOD = '/mgmt/tm/sys/folder/~Common~testfolder';

var fs = require('fs')
var request = require('request');
var request = request.defaults({strictSSL: false, rejectUnauthorized: false});

request.del('https://' + MGMT_ADDRESS + MOD)
.auth(USER, PASS, false)
.on('error', function(err) {console.log(err)})
.pipe(fs.createWriteStream ('doodle.json'))
   





