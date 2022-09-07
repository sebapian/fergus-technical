const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getJobs,
  addJob,
  editJob,
}

function getJobs(db = connection) {
  return db('jobs').select()
}

function addJob(jobInfo, db = connection) {
  const {
    name,
    creation_date,
    due_date,
    contact_name,
    contact_detail,
    notes,
    status,
  } = jobInfo

  return db('jobs').insert({
    name,
    creation_date,
    due_date,
    contact_name,
    contact_detail,
    notes,
    status,
  })
}

function editJob(jobInfo, db = connection) {
  const {
    id,
    name,
    creation_date,
    due_date,
    contact_name,
    contact_detail,
    notes,
    status,
  } = jobInfo

  return db('jobs').where('id', id).update({
    name,
    creation_date,
    due_date,
    contact_name,
    contact_detail,
    notes,
    status,
  })
}
