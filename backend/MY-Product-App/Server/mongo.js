const mongoose=require('mongoose')
const mongo_url="mongodb://localhost:27017/AIML_CLASS"

mongoose.connect(mongo_url).then(()=>{
    console.log("Database Connected Successfully")
}).catch((err)=>{
    console.log(err)
})
const studentSchema=new mongoose.Schema({
    name:{
        type:String, Required:true ,Unique:true
    },
    email:{
        type:String, Required:true,Unique:true
    }
    ,
    age:{
        type:Number,Required:true
    }
})
const Student=mongoose.model("student",studentSchema)
const createStudent=()=>{
    try {
        const newStudent=new Student({
        name:"xyz",email:"xyz@gmail.com",age:"22"
    })
    newStudent.save()
    } catch (error) {
        console.log(error)
    }
    
    
}
const getStudent=async()=>{
    try {
      const students=await Student.find();
      console.log(students)  
    } catch (error) {
       console.log(error) 
    }
    
}
getStudent();
const updateStudent=async()=>{
try {
    const updatedstud=await Student.findOneAndUpdate({email:"xyz@gmail.com"},{$set:{age:25}})
    console.log("Student updated",updatedstud)
  Student.save()
} catch (error) {
    console.log("Error Ocuured")
}
}
const deleteStud=async()=>{
    try {
        const deletedstud=await Student.deleteOne({age:25})
        console.log("User Deleted")
    } catch (error) {
        console.log("Some Error Ocurred")
    }
}