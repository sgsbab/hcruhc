const {churchData} = require('../controller/churchCtrl');
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

module.exports = router;