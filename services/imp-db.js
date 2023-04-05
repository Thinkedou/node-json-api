const fs = require('fs');
const DB_FILE_PATH = 'db/user.json'
const ENCODING     = 'utf8'

const impDB = {

    findMany:()=>{
        const f=fs.readFileSync(DB_FILE_PATH,ENCODING);
        return JSON.parse(f)
    }

}


module.exports = impDB;
