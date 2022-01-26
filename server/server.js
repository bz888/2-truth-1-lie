const path = require('path')

const express = require('express')

// express server
const server = express()

//
const route = require('./routes/text')
module.exports = server

const staticFolder = path.join(__dirname, 'public')
server.use(express.static(staticFolder))
server.use(express.json())

server.use('/text', route)
