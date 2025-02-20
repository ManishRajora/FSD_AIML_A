const fs = require('fs/promises');
async function myReadFile(){
    try{
        const res = await fs.readFile("dummy.txt","utf-8");
        console.log(res);
    }
    catch(err){
        console.log("File reading Error: ",err.message);
    }
}
myReadFile();