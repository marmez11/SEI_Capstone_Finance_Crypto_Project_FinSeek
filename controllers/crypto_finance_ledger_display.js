/**
 * DEPENDENCIES
 */
const express = require("express") // back end web application framework for building RESTful APIs and HTTPS Requests/Responses with Node.js
const bcrypt = require("bcryptjs") // A library to help you hash and encrypt passwords
var hash = require('pbkdf2-password')() // In cryptography, PBKDF1 and PBKDF2 (Password-Based Key Derivation Function 1 and 2) are key derivation functions with a sliding computational cost, used to reduce vulnerability to brute-force attacks. For password hashing
var path = require('path'); // The Path module provides a way of working with directories and file paths
var session = require('express-session'); // an HTTP server-side framework used to create and manage a session middleware.
/**
 * MODELS
 */
// Data Files
const crypto_finance_currency_exchange = require("../models/currency_exchange_data")
const crypto_finance_crypto_exchange = require("../models/crypto_exchange_data")
const crypto_finance_bitcoin = require("../models/bitcoin_data_seed")
const crypto_finance_ethereum = require("../models/ethereum_data")
// Mongo Data
const {crypto_exchange, finance_currency_exchange, ledger_infos}  = require("../models/crypto_finance/crypto_finance_info");
const { response } = require("express");

/**
 * Setting up Router
 */
const crypto_finance_ledger_router = express.Router()  // creates a Router with the express
/**
 * Routes
 */
crypto_finance_ledger_router.get("/data_check", async(request, response)=>{
    const crypto_exchange1 = await crypto_exchange.find({}).catch((error) => errorHandler(error, response))
    const finance_currency_exchange1 = await finance_currency_exchange.find({}).catch((error) => errorHandler(error, response))
    const ledger_infos1 = await ledger_infos.find({}).catch((error) => errorHandler(error, response))
    console.log(crypto_exchange1, finance_currency_exchange1, ledger_infos1)
})
/**
 * Error Handler
 */

// 
function errorHandler(error, res){
    res.json(error)
}

/**
 * Finseek Ledger Routes
 */
///  crypto_finance/ledger_index route that shows the initial Crypto/Finance Ledger index page to display the opening UI interfaces to the Crypto/Finance ledger details
crypto_finance_ledger_router.get("/ledger_index", (request, response)=> {
    response.render("ledgers/crypto_finance_ledger_index.ejs")
})

/**
 * Finseek Currency_Exchange Routes
 */

///  crypto_finance/currency_exchange_show route that shows the initial Crypto/Finance currency exchange info page to display the Crypto Finance currency exchange Info of various Users
crypto_finance_ledger_router.get("/currency_exchange_show", async(request, response)=> {
    const finance_currency_exchange1 = await finance_currency_exchange.find({}).catch((error) => errorHandler(error, response))
    response.render("ledgers/crypto_finance_currencyexchange_show.ejs", {currency_exchange: finance_currency_exchange1})
})

///  crypto_finance/currency_exchange_show/:id route that shows the individual Crypto/Finance currency exchange info page to display the Crypto Finance currency exchange Info of various Users
crypto_finance_ledger_router.get("/currency_exchange_show/:id", async(request, response)=> {
    const finance_currency_exchange1 = await finance_currency_exchange.find({}).catch((error) => errorHandler(error, response))
    response.render("ledgers/crypto_finance_currencyexchange_show_2.ejs", {currency_exchange: finance_currency_exchange1[request.params.id], id: request.params.id})
})

// Destroy ROUTE - (DELETE) - DELETES ONE currency exchange data instance
crypto_finance_ledger_router.delete("/currency_exchange_show/:id", async(request, response) => {
    const currency_exchange = await finance_currency_exchange.find({}).catch((error) => errorHandler(error,response))
    const deleted = await finance_currency_exchange.findByIdAndDelete(currency_exchange[request.params.id].id)
    if(deleted){
        response.redirect("/crypto_finance/currency_exchange_show"); //redirect back to crypto_exchange_show route
  }
  });

  // (UPDATE) ROUTE - PUT - updates a currency exchange instance --> adds to the edit page
crypto_finance_ledger_router.put("/currency_exchange_show/:id", async(request, response) => {
    const currency_exchange = await finance_currency_exchange.find({}).catch((error) => errorHandler(error,response))
    await finance_currency_exchange.findByIdAndUpdate(currency_exchange[request.params.id].id, request.body).catch((error) => errorHandler(error,response))
    response.redirect("/crypto_finance/currency_exchange_show"); //redirect to the finance_currency_exchange_show page
  });

  // create route - (POST) - CREATES/POSTS a a currency exchange instance
