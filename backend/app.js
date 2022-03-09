const express = require('express');
const app = express();
const cookiesParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error"); 
const bodyParser = require("body-parser");
const path = require("path");



// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
  }
app.use(express.json());
app.use(cookiesParser());
app.use(bodyParser.urlencoded({ extended:true }));

// Route Imports
const user = require("./routes/userRoute");
const seller = require("./routes/sellerRoute");
const product = require("./routes/productRoute");

app.use("/api",user)
app.use("/api",seller)
app.use("/api",product)

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Midleware for error 
app.use(errorMiddleware);
module.exports = app;