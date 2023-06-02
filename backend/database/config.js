const MySQL = require("mysql");

const connection = MySQL.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blog-app",
});

connection.connect((err) => {
  if (err) console.log("Error using Database --- " + err);
  else console.log("Database Connection Successful!");
});

module.exports = { connection };