crypto_finance_ledger_router.post("/currency_exchange_show", async(request, response) => {
    const exchange = await finance_currency_exchange.find({}).catch((error) => errorHandler(error,response))
    await finance_currency_exchange.create(request.body).then((result)=> {response.redirect("/crypto_finance/currency_exchange_show")})
})

// NEW route: (New) route for adding new currency exchange instance(s)
crypto_finance_ledger_router.get('/currency_exchange_new', (request, response)=>{
    response.render("new/crypto_finance_currencyexchange_new.ejs")
  })

// currency exchange Edit (EDIT) Route
///  crypto_finance/currency_exchange_edit/:id route that shows the individual currency exchange Edit page to display the Crypto Exchange Edit Instance(s) details
crypto_finance_ledger_router.get("/currency_exchange_edit/:id", async(request, response)=> {
    const exchange = await finance_currency_exchange.find({}).catch((error) => errorHandler(error,response))
    const currency_ex_id = await finance_currency_exchange.findById(exchange[request.params.id].id).catch((error) => errorHandler(error,response))
    response.render('edits/crypto_finance_currencyexchange_edit.ejs', {currency_ex: currency_ex_id, id: request.params.id})
})

/**
 * Finseek Crypto Exchange Routes
 */

// Crypto Exchange Show (GET) Route
///  crypto_finance/crypto_exchange_show route that shows the Crypto Exchange Show index page to display the Crypto Exchange Instance(s) details
crypto_finance_ledger_router.get("/crypto_exchange_show", async(request, response)=> {
    const crypto_exchange1 = await crypto_exchange.find({}).catch((error) => errorHandler(error, response))
    response.render('ledgers/crypto_finance_cryptoexchange_show.ejs', {crypto_ex: crypto_exchange1})
})

// Crypto Exchange Show by ID (SHOW) Route
///  crypto_finance/crypto_exchange_show/:id route that shows the individual Crypto Exchange Show index page(s) to display the Crypto Exchange Instance(s) details
crypto_finance_ledger_router.get("/crypto_exchange_show/:id", async(request, response)=> {
    const crypto_exchange1 = await crypto_exchange.find({}).catch((error) => errorHandler(error, response))
    response.render('ledgers/crypto_finance_cryptoexchange_show_2.ejs', {crypto_ex: crypto_exchange1[request.params.id], ID: request.params.id})
})

// Destroy ROUTE - (DELETE) - DELETES ONE crypto exchange data instance
crypto_finance_ledger_router.delete("/crypto_exchange_show/:id", async(request, response) => {
    const exchange = await crypto_exchange.find({}).catch((error) => errorHandler(error,response))
    const deleted = await crypto_exchange.findByIdAndDelete(exchange[request.params.id].id)
    if(deleted){
        response.redirect("/crypto_finance/crypto_exchange_show"); //redirect back to crypto_exchange_show route
  }
  });

  // (UPDATE) ROUTE - PUT - updates a crypto exchange instance --> adds to the edit page
crypto_finance_ledger_router.put("/crypto_exchange_show/:id", async(request, response) => {
    const exchange = await crypto_exchange.find({}).catch((error) => errorHandler(error,response))
    await crypto_exchange.findByIdAndUpdate(exchange[request.params.id].id, request.body).catch((error) => errorHandler(error,response))
    response.redirect("/crypto_finance/crypto_exchange_show"); //redirect to the crypto_exchange_show page
  });

  // create route - (POST) - CREATES/POSTS a a crypto exchange instance
crypto_finance_ledger_router.post("/crypto_exchange_show", async(request, response) => {
    const exchange = await crypto_exchange.find({}).catch((error) => errorHandler(error,response))
    await crypto_exchange.create(request.body).then((result)=> {response.redirect("/crypto_finance/crypto_exchange_show")})
})

// NEW route: (New) route for adding new crypto exchange instance(s)
crypto_finance_ledger_router.get('/crypto_exchange_new', (request, response)=>{
    response.render("new/crypto_finance_cryptoexchange_new.ejs")
  })

