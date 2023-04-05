const fs = require('fs');
const DB_FILE_PATH = 'db/books.json'
const ENCODING     = 'utf8'

const impDB = {

    findMany:(query)=>{
        const elems=fs.readFileSync(DB_FILE_PATH,ENCODING);
        return JSON.parse(elems)
    },
    findOne:(id)=>{
        const elems=fs.readFileSync(DB_FILE_PATH,ENCODING);

        const tryToFind = JSON.parse(elems).find((elem)=>elem.id==id)

        if(tryToFind){
            return {status:200,data:tryToFind}
        }
        return {status:404}
    },
    insertOne:(data)=>{
        const elems=fs.readFileSync(DB_FILE_PATH,ENCODING);
        const elemsAsArray = JSON.parse(elems)
        const newId = elemsAsArray.length+1
        
        const newEntry = {id:newId,...data}
        elemsAsArray.push(newEntry)
        try {
            fs.writeFileSync(DB_FILE_PATH,JSON.stringify(elemsAsArray, null, 2))
            return newEntry
        } catch (error) {
            return {error}
        }
    },
    updateOne:(id,newData)=>{
        const elems=fs.readFileSync(DB_FILE_PATH,ENCODING);
        const elemsAsArray = JSON.parse(elems)
        const idx = elemsAsArray.findIndex((elem)=>elem.id==id)
        if(idx<0){
            return {status:404}
        }else{
            const updatedBook = {...elemsAsArray[idx],...newData}
            elemsAsArray[idx] = updatedBook
            try {
                fs.writeFileSync(DB_FILE_PATH,JSON.stringify(elemsAsArray, null, 2))
                return {status:200,data:updatedBook}
            } catch (error) {
                return {error}
            }
        }
        
    },
    deleteOne:(id)=>{
        const elems=fs.readFileSync(DB_FILE_PATH,ENCODING);
        const elemsAsArray = JSON.parse(elems)
        const idx = elemsAsArray.findIndex((elem)=>elem.id==id)
        if(idx<0){
            return {status:404}
        }else{
            elemsAsArray.splice(idx,1)
            try {
                fs.writeFileSync(DB_FILE_PATH,JSON.stringify(elemsAsArray, null, 2))
                return {status:200}
            } catch (error) {
                return {error}
            }
        }
        
    }

}


module.exports = impDB;
