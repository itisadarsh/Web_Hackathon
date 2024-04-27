const mongoose = require('mongoose');

// Schema for AdditionalDetails
const additionalDetailsSchema = new mongoose.Schema({
    gender: {
        type: String,
        required: true
    },
    profilePhoto: {
        type: String
    },
    aadharNo: {
        type: String,
        required: true
    },
    ewsCertificate: {
        type: String
    },
    contact:{
        type:String,
        trim:true,
    },
    dob:{
        type:String,
        trim:true,
    }
});


const AdditionalDetails = mongoose.model('AdditionalDetails', additionalDetailsSchema);

