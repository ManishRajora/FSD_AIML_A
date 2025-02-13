const fs=require("node:fs");
function myReadFile(){
try{
    const data=fs.readFileSync("dummy.txt","utf-8");
    if(data){
        console.log("file data ",data);
    }
    else 
    throw err;
    
}
catch(err){
    console.log("File Error ",err.message);
}
}
function myWriteFile(data){
    try{
    // const data="Hello How are uou?"
    fs.writeFileSync("dummy.txt",data);
    }
    catch(err){
        console.log("File Writing Error ",err.message)
    }
}
module.exports={myReadFile: myReadFile,
                myWriteFile: myWriteFile,
                username: "Manish"
}
// myReadFile();
// myWriteFile();
// myReadFile();
 