const express = require("express");
const quotes = require("./quotes.json");
const userRouter = require("./routes/userroutes");
const userPractice = require("./routes/practice");
const noteRouter = require("./routes/noteroutes");
const mongoose = require('mongoose');
const dotenv = require("dotenv")


const app = express();
app.use(express.json());

app.use((req, res,next)=>{
    console.log("http method - " + req.method + " , Url - " + req.url);
    next(); 
})

app.use('/users', userRouter) // using userroter in the index.js}
app.use('/practice', userPractice) // using practice.js in the index.js
app.use('/note', noteRouter) // using noteroter in the index.js


mongoose.connect("mongodb://localhost:27017/")//connecting the moongose with this string;
    .then(() => {
        app.listen(5000, () => {
            console.log("Server is started on port 5000");
        });

    })
    .catch((error) => {
        console.log(error);
    })



const rap2 = express();
// // and the point over here is we cant run two diffrent routes in a same port no
// // so i madde diffrent object to make it useful for another methods

// app.get('/', (req, res) => {
//     res.send("bitcchh");
// });

// app.get('/quote', (req, res) => { // path using any string
//     res.send("hello helloo");
// });

// app.get('/quotee',(req,res)=>{ // and take a moment the path of the line no 13
//     // function is diffrent
//      // and the path of this is diffrent 
//      // and we will get the diffrent outputs thats we  have passed in the respective
//      // function
//     //res.json(quotes); // and one more thing if the file is json than we use tht
//     //res.json(name of the file) to call this.

//     res.sendStatus(200).json(quotes);//setting the status code 

// })


// app.get('/random',(req,res)=>{
//     let index=Math.floor(Math.random()* quotes.length);
//     let quote=quotes[index];
//     res.status(200).json(quote);
// })// genrating the random quote with status it has ok;




// app.get('/error',(req,res)=>{
//     let index=Math.floor(Math.random()* quotes.length);
//     let quote=quotes[index];
//     res.status(404).json(quote);
// })// genrating the random quote with the error 404;



// rap2.get('/', (req, res) => {//normal path 
//     res.send("mein mein");
// });

// rap2.get('/12', (req, res) => {// path with integer in it
//     res.send("hello ni hello");
// });

// rap2.get('/get/12', (req, res) => {// path with integer and the string on it
//     res.send("arey hello hello sir ap bhi");
// });






rap2.listen(3000, () => {
    console.log("Server started on port 3000");
});


// echo "# Express" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Ryaaan4321/Express.git
// git push -u origin main