#The following Python script puts global-settings info for the BigIP using
#the iControl REST API. This also uses the Requests library.
#It issues a warning for using an unverified HTTPS request. 
import requests
g=open('org.json','r', encoding="utf-8")
g.read()
r=requests.put('https://10.145.193.169/mgmt/tm/sys/global-settings', auth=('admin', 'admin'), verify=False, data=g)
f=open('doodle.json', 'w', encoding="utf-8")
f.write(r.text)

