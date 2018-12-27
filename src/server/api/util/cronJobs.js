const scheduler = require('node-schedule');
const {loadXLS} = require('./handleXLS');

//For testing, executing every 50 seconds
//let rule = scheduler.scheduleJob('*/50 * * * * *', function ()

/*
* This cron will monitor Local Drive for new User Data 
*/
function monitorLocal()
{
    //Change it to run every 46 mins
    let lUsermonitor = scheduler.scheduleJob('*/46 * * * *', function() 
    {
        console.log('Cron - monitorLocal - lUsermonitor - Invoked : ', new Date().toLocaleString());
        loadXLS('user');
    });

    //Change it to run every 51 mins
    let lChurchmonitor = scheduler.scheduleJob('*/51 * * * *', function() 
    {
        console.log('Cron - monitorLocal - lChurchmonitor - Invoked : ', new Date().toLocaleString());
        loadXLS('church');
    });
}

exports.monitorLocal = monitorLocal;