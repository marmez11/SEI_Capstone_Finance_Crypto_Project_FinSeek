
require("dotenv").config()  // Load env variables
/////// Connecting to Mongoose Library
const mongoose = require("mongoose")

/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

//Establish our connections
mongoose.connect(DATABASE_URL, CONFIG)

// Log connections events from mongoose
mongoose.connection
    .on("open", ()=> console.log('Mongoose connected'))
    .on("close", ()=> console.log('Disconnected from Mongoose'))
    .on("error", (error)=> console.log('Mongoose error', error))


///// Export the monogoose to make connection available to other sections of this project
module.exports = mongoose