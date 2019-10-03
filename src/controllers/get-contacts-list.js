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
        if (parseInt(req.body.pageNumber) <= result.pages) {
            generateSuccessResponse(res, 200, `Page ${req.body.pageNumber} of contacts fetched successfully`, result.docs);
        } else {
            generateErrorResponse(res, 400, `There is only ${result.pages} page(s)`);
        }

    } catch (error) {
        return generateErrorResponse(res, 500, "Internal server Error");
    }

}

module.exports = getContactsList;
