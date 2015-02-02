#post folders info

import requests

g=open('test.json','r')
g.read()

# Set the request parameters
url = 'https://10.145.193.169/mgmt/tm/sys/folder'
user = 'admin'
pwd = 'admin'

# Set proper headers
headers = {"Content-Type":"application/json","Accept":"application/json"}

# Do the HTTP request
response = requests.post(url, auth=(user, pwd), verify=False, headers=headers, data=g)

# Check for HTTP codes other than 200
if response.status_code != 201: 
    print('Status:', response.status_code, 'Headers:', response.headers, 'Error Response:',response.json())
    exit()

# Decode the JSON response into a dictionary and use the data
print('Status:',response.status_code,'Headers:',response.headers,'Response:',response.json())
