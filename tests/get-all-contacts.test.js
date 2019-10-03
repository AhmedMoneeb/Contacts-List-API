const app = require('../src/app');
const request = require('supertest');
const faker = require('faker');
const Contact = require('../src/models/contact-model');


describe('POST /contacts/getList', function () {
    before(async function () {
        await Contact.deleteMany();
        var contacts = [
            {
                "firstName": faker.name.firstName(),
                "lastName": faker.name.lastName(),
                "email": faker.internet.email().toLowerCase(),
                "mobile": "01234567891",
                "userId": "userA"
            },
            {
                "firstName": faker.name.firstName(),
                "lastName": faker.name.lastName(),
                "email": faker.internet.email().toLowerCase(),
                "mobile": "01234567892",
                "userId": "userA"
            },
            {
                "firstName": faker.name.firstName(),
                "lastName": faker.name.lastName(),
                "email": faker.internet.email().toLowerCase(),
                "mobile": "01234567893",
                "userId": "userA"
            },
            {
                "firstName": faker.name.firstName(),
                "lastName": faker.name.lastName(),
                "email": faker.internet.email().toLowerCase(),
                "mobile": "01234567894",
                "userId": "userA"
            },
            {
                "firstName": faker.name.firstName(),
                "lastName": faker.name.lastName(),
                "email": faker.internet.email().toLowerCase(),
                "mobile": "01234567895",
                "userId": "userA"
            },
            {
                "firstName": faker.name.firstName(),
                "lastName": faker.name.lastName(),
                "email": faker.internet.email().toLowerCase(),
                "mobile": "01234567896",
                "userId": "userA"
            },
            {
                "firstName": faker.name.firstName(),
                "lastName": faker.name.lastName(),
                "email": faker.internet.email().toLowerCase(),
                "mobile": "01234567897",
                "userId": "userA"
            },
            {
                "firstName": faker.name.firstName(),
                "lastName": faker.name.lastName(),
                "email": faker.internet.email().toLowerCase(),
                "mobile": "01234567898",
                "userId": "userA"
            },
            {
                "firstName": faker.name.firstName(),
                "lastName": faker.name.lastName(),
                "email": faker.internet.email().toLowerCase(),
                "mobile": "01234567899",
                "userId": "userA"
            },
            {
                "firstName": faker.name.firstName(),
                "lastName": faker.name.lastName(),
                "email": faker.internet.email().toLowerCase(),
                "mobile": "01234567888",
                "userId": "userA"
            }
        ];
        for (contact of contacts) {
            await new Contact(contact).save();
        }
    })
    after(async function () {
        await Contact.deleteMany();
    })
    it('Should respond with all contacts of userA', function (done) {
        let resData = [];
        let requestBody = {
            "pageNumber": "1",
            "authorization": "fafjif4548wfsjbFeAF23164dwDHNvMHDqoPDnadfsijfnc153dsdw9g2va5",
            "deviceToken": "hdi278andydaf5ea5851d1w6ad4aew86f4a2sf1afre76gsh8rtsh4f21a",
            "fingerPrint": "123456789"
        }
        let contactId = '5d95117d207a9f093876cdb4';
        let createdAt = '2019-10-02T21:07:09.781Z'

        request(app)
            .post("/contacts/getList")
            .send(requestBody)

            .expect(function (res) {
                if (res.body.data.length !== 8) {
                    throw new Error("Data array should have 8 contacts");
                }
                delete res.body.data
            })
            .expect(200, {
                "statusCode": 200,
                "message": "Page 1 of contacts fetched successfully"
            }, done)
    });

    it('Should respond with empty data array', function (done) {
        let requestBody = {
            "pageNumber": "3",
            "authorization": "fafjif4548wfsjbFeAF23164dwDHNvMHDqoPDnadfsijfnc153dsdw9g2va5",
            "deviceToken": "hdi278andydaf5ea5851d1w6ad4aew86f4a2sf1afre76gsh8rtsh4f21a",
            "fingerPrint": "123456789"
        }

        request(app)
            .post("/contacts/getList")
            .send(requestBody)

            .expect(function (res) {
                if (res.body.data.length !== 0) {
                    throw new Error("Data array should be empty");
                }
                delete res.body.data
            })
            .expect(200, {
                "statusCode": 200,
                "message": "There is only 2 page(s)"
            }, done)
    });

    it('Should respond with unauthorized error', function (done) {
        let requestBody = {
            "pageNumber": "1",
            "deviceToken": "hdi278andydaf5ea5851d1w6ad4aew86f4a2sf1afre76gsh8rtsh4f21a",
            "fingerPrint": "123456789"
        }

        request(app)
            .post("/contacts/getList")
            .send(requestBody)
            .expect(401, {
                "statusCode": 401,
                "errors": [
                    {
                        "message": "You are not authorized"
                    }
                ]
            }, done)
    });

})