const mongoose = require('mongoose')
require('mongoose-double')(mongoose);
let ObjectId = mongoose.Types.ObjectId;
const Joi = require('joi');
const _ = require('lodash');

user_id = new ObjectId();
/*
* This collection is to hold all the personnel (church , followers) detail
*/
const userSchema = new mongoose.Schema(
{    
    _id: {type: ObjectId, default: user_id},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    gender: {type: String, required: true},
    dob: {type: Date, required: true},
    maritalStatus: Boolean,
    headOfFamily: Boolean,
    noOfDependents: Number,
    email: {type: String},
    pwd: {type: String, default: ''},
    mobileUser: {type: Boolean, default: true},
    mobileNo: {type: String, required: true},
    country: String,
    state: String,
    district: String,
    baseChurch: {type: String, required: true}, 
    churchSubsId: {type: String},
    headSubsId: {type: String},
    additionalChurch: String, //other than base church visited if any
    diocese: String, //defines KCD, TNCD, etc.
    indClassification: String, //defines CSI, CNI, etc.
    smartPhoneUser: {type: Boolean, default: true},
    phoneOS: {type: String},
    deviceRegToken: {type: String, default: 'abc'},
    userRole: {type: String}, //defines pastor or public    
    designation: String, //doctor, driver
    deceased: {type: Boolean, default: false},
    userSince: {type: Date, default: Date.now },
    lastLogin: {type: Date, default: Date.now }, 
    activeFlag: {type: Boolean, default: true}
});

const User = mongoose.model('User', userSchema);

/*
* This collection is to hold all the dependents detail
*/
const dependentsSchema = new mongoose.Schema(
{
    userId: {type: ObjectId, default: user_id},
    firstName: {type: String},
    lastName: {type: String},
    gender: {type: String},
    dob: {type: Date},
    designation: String,
    maritalStatus: {type: Boolean, default: true}, //Flag to identify if the dependent is married
    deceased: {type: Boolean, default: false}, 
    country: String,
    state: String,
    district: String,
    baseChurch: {type: String}, 
    churchSubsId: {type: String},
    headSubsId: {type: String},
    additionalChurch: String, //other than base church visited if any
    diocese: String, //defines KCD, TNCD, etc.
    indClassification: String, //defines CSI, CNI, etc.
    activeFlag: {type: Boolean, default: true}
});
    
    const Dependent = mongoose.model('Dependents', dependentsSchema);
/*
* This function is used to validate the data provided from calling program
* This function makes use of Joi package
*/
function validateUserParams(userObj)
{    
    const userJSchema = 
    {
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        gender: Joi.string().required(),
        dob: Joi.date().required(),
        email: Joi.string().email(),
        mobileNo: Joi.string().regex(/[0-9]{10}/),
        baseChurch: Joi.string().required(),
        smartPhoneUser: Joi.boolean().required(),
        maritalStatus: Joi.any(),
        headOfFamily: Joi.any(),
        noOfDependents: Joi.any(),
        mobileUser: Joi.any(),
        mobileNo: Joi.any(),
        country: Joi.any(),
        state: Joi.any(),
        district: Joi.any(),
        churchSubsId: Joi.any(),
        headSubsId: Joi.any(),
        additionalChurch: Joi.any(),
        diocese: Joi.any(),
        indClassification: Joi.any(),
        phoneOS: Joi.any(),        
        userRole: Joi.any(),
        designation: Joi.any()
    };
    return Joi.validate(userObj, userJSchema);
}


/* -------------------------------------End of User capture details------------------------------------- */

/* --------------------------------------Start of User Action capture--------------------------------------- */

/*
* This collection (table in sql) is to hold all the church user action details
* The customer actions like email sent, type of email sent, etc are stored
* On periodic basis, mails will be sent to customer on reminders, reports, etc 
*/
const userActionSchema = new mongoose.Schema(
{
    userId: {type: ObjectId},
    mobile: {type: Number},
    email: {type: String},
    msgOccasion: {type: String},
    msgDesc: String,
    notificationSent: {type: Boolean, default: true},
    smsSent: {type: Boolean, default: false},
    msgSentDate: {type: Date, default: Date.now},
    activeFlag: {type: Boolean, default: true}
});

//UserAction is a class returned by monoose.model
const UserAction = mongoose.model('UserAction', userActionSchema);

/* ---------------------------------------End of User Action capture---------------------------------------- */

exports.user_id = user_id;
exports.User = User;
exports.Dependent = Dependent;
exports.validate = validateUserParams;
exports.UserAction = UserAction;