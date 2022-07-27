// require("dotenv").config();

const express = require("express");
const path = require("path");
// const controller = require("./controllers.js");
//const compression = require('compression');


const app = express();

app.use(express.json());
//app.use(compression());

app.use(express.static(path.join(__dirname, '../client/public')));

//define routes
// app.get("/*", controller.get)
// app.post("/*",controller.post)
// app.put("/*",controller.put)



//define port
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);




CREATE TABLE product (
  ID INTEGER PRIMARY KEY,
  name VARCHAR NOT NULL,
  slogan VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  default_price INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  );


  CREATE TABLE styles (
    ID INTEGER PRIMARY KEY,
    productID INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    sale_price INTEGER,
    original_price INTEGER NOT NULL,
    default_style BOOLEAN NOT NULL,
    CONSTRAINT fk_product
      FOREIGN KEY(productID)
        REFERENCES product(ID)
  );

  CREATE TABLE skus (
    ID INTEGER PRIMARY KEY,
    productId INTEGER NOT NULL,
    size VARCHAR(10) NOT NULL,
    quantity INTEGER NOT NULL,
    CONSTRAINT fk_product
      FOREIGN KEY(productId)
        REFERENCES product(ID)
  );

  CREATE TABLE features (
    ID INTEGER PRIMARY KEY,
    product_id
  );