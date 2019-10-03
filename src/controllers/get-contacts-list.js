const mongoose = require('mongoose');
const Contact = require('../models/contact-model')
const generateErrorResponse = require('../utils/generate-error-reponse');
const generateSuccessResponse = require('../utils/generate-success-response');

const getContactsList = async (req, res) => {
    try {
        //getting users contact last with pagination
        //every page has 8 contacts
        const result = await Contact.paginate(
            { userId: req.userId },
            { page: req.body.pageNumber, limit: 8 }
        );
        if (!result) {
            return generateErrorResponse(res, 500, "Internal server Error");
        }
        generateSuccessResponse(res,
            200,
            parseInt(req.body.pageNumber) <= result.pages ?
                `Page ${req.body.pageNumber} of contacts fetched successfully` :
                `There is only ${result.pages} page(s)`,
            result.docs);


    } catch (error) {
        return generateErrorResponse(res, 500, "Internal server Error");
    }

}

module.exports = getContactsList;
