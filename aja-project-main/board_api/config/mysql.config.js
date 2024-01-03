module.exports = {
  connection: {
    host: process.env.DB_USER_URL,
    port: process.env.DB_USER_PORT,
    user: process.env.DB_USER_USER,
    password: process.env.DB_USER_PASSWORD,
    database: process.env.DB_USER_DATABASE,
    connectionLimit: 10,
  },
};
