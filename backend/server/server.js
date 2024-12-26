const express = require('express');
const connectDb = require('./config/database.js');
const route = require('./route/route.js');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 4000;

const app = express();
 
app.use(express.json());
app.use(cors());
app.use('/api/v1',route);   


  
connectDb();   

app.listen(PORT,()=>{
    console.log("Server Created Successfully");
})
