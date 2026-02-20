const express = require("express");
const app = express();

//load config fom env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json req body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");

//mount add the todo API Routes
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

//DB connection
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/", (req,res) => {
    res.send(`<h1> This is HOMEPAGE </h1>`);
})