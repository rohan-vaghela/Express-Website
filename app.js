const express = require('express')
const { type } = require('os')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname+'/views/contact.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname+'/views/about.html');
})
app.get('/home/surat', (req, res) => {
    res.send('Hello surat!')
})

app.get('/home/vapi', (req, res) => {
    res.send('Hello vapi!')
})

app.get('/*', (req, res) => {
    res.sendFile(__dirname+'/views/error.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})