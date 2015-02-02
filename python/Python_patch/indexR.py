#The following Python script puts global-settings info for the BigIP using
#the iControl REST API. This also uses the Requests library.
#It issues a warning for using an unverified HTTPS request. 

MGMT_ADDRESS = 'xxx.xxx.xxx.xxx'; 
USER = 'some_admin';
PASS = 'some_admin';
MOD = '/mgmt/tm/sys/global-settings';

import requests
g=open('org.json','r', encoding="utf-8")
g.read()
r=requests.put('https://' + MGMT_ADDRESS + MOD, auth=(USER, PASS), verify=False, data=g)
f=open('doodle.json', 'w', encoding="utf-8")
f.write(r.text)

