let express = require('express')
var bodyParser = require('body-parser')
let app = express()
let url = require('url')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// respond when a GET request is made to the homepage
// use a response to send things back
// GET method route
app.get('/', (req, res) => {
    console.log("Query" + JSON.stringify(req.query))
    console.log("name: " + req.query.name)
    console.log("age: " + req.query.age)
    res.send('GET req to the homepage\n')
})

// POST method route
app.post('/', function (req, res) {
  console.log(req.body.name)
  console.log(req.body.age)
  res.send('POST req to the homepage\n')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
