const {Church, validate} = require('../model/churchMod');
const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const _ = require('lodash');
let obj = {};
obj.p='Welcome@123';
let hp='';

//Login validation.
async function tokenGenerator()
{    
    if (resl)
    {
        let jwtPK = config.get('jwtPrivateKey');
        //Generating JWT tokens for authentication of web service calls from here on..
        const token = jwt.sign({_id: userExists._id}, jwtPK, { expiresIn: '2h'});
        //resolve(resl);                    
        resolve(token); //Sending jwt to the client for future communications
    }
}

/*
* This method is used to retreive Church details based on the following parameters..
* diocese, churchLocation, churchName
*/
async function getChurchDetails(cObj)
{
    let rejData={};
    //console.log(cObj.diocese + ' ' + cObj.district + ' ' + cObj.churchName);    
    let dio='^'+cObj.diocese+'$';
    let dis='^'+cObj.district+'$';
    let chname='^'+cObj.churchName+'$';

    //regex has been used to make a case insensitive search
    let churchList = await Church
    .find({activeFlag: true, diocese: { $regex : dio, $options:'i' }, 
        district: { $regex : dis, $options:'i' }, churchName: { $regex : chname, $options:'i' }})
    .select({churchName: 1, churchDesc: 1, _id: 0});
    //console.log('Church Data: ', churchList);

    if (churchList != null && churchList.length > 0)
    {
        let finChurch={};
        finChurch.churchName=churchList[0].churchName;
        finChurch.churchDesc=churchList[0].churchDesc;
        finChurch.img='@/assets/CSI_photo.jpg'; //TODO: hardcoded, remove it later
        return new Promise((resolve, reject) =>
        {
            resolve(finChurch);
        });
    }
    else
    {
        return new Promise((resolve, reject) =>
        {            
            reject(rejData);
        });
    }   
}

/*
* This function provides all the Churchs are part of CSI with additional 
* details like State, district / location, Diocese and Church name
* No parameter are required to be passed.
*/
async function getAllChurches()
{
    let rejData={};
    let churches = await Church
    .find({activeFlag: true})
    .select({diocese: 1, district: 1, churchName: 1, _id: 1});
    console.log('Churches : ', churches);

    return new Promise((resolve, reject) =>
    {
        if (churches != null && churches.length > 0)
            resolve(churches);
        else
            reject(rejData);
    });
}

/*
* This function is to save the data to Church collection
* Input: pass the churchObj for all mandatory fields
*/
async function storeChurchData(chuObj)
{
    let saveStatus = false;
    
    const {error} = validate(chuObj);
    if (error)
    {
        console.log('churchCtrl - storechurchData - Data Validation Error : ', error.details);        
        return new Promise((resolve, reject) =>
        {
            reject(saveStatus);
        });
    }
    else
    {
        let churchDetail = new Church(
            _.pick(chuObj, 
                ['churchName', 'churchDesc', 'country','state',
                'district','diocese','indClassification']));

        churchDetail._id = Date.now(); //Timestamp has been set as _id instead of ObjectId
        await churchDetail.save().then(result => '').catch(err => console.log(err));
        console.log('churchCtrl - storeChurchData - Church data saved to database successfully !');
        saveStatus = true;
        return new Promise((resolve, reject) =>
        {
            resolve(saveStatus);
        });        
    }
}

/*
* This function provides all the Churchs which are part of CSI with additional 
* details like State, district / location, Diocese and Church name
* No parameter are required to be passed.
*/
async function getChurchesOnCriteria(chId)
{
    let churchId = chId;
    let rejData={};
    let churches = await Church
    .find({activeFlag: true, _id: {$gt: churchId}})
    .select({diocese: 1, district: 1, churchName: 1, _id: 1});
    console.log('Churches : ', churches);

    return new Promise((resolve, reject) =>
    {
        if (churches != null && churches.length > 0)
            resolve(churches);
        else
            reject(rejData);
    });
}

exports.getChurchesOnCriteria=getChurchesOnCriteria;
exports.getAllChurches=getAllChurches;
exports.storeChurchData=storeChurchData;
exports.churchData=getChurchDetails;
