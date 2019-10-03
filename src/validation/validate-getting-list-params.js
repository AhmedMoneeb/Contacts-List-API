const Joi = require('@hapi/joi');
const refineJoiErrorResponse = require('../utils/refine-joi-error-response');

//Validate the req.body of the '/contacts/getList' route using Joi
const validateGettingListParams = async (req, res, next) => {
    const schema = Joi.object({
        pageNumber: Joi.number().integer().required().min(1),
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
module.exports = validateGettingListParams;