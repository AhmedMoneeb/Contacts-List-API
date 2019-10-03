const mongoose = require('mongoose');
const Contact = require('../models/contact-model');
const generateErrorResponse = require('../utils/generate-error-reponse');
const generateSuccessResponse = require('../utils/generate-success-response');

const getRecentContactsList = async (req, res) => {
    try {
        //getting user last 5 added contacts
        const recentContacts = await Contact.find({ userId: req.userId })
            .sort({ createdAt: -1 })
            .limit(5);
        generateSuccessResponse(res, 200, "Recent contacts fetched successfully", recentContacts);
    } catch (error) {
        generateErrorResponse(res, 500, "Internal server error");
    }

}

module.exports = getRecentContactsList;