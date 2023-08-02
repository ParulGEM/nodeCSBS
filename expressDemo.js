//Express
const express = require("express");
const app = express();
app.get("", (req, res) => {
  // console.log("data sent by browser=>>>",req.query.name);
  res.send(`<h1>Hello this is Home Page</h1>
  <a href="/about">Go to about Page</a>`);
});
app.get("/about", (req, res) => {
    //HTML Tag
  res.send(`<input type="text" placeholder="User Page" value="${req.query.name}"/>
    <button>Click Me</button>
    <a href="/">Go to Home Page</a>`);
    //${req.query.name} means that sam will be displayed in 
});
app.get("/help", (req, res) => {
    //Show JSON data
  res.send([
    {
      name: "anil",
      email: "parul@gmail.com",
      age: 22,
    },
  ]); 
});
app.listen(3000, () => {
  console.log("Server is listening");
});
