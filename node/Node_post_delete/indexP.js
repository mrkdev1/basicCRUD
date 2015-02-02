//Streams json from test.json and POSTS testfolder into folder
//Uses the request module

var MGMT_ADDRESS = '10.145.193.169'; //management ip address
var USER = 'some_admin';
var PASS = 'some_password';
var MOD = '/mgmt/tm/sys/folder';

var fs = require('fs');
var request = require('request');
var request = request.defaults({strictSSL: false, rejectUnauthorized: false});

var username = USER,
    password = PASS,
    endpoint = MGMT_ADDRESS + MOD,
    url = 'https://' + username + ':' + password + '@' + endpoint;

fs.createReadStream('test.json').pipe(request.post(url))
   .on('error', function(err) {console.log(err)})
   .on('response', function(res) {console.log('STATUS: '+ res.statusCode)})
   .on('response', function(res) {console.log(res.headers)})
   .pipe(fs.createWriteStream ('diddle.json'));






