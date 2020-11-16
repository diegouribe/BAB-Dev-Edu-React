import React, { useState, useEffect } from 'react';
import Navbar from "react-bootstrap/Navbar"
import ExchangeTable from "../components/ExchangeTable"

import axios from 'axios';


function Prices() {
    const [baseCurrency, setBaseCurrency] = useState("");
    const [exchangeRates, setExchangeRates] = useState("");
    const [doneLoading, setDoneLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const resp = await axios.get("https://api.coinbase.com/v2/exchange-rates")
                setBaseCurrency(resp.data.data.currency)
                setExchangeRates(resp.data.data.rates)
                setDoneLoading(true)
            } catch (error) {
                alert(error)
            }
            axios.get("/route/getAllExchangeRates").then((res => {
                console.log(res)
            }))
            const req = {
                fromCurrency: "USD",
                toCurrency: "AED",
                conversionRate: 0.8,
            }
            axios.post("/route/createExchangeRate", req).then((res) => {
                console.log(res)
            })
        }
        fetchData();
    }, []);

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    LandingPage
                </Navbar.Brand>
            </Navbar>
            {doneLoading ?
                <ExchangeTable exchangeRates={exchangeRates} baseCurrency={baseCurrency} /> :
                <h1>Loading Exchange Rates</h1>
            }
        </div>
    );

}

export default Prices;