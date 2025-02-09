import React from 'react'
import Navbar from './components/navbar'
import Header from './components/Header'
import MainContent from './components/MainContent'
// import renderVideos from '../scripts/render-video'
const App = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <MainContent/>
     {/* <renderVideos extraStyles="
      {
      .channel-picture:hover .dev-tooltip {
        opacity: 1;
      }}"/>
      */}

    </>
  )
}

export default App