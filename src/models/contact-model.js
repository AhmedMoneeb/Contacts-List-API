const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

//define the schema of the contacts collection in MongoDB using mongoose's schema
const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        max: 15,
        min: 3
    },
    lastName: {
        type: String,
        required: true,
        max: 15,
        min: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,

    },
    mobile: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
}, { timestamps: true });

contactSchema.index({ userId: 1 });
contactSchema.plugin(mongoosePaginate);


contactSchema.methods.toJSON = function () {
    let contactObj = this.toObject();
    contactObj.mobileNumber = contactObj.mobile;
    contactObj.contactId = contactObj._id;
    delete contactObj.mobile;
    delete contactObj.__v;
    delete contactObj._id;
    delete contactObj.updatedAt;
    return contactObj;
}
const Contact = new mongoose.model('Contact', contactSchema);
module.exports = Contact;