// eslint-disable-next-line no-unused-vars
import request from 'superagent'
// eslint-disable-next-line no-unused-vars
const widgetUrl = '/api/v1/jobs/'

export function getJobs() {
  return request.get('/api/v1/jobs/')
}
