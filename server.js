const express = require("express");
const bodyParser = require("body-parser")
const exphbs = require('express-handlebars')
const path = require("path")
const nodemailer = require("nodemailer");
require("dotenv").config();
const { json } = require("body-parser");
const { dirname } = require("path");

const PORT = process.env.PORT || 5000;

// initiat express app

const app= express();

// view engine setup

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')

//body parser middleware
app.use(bodyParser.urlencoded({extended : false }))
app.use(bodyParser.json())

// static folder
app.use('/public', express.static(path.join(__dirname, 'public')))

// app.get('/' , (req,res) =>{
//     res.sendFile(__dirname + '/public/index.html')
// })

app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "/public/index.html");
  });

app.post('/send' , (req,res) => {
    var output = `
    <p> You Have a new message from your website !</p>
    <h3>Contact Details </h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
        <p>${req.body.message}</p>
    `
    
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "in-v3.mailjet.com",
        port: 587,
        secure: false, // upgrade later with 
        auth: {
            user: process.env.username, // generated ethereal user
            pass:  process.env.mdp // generated ethereal password
        },
        tls:{
        rejectUnauthorized:false
        }
    });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Your Website" <thomasheddadji0@gmail.com>', // sender address
      to: 'thomasheddadji0@gmail.com', // list of receivers
      subject: 'New message for Delies2', // Subject line
      text: 'Hello world?', // plain text body
      html:  output// html body
    };
    
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        
        res.sendFile(__dirname +'/public/confirmation-mail.html')
    });
    
})
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
    