// Crypto Exchange Edit (EDIT) Route
///  crypto_finance/crypto_exchange_edit/:id route that shows the individual Crypto Exchange Edit page to display the Crypto Exchange Edit Instance(s) details
crypto_finance_ledger_router.get("/crypto_exchange_edit/:id", async(request, response)=> {
    const exchange = await crypto_exchange.find({}).catch((error) => errorHandler(error,response))
    const ex_id = await crypto_exchange.findById(exchange[request.params.id].id).catch((error) => errorHandler(error,response))
    response.render('edits/crypto_finance_cryptoexchange_edit.ejs', {crypto_ex: ex_id, id: request.params.id})
})

/**
 * Finseek Financial Ledger Info Routes
 */

// Financial Ledger Info Show (GET) Route
crypto_finance_ledger_router.get("/financial_ledger_show", async(request, response)=> {
    const ledger_infos1 = await ledger_infos.find({}).catch((error) => errorHandler(error, response))
    response.render('ledgers/crypto_finance_ledger_info_show.ejs', {ledger_info: ledger_infos1})
})

// Financial Ledger Info Show by ID (SHOW) Route
crypto_finance_ledger_router.get("/financial_ledger_show/:id", async(request, response)=> {
    const ledger_infos1 = await ledger_infos.find({}).catch((error) => errorHandler(error, response))
    response.render('ledgers/crypto_finance_ledger_info_show_2.ejs', {ledger_info: ledger_infos1[request.params.id], id: request.params.id})
})

// Destroy ROUTE - (DELETE) - DELETES ONE ledger info data instance
crypto_finance_ledger_router.delete("/financial_ledger_show/:id", async(request, response) => {
    const exchange = await ledger_infos.find({}).catch((error) => errorHandler(error,response))
    const deleted = await ledger_infos.findByIdAndDelete(exchange[request.params.id].id)
    if(deleted){
        response.redirect("/crypto_finance/financial_ledger_show"); //redirect back to financial_ledger_show route
  }
  });

  // (UPDATE) ROUTE - PUT - updates a ledger info instance --> adds to the edit page
crypto_finance_ledger_router.put("/financial_ledger_show/:id", async(request, response) => {
    const exchange = await ledger_infos.find({}).catch((error) => errorHandler(error,response))
    await ledger_infos.findByIdAndUpdate(exchange[request.params.id].id, request.body).catch((error) => errorHandler(error,response))
    response.redirect("/crypto_finance/financial_ledger_show"); //redirect to the financial_ledger_show page
  });

  // create route - (POST) - CREATES/POSTS a a ledger info instance
crypto_finance_ledger_router.post("/financial_ledger_show", async(request, response) => {
    const exchange = await ledger_infos.find({}).catch((error) => errorHandler(error,response))
    await ledger_infos.create(request.body).then((result)=> {response.redirect("/crypto_finance/financial_ledger_show")})
})

// NEW route: (New) route for adding new ledger info instance(s)
crypto_finance_ledger_router.get('/finance_ledger_new', (request, response)=>{
    response.render("new/crypto_finance_ledger_info_new.ejs")
  })

// Financial Ledger Edit (EDIT) Route
///  crypto_finance/crypto_exchange_edit/:id route that shows the individual Financial Ledger Edit page to display the Financial Ledger Edit Instance(s) details
crypto_finance_ledger_router.get("/financial_ledger_edit/:id", async(request, response)=> {
    const ledger_infos1 = await ledger_infos.find({}).catch((error) => errorHandler(error, response))
    const ex_id = await ledger_infos.findById(ledger_infos1[request.params.id].id).catch((error) => errorHandler(error,response))
    response.render('edits/crypto_finance_ledger_info_edit.ejs', {ledger_info: ex_id, id: request.params.id})
})

/**
 * Finseek Crypto Financial Total Routes
 */

// Financial Ledger Totatl Show (GET) Route
crypto_finance_ledger_router.get("/financial_total_show_index", async(request, response)=> {
    const crypto_exchange1 = await crypto_exchange.find({}).catch((error) => errorHandler(error, response))
    const finance_currency_exchange1 = await finance_currency_exchange.find({}).catch((error) => errorHandler(error, response))
    const ledger_infos1 = await ledger_infos.find({}).catch((error) => errorHandler(error, response))
    response.render('ledgers/crypto_finance_ledger_total_index_show.ejs', {crypto_ex: crypto_exchange1,  currency_ex: finance_currency_exchange1, ledger_info: ledger_infos1})
})

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = crypto_finance_ledger_router
