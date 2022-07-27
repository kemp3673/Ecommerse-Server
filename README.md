# Product-Overview
Server side and Database system creation for Hack Reactors SDC sprint. This repository is one part of the entire system and utilizes other repos.

[Project Atelier System Design Main Repo](https://github.com/Project-Atelier-System-Design "Project-Atelier-System-Design")

## Installation

```bash
brew install postgressql
```

  ### Create Database
  ``` 
  CREATE DATABASE products;
  ```
  
  ### Create Tables
  ```
  CREATE TABLE product (
    ID INTEGER PRIMARY KEY,
    name VARCHAR NOT NULL,
    slogan VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    category VARCHAR NOT NULL,
    default_price INTEGER NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
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
    product_id INTEGER NOT NULL,
    feature VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    CONSTRAINT fk_product
      FOREIGN KEY(product_id)
        REFERENCES product(ID)
  );
  
  CREATE TABLE photos (
    ID INTEGER PRIMARY KEY,
    styleID INTEGER NOT NULL,
    url VARCHAR NOT NULL,
    thumbnail_url VARCHAR NOT NULL,
    CONSTRAINT fk_styles
      FOREIGN KEY(styleID)
        REFERENCES styles(ID)
  );
  ```
  ###COPY DATA TO TABLES
  ```
  COPY product(id, name, slogan, description, category, default_price)
  FROM '/Users/nicholaskempkes/repositories/Server Design Capstone/Product-Overview/csv_files/product.csv'
  DELIMITER ','
  CSV HEADER;
  
  ```
  
## Dependencies
Axios, ESLint, Express, Nodemon, PG, Underscore

## Usage

```bash
brew services start postgresql    // To Start PostgreSQL 

psql postgres    // Enter shell 

brew services stop postgresql   // Stop PostgreSQL
```

If ```ERROR: Formula `postgreqsql is not installed``` try the following on Mac

```
$ brew update
$ brew doctor
$ brew install postgres
```

```
\list  // Displays table of DBs

\c dbname    // change DB

\dt    // Displays tables in DB

\x on    // Extended display on, makes easier to see table data

SELECT * FROM product;  // Displays all contents of specified (product) table
```


[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)



1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.


Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
