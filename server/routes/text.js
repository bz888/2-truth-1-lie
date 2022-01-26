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
      console.log(response.body)
      res.json({ output: response.body.output })
      return null
    })
    .catch(err => {
      res.sendStatus(500)
      console.error(err)
    })
})

module.exports = router
