// const fs=require('fs');
// fs.writeFileSync("hello2.txt","code step by step practice");
// console.log(__dirname);
// console.log(__filename);
// console.log("first")


//Example of HTTP
// const http=require('http');
// http.createServer((req,res)=>{
//     res.write("<h1>Hi this is Parul Sahni server</h1>");
//     res.end();

// }).listen(3000);


//Make a simple API
// const http=require('http');
// const data=require('./data');
// http.createServer((req,res)=>{
// res.writeHead(200,{'Content-Type':'application\json'}); 
// res.write(JSON.stringify(data));
// res.end();
// }).listen(3000);


//Input from commandline
// const fs=require('fs');
// const input = process.argv;
// if(input[2]=='add'){
// fs.writeFileSync(input[3],input[4]);
// }//name of file, data of fie
// // console.log(process.argv);
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
// }
// else console.log("Invalid input")


// //Show file List
// const fs=require('fs');
// const path=require('path');
// const dirPath=path.join(__dirname,'files');
// //whenever we create a file we need path of the folder

// // Now to create files in a loop
// for(i=1;i<6;i++){
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,`this is hello ${i} file`);
// }
// //Now read files and lsit them in console
// console.log("Showing list of files")
// fs.readdir(dirPath,(error,files)=>{
//     files.forEach((i)=>{
//         console.log("FILE IS",i)
//     });
// });

// //CRUD with file system
// const fs=require('fs');
// const path=require('path');
// const dirPath=path.join(__dirname,'crud');
// const filePath=`${dirPath}/create.txt`;
// fs.writeFileSync(filePath,`This is simple txt file`);
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// });
// fs.appendFile(filePath,`File has apple`,(err)=>{
//     if(!err){
//         console.log("Updated");
//     }
// });
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err){
//         console.log("Renamed file name");
//     }
// })
//  fs.unlinkSync(`${dirPath}/fruit.txt`);

//Asynchronous Basics
// console.log("first");

// setTimeout(()=>{console.log("second")},2000);

// console.log("third")

//Problem with async
// let a=10;
// let b=0;
//     setTimeout(()=>{
//         b=30;
//     },2000);
// console.log(a+b);
//Resolving async drawbacks
// let a=10;
// let b=0;
// let waitingData=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30);
//     },2000);
// });
// waitingData.then((data)=>{
//     console.log(a+data)
// });

//Call stack , call queue
// console.log("Starting up")

// setTimeout(()=>{
//     console.log("2 second log");
// },2000);//this is a part of cpp
// setTimeout(()=>{
//     console.log("0 second log");
// },0);

// console.log("Finishing up")


//callback abstraction

// const fs=require('fs');
// function readDataFromFile(filename, callback) {
//     fs.readFile(filename, 'utf8', (err, data) => {
//       if (err) {
//         callback(err);
//       } else {
//         callback(null, data);
//       }
//     });
//   }
  
//   readDataFromFile('example.txt', (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(data);
//     }
//   });


