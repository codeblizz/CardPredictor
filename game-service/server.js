const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

//Middlewares
const app = express();
app.use(express.json);
app.use(cors);

const gameRoute = require("./routes/game"); 

app.use("/game", gameRoute);

app.listen("4999", () => {
    console.log("Connection started")
})
