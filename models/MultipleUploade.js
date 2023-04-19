const mongoose = require('mongoose')

const Schema = mongoose.Schema

const multipleFile = new Schema({
    files: {
        type:Object,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model('multiplefile',multipleFile)