// npm i mysql2 dotenv
const mysql2 = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

// const {connection} = require('../config/mysql.config');
// const pool = mysql2.createPool(connection);

const pool = mysql2.createPool({
  host: process.env.DB_USER_URL,
  port: process.env.DB_USER_PORT,
  user: process.env.DB_USER_USER,
  password: process.env.DB_USER_PASSWORD,
  database: process.env.DB_USER_DATABASE,
  connectionLimit: 10,
});
const conn = pool
  .getConnection()
  .then(() => console.log(`database connected...`))
  .catch((error) => console.error(`database connect error: ${error.message}`))
  .finally(() => pool.releaseConnection(conn));

module.exports = pool;
