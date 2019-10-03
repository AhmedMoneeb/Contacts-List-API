# Contacts-List-API

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

### Prerequisites
* Download and install Node.js, You can do this here [Node.js Official site](https://nodejs.org)
* Download and run MongoDB server
  * Download MongoDB from [here](https://www.mongodb.com/download-center/community) (choose the ZIP option in the package list)
  * Go to downloads and extract everything from the downloaded file
  * Move the extracted files to another place and rename the folder to some shorter name like "install-mongodb"
  * In the same directory where "install-mongodb" folder exists create a new folder and rename it to "mongodb-data"
  * Open powershell and execute the following command
 
    * (full-path to the folder)\mongodb-installation\bin\mongod --dbpath=(full-path to the folder)\mongodb-data
    * for me it was like this "E:\mongodb\install-mongodb\bin\mongod --dbpath=E:\mongodb\mongodb-data"
  * Congratulations, You have a mongodb server running.
* Open cmd or bash in the project folder and execute the following commands
  * npm init
  * npm install
  
### Running the project
* Run MongoDB server
* Open cmd or bash in the project folder and execute the following command
  * npm run start

## Notes
* This project was developed using:
  * Node.js version 12.4.0
  * MongoDB server version 4.0.10
  
## Features
* REST specifications are applied
* Clean Code
* Code is fully commented
* Simple structure makes it easy to debug and update the project
* Project is tested using Mocha and Supertest
* Testing logic and data are separated from the project logic and data 
* API is well documented and you can see the full documentation below

## API Docs
### Create new contact
Creates a new contact in the contacts list of the user whose credentials were sent in the request body.
* URL: '/contacts/addContact'
* Method: POST
* URL Params: None
* Data Params: 
```
{
	"firstName":"Ahmeed",
	"lastName":"Moneeb",
	"mobile":"01111111111",
	"email":"ahmed@example.com",
	"authorization":"fafjif4548wfsjbFeAF23164dwDHNvMHDqoPDnadfsijfnc153dsdw9g2va5",
	"deviceToken":"hdi278andydaf5ea5851d1w6ad4aew86f4a2sf1afre76gsh8rtsh4f21a",
	"fingerPrint":"123456789"
}
```
* Notes:-
  * All fields are required
  * First name and last name can have only letters and numbers
  * Email address must be valid
  * Phone number must contain 11 numbers

* Success Response:
  * Code: 201 
  * Content: 
```
{
    "statusCode": 201,
    "message": "New contact added successfully",
    "data": {
        "firstName": "Ahmeed",
        "lastName": "Moneeb",
        "email": "ahmed@example.com",
        "userId": "userA",
        "createdAt": "2019-10-03T10:56:43.367Z",
        "mobileNumber": "01111111111",
        "contactId": "5d95d3eb45de8220b093c281"
    }
}
```
* Error Response:
  * Code: 401 Unauthorized ( if any credentials {authorization,deviceToken,fingerPrint} are wrong or missing )
  * Content: 
  ```
  {
    "statusCode": 401,
    "errors": [
        {
            "message": "You are not authorized"
        }
    ]
  }
  ```
* OR
  * Code: 400 Bad Request ( if any other required fields are missing instead of the credentials )
  * Content: 
  ```
  {
    "statusCode": 400,
    "errors": [
        {
            "message": "\"lastName\" is required"
        },
        {
            "message": "\"email\" is required"
        }
    ]
  }
  ```

* OR
  * Code: 500 Internal Server Error 
  * Content: 
  ```
  {
    "statusCode": 500,
    "errors": [
        {
            "message": "Internal server error"
        }
    ]
  }
  ```
### Get all user's contacts
Gets the requested page of the user's contacts list.
* URL: '/contacts/getList'
* Method: POST
* URL Params: None
* Data Params: 
```
{
	"pageNumber":"1",
	"authorization":"fafjif4548wfsjbFeAF23164dwDHNvMHDqoPDnadfsijfnc153dsdw9g2va5",
	"deviceToken":"hdi278andydaf5ea5851d1w6ad4aew86f4a2sf1afre76gsh8rtsh4f21a",
	"fingerPrint":"123456789"
}
```
* Notes:-
  * All fields are required
  * Page number must be larger than 0

* Success Response:
  * Code: 200
  * Content: 
```
{
    "statusCode": 200,
    "message": "Page 1 of contacts fetched successfully",
    "data": [
        {
            "firstName": "Ahmeed",
            "lastName": "Moneeb",
            "email": "ahmed@example.com",
            "userId": "userA",
            "createdAt": "2019-10-03T10:56:43.367Z",
            "mobileNumber": "01111111111",
            "contactId": "5d95d3eb45de8220b093c281"
        },
        {
            "firstName": "eample",
            "lastName": "example",
            "email": "example@example.com",
            "userId": "userA",
            "createdAt": "2019-10-03T11:33:17.400Z",
            "mobileNumber": "01111111110",
            "contactId": "5d95dc7da145a91518811e4e"
        },
        {
            "firstName": "eample",
            "lastName": "example2",
            "email": "example2@example.com",
            "userId": "userA",
            "createdAt": "2019-10-03T11:33:29.923Z",
            "mobileNumber": "01111111112",
            "contactId": "5d95dc89a145a91518811e4f"
        },
        {
            "firstName": "eample",
            "lastName": "example3",
            "email": "example3@example.com",
            "userId": "userA",
            "createdAt": "2019-10-03T11:33:39.197Z",
            "mobileNumber": "01111111113",
            "contactId": "5d95dc93a145a91518811e50"
        },
        {
            "firstName": "eample",
            "lastName": "example4",
            "email": "example4@example.com",
            "userId": "userA",
            "createdAt": "2019-10-03T11:33:48.788Z",
            "mobileNumber": "01111111114",
            "contactId": "5d95dc9ca145a91518811e51"
        },
        {
            "firstName": "eample",
            "lastName": "example5",
            "email": "example5@example.com",
            "userId": "userA",
            "createdAt": "2019-10-03T11:34:01.288Z",
            "mobileNumber": "01111111115",
            "contactId": "5d95dca9a145a91518811e52"
        },
        {
            "firstName": "eample",
            "lastName": "example6",
            "email": "example6@example.com",
            "userId": "userA",
            "createdAt": "2019-10-03T11:34:14.437Z",
            "mobileNumber": "01111111116",
            "contactId": "5d95dcb6a145a91518811e53"
        }
    ]
}
```
* Error Response:
  * Code: 401 Unauthorized ( if any credentials {authorization,deviceToken,fingerPrint} are wrong or missing )
  * Content: 
  ```
  {
    "statusCode": 401,
    "errors": [
        {
            "message": "You are not authorized"
        }
    ]
  }
  ```
* OR
  * Code: 400 Bad Request ( if page number is missing or larger than the total number of pages )
  * Content: 
  ```
  {
    "statusCode": 400,
    "errors": [
        {
            "message": "\"pageNumber\" is required"
        }
    ]
  }
  ```
  if page number was set for 17 for example we will get the following error 
  ```
  {
    "statusCode": 400,
    "errors": [
        {
            "message": "There is only 2 page(s)"
        }
    ]
  }
  ```

* OR
  * Code: 500 Internal Server Error 
  * Content: 
  ```
  {
    "statusCode": 500,
    "errors": [
        {
            "message": "Internal server error"
        }
    ]
  }
  ```
### Get recent contacts
Get last 5 contacts added by the user
* URL: '/contacts/getRecentList'
* Method: POST
* URL Params: None
* Data Params: 
```
{
	"authorization":"fafjif4548wfsjbFeAF23164dwDHNvMHDqoPDnadfsijfnc153dsdw9g2va5",
	"deviceToken":"hdi278andydaf5ea5851d1w6ad4aew86f4a2sf1afre76gsh8rtsh4f21a",
	"fingerPrint":"123456789"
}
```
* Notes:-
  * All fields are required
 
* Success Response:
  * Code: 200 
  * Content: 
```
{
    "statusCode": 200,
    "message": "Recent contacts fetched successfully",
    "data": [
        {
            "firstName": "eample",
            "lastName": "example8",
            "email": "example8@example.com",
            "userId": "userA",
            "createdAt": "2019-10-03T11:50:31.253Z",
            "mobileNumber": "01111111118",
            "contactId": "5d95e0874f799e08c8beef56"
        },
        {
            "firstName": "eample",
            "lastName": "example7",
            "email": "example7@example.com",
            "userId": "userA",
            "createdAt": "2019-10-03T11:50:18.494Z",
            "mobileNumber": "01111111117",
            "contactId": "5d95e07a4f799e08c8beef55"
        },
        {
            "firstName": "eample",
            "lastName": "example6",
            "email": "example6@example.com",
            "userId": "userA",
            "createdAt": "2019-10-03T11:34:14.437Z",
            "mobileNumber": "01111111116",
            "contactId": "5d95dcb6a145a91518811e53"
        },
        {
            "firstName": "eample",
            "lastName": "example5",
            "email": "example5@example.com",
            "userId": "userA",
            "createdAt": "2019-10-03T11:34:01.288Z",
            "mobileNumber": "01111111115",
            "contactId": "5d95dca9a145a91518811e52"
        },
        {
            "firstName": "eample",
            "lastName": "example4",
            "email": "example4@example.com",
            "userId": "userA",
            "createdAt": "2019-10-03T11:33:48.788Z",
            "mobileNumber": "01111111114",
            "contactId": "5d95dc9ca145a91518811e51"
        }
    ]
}
```
* Error Response:
  * Code: 401 Unauthorized ( if any credentials {authorization,deviceToken,fingerPrint} are wrong or missing )
  * Content: 
  ```
  {
    "statusCode": 401,
    "errors": [
        {
            "message": "You are not authorized"
        }
    ]
  }
  ```

* OR
  * Code: 500 Internal Server Error 
  * Content: 
  ```
  {
    "statusCode": 500,
    "errors": [
        {
            "message": "Internal server error"
        }
    ]
  }
  ```
