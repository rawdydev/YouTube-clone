import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-md h-14 px-4 md:px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center">
          <button className="p-2 hover:bg-gray-100 rounded-full">
              <img src="images/icons/hamburger-menu.svg" alt="Menu" className="w-6 h-6"/>
          </button>
          <img src="images/icons/youtube-logo.svg" alt="YouTube" className="ml-4 hidden sm:block h-5"/>
          <img src="images/icons/youtube-logo.svg" alt="YouTube" className="ml-4 sm:hidden h-5"/>
      </div>
      
      <div className="flex-grow max-w-2xl mx-4 hidden md:flex">
          <div className="flex w-full">
              <input 
                  type="search" 
                  placeholder="Search" 
                  className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-l-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 bg-gray-100 rounded-r-full border border-l-0 border-gray-300 hover:bg-gray-200">
                  <img src="images/icons/search.svg" alt="Search" className="w-5 h-5"/>
              </button>
          </div>
          <button className="ml-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <img src="images/icons/voice-search-icon.svg" alt="Voice Search" className="w-6 h-6"/>
          </button>
      </div>
      
      <div className="flex items-center">
          <button className="p-2 hover:bg-gray-100 rounded-full md:hidden">
              <img src="images/icons/search.svg" alt="Search" className="w-6 h-6"/>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full hidden sm:block">
              <img src="images/icons/upload.svg" alt="Upload" className="w-6 h-6"/>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full hidden sm:block">
              <img src="images/icons/youtube-apps.svg" alt="YouTube Apps" className="w-6 h-6"/>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <img src="images/icons/notifications.svg" alt="Notifications" className="w-6 h-6"/>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
              </span>
          </button>
          <button className="ml-2 rounded-full overflow-hidden">
              <img src="images/channel-pictures/my-channel.jpeg" alt="Channel" className="w-8 h-8"/>
          </button>
      </div>
  </header>
  )
}

export default Header