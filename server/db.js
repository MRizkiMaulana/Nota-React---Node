const mysql = require("mysql2");
require("dotenv").config(); // Panggil dotenv di bagian atas

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jijik20799",
  database: "project_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

module.exports = connection;
