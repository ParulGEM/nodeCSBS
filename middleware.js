module.export= reqFilter=(req,resp,next)=>{
    if(!req.query.age)
    {
        resp.send("Please Provide age");
    }
    else if(req.query.age<18)
    {
        resp.send("You cannot access this page");
    }
    else
   { 
    console.log("age next ")
    next();
}
}