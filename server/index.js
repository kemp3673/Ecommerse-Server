//const newrelic = require('newrelic');
const express = require("express");
const cors = require('cors');
const path = require("path");
const queries = require("../postgreSQL/db.js");
const controllers = require('./controllers.js');
const compression = require('compression');


const app = express();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(express.json());

//define routes
app.get("/products", controllers.getList);
app.get("/products/:productID", controllers.getOne);
app.get("/products/:productID/styles", controllers.getStyles);




// loader.io
app.get("/loaderio-b10daa155f82ece04bcb773ca5a5720d.txt", function(req, res) {
  res.sendFile(path.join(__dirname, '../loaderio-b10daa155f82ece04bcb773ca5a5720d.txt'));
});


//define port
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);



