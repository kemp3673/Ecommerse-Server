# Product-Overview
Server side and Database system creation for Hack Reactors SDC sprint. This repository is one part of the entire system and utilizes other repos.

[Project Atelier System Design Main Repo](https://github.com/Project-Atelier-System-Design "Project-Atelier-System-Design")

## Installation

```bash
brew install postgressql
```
Navigate into main repo folder
```
psql postgres < products.sql 
```
In order to launch database first time and populate it with csv data


  ### Create Database
  ``` 
  CREATE DATABASE products;
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

psql postgres < shcema.sql       // Run inside repo folder in terminal to create DB and tables
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

\conninfo   // Get DB port number 

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
