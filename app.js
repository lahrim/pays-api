var express = require("express")
var path = require("path")
var logger = require("morgan")

var app = express()

// cors debut
const cors = require("cors")
const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true)
  },
  credentials: true
}
app.use(cors(corsOptions))
// cors fin

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))


// routes
var indexRouter = require("./routes/index")
app.use("/", indexRouter)


// o2switch
if (typeof(PhusionPassenger) !== "undefined") {
  app.listen("passenger")
} else {
  app.listen(8080)
}

module.exports = app
