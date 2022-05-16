import { TextCortex } from 'textcortex-hemingwai-js'
import express, { Request, Response, Router } from 'express'
import request from 'superagent'
import dotenv from 'dotenv'
dotenv.config()

export const router: Router = express.Router()
const apiKey:string | undefined = process.env.API_KEY
const textCortexKey:string | undefined = process.env.TEST_KEY

router.post('/test', (req: Request, res: Response) => {
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

// router.post('/validatehuman', (req, res) => {
//   const secretKey = process.env.RECAPTCHA_SECRET
//   const token = req.body.response
//   request.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`, {
//     method: 'POST'
//   })
//     .then(reResponse => {
//       res.json(reResponse.body)
//       return null
//     })
//     .catch(err => {
//       console.error('recaptcha error from google', err)
//     })
// })
