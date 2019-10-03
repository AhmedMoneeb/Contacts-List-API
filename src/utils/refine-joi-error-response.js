
const refineJoiErrorResponse = (originalError) => {
    originalError.statusCode = 400;
    delete originalError._original;
    for (error of originalError.details) {
        delete error.type;
        delete error.context;
        delete error.path;
    }
    originalError.errors = originalError.details;
    delete originalError.details;

}
module.exports = refineJoiErrorResponse;
