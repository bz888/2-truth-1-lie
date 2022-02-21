const { TextCortex } = require('textcortex-hemingwai-js')
const express = require('express')
const request = require('superagent')
const router = express.Router()
require('dotenv').config()

const apiKey = process.env.API_KEY
const testKey = process.env.TEST_KEY

router.post('/test', (req, res) => {
  const input = req.body.input
  const testAPI = new TextCortex(testKey)
  testAPI.generate({
    prompt: input,
    parameters: '',
    source_language: 'en',
    character_count: 400,
    creativity: 0.7
  }).then((response) => {
    res.json(response)
    return null
  })
    .catch(err => {
      console.log('err from textCortex: ', err)
    })
})

router.post('/outputimage', (req, res) => {
  const input = req.body.val
  request.post('https://api.deepai.org/api/text2img')
    .set('api-key', apiKey)
    .type('form')
    .send({ text: input })
    .then(response => {
      console.log('image output: ', response.body)
      res.json(response.body)
      return null
    })
    .catch(err => {
      console.log('err from deepai: ', err)
      return 'https://media.wired.co.uk/photos/606d9c691e0ddb19555fb809/16:9/w_2992,h_1683,c_limit/dog-unsolicited.jpg'
    })
})

module.exports = router
