//The following gets license info for the BigIP using the iControl REST API.
//It pipes the response to an external file and returns headers. 
//It uses the request module.

var MGMT_ADDRESS = 'xxx.xxx.xxx.xxx';  //management ip address
var USER = 'admin';
var PASS = 'pass';
var MOD = '/mgmt/tm/sys/license';

var fs = require('fs')
var request = require('request');
   
var request = request.defaults({strictSSL: false, rejectUnauthorized: false});
request.get('https://' + MGMT_ADDRESS + MOD)
.auth(USER, PASS, false)
.on('error', function(err) {console.log(err)})
.on('response', function(res) {console.log('STATUS: '+ res.statusCode)})
.on('response', function(res) {console.log(res.headers)})
.pipe(fs.createWriteStream ('doodle.json'));
   





