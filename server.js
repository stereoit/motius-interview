var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , mongoose   = require('mongoose');


// setup some middlewares
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var port = process.env.PORT || 8080;

// connect to the MongoDB
mongoose.connect('mongodb://localhost/test');

var Usecase = require('./app/models/usecase');

// API routes (e.g. /api/usecases or /api/usecases/:usecase_id)
var router = express.Router()

router.get("/", function(req, res) {
  res.json({ data: []})
})

// on routes that ends with /usecases
router.route("/usecases")
  // create usecase
  .post(function(req, res) {
    res.json({error: "Not implemented yet"})
  })

  // get all usecases
  .get(function(req, res) {
    Usecase.find(function(err, usecases){
      if (err)
        res.send(err)

      res.json(usecases)
    })
  })

app.use("/api", router)

// START THE SERVER
app.listen(port)
console.log("Application started on port " + port);
