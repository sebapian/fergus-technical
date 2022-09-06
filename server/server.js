const path = require('path')
const express = require('express')

const jobs = require('./routes/jobs')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/jobs', jobs)

module.exports = server
