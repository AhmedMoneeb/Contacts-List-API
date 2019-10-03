const app = require('../src/app');
const request = require('supertest');
const faker = require('faker');
const Contact = require('../src/models/contact-model')
describe('POST /contacts/addContact', function () {
    
    after(async function () {
        await Contact.deleteMany();
    })
    it('Should add a new contact', (done) => {
        let contact = {
            "firstName": faker.name.firstName(),
            "lastName": faker.name.lastName(),
            "email": faker.internet.email().toLowerCase(),
            "mobile": "01111111111",
            "authorization": "fafjif4548wfsjbFeAF23164dwDHNvMHDqoPDnadfsijfnc153dsdw9g2va5", "deviceToken": "hdi278andydaf5ea5851d1w6ad4aew86f4a2sf1afre76gsh8rtsh4f21a",
            "deviceToken": "hdi278andydaf5ea5851d1w6ad4aew86f4a2sf1afre76gsh8rtsh4f21a",
            "fingerPrint": "123456789"
        };

        let contactId = '5d95117d207a9f093876cdb4';
        let createdAt = '2019-10-02T21:07:09.781Z'

        request(app)
            .post("/contacts/addContact")
            .send(contact)
            .expect(function (res) {
                res.body.data.contactId = contactId;
                res.body.data.createdAt = createdAt;
            })
            .expect(201, {
                "statusCode": 201,
                "message": "New contact added successfully",
                "data": {
                    "contactId": contactId,
                    "createdAt": createdAt,
                    "email": contact.email,
                    "userId": "userA",
                    "firstName": contact.firstName,
                    "lastName": contact.lastName,
                    "mobileNumber": contact.mobile,
                }
            }, done)
    });

    it('Should respond with unauthorized error', (done) => {
        let contact = {
            "firstName": faker.name.firstName(),
            "lastName": faker.name.lastName(),
            "email": faker.internet.email().toLowerCase(),
            "mobile": "01111111111",
            "deviceToken": "hdi278andydaf5ea5851d1w6ad4aew86f4a2sf1afre76gsh8rtsh4f21a",
            "fingerPrint": "123456789"
        };

        request(app)
            .post("/contacts/addContact")
            .send(contact)
            .expect(401, {
                "statusCode": 401,
                "errors": [
                    {
                        "message": "You are not authorized"
                    }
                ]
            }, done)
    });

    it('Should respond with bad request error', (done) => {
        let contact = {
            "firstName": faker.name.firstName(),
            "lastName": faker.name.lastName(),
            "mobile": "01111111111",
            "authorization": "fafjif4548wfsjbFeAF23164dwDHNvMHDqoPDnadfsijfnc153dsdw9g2va5",
            "deviceToken": "hdi278andydaf5ea5851d1w6ad4aew86f4a2sf1afre76gsh8rtsh4f21a",
            "fingerPrint": "123456789"
        };

        request(app)
            .post("/contacts/addContact")
            .send(contact)
            .expect(400, {
                "statusCode": 400,
                "errors": [
                    {
                        "message": "\"email\" is required"
                    }
                ]
            }, done)
    })
})


