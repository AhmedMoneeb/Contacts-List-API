const Joi = require('@hapi/joi');
const refineJoiErrorResponse = require('../utils/refine-joi-error-response');

//Validate the req.body of the '/contacts/addContact' route using Joi
const validateNewContact = async (req, res, next) => {
    const schema = Joi.object({
        firstName: Joi.string()
            .alphanum()
            .min(3)
            .max(15)
            .required(),

        lastName: Joi.string()
            .alphanum()
            .min(3)
            .max(15)
            .required(),

        email: Joi.string()
            .email()
            .required(),

        mobile: Joi.string()
            .length(11)
            .required(),

        authorization: Joi.string(),
        deviceToken: Joi.string(),
        fingerPrint: Joi.string()
    })
    const { error, value } = schema.validate(req.body,
        { abortEarly: false });
    if (!error) {
        next();
    } else {
        refineJoiErrorResponse(error);
        res.status(400).send(error);
    }
}
module.exports = validateNewContact;
