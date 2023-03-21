require('dotenv').config()
const mongoose = require('./mongo_connection')
const finance_cryptos = require('./crypto_finance/crypto_finance_info')

mongoose.connection.on('open', () => {
    const starting_finance_cryptos = [{
        finance_user_id: 2, finance_user_name: "Rich Matters",
        finance_user_birthday: "11/02/1995", finance_user_SSN: "123-43-9009", 
        finance_user_residence_address: "1432 18th Ave Richmond, VA 23401", 
        finance_user_residence_selection_own: true, finance_user_residence_selection_rent: false, 
        finance_user_residence_selection_other: true, finance_user_phone_number: "425-756-2232",
        finance_user_year_period_at_residence_address: "2 years", finance_occupation: "analyst",
        finance_employer_name:"Costco", finance_user_year_period_at_employer:"2 Years",
        finance_user_phone_number_employer:"606-423-9809", finance_user_marriage_status: true,
    finance_user_single_status: false, finance_user_separated_status: true,
    finance_num_of_dependents:2, finance_credit_card_name: "BOA Alaska Milage Plan",
    finance_credit_card_limit:45000, finance_credit_card_financial_owedvalue: 3543, 
    finance_credit_card_monthly_payment: 1245, finance_spouse_name: "Mattie Matthews",
    finance_spouse_birthday: "11/02/1992", finance_spouse_SSN: "234-14-9076", 
    finance_spouse_residence_address: "186 18th Ave Richards, VA 98088", 
    finance_spouse_occupation: "Housemaker", 
    finance_spouse_employer: "Household", finance_spouse_year_period_at_employer: "15 years",
    finance_asset_financial_values_1: 1500000, finance_asset_names_1: "Real Estate", 
    finance_liabilities_financial_owedvalues_1: 1500, finance_liabilities_names_1: "Real Estate Taxes",
finance_asset_financial_values_2: 340000, finance_asset_financial_values_3 :20000, 
finance_asset_names_2: "Stocks", finance_asset_names_3: "Checking/Savings",
finance_liabilities_financial_owedvalues_2: 750, finance_liabilities_financial_owedvalues_3: 49,
finance_liabilities_names_2: "Stocks Trade Fines", finance_liabilities_names_3: "Checking/Savings Account Fees"
}, 
{
    finance_user_id: 3, finance_user_name: "Richard Smith",
    finance_user_birthday: "11/02/1995", finance_user_SSN: "123-43-9009", 
    finance_user_residence_address: "1432 18th Ave Richmond, VA 23401", 
    finance_user_residence_selection_own: false, finance_user_residence_selection_rent: false, 
    finance_user_residence_selection_other: true, finance_user_phone_number: "425-756-2232",
    finance_user_year_period_at_residence_address: "2 years", finance_occupation: "Manager",
    finance_employer_name:"Costco", finance_user_year_period_at_employer:"1 Years",
    finance_user_phone_number_employer:"206-423-9809", finance_user_marriage_status: true,
finance_user_single_status: false, finance_user_separated_status: true,
finance_num_of_dependents:0, finance_credit_card_name: "Capitol One Milage Plan",
finance_credit_card_limit:45000, finance_credit_card_financial_owedvalue: 1243, 
finance_credit_card_monthly_payment: 1245, finance_spouse_name: "Mattie Matthews",
finance_spouse_birthday: "11/02/1991", finance_spouse_SSN: "234-14-9076", 
finance_spouse_residence_address: "186 18th Ave New Orleans, LA 98088", 
finance_spouse_occupation: "Preacher", 
finance_spouse_employer: "St. Francis Parish New Orleans", finance_spouse_year_period_at_employer: "11 years",
finance_asset_financial_values_1: 1500000, finance_asset_names_1: "Real Estate", 
finance_liabilities_financial_owedvalues_1: 1500, finance_liabilities_names_1: "Real Estate Taxes",
finance_asset_financial_values_2: 15000, finance_asset_financial_values_3 :200, 
finance_asset_names_2: "Stocks", finance_asset_names_3: "Checking/Savings",
finance_liabilities_financial_owedvalues_2: 750, finance_liabilities_financial_owedvalues_3: 49,
finance_liabilities_names_2: "Stocks Trade Fines", finance_liabilities_names_3: "Checking/Savings Account Fees"
}]

/*
//Delete all seed data and create new object with new seed data
finance_cryptos.collection.deleteMany({}, (err, data) => {
    //Create new finance_cryptos once old ones are deleted
    finance_cryptos.collection.create(starting_finance_cryptos, (err, data) => {
        console.log(data)
        mongoose.connection.close();
    })
})*/

})


