require("dotenv").config()

const mysql = require("mysql")

const connection = mysql.createConnection({
  user: process.env.CONNECTION_USER,
  password: process.env.CONNECTION_PSW,
  host: process.env.CONNECTION_HOST,
  database: process.env.CONNECTION_DB
})

connection.connect(function(error) {
  if(error) throw error

  console.log("=> Bien joué mon pote („• ᴗ •„)")
})

module.exports = connection
