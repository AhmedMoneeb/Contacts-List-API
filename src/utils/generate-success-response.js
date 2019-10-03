const generateSuccessResponse = (res, statusCode, message, data) => {
    res.status(statusCode)
        .send(
            {
                statusCode,
                message,
                data
            }
        )
}
module.exports = generateSuccessResponse;