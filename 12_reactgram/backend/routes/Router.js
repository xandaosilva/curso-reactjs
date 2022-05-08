const express = require("express");
const route = express();

route.get("/", (req, res) => {
    res.send("API working");
});

module.exports = route;