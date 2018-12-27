const {validateCred, communication, updateUser} = require('../controller/userCtrl');
const url = require('url');
const bodyParser = require('body-parser');
const config = require('config');
const express = require('express');
const router = express.Router();

let jsonParser = bodyParser.json();

/*
* This method is used to validate the email id of the customer
* Parameter to be set: send email and pwd
* Method call from GUI: /user/vCred
*/
router.post('/vCred', jsonParser, async (req, res) => 
{
    let email = req.body.loginName;
    let pwd = req.body.loginPassword;
    let vObj={};
    vObj.email = email;
    vObj.pwd = pwd;    
    let vResult = validateCred(vObj)
    .then(result => {console.log("User authenticated successfully.."); res.status(200).send(result);})
    .catch(err => {console.log("User authentication failed.."); res.status(400).send(err)});
});

/*
* This method is used to reset the email id of the user
* Parameter to be set: set emailid of the user
* Method call from GUI: /customer/rstCred
*/
router.post('/rstCred', jsonParser, async (req, res) => 
{
    let email = req.body.email;    
    let vObj={};
    vObj.email = email;    
    let rcResult = resetCred(vObj)
    .then(result => 
    {
        result[0].pwd='';
        //console.log('lorUser - result check:', result);
        res.status(200).send(result);
        //send email if usrExists...
        if (result != null && result.length > 0)
        {
            let chtml = config.get('templates.userpwdReset');
            let coverhtml = fs.readFileSync(chtml, 'utf8');            
            let mObj={};
            mObj.to=result[0].email;
            mObj.subject='CSI <Church> read me';
            mObj.cusName= result[0].firstName+" "+result[0].lastName;
            coverhtml = coverhtml.replace(/#cusName/i, mObj.cusName);
            coverhtml = coverhtml.replace(/#lCred/i, 'Welcome@123');            
            mObj.mailOccasion='custom';
            mObj.htmlContent = coverhtml;
            mObj.attachment=false;
            mObj.customerId=result[0].cusId;
            mObj.url='';
            mail(mObj, false, mObj);            
        }
    })
    .catch(err => {res.status(400).send(err);});
    console.log('lorUser - Reset Credentials - Completed ');
});

/*
* This method is used to track the actions like Church communication, birthday wishes, etc.
* Parameter to be set: msgOccasion and msgDesc
* Method call from GUI: /user/comm
*/
router.post('/comm', jsonParser, async (req, res) => 
{
    let msgOcc = req.body.msgOccasion;
    let msgDes = req.body.msgDesc;
    let cObj={};
    cObj.msgOccasion = msgOcc;
    cObj.msgDesc = msgDes;
    let cResult = communication(cObj);
    console.log('User - Communication - Result: ', msgOcc);
});

/* This method is used to update Church User data to the User Collection from mobile app
* Parameter to be set: set the user data as json 
* Method call from GUI: /user/upd
*/
router.put('/upd', jsonParser, async (req, res) => 
{
    let upObj = _.pick(req.body, ['mobileNo', 'churchSubsId', 'baseChurch', 'phoneOS', 'deviceRegToken']);
    let uResult = updateUser(upObj)
    .then(resl => 
    {
        console.log('user - updateUser - result: ', resl);
        res.status(200).send('Successfully stored');
    })
    .catch(err => 
    {
        console.log('user - updateUser - result: ', err);
        res.status(400).send('User does not exist, please get in touch with Church Rev.');
    });
});

module.exports = router;