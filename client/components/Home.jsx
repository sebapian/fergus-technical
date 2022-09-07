import React from 'react'
import Card from './Card'

function Home(props) {
  console.log(props)
  return (
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        {/* Replace with your content */}
        <div className="px-4 py-6 sm:px-0">
          <div className="h-screen rounded-lg border-4 p-3">
            <Card {...props} />
          </div>
        </div>

        {/* /End replace */}
      </div>
    </main>
  )
}

export default Home
