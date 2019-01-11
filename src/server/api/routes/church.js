const {churchData, getAllChurches, getChurchesOnCriteria} = require('../controller/churchCtrl');
const bodyParser = require('body-parser');
const config = require('config');
const express = require('express');
const router = express.Router();

let jsonParser = bodyParser.json();

/*
* This method is used to track the actions like Church communication, birthday wishes, etc.
* Parameter to be set: msgOccasion and msgDesc
* Method call from GUI: /ch/getch
*/
router.post('/getch', jsonParser, async (req, res) => 
{
    let chObj={};
    chObj.diocese=req.body.selDiocese;
    chObj.district=req.body.selChurchLocation;
    chObj.churchName=req.body.selChurchName;
    let cResult = churchData(chObj)
    .then(resl => 
    {
        res.status(200).send(resl);
        //console.log('Church - getChurch - Result: ', resl);
    })
    .catch(err => res.status(400).send('Church Data not found..'));    
});

/*
* This method is used to provide all Churches with location, etc.
* Parameter to be set: No Parameters
* Method call from GUI: /ch/gach
*/
router.get('/gach', async (req, res) => 
{
    let cResult = getAllChurches()
    .then(resl => 
    {
        res.status(200).send(resl);
        //console.log('Church - getAllChurches - Result: ', resl);
    })
    .catch(err => res.status(400).send('Church Data not found..'));    
});

/*
* This method is used to provide Churches with location based on condition, etc.
* Parameter to be set: ChurchId
* Method call from GUI: /ch/gchoc
*/
router.post('/gchoc', jsonParser, async (req, res) => 
{
    //console.log("church - getChurchesOnCriteria - req.body: ", req.body);
    let churchId = req.body.churchId;    
    console.log("church - getChurchesOnCriteria - churchId: ", churchId);
    let cResult = getChurchesOnCriteria(churchId)
    .then(resl => 
    {
        res.status(200).send(resl);
        //console.log('Church - getChurchesOnCriteria - Result: ', resl);
    })
    .catch(err => res.status(400).send('Church Data not found..'));    
});

module.exports = router;