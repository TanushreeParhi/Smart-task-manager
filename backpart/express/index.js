const express = require('express');
const cors = require("cors")    
const router = require("./router/router")
const mongoose = require("mongoose")
const { connectDB } = require("./dbConnection")


const app = express();
// use middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// database connection
connectDB("mongodb://localhost:27017/smartTaskDB").then(()=>{
    console.log("connected to mongodb");
    
}).catch((err)=>{console.log(err);
})

const PORT = 4000 ;

app.use('/', router)

    
app.listen(PORT, ()=>{
    console.log(`server is started at port: ${PORT}`)
})