const { TextCortex } = require('textcortex-hemingwai-js')
const express = require('express')
const request = require('superagent')
const router = express.Router()
require('dotenv').config()

const apiKey = process.env.API_KEY
const testKey = process.env.TEST_KEY

router.post('/outputtext', (req, res) => {
  const input = req.body.input
  request.post('https://api.deepai.org/api/text-generator')
    .set('api-key', apiKey)
    .type('form')
    .send({ text: input })
    .then(response => {
      // const bannedCheck = isBanned('repsonse.body.output')
      // proccess the req.body
      // if (bannedCheck === true) {
      //  throw 'oh No youve said bad things ahh'
      // } else {
      //   res.json({ output: response.body.output })
      // }
      res.json({ output: response.body.output })
      return null
    })
    .catch(err => {
      res.sendStatus(500).send('POST REQUEST FAILED: ', err.message)
    })
})

router.post('/test', (req, res) => {
  console.log(req.body.input)
  const input = req.body.input
  const testAPI = new TextCortex(testKey)
  testAPI.generate({
    prompt: input,
    parameters: '',
    source_language: 'en',
    character_count: 400,
    creativity: 0.7
  }).then((response) => {
    console.log('res: ', response)
    res.json(response)
    return null
  })
    .catch(err => {
      console.log('err from textCortex: ', err)
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
