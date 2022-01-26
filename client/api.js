import request from 'superagent'

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
