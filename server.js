const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");

require("dotenv").config();

const app= express();

app._route("/").get(function (req, res){
    res.sendFile(process.cwd() + "/public/index.html")
});

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})