const express = require('express')

var mongoose = require('mongoose');

const url = require('url')

let path = require("path");

const PORT = 8000

const app = express();


// MONGO DB PART


const Num = require("./numbers.js");

const uri = "mongodb+srv://rushendra:rambabu15@cluster0.dvd0m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log('Success');
}); 

// 


app.get("/", (req, res) => {

    let nums = []

    // console.log("before")

    let promise = new Promise((resolve, reject) => {
        
        Num.find({}, (err, docs) => {
            if (err) {
                console.log(err);
            }
    
            else {
                console.log(docs);
            }

            for(let i=0; i<docs.length; i++){

                nums.push(docs[i].num)
            }

            resolve()
        })

        
    })

    promise.then(() => {

        let sum=0

        for (let i=0;i<nums.length; i++){

            sum+= nums[i]
        }

        let avg = sum/nums.length

        res.send(String(avg.toFixed(4)))
    })

    // console.log("after")

})

app.listen(PORT)

console.log("Server is running at port " + PORT)