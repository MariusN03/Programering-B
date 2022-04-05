console.log('yoooo')

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Du lugter ;)')
})

app.listen(3000)