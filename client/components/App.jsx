import React, { useEffect } from 'react'
import { getJobs } from '../apiClient'

function App() {
  useEffect(() => {
    getJobs()
      .then((jobs) => {
        console.log(jobs.body)
      })
      .catch((err) => console.err(err.message))
  })
  return (
    <div>
      <h1>This is a template with fruits!</h1>
    </div>
  )
}

export default App
