var express = require('express');
var app = express();

app.get("/", (request, response) => {
    response.send("Hello World")
})

let PORT = 5000;

app.listen(PORT, () => {
    console.log("Listening to port "+PORT);
})

































 module.exports = app;
