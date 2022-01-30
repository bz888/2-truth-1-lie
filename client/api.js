import request from 'superagent'

const dbData = '/text/'

export function getTextOutput (input) {
  return request
  // whatever the route is set to be in routes
    .post('http://localhost:8000/text/outputtext/')
  // what is the data shape?
    .send({ input })
    .then(res => {
      return res.body.output
    })
}

export function postDbForm (inputObj) {
  return request
    .post(dbData + 'input')
    .send(inputObj)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.log('oops you dumb and messed up', err.message)
    })
}

export function getDataDB () {
  return request
    .get(dbData + 'data')
    .then(res => res.body)
}
