const path = require('path')

const express = require('express')

// express server
const server = express()

//
const route = require('./routes/text')

server.use(express.json())
const staticFolder = path.join(__dirname, 'public')

server.use(express.static(staticFolder))

server.use('/text', route)

// For the client side BrowserRouter - because there is no '#' to distinguish
// between client and server side routes, this sends back the index.html
// (which contains the bundle.js) if none there is no server side route match.
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
