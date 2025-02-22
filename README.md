# Product-Overview
Simulated service to implement Express server and PostgreSQL database that is meant to take in legacy data from the previous database. The application is meant to replace the previous database and handle a greater traffic flow. Current deployed database on an AWS micro t.2 can handle roughly 1800 requests per second before any type of scaling is implemented. 

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



