import React from 'react'

const Navbar = () => {
  return (
    <nav className="sidebar hidden md:inline-block bg-white fixed top-[55px] bottom-0 left-0 md:w-[72px] lg:w-[240px] 
  border-r-2 border-[#EBEBEB] z-200 pt-[5px]">
    <div className="sidebar-link bg-white flex flex-col lg:flex-row cursor h-[74px] items-center hover:bg-[#EBEBEB]">
      <img className="h-6 lg:px-[15px]"  src="src/images/icons/home.svg"/>
      <div className="text-[10px]">Home</div>
    </div>
    <div className="sidebar-link bg-white flex flex-col lg:flex-row cursor h-[74px] items-center hover:bg-[#EBEBEB] ">
      <img className="h-6 lg:px-[15px]"  src="src/images/icons/explore.svg"/>
      <div className="text-[10px]">Explore</div>
    </div>
    <div className="sidebar-link bg-white flex flex-col lg:flex-row cursor h-[74px] items-center hover:bg-[#EBEBEB] ">
      <img className="h-6 lg:px-[15px]"  src="src/images/icons/subscriptions.svg"/>
      <div className="text-[10px]">Subscriptions</div>
    </div>
    <div className="sidebar-link bg-white flex flex-col lg:flex-row cursor h-[74px] items-center hover:bg-[#EBEBEB] ">
      <img className="h-6 lg:px-[15px]"  src="src/images/icons/originals.svg"/>
      <div className="text-[10px]">Orginals</div>
    </div>
    <div className="sidebar-link bg-white flex flex-col lg:flex-row cursor h-[74px] items-center hover:bg-[#EBEBEB] ">
      <img className="h-6 lg:px-[15px]"  src="src/images/icons/YouTube-music.svg"/>
      <div className="text-[10px]">YouTube Music</div>
    </div>
    <div className="sidebar-link bg-white flex flex-col lg:flex-row cursor h-[74px] items-center hover:bg-[#EBEBEB] ">
      <img className="h-6 lg:px-[15px]"  src="src/images/icons/library.svg"/>
      <div className="text-[10px]">Library</div>
    </div>
  </nav>
  )
}

export default Navbar