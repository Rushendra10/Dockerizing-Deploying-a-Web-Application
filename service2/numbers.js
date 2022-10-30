const mongoose = require('mongoose')
const Schema = mongoose.Schema

const numberSchema = new Schema({
    
    num: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("numbers", numberSchema)