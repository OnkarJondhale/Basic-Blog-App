const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title : 
    {
        type : String,
        required : true
    },
    description : 
    {
        type : String,
        required : true
    },
    createAt : 
    {
        type : Date,
        default : Date.now()
    },
    updatedAt : 
    {
        type : Date,
        default : Date.now()
    },
    status :
    {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model("TodoSchema",schema);