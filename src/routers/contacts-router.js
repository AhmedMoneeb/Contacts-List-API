const express = require('express');
const addNewContact = require('../controllers/add-new-contact');
const getContactsList = require('../controllers/get-contacts-list');
const getRecentContactsList = require('../controllers/get-recent-contacts-list');
const auth = require('../authentication/auth')
const validateNewContact = require('../validation/validate-new-contact');
const validateGettingListParams = require('../validation/validate-getting-list-params');
const conatctRouter = express.Router();

//add new contact route
conatctRouter.post("/contacts/addContact", auth, validateNewContact, addNewContact);
//get all user's contacts route
conatctRouter.post("/contacts/getList", auth, validateGettingListParams, getContactsList);
//get user's recent contacts route
conatctRouter.post("/contacts/getRecentList", auth, getRecentContactsList);

module.exports = conatctRouter;