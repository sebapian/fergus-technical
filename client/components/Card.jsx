import React, { useState } from 'react'
import { changeColor } from '../utils.js'

function Card(props) {
  const jobs = props.props
  const [search, setSearch] = useState('')
  const [filterSelect, setFilterSelect] = useState('All Status')

  return (
    <>
      <div className="flex flex-row content-center items-center mb-10">
        <label className="mr-2">Filter by:</label>
        <select
          className="mr-5"
          placeholder="Status"
          onChange={(event) => {
            setFilterSelect(event.target.value)
          }}
        >
          <option>All Status</option>
          <option>Scheduled</option>
          <option>Active</option>
          <option>Invoicing</option>
          <option>To price</option>
          <option>Completed</option>
        </select>
        <input
          type="text"
          name="search"
          id="search"
          onChange={(event) => {
            setSearch(event.target.value)
          }}
          placeholder="Search for jobs by name or ID..."
          className="mt-1 block w-80 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        ></input>
      </div>
      <div className="grid grid-cols-3">
        {jobs
          .filter((job) => {
            if (filterSelect === 'All Status') {
              return job
            } else if (job.status === filterSelect) {
              return job
            }
          })
          .filter((job) => {
            if (search === '') {
              return job
            } else if (
              job.name.toLowerCase().includes(search.toLowerCase()) ||
              job.id.toString().includes(search)
            ) {
              return job
            }
          })

          .map((job) => {
            return (
              <a
                href={`./job/${job.id}`}
                className="block p-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative"
                key={job.id}
              >
                <h1 className="text-xl font-bold">{job.name}</h1>
                <p className="text-sm">Job ID: {job.id}</p>
                <p
                  className={`text-lg font-bold mb-4 ${changeColor(
                    job.status
                  )}`}
                >
                  {job.status}
                </p>

                <p className="text-lg">Creation Date: {job.creation_date}</p>
                <p className="text-lg">Due Date: {job.due_date}</p>
                <p className="text-lg">Contact Name: {job.contact_name}</p>
                <p className="text-lg">Contact Detail: {job.contact_detail}</p>
              </a>
            )
          })}
      </div>
    </>
  )
}

export default Card
