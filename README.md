# Product-Overview
Simulated service to implement Express server and PostgreSQL database that is meant to take in legacy data from previous datbase. Application is meant to replace previous database and handle a greate traffic flow. Current deployed database can handle roughly 1800 request per second before any type of scaling is implemented. 

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

## Dependencies
Axios, ESLint, Express, Nodemon, PG, Underscore

## Usage

```bash
brew services start postgresql    // To Start PostgreSQL 

sudo service postgresql start.    // Linux 

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

\du // Displays users and roles

\c dbname    // change DB

\dt    // Displays tables in DB

\x on    // Extended display on, makes easier to see table data

\conninfo   // Get DB port number 

SELECT * FROM product;  // Displays all contents of specified (product) table
```



