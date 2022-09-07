const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getJobs()
    .then((jobs) => {
      res.json(jobs)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const {
    name,
    creation_date,
    due_date,
    contact_name,
    contact_detail,
    notes,
    status,
  } = req.body

  db.addJob({
    name,
    creation_date,
    due_date,
    contact_name,
    contact_detail,
    notes,
    status,
  })
    .then(() => {
      // ignore ids from db function
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

router.post('/edit', (req, res) => {
  const {
    id,
    name,
    creation_date,
    due_date,
    contact_name,
    contact_detail,
    notes,
    status,
  } = req.body

  db.editJob({
    id,
    name,
    creation_date,
    due_date,
    contact_name,
    contact_detail,
    notes,
    status,
  })
    .then(() => {
      // ignore ids from db function
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

module.exports = router
