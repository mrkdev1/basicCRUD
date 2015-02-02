//Returns the value in global settings to original
//Pipes response to external file

var MGMT_ADDRESS = 'xxx.xxx.xxx.xxx'; //management ip address
var USER = 'admin';
var PASS = 'some_password';
var MOD = '/mgmt/tm/sys/global-settings';

var fs = require('fs');
var request = require('request');
   
var request = request.defaults({strictSSL: false, rejectUnauthorized: false});
request.put('https://' + MGMT_ADDRESS + MOD)
.auth(USER, PASS, false)
.json({"guiSecurityBannerText":"Welcome to the BIG-IP Configuration Utility.\n\nLog in with your username and password using the fields on the left."})
.on('error', function(err) {console.log(err)})
.on('response', function(res) {console.log('STATUS: '+ res.statusCode)})
.on('response', function(res) {console.log(res.headers)})
.pipe(fs.createWriteStream ('diddle.json'));
   





