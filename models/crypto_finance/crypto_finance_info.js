const mongoose_connection = require('../mongo_connection')
////////////////////////////////////////////////
// Our Models that are pulled from the Mongo Database 
////////////////////////////////////////////////

// dealing with DeprecationWarning: Mongoose
mongoose_connection.set('strictQuery', false);

const {Schema, model} = mongoose_connection

const crypto_exchanges= new Schema ({
    crypto_exchange_id: Number,
    crypto_currency_org_name: String,
    crypto_currency_exchange_org_url_link: String,
    crypto_currency_name: String,
    crypto_currency_price: Number,
    crypto_currency_transactiondate: String,
    crypto_currency_order_status: String,
    blockchain_receiving_transaction_hash_id_num: String,
    blockchain_sending_transaction_hash_id_num: String,
    crypto_currency_circulating_supply: Number,
    crypto_currency_quantity: Number
})

// making schema of finance crypto spreadsheet and other finance info
const currency_exchanges = new Schema({
    finance_currency_exchange_info_id: Number,
    currency_exchange_org_name: String,
    currency_exchange_org_url_link: String,
    currency_name_from: String,
    currency_from_amount: Number,
    currency_name_to: String,
    currency_to_amount: Number
})

const finance_user_ledger = new Schema({
    finance_user_id: Number,
    finance_user_name: String,
    finance_user_birthday: String,
    finance_user_SSN: String, 
    finance_user_residence_address: String, 
    finance_user_phone_number: String,
    finance_user_year_period_at_residence_address: String,
    finance_occupation: String,
    finance_employer_name: String,
    finance_user_year_period_at_employer: String,
    finance_user_phone_number_employer: String,
    finance_num_of_dependents: Number,
    finance_credit_card_name: String,
    finance_credit_card_limit: Number,
    finance_credit_card_financial_owedvalue: Number, 
    finance_credit_card_monthly_payment: Number,
    finance_spouse_name: String,
    finance_spouse_birthday: String,
    finance_spouse_SSN: String, 
    finance_spouse_residence_address: String, 
    finance_spouse_occupation: String, 
    finance_spouse_employer: String,
    finance_spouse_year_period_at_employer: String,
    finance_asset_financial_values_1: Number,
    finance_asset_names_1: String, 
    finance_liabilities_financial_owedvalues_1: Number,
    finance_liabilities_names_1: String,
    finance_asset_financial_values_2: Number,
    finance_asset_financial_values_3 : Number, 
    finance_asset_names_2: String,
    finance_asset_names_3: String,
    finance_liabilities_financial_owedvalues_2: Number,
    finance_liabilities_financial_owedvalues_3: Number,
    finance_liabilities_names_2: String,
    finance_liabilities_names_3: String
})

// Create Models
const crypto_exchange = model("crypto_exchange", crypto_exchanges)
const finance_currency_exchange = model("currency_exchange", currency_exchanges)
const ledger_infos = model("ledger_infos", finance_user_ledger)

// Exporting model schemas
module.exports = {crypto_exchange, finance_currency_exchange, ledger_infos};