#The following Python script gets global-settings info for the BigIP using
#the iControl REST API. This also uses the Requests library.
#It issues a warning for using an unverified HTTPS request. 
import requests
r=requests.get('https://10.145.193.169/mgmt/tm/sys/global-settings', auth=('admin', 'admin'), verify=False)
f=open('doodle.json', 'w', encoding="utf-8")
f.write(r.text)

