const generateErrorResponse = require('../utils/generate-error-reponse');
const {userA, userB} = require('../db/local-users'); 

/*
Compares the {authorization, deviceToken, fingerPrint} to the 
locally saved users and adds userId field to req object if a match is found
or sends an error message back if no match is found
*/  
const auth = (req, res, next) => {
    const { authorization, deviceToken, fingerPrint } = req.body;
    if (userA.authorization === authorization && userA.deviceToken === deviceToken && userA.fingerPrint === fingerPrint) {
        req.userId = userA.name;
    } else if (userB.authorization === authorization && userB.deviceToken === deviceToken && userB.fingerPrint === fingerPrint) {
        req.userId = userB.name;
    } else {
        return generateErrorResponse(res, 401, "You are not authorized")
    }
    next();

}

module.exports = auth;