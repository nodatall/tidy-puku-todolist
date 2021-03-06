const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('src/public'))
app.use(express.static('dist'))
app.use(bodyParser.json())


app.use(routes)

app.use(function(req, res) {
  res.status(404).send('Sorry cant find that!');
})

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port 3000')
})
