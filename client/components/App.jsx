import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getJobs } from '../apiClient'
import AddJob from './AddJob'
import Header from './Header'
import Card from './Card'
import EditJob from './EditJob'

function App() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  function fetchJobs() {
    setLoading(true)
    setError('')
    getJobs()
      .then((jobs) => {
        setJobs(jobs.body)
      })
      .finally(() => setLoading(false))
      .catch((err) => console.error(err.message))
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  return (
    <>
      <Header />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="h-screen rounded-lg p-3">
              {loading ? (
                <p>Loading</p>
              ) : (
                <Routes>
                  <Route path="/" element={<Card props={jobs} />} />
                  <Route
                    path="/add"
                    element={<AddJob refetchJobs={fetchJobs} />}
                  />
                  <Route
                    path="/job/:id"
                    element={<EditJob jobs={jobs} refetchJobs={fetchJobs} />}
                  />
                </Routes>
              )}
            </div>
          </div>

          {/* /End replace */}
        </div>
      </main>
    </>
  )
}

export default App
