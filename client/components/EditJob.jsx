import React, { useState } from 'react'
import { updateJob } from '../apiClient'
import { useNavigate, useParams } from 'react-router-dom'
import { getStatus } from '../utils'

function EditJob(props) {
  const { id } = useParams()
  const jobs = props.jobs
  const selJob = jobs.filter((job) => job.id.toString() === id)[0]
  const navigate = useNavigate()
  const statuses = getStatus()

  const [form, setForm] = useState(selJob)

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    updateJob(form, id)
    props.refetchJobs()
    navigate('/')
  }

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Edit Job
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Detailed look of the job and update if required.
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form action="/" id="form" noValidate>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Job Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={handleChange}
                      value={form.name}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="creation_date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Creation Date
                    </label>
                    <input
                      type="date"
                      name="creation_date"
                      id="creation_date"
                      value={form.creation_date}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="due_date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Due Date
                    </label>
                    <input
                      type="date"
                      name="due_date"
                      id="due_date"
                      value={form.due_date}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="contact_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contact Name
                    </label>
                    <input
                      type="text"
                      name="contact_name"
                      id="contact_name"
                      value={form.contact_name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="contact_detail"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contact Detail
                    </label>
                    <input
                      type="text"
                      name="contact_detail"
                      id="contact_detail"
                      value={form.contact_detail}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="status"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      value={form.status}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      {Object.keys(statuses).map((status) => {
                        return (
                          <option
                            key={status}
                            className={`font-bold ${statuses[status]}`}
                          >
                            {status}
                          </option>
                        )
                      })}
                    </select>
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="notes"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={5}
                      value={form.notes}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Write some notes about the job here..."
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditJob
