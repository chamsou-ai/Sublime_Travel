// db.js
const mysql = require("mysql");
require("dotenv").config();

const urlDB = `mysql://${process.env.MYSQL_ADDON_USER}:${process.env.MYSQL_ADDON_PASSWORD}@${process.env.MYSQL_ADDON_HOST}:${process.env.MYSQL_ADDON_PORT}/${process.env.MYSQL_ADDON_DB}`;
const connection = mysql.createConnection(urlDB);
connection.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database as id " + connection.threadId);
});

module.exports = connection;
