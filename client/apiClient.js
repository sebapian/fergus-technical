// eslint-disable-next-line no-unused-vars
import request from 'superagent'
// eslint-disable-next-line no-unused-vars
const widgetUrl = '/api/v1/fruits/'

export function getFruits() {
  return request.get('/api/v1/fruits/')
}
