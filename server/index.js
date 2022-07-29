const newrelic = require('newrelic');
const express = require("express");
const path = require("path");
const queries = require("../postgreSQL/db.js");
const controllers = require('./controllers.js');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

//define routes
app.get("/products", controllers.getList);
app.get("/products/:productID", controllers.getOne);
app.get("/products/:productID/styles", controllers.getStyles);

//define port
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);



