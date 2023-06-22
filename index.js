const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000;
const data = require('./data/data.json')
const food = require('./data/food.json')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World! hi')
})
app.get('/data', (req, res) => {
  res.send(data)
})
app.get('/food', (req, res) => {
  res.send(food)
})
app.get('/food/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const singlefood = food.find(fd => parseInt(fd.id) == id)
  res.send(singlefood)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})