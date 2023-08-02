
const express = require("express");

// import bodyParser from "body-parser";

// import routes from "./routes/users.js"

const students=require('./students')

const app=express();

app.use(express.json())//to parse the json body it returns the function before handling the req.body and convert that body into the object.

const port=6001;




app.get('/api/students',(req,res)=>{

    //using res we sen response to client

    // res.json({msg:"Api is working"})

    res.json(students)

})

app.post('/api/students',(req,res)=>{

    if(!req.body.email){

        res.status(400)

        return res.json({error:"email is required..."})

    }

    const user={

        id:students.length+1,

        first_name:req.body.first_name,

        last_name:req.body.last_name,

        email:req.body.email




    }

    students.push(user)

    console.log(req.body)//to ready the body/data

    res.json(user)

})

// app.use(bodyParser.json());

// app.use("/users",routes);

app.put("/api/students/:id",(req,res)=>{

    const id=req.params.id;//id is passed in parameters

    let first_name=req.body.first_name;

    let last_name=req.body.last_name;

    let email = req.body.email;

    let index =students.findIndex((student)=>{

        return(student.id==Number.parseInt(id))

    })

    if(index>=0){

        let std=students[index]

        std.last_name=last_name,

        std.first_name=first_name,

        std.email=email

        res.json(std)

    }

    else{

        res.status(404)

        res.end()//to send the status

    }

    // console.log(id);

    // res.json(id);

})

app.delete("/api/students/:id",(req,res)=>{

    let id=req.params.id;

    let index =students.findIndex((student)=>{

        return(student.id==Number.parseInt(id))

    })

    if(index>=0){

        let std=students[index]

        students.splice(index,1)

        res.json(std)

    }

    else{

        res.status(404)

    }




})

app.listen(port,()=>console.log("server is running"))


