const express = require("express");
const router = express.Router();

// Load Exchange Rate Model
const ExchangeRate = require("../models/exchangeRate")


// Get All Exchanfe Rate
router.get("/getAllExchangeRates", (req, res) => {
    ExchangeRate.find({}, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

// Get an Exchange Rate
router.get("/getExchangeRate", (req, res) => {
    let fromCurr = req.body.fromCurrency;
    let toCurr = req.body.toCurrency;
    ExchangeRate.find({fromCurrency: fromCurr, toCurr: toCurr}, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

// Create an Exchange Rata
router.post("/createExchangeRate", (req, res) => {
    let fromCurr = req.body.fromCurrency;
    let toCurr = req.body.toCurrency;
    let convRate = req.body.conversionRate;
    let newExchangeRate = new ExchangeRate({
        fromCurrency: fromCurr,
        toCurrency: toCurr,
        exchangeRate: convRate,
    })
    newExchangeRate.save().then(newExchangeRate => res.json(data = newExchangeRate)).catch(err => console.log(err))
})


module.exports = router;