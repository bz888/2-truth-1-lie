const moment = require('moment')
const connection = require('./connection')

function addInput (input, db = connection) {
  return db('user_input')
    .insert({
      name: input.name,
      truth1: input.truth1,
      truth2: input.truth2,
      lie: input.lie,
      timestamp: moment().format('MMMM Do YYYY, h:mm:ss a')
    })
}

function getData (db = connection) {
  return db('user_input')
    .select()
}

module.exports = {
  addInput,
  getData
}
