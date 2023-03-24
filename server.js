//- express => web framework for create server and writing routes
//- mongoose => ODM for connecting to and sending queries to a mongo database
//- method-override => allows us to swap the method of a request based on a URL query
//- ejs => our templating engine
//- dotenv => will allow us to use a `.env` file to define environmental variables we can access via the `process.env` object
//- morgan => logs details about requests to our server, mainly to help us debug

/////////////
//   Create Dependencies for project
/////////////
require('dotenv').config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const MongoStore = require("connect-mongo")
const session = require("express-session")
const bcrypt = require("bcryptjs");


/////////////
//   Importing models
/////////////
//const crypto_finance_user_profile = require("./models/crypto_finance_user_profile")
//const crypto_finance_currency_exchange = require("./models/crypto_finance_currency_exchange.js")
//const crypto_finance_crypto_exchange = require("./models/crypto_finance_crypto_exchange")
const user_model = require('./models/crypto_finance_user_model')

// connecting to application
const app = express()

// routers
const users_signup_login_router = require("./controllers/crypto_finance_user_login_signup")
const user_crypto_finance_ledger_display_router = require("./controllers/crypto_finance_ledger_display")
const { response } = require('express')


/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG)

// Events for when connection opens/disconnects/errors
mongoose.connection
.on("open", () => console.log("Connected to Mongoose"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error))

// MiddleWare
app.use(cors());
app.use(morgan("dev")); // logs server activities with developer application
app.use(express.json()); // conduct express html request(S)
app.use(morgan("tiny")) // logs server activities 
app.use("/public", express.static("public")) // accesses css files in public folder
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method")) // allows users to swap the method of a request based on a URL query by the method properties

/* 
app.use((req, res, next) => { // making the models (crypto_finance_user_profile, crypto_finance_currency_exchange, crypto_finance_crypto_exchange)
	req.models = { crypto_finance_crypto_exchange, crypto_finance_user_profile, crypto_finance_currency_exchange, user_model }
	next()
})
*/

app.use(
	session({
		secret: process.env.SECRET,
		store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
		saveUninitialized: false,
		resave:false,
	})
)


////////////////////////////////////////////
// Router
////////////////////////////////////////////

//   /user/login & /user/signup
app.use('/user', users_signup_login_router)

//   /user/login & /user/signup
app.use('/crypto_finance', user_crypto_finance_ledger_display_router)

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get("/", (request, response) => {
  console.log("your server is running... better catch it.")
  if (request.session) {
		console.log("ok, here we are in the req.session condition")
    console.log(request.session)
		response.redirect('/user/login')
	}
	else {
		console.log("ok, here we are being redirected to /user/login")
		response.redirect('/user/login')
	}
})

app.get("/login", (request, response) => {
	response.redirect("/user/login")
})

app.get("/signup", (request, response) => {
	response.redirect("/user/signup")
})

app.get("/ledger", (request, response) => {
	response.redirect("/crypto_finance/ledger_index")
})

app.get("/index", (request, response) => {
	response.redirect("/crypto_finance/ledger_index")
})

app.get("/crypto", (request, response) => {
	response.redirect("/crypto_finance/ledger_index")
})

app.get("/finance", (request, response) => {
	response.redirect("/crypto_finance/ledger_index")
})


app.get("/crypto_finance", (request, response) => {
	response.redirect("/crypto_finance/ledger_index")
})

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`))