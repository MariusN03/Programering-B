const express = require('express')
const app = express()
const mqtt = require('mqtt')
const client  = mqtt.connect('wss://mqtt.nextservices.dk')

client.on('connect', function () {
  console.log('connected nextservices')
  console.log('subscribing to programmering...')
  client.subscribe('programmering')
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  // client.end()
})

app.get('/', function (req, res) {
  res.send('Du lugter ;)')
})

app.listen(3000)