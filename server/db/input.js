const connection = require('./connection')

function addInput (input, db = connection) {
  return db('user_input')
    .insert({
      name: input.name,
      truth1: input.truth1,
      truth2: input.truth2,
      lie: input.lie,
      timestamp: new Date(Date.now())
    })
}

module.exports = {
  addInput
}
