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
const crypto_finance_user = require("../models/crypto_finance_user_model")
/**
 * Setting up Router
 */
const crypto_finance_router = express.Router()  // creates a Router with the express

/**
 * Setting up Router
 */

///  initial Signup route
crypto_finance_router.get("/signup", (request, response)=> {
    // when the url route user/signup is entered in browser, it renders the ejs file crypto_finance_user_signup.ejs and passes the message "Beginning FinSeek Crypto/Finance System User(s) Signup process....."
    response.render("user_login_signup/crypto_finance_user_signup.ejs", {message: "Beginning FinSeek Crypto/Finance System User(s) Signup process....."})
})

crypto_finance_router.post("/signup", async (request, response) => {
    console.log("Debugging", request.body)
    const username = request.body.username
    // encrypting password with .hashSync() and generates password with a hidden .genSalt(10) methjod to encyrpt the password with a 10 code
    const password = bcrypt.hashSync(request.body.password, 10)
    console.log("Debugging by displaying username and password: .....", {username, password})
  
    // create new user(s) promise object with username and password after awaiting the user model
    const user_new =  await crypto_finance_user.create({username, password})
    console.log(user_new, `Checking if the user was created`)
    response.redirect(`/user/login`)
})

// Login Routes
crypto_finance_router.get("/login", (request, response) => {
    // if the request to the server does not exist or is not in session, it will redirect to the signup route to create/sign up a new user
    if (!request.session) {
        response.redirect("/user/signup")
    }
    else {
        // if the request to the server does exist, it will render the login.ejs for displaying the login page for this application
        response.render("user_login_signup/crypto_finance_user_login.ejs", {message: "Beginning FinSeek Crypto/Finance System User(s) Login process....."})
    }
})

// Attempting to login to the application by posting the username and password into the Mongo (DB) Database with mongoose library
crypto_finance_router.post("/login", async(request, response) => {
    // extracting the username and password from the request that was made to the Mongo DB server
    const { username, password } = request.body
    // it awaits a response from the user model and sends it to the promise object and look for one username in the Mongo DB server
    const user = await crypto_finance_user.findOne({username})  
        try{
            // if the username does not exist in the mongo DB server, it renders the login.ejs page to attempt to login again and informs the user that a user has not been created or does not exist
            if (!user){
                response.render("user_login_signup/crypto_finance_user_login.ejs", {message: "User doesn't exist."})
            } else {
                // else if the user does exist in the Mongo DB server, it will cross compare the user.password with the encrypted password to see if it is the same
                const result = bcrypt.compareSync(password, user.password)
                // if the cross compared passwords (regular password and the encrypted password) are the same, then it will check if the request to the Mongo DB server has a session that has a username that is the same as the specified username
                if (result) {
                    request.session.username = username
                    // it will also check if the request to the mongo db server has a session that is loggedIn or true
                    request.session.loggedIn = true
                    // once it checks the username being the same as the session.username and the request.session.loggedIn being logged in, it will bounce the request to the /user/crypto_finance route, else it returns a message of a wrong password being entered
                    response.redirect('/crypto_finance/ledger_index')
                } else {
                    response.send("wrong password")
                }
            }}
        catch(err){
            // Catches error and send a 400 Bad Request that no request ever occurred or the request to the mongo DB server and/or the user does not exist
            response.status(400).send({message: "Request to Mongoose failed, user does not exist yet. Please go to sign up/registration page and sign up/register as a user...", err})
            //response.status(400).redirect(`/user/signup`)
        }
})

crypto_finance_router.post('/logout', (request, response) => {
    // destroy the session and redirect to main page
    request.session.destroy((err) => {
        response.redirect('/login')
    })
})

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = crypto_finance_router

