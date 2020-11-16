import Navbar from "react-bootstrap/Navbar"
import React from 'react';

function Landing() {

    return (
        <div>  
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/prices">
                CryptoCurrency Prices
                </Navbar.Brand>
            </Navbar>
            <h1>Landing Page</h1>
        </div>
    )
}

export default Landing;