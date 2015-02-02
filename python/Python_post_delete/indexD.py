#Need to install requests package for python
import requests

# Set the request parameters
url = 'https://10.145.193.169/mgmt/tm/sys/folder/~Common~testfolder'
user = 'admin'
pwd = 'admin'

# Set proper headers
headers = {"Content-Type":"application/json","Accept":"application/json"}

# Do the HTTP request
response = requests.delete(url, auth=(user, pwd), verify=False, headers=headers)
 
# Decode the JSON response into a dictionary and use the data
print('Status:', response.status_code, 'Headers:', response.headers)