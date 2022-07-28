const express = require("express");
const path = require("path");
const queries = require("../postgreSQL/db.js");
const controllers = require('./controllers.js');


const app = express();

app.use(express.json());
//app.use(compression());

//app.use(express.static(path.join(__dirname, '../postgreSQL/quiries.js')));
// Serves static file

//define routes
app.get("/*", controllers.get)
// app.post("/*",controllers.post)
// app.put("/*",controllers.put)

//define port
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);



