const Contact = require('../models/contact-model');
const generateErrorResponse = require('../utils/generate-error-reponse');
const generateSuccessResponse = require('../utils/generate-success-response')

const addNewContact = async (req, res) => {
    try {
        // Creates anew object of the contact-model
        const contact = new Contact(req.body);
        //Adding userId to the contact-model object (auth middleware added this field to the req)
        contact.userId = req.userId;
        //trying to save the object to the DB
        let insertedContact = await contact.save();
        //if the no inserted object -> this means that some internal error(DB connection was lost) has happened 
        if (!insertedContact) {
            return generateErrorResponse(res);
        }
        //if no errors happened we will generate a reponse message with contact data
        generateSuccessResponse(res, 201, "New contact added successfully", insertedContact);
    } catch (error) {
        //catch any error and generate an error message
        generateErrorResponse(res, 500, "Internal server error");
    }
}

module.exports = addNewContact;