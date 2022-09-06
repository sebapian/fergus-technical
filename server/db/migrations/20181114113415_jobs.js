exports.up = (knex) => {
  return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('creation_date')
    table.string('due_date')
    table.string('status')
    table.string('contact_name')
    table.string('contact_detail')
    table.string('notes')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('jobs')
}
