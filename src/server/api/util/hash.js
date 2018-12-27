const bcrypt = require('bcrypt');

//Use this function and store the passwords to the mongodb when creating the user.
async function phash(pObj)
{
    const salt = await bcrypt.genSalt(10);    
    const hashed = await bcrypt.hash(pObj.p, salt);
    return new Promise((resolve, reject) => {resolve(hashed);});
}
exports.phash=phash;