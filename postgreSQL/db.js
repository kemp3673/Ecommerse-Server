require("dotenv").config();
const Pool = require('pg').Pool

console.log(process.env.DB_USER);
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: 'products',
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

pool.connect()
.then(() => {
    console.log('\x1b[33m%s\x1b[0m', 'CONNECTED TO DATABASE');
})
.catch(err => console.error(err.message));

// client.query(query, (err, res) => {
//   if (err) {
//       console.error(err);
//       return;
//   }
//   console.log('Table is successfully created');
//   client.end();
// });



// const query = `
// INSERT INTO users (email, firstName, lastName, age)
// VALUES ('johndoe@gmail.com', 'john', 'doe', 21)
// `;

// pool.query(query, (err, res) => {
//   if (err) {
//       console.error(err);
//       return;
//   }
//   console.log('Data insert successful');
//   pool.end();
// });

