const fs = require('fs/promises');
function myReadFile(){
    try{
        const res = fs.readFile("dummy.txt","utf-8");
        res.then((data) => {
            console.log("file data ",data);
        })
        .catch((err) => {
            throw err;
        });
    }
    catch(err){
        console.log("File reading Error: ",err.message);
    }
}
myReadFile();