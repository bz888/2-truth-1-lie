const express = require('express')
const request = require('superagent')
const router = express.Router()
require('dotenv').config()
const db = require('../db/input')

const apiKey = process.env.API_KEY

router.post('/outputtext', (req, res) => {
  const input = req.body.input
  request.post('https://api.deepai.org/api/text-generator')
    .set('api-key', apiKey)
    .type('form')
    .send({ text: input })
    .then(response => {
      console.log(response.body)
      res.json({ output: response.body.output })
      return null
    })
    .catch(err => {
      res.sendStatus(500).send('POST REQUEST FAILED: ', err.message)
    })
})

router.get('/data', (req, res) => {
  db.getData()
    .then(data => {
      res.json(data)
      return null
    })
    .catch(err => {
      res.status(500).send('Could not get list: ' + err.message)
    })
})

router.post('/input', (req, res) => {
  const input = req.body
  db.addInput(input)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      res.status(500).send('POST REQUEST FAILED: ', err.message)
    })
})

module.exports = router
