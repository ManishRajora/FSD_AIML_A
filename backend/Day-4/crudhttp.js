const http=require("http");
const port=3003;
const data=[{
    id: 1001,
    name: "xyz",
    email: "ab@gmail.com"
}];
const server=http.createServer((req,res)=>{
    
    const url=req.url;
    if(url=="/users" && req.method=="GET"){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.write(JSON.stringify(data));
    }
    else if(url=="/user" && req.method=="POST"){
        let body='';
       req.on("data",(chunk)=>{
           body+=chunk;
       })
       req.on("end",()=>{
        const pareddata=JSON.parse(body);
        const {name,email}=pareddata;
        const newId=data.length>0?(data[data.length-1].id+1):1001;
        const newUser={id: newId,name,email};
        data.push(newUser);
         })
        res.writeHead(201,{"Content-Type":"application/json"});
        res.write(JSON.stringify({status: "success",message: "user created successfully"}));
    }
    else{
        res.writeHead(404,{"Content-Type":"application/json"});
        res.write(JSON.stringify({status: "fail",message: "page not found"})); 
    }
  res.end();
})

server.listen(port,(err)=>{
  try{
      if(err) throw err;
      console.log(`Server is Running on port ${port}`);
  }
  catch(err){
    console.log("Server Error",err.message);
  }
})