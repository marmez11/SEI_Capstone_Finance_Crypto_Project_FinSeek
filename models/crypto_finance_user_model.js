////////////////////////
/// Dependencies
////////////////////////
const mongoose_connection = require("./mongo_connection")

//////////////////////////
/// User Model
//////////////////////////
const {Schema, model} = mongoose_connection
//////////////////////////
//// sign up & sign on schema 
//////////////////////////
const crypto_finance_user = new Schema ({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true}
})

//////////////////////////
//// model of users for sign up and sign on
//////////////////////////
const user_signup_signon = model("User", crypto_finance_user)


//////////////////////////
//// Exporting model
//////////////////////////
module.exports = user_signup_signon