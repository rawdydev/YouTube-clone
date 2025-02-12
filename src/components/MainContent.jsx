import React, { useState, useEffect } from 'react'
import data from "../data/yt-data";
import RenderVideo from './RenderVideo'
import Spinner from "./Spinner"

const MainContent = () => {
  const [videos, setVideos] = useState([])
  const [loading, SetLoading] = useState(true)

  useEffect(() => {
    try {
      setVideos(data)
    } catch (error) {
      console.log(`error: ${error}`)
    } finally {
      SetLoading(false)
    }
  }, [])

  return (
    <main className="p-5 md:ml-[74px] lg:ml-[240px]">

      {loading ? (<Spinner loading={loading}/> ) : (
      <section className="video-grid grid sm:grid-cols-2 gap-y-10 gap-x-4 md:grid-cols-3 lg:grid-rows-2">  
        {videos.map((video) => (
          <RenderVideo key={video.id} video={video}/>
          ))}
      </section>
      )}
    </main>
  )
}

export default MainContent