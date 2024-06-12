const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const course=require("./models/course")
const {coursemodel}=require("./models/course")


const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://Ashil:Ashil7132@cluster0.js8ogyx.mongodb.net/courseDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input =req.body
    let course=new coursemodel(input)
    console.log(course)
    course.save()
    res.send({status:"success"})
})
app.get("/view",(req,res)=>{
    coursemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})
app.post("/search",(req,res)=>{
    let input = req.body
    coursemodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})
app.post("/delete",(req,res)=>{
    let input=req.body
    coursemodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"error"})
        }
    )
})
app.listen(8080,()=>{
    console.log("server started")
})