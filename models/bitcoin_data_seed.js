require('dotenv').config()
const mongoose = require('./mongo_connection')
const bitcoin = require('./crypto_finance/crypto_finance_info')

mongoose.connection.on('open', () => {
const start_bitcoin = [{bitcoin_id: 1,
    bitcoin_name: "Bitcoin",
    bitcoin_price: "1220.58",
bitcoin_circulating_supply: "19.5M",
bitcoin_cryptocurrency_popularity: 1,
bitcoin_marketCap: "$325.5B",
bitcoin_price_change_1D: "0.08%",
bitcoin_price_change_7D: "-1.67%"},
 {bitcoin_id: 2,
    bitcoin_name: "Bitcoin",
    bitcoin_price: "12000.21",
    bitcoin_circulating_supply: "21.9M",
    bitcoin_cryptocurrency_popularity: 1,
    bitcoin_marketCap: "$415.2B",
    bitcoin_price_change_1D: "2.24%",
    bitcoin_price_change_7D: "-16.787%"}]
/*
    //Delete all seed data and create new object with new seed data
    bitcoin.findOneAndDelete({}, (err, data) => {
        //Create new bitcoin once old ones are deleted
        bitcoin.create(start_bitcoin, (err, data) => {
            console.log(data)
            mongoose.connection.close();
        })
    })*/
})



