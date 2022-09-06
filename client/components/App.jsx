import React, { useEffect } from 'react'
import { getJobs } from '../apiClient'
import Header from './Header'

function App() {
  useEffect(() => {
    getJobs()
      .then((jobs) => {
        console.log(jobs.body)
      })
      .catch((err) => console.err(err.message))
  })
  return (
    <>
      <Header />
      <div>
        <h1>This is a template with fruits!</h1>
      </div>
    </>
  )
}

export default App
