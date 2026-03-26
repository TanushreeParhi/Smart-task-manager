const mongoose = require("mongoose")


async function connectDB(url){
   await mongoose.connect(url)
}

// mongoose.connect("")
module.exports = {
    connectDB
}