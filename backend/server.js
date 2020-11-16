const express = require("express")
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 4000;
const mongoose = require("mongoose");

const exchangeRates = require("./routes/routes")

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const uri = "mongodb+srv://diegouribe:<password>@cluster0.l6etq.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect(uri, {
  useNewUrlParser: true
}).catch(err => {
    console.log("Mongodb first connection failed: " + err.stack);
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

// Routes
app.use("/route", exchangeRates)

// Listen on Port 4000
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});