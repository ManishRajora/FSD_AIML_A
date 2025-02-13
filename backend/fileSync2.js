const { myReadFile, myWriteFile, username } = require("./fileSync1");

myReadFile();
const data="my WT Class";
myWriteFile(data);
myReadFile();
console.log("username =",username) 