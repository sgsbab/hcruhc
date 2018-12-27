const _ = require('lodash');
const mongoose = require('mongoose');
const config = require('config');
const { storeUserData} = require('../controller/userCtrl');
const {storeChurchData} = require('../controller/churchCtrl');
const XLSX = require('xlsx');
const fs = require('fs');

//Call this method to load, read and write xls data to DB.
function loadXLS(loadObj)
{
    let luserdir = config.get('fileLocation.localDriveUser');
    let luserfile = config.get('fileLocation.userFileName');
    let lchurchdir = config.get('fileLocation.localDriveChurch');
    let lchurchfile = config.get('fileLocation.churchFileName');
    let fileLoc='';    
    if (loadObj === 'user')
        fileLoc = luserdir + luserfile;
    else if (loadObj === 'church')
        fileLoc = lchurchdir + lchurchfile;

    //Check if the file exists
    fs.access(fileLoc, fs.constants.F_OK, (res) => 
    {
        if (res != null && res.code == 'ENOENT')
            console.log('handleXLS - loadXLS: File Not Available to Process.');
        else
        {
            let workbook;
            let readObj = {};
            if (loadObj != null && loadObj === 'user')
            {        
                workbook = XLSX.readFile(luserdir + luserfile, {cellDates:true});
                readObj.type = 'Details';
                readObj.wbook = workbook;
    
                readUserXLS(readObj);
            }
            if (loadObj != null && loadObj === 'church')
            {        
                workbook = XLSX.readFile(lchurchdir + lchurchfile, {cellDates:true});
                readObj.type = 'Details';
                readObj.wbook = workbook;
    
                readChurchXLS(readObj);
            }
            else    
                console.log('handleXLS - Improper options');
        }
    });
}

function readUserXLS(rObj)
{
    //const sheet_name_list = workbook.SheetNames;
    let newWB = rObj.wbook;
    const sheet_name_list = newWB.SheetNames;
    //console.log('Sheet Name: ', sheet_name_list);
    let tempUser = XLSX.utils.sheet_to_json(newWB.Sheets[sheet_name_list[0]]);
    let movFlag = false;    
    let userObj = {};

    for (i in tempUser)
    {
        //console.log(`tempUser ${i}: `, tempUser[i]);
        for(j in tempUser[i])
        {
            //console.log('tempUser[i]: ', tempUser[i]);
            //console.log(`tempUser: ${j}: `, tempUser[i][j]);        
            let objKey = [j];
                                    
            if (j == 'mobileNo')
                userObj[j] = tempUser[i][j].toString();
            else if(j == 'smartPhoneUser' | j == 'maritalStatus' | j == 'headOfFamily' | j == 'mobileUser')
            {
                if (tempUser[i][j].toLowerCase() == 'yes')   
                    userObj[j] = true;
                else
                    userObj[j] = false;                   
            }
            else
                userObj[j] = tempUser[i][j];
        }
        //console.log('rObj: ', rObj.type);        
        if (rObj.type === 'Details')
        {
            //console.log('Data to be inserted into DB: ', userObj);
            //Call the Save method, on its success, call the moveFile to archive.
            storeUserData(userObj)
            .then(resl => 
            {
                if (resl && !movFlag)
                {
                    movFlag = true;
                    let d = Date.now();
                    mObj={};                 
                    mObj.from = config.get('fileLocation.localDriveUser') + config.get('fileLocation.userFileName');
                    mObj.to = config.get('fileLocation.localArchiveUser') + d+ "_"+config.get('fileLocation.userFileName');
                    moveFile(mObj);
                }
            })
            .catch(err => console.log(err));
        }
    }
}

function readChurchXLS(rObj)
{
    //const sheet_name_list = workbook.SheetNames;
    let newWB = rObj.wbook;
    const sheet_name_list = newWB.SheetNames;
    //console.log('Sheet Name: ', sheet_name_list);
    let tempUser = XLSX.utils.sheet_to_json(newWB.Sheets[sheet_name_list[0]]);
    let movFlag = false;    
    let userObj = {};

    for (i in tempUser)
    {
        //console.log(`tempUser ${i}: `, tempUser[i]);
        for(j in tempUser[i])
        {
            //console.log('tempUser[i]: ', tempUser[i]);
            //console.log(`tempUser: ${j}: `, tempUser[i][j]);                                                
            userObj[j] = tempUser[i][j];
        }
        //console.log('rObj: ', rObj.type);
        if (rObj.type === 'Details')
        {
            //console.log('Data to be inserted into DB: ', userObj);
            //Call the Save method, on its success, call the moveFile to archive.
            storeChurchData(userObj)
            .then(resl => 
            {
                if (resl && !movFlag)
                {
                    movFlag = true;
                    let d = Date.now();
                    mObj={};                 
                    mObj.from = config.get('fileLocation.localDriveChurch') + config.get('fileLocation.churchFileName');
                    mObj.to = config.get('fileLocation.localArchiveChurch') + d+ "_"+config.get('fileLocation.churchFileName');
                    moveFile(mObj);
                }
            })
            .catch(err => console.log(err));
        }
    }
}

/*
* Function to move the files to archive
*/
function moveFile(movObj)
{    
    fs.rename(movObj.from, movObj.to, (err)=>
    {
        if (err)            
            console.log('handleXLS - moveFile - No Files to move');
        else
            console.log('handleXLS - moveFile - File moved successfully');
    });
}

exports.loadXLS = loadXLS;