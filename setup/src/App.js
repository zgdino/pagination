import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    // only if it is loading
    if (loading) return
    setFollowers(data[page])
    // rerun when loading and page change
  }, [loading, page])

  const handlePage = (index) => {
    setPage(index)
  }

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length -1
      }
      return prevPage
    })
  }

  return (
    <main>
      <div className='section-title'>
        {/* ternary operator */}
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {/* changed from data.map to followers.map */}
          {followers.map((follower) => {
            // existing follower.id from the API
            // ...follower is adding all the properties from that specific follower from API
            return <Follower key={follower.id} {...follower} />
          })}
        </div>
        {/* display only if not loading */}
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              prev
            </button>
            {/* focus on index over item */}
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
