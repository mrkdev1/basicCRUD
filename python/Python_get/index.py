#The following Python script gets license info for the BigIP using
#the iControl REST API. This also uses the Requests library.
#It issues a warning for using an unverified HTTPS request. 

MGMT_ADDRESS = 'xxx.xxx.xxx.xxx'; 
USER = 'some_admin';
PASS = 'some_password';
MOD = '/mgmt/tm/sys/license';

import requests
r=requests.get('https://' + MGMT_ADDRESS + MOD, auth=(USER, PASS), verify=False)
f=open('doodle.json', 'w', encoding="utf-8")
f.write(r.text)

