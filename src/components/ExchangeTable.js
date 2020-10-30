import Table from "react-bootstrap/Table"

function ExchangeTable(props) {

    function makeTableRows(exchangeRates, baseCurrency) {
        let key;
        let tableRows = []
        for (key in exchangeRates) {
            tableRows.push(<tr>
                <th>{baseCurrency}</th>
                <th>{key}</th>
                <th>{exchangeRates[key]}</th>
            </tr>)
        }
        return tableRows
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Exchange Rate</th>
                    </tr>   
                </thead>
                <tbody>
                    {makeTableRows(props.exchangeRates, props.baseCurrency)}
                </tbody>
            </Table>
        </div>
    )

}

export default ExchangeTable