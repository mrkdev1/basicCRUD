//Streams json from test.json and PUTS it into global-settings

var MGMT_ADDRESS = 'xxx.xxx.xxx.xxx'; //management ip address
var USER = 'some_admin';
var PASS = 'some_password';
var MOD = '/mgmt/tm/sys/global-settings';

var fs = require('fs');
var request = require('request');
var request = request.defaults({strictSSL: false, rejectUnauthorized: false});

var username = USER,
    password = PASS,
    endpoint = MGMT_ADDRESS + MOD,
    url = 'https://' + username + ':' + password + '@' + endpoint;

fs.createReadStream('test.json').pipe(request.put(url))
   .on('error', function(err) {console.log(err)})
   .on('response', function(res) {console.log('STATUS: '+ res.statusCode)})
   .on('response', function(res) {console.log(res.headers)})
   .pipe(fs.createWriteStream ('diddle.json'));






