let express = require('express')
let app = express()
let url = require('url')
// respond when a GET request is made to the homepage
// use a response to send things back
// GET method route
app.get('/', (req, res) => {
    console.log(req.query)    // An improvement! We don't need url.parse() to get the object
    res.send('GET request to the homepage\n')
    // console.log("Greetings from get()")
    // console.log(req.query)
    // console.log("name: " + req.query.name)
    // console.log("age: " + req.query.age)
    // res.send('GET request to the homepage\n')
})
// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage\n')
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))