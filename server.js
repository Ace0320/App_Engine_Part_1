require('@google-cloud/debug-agent').start();

let timesHelloed = 0;
let express = require('express')
let app = express()
let url = require('url')

app.set('view engine', 'ejs')
// respond when a GET request is made to the homepage
// use a response to send things back
// GET method route
app.get('/', (req, res) => {
  console.log(req.query)
  res.render('myview.ejs')
  //res.send('GET request to the homepage\n')
})
app.get('/timesHelloed', (req, res) => {
  console.log(req.query)
  res.render('timesHelloed.ejs', {timesHelloed:timesHelloed})
  //res.send('GET request to the homepage\n')
})
app.get('/hello', (req, res) => {
  console.log(req.query)
  timesHelloed++;
  //res.send('GET request to the homepage\n')
})
app.get('/resetTimesHelloed', (req, res) => {
  console.log(req.query)
  timesHelloed = 0;
  //res.send('GET request to the homepage\n')
})
// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage\n')
})

let port = process.env.PORT || 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
