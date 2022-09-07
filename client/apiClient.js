// eslint-disable-next-line no-unused-vars
import request from 'superagent'
// eslint-disable-next-line no-unused-vars
const url = '/api/v1/jobs/'

export function getJobs() {
  return request.get(url)
}

export function addJob(jobInfo) {
  const {
    name,
    creation_date,
    due_date,
    contact_name,
    contact_detail,
    notes,
    status,
  } = jobInfo

  return request
    .post(url)
    .send({
      name,
      creation_date,
      due_date,
      contact_name,
      contact_detail,
      notes,
      status,
    })
    .then((response) => response.body)
}

export function updateJob(jobInfo, id) {
  const {
    name,
    creation_date,
    due_date,
    contact_name,
    contact_detail,
    notes,
    status,
  } = jobInfo

  return request
    .post('/api/v1/jobs/edit')
    .send({
      id,
      name,
      creation_date,
      due_date,
      contact_name,
      contact_detail,
      notes,
      status,
    })
    .then((response) => response.body)
}
