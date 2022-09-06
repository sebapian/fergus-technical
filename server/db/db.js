const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getFruits,
}

function getFruits(db = connection) {
  return db('fruits').select()
}
