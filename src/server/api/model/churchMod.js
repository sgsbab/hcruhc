const mongoose = require('mongoose')
require('mongoose-double')(mongoose);
let ObjectId = mongoose.Types.ObjectId;
const Joi = require('joi');
const _ = require('lodash');

church_id = new ObjectId();

/*
* This collection is to hold all the church related details
*/
const churchSchema = new mongoose.Schema(
{
    churchName: {type: String, required: true},
    churchDesc: {type: String, required: true},
    country: String,
    state: String,
    district: String,
    diocese: String, //defines KCD, TNCD, etc.
    indClassification: String,
    activeFlag: {type: Boolean, default: true}
});

const Church = mongoose.model('Church', churchSchema);

/*
* This function is used to validate the data provided from calling program
* This function makes use of Joi package
*/
function validateChurchParams(churchObj)
{    
    const churchJSchema = 
    {
        churchName: Joi.string().required(),
        churchDesc: Joi.string().required(),
        country: Joi.any(),
        state: Joi.any(),
        district: Joi.any(),
        diocese: Joi.any(),
        indClassification: Joi.any()
    };
    return Joi.validate(churchObj, churchJSchema);
}

exports.validate=validateChurchParams;
exports.Church=Church;