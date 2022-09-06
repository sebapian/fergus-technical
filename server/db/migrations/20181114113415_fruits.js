exports.up = (knex) => {
  return knex.schema.createTable('fruits', (table) => {
    table.increments('id').primary()
    table.string('name')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('fruits')
}
