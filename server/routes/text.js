const express = require('express')
const request = require('superagent')
const router = express.Router()
require('dotenv').config()

const apiKey = process.env.API_KEY

router.post('/outputtext', (req, res) => {
  const input = req.body.input
  request.post('https://api.deepai.org/api/text-generator')
    .set('api-key', apiKey)
    .type('form')
    .send({ text: input })
    .then(response => {
      res.json({ output: response.body.output })
      return null
    })
    .catch(err => {
      res.sendStatus(500).send('POST REQUEST FAILED: ', err.message)
    })
})

router.post('/outputimage', (req, res) => {
  const input = req.body.val
  console.log('image input: ', req.body)
  request.post('https://api.deepai.org/api/text2img')
    .set('api-key', apiKey)
    .type('form')
    .send({ text: req.body.val })
    .then(response => {
      console.log('image output: ', response.body)
      res.json(response.body)
      return null
    })
    .catch(err => {
      res.sendStatus(500).send('POST REQUEST FAILED: ', err.message)
    })
})

module.exports = router
