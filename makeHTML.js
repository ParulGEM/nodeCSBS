const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

//app.use(express.static(publicPath));
app.set('view engine','ejs');
app.get('',(_,res)=>{
  res.sendFile(`${publicPath}/about.html`);

});
app.get('/profile',(_,res)=>{
  
  const user={
    name:"Parul",
    age:22,
    city:"Gurugram",
    skills:['php','js','cpp'],
  }
  res.render('profile',{user});
});
app.get('/about',(_,res)=>{
  res.sendFile(`${publicPath}/about.html`);
  
});
app.get('/login',(_,res)=>{
  res.render('login',);
  
});
app.get('/help',(_,res)=>{
  res.sendFile(`${publicPath}/help.html`);
  
});
app.get('/404page',(_,res)=>{
  res.sendFile(`${publicPath}/404page.html`);
  
});app.get('*',(_,res)=>{
  //req will not be used so mamke it _
  res.sendFile(`${publicPath}/404page.html`);
  }) 
app.listen(5000);