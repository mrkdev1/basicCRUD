//Use HTTP GET to get license info
//It uses request module

var MGMT_ADDRESS = 'xxx.xxx.xxx.xxx'; //management ip address
var USER = 'admin';
var PASS = 'pass';
var MOD = '/mgmt/tm/sys/license';

var fs = require('fs')
var request = require('request');
var request = request.defaults({strictSSL: false, rejectUnauthorized: false});

request.get('https://' + MGMT_ADDRESS + MOD)
.auth(USER, PASS, false)
.on('error', function(err) {console.log(err)})
.pipe(fs.createWriteStream ('doodle.json'))
   





