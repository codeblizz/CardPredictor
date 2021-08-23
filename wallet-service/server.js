const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded());
app.use(cors);

const walletRoute = require("./routes/wallet");

//Routes
app.use("/wallet", walletRoute)

app.listen("4990", () => {
    console.log("Connection started")
})