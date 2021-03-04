const express = require("express");
// const nodemailer = require("nodemailer");
// const multiparty = require("multiparty");

// require("dotenv").config();

const port = process.env.port || 5000;

// initiat express app

const app= express();
app.use(express.static('/public'));
app.use(express.json())

app.get('/' , (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})


app.post('/', (req,res) => {
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

