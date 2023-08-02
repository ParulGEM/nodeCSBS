// const express=require('express');
// const app=express();
// const sendMail=require('./controller/sendMail');
// const port=5000;
// app.get('/',(req,res)=>{
// res.send("I am a server");
// });

// app.get('/sendm',sendMail);//controller

// const start=async()=>{
//     try{
//         app.listen(port,()=>{
//             console.log("I am listening at 5000");

//         });
//     }
//     catch(error){ }
// }
// start();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'parulsahni3282@gmail.com',
        pass: 'kqdblultytwnhllq'
    }
});

let mailOptions = {
    from: 'parulsahni3282@gmail.com',
    to: ['parulsahni3282@gmail.com','kartikarora216@gmail.com'],
    // cc: 'octacoderfyi@gmail.com',
    subject: 'Sending mail using nodeMailer',
    html: `<h1 style="color: Aqua">Welcome To Mail sending Site</h1> <p>Please bear the testing</p>
    <h4 style="color: red">"Learn The Way, Create Your Own Way"</h4>
    <a href="https://www.linkedin.com/in/parulsahni0621/">Linkedin</a>`,
    // attachments:[
    //     {
    //         filename: 'image.png',
    //         path: './Files/thumbnail.png'
    //     },
    //     {
    //         filename: 'Document.doc',
    //         path: './Files/htmlDoc.docx'
    //     },
    //     {
    //         filename: 'HtmlPDF.pdf',
    //         path: './Files/htmlAllTag.pdf'
    //     },
    //     {
    //         filename: 'nodejs.png',
    //         path: './Files/nodejs.png'
    //     }
    // ]
};

transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        console.log('Erroe Occured ' + error);
    }else {
        console.log("Email Sent Successfully to " + mailOptions.to);
    }
});