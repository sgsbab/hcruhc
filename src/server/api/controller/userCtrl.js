const {User, Dependent, validate, UserAction} = require('../model/userMod');
const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const ObjectId = mongoose.Types.ObjectId;
const _ = require('lodash');
let obj = {};
obj.p='Welcome@123';
let hp='';

//Login validation.
async function validateCred(credObj)
{    
    let rejData = {};    
    let userExists = await User 
    .find({activeFlag: true, email: credObj.email})
    .select({email: 1, pwd: 1, _id:1});
    //console.log('userMod - userExists - Result: ', userExists);
    let flag = false;
    let authToken;
    if (userExists != null && userExists.length > 0)
    {
        //console.log('user keyed in pwd: ' + credObj.pwd + '  hash: '+ userExists[0].pwd);
        const vpwd = await bcrypt.compare(credObj.pwd, userExists[0].pwd)
        .then(resl => 
        {
            //console.log('vpwd - result: ', resl);
            /*
            return new Promise((resolve, reject) =>
            {
                if (resl)
                {
                    let jwtPK = config.get('jwtPrivateKey');
                    //Generating JWT tokens for authentication of web service calls from here on..
                    let authToken = jwt.sign({_id: userExists._id}, jwtPK, { expiresIn: '2h'});                                        
                    resolve(authToken); //Sending jwt to the client for future communications                    
                }
                else
                    reject('User Name or Password does not match');
            });
            */

           if (resl)
           {
               let jwtPK = config.get('jwtPrivateKey');
               //Generating JWT tokens for authentication of web service calls from here on..
               authToken = jwt.sign({_id: userExists._id}, jwtPK, { expiresIn: '2h'});
               //console.log("userCtrl - Auth Token: ", authToken);
               flag = true;
               return new Promise((resolve, reject) => 
               {
                    if (flag && authToken != null)
                    {                        
                        resolve(authToken);
                    }
               });               
           }
           else if (!resl)
            {
                return new Promise((resolve, reject) =>
                {
                    reject('User Name or Password <br/> does not match');
                });
            }
        })
        .catch(err => 
        {
            return new Promise((resolve, reject) =>
            {
                //console.log('userCtrl - validateCred - error: ', err);
                if (err != null && err.length > 0)
                    reject(err);
            });
        });
        //console.log("userCtrl - vpwd-----: ", vpwd);
        if (vpwd != null && vpwd.length > 0)
        {
            return new Promise((resolve, reject) => 
            {
                resolve(vpwd);
            });
        }
    }
    else
    {
        return new Promise((resolve, reject) =>
        {
            reject('User does not exist. <br/> Please request for sign up');
        });
    }
}

/*
* This method is used to Reset Password
* This method will check if the user exists based on the email / user name provided
* if the user name is available in db, it will retreive the default pwd and send.
*/
async function resetCred(cObj)
{
    let usrExists = await User 
    .find({activeFlag: true, email: cObj.email})
    .select({firstName: 1, lastName: 1, email: 1, pwd:1, _id:0});
    return new Promise((resolve, reject) =>
    {
        if (usrExists != null && usrExists.length > 0)
            resolve(usrExists);
        else
            reject('User does not exist. <br/> Please use Signup option.');
    });
}

/*
* This method is used to track the actions like Church communication, birthday wishes, etc.
* Parameter to be set: msgOccasion and msgDesc
*/
async function communication(comObj)
{
    let commDetail = await UserAction(comObj);
    commDetail.save().then(result => '').catch(err => console.log(err));
}

/*
* This function is to save the data to Church User collection
* Input: pass the userObj for all mandatory fields
*/
async function storeUserData(uObj)
{
    let saveStatus = false;
    const {error} = validate(uObj);
    if (error)
    {
        console.log('userCtrl - storeUserData - Data Validation Error : ', error.details);
        //cb(saveStatus);
        return new Promise((resolve, reject) =>
        {
            reject(saveStatus);
        });
    }
    else
    {
        let user_id = new ObjectId();
        
        //console.log('userObj: ', uObj);
        let userDetail = new User(
            _.pick(uObj, 
                ['firstName', 'lastName', 'gender', 'dob', 'maritalStatus', 'headOfFamily',
            'noOfDependents','email','mobileUser','mobileNo','country','state','district','baseChurch',
            'churchSubsId','headSubsId','additionalChurch','diocese','indClassification']));
        
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(obj.p, salt);
        userDetail.pwd=hashed;
        userDetail._id = user_id;
        //console.log('userDetail: ', userDetail);
        await userDetail.save().then(result => '').catch(err => console.log(err));
        console.log(`userCtrl - storeUserData - ${user_id} - Church User data saved to database successfully !`);
        saveStatus = true;
        return new Promise((resolve, reject) =>
        {
            resolve(saveStatus);
        });        
    }    
}

/*
* This function is to update the data to Church User collection
* Input: pass the userObj for all mandatory fields
*/
async function updateUserData(updObj)
{
    let updUser = _.pick(updObj, ['phoneOS', 'deviceRegToken']);
    let usrUpdated = await User.findOneAndUpdate(
    {mobileNo: updObj.mobileNo, churchSubsId: updObj.churchSubsId, baseChurch: updObj.baseChurch},
    {$set: updUser}, 
    {new: true, fields: {mobileNo:1, email:1, _id:0}});
    console.log('userCtrl - updateUserData - usrUpdated: ', usrUpdated);
    return new Promise((resolve,reject) =>
    {
        if (usrUpdated)
            resolve(true);
        else
            reject(false);
    });
}

exports.updateUser=updateUserData;
exports.communication=communication;
exports.storeUserData=storeUserData;
exports.resetCred=resetCred;
exports.validateCred = validateCred;