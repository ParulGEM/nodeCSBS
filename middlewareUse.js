const express=require('express');
const app=express();
const reqFilter=require('./middleware');
const route=express.Router();
route.use(reqFilter);
//Making middleware in separate file
// const reqFilter=(req,resp,next)=>{
//     if(!req.query.age)
//     {
//         resp.send("Please Provide age");
//     }
//     else if(req.query.age<18)
//     {
//         resp.send("You cannot access this page");
//     }
//     else
//    { 
//     console.log("age next ")
//     next();
// }
// }
// app.use(reqFilter);//Application level middleware
app.get('/',(req,resp)=>{
    resp.send(`Welcome to Home Page`);
});

app.get('/about',(req,resp)=>{
    resp.send(`Welcome to About Page`);
});
route.get('/users',(req,resp)=>{
    resp.send(`Welcome to Users Page`);
});
route.get('/contact',(req,resp)=>{
    resp.send(`Welcome to Contact Page`);
});
app.use('/',route); 
app.listen(3000);