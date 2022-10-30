const express = require('express')

var mongoose = require('mongoose');


const url = require('url')

let path = require("path");
const { model, Schema } = require('mongoose');

const PORT = 5000

const app = express();

// MONGO DB PART

const Num = require("./numbers.js");
const { resolve } = require('path');
const { rejects } = require('assert');

const uri = "mongodb+srv://rushendra:rambabu15@cluster0.dvd0m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log('Success');
}); 


app.get("/", (req, res) => {
    
    let args = url.parse(req.url, true).query;
    console.log(args.msg)
    


    let promise = new Promise((resolve, reject) => {

        let num = new Num({
            num: args.msg
        })

        num.save();
        resolve()
    })

    promise.then(() => {
        res.send("Entered " + args.msg);
    })


})

app.listen(PORT)

console.log("Server is running at port " + PORT)