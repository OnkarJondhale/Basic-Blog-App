const mongoose = require('mongoose');

require('dotenv').config();

const connectDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Database connected successfully");
    })
    .catch((error)=>{
        console.log(error.message);
    })
}

module.exports = connectDb;