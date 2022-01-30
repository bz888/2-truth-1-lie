exports.up = knex => {
  return knex.schema.createTable('user_input', table => {
    table.increments('id')
    table.string('name')
    table.string('truth1')
    table.string('truth2')
    table.string('lie')
    table.string('article')
    table.string('timestamp')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('user_input')
}
