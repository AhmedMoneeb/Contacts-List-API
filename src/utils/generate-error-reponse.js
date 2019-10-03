
const generateErrorResponse = (res, statusCode, message) => {
    res.status(statusCode)
        .send(
            {
                statusCode,
                errors: [
                    {
                        message
                    }
                ]
            }
        );
}
module.exports = generateErrorResponse;