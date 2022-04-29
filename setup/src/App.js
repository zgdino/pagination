import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const {loading, data} = useFetch()
  
  return <main>
    <div className="section-title">
      <h1>{loading ? 'loading...' : 'pagination'}</h1>
      <div className="underline"></div>
    </div>
    <section className="followers">
      <div className="container">
        {data.map((follower) => {
          // existing follower.id from the API
          // ...follower is adding all the properties from that specific follower from API
          return <Follower key={follower.id} {...follower}/>
        })}
      </div>
    </section>
  </main>
}

export default App
