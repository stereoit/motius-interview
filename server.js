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

// on routes that ends with /usecases
router.route("/usecases")
  // create usecase
  .post(function(req, res) {
    var usecase = new Usecase()
    usecase.title = req.body.title

    usecase.save(function(err){
      if (err)
        res.send({error: err})

      res.json({ message: 'Usecase created!'})
    })
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
