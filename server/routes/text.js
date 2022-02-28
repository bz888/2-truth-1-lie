const { TextCortex } = require('textcortex-hemingwai-js')
const express = require('express')
const request = require('superagent')
const router = express.Router()
require('dotenv').config()

const apiKey = process.env.API_KEY
const textCortexKey = process.env.TEST_KEY

router.post('/test', (req, res) => {
  const input = req.body.input
  const cortexApi = new TextCortex(textCortexKey)
  cortexApi.generate({
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
      console.error('err from textCortex: ', err)
    })
})

router.post('/outputimage', (req, res) => {
  const input = req.body.val
  request.post('https://api.deepai.org/api/text2img')
    .set('api-key', apiKey)
    .type('form')
    .send({ text: input })
    .then(response => {
      res.json(response.body)
      return null
    })
    .catch(err => {
      console.error('err from deepai: ', err)
      const placeHolder = { output_url: 'https://media.wired.co.uk/photos/606d9c691e0ddb19555fb809/16:9/w_2992,h_1683,c_limit/dog-unsolicited.jpg' }
      res.json(placeHolder)
    })
})

router.post('/validatehuman', (req, res) => {
  const secretKey = process.env.RECAPTCHA_SECRET
  const token = req.body.response
  request.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`, {
    method: 'POST'
  })
    .then(reResponse => {
      res.json(reResponse.body)
      return null
    })
    .catch(err => {
      console.error('recaptcha error from google', err)
    })
})

module.exports = router
