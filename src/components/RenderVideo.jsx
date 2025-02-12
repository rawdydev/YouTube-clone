import React from 'react'

const RenderVideo = ({video}) => { 
  return (
    <div className="video-preview">
      <div className="thumbnail-row relative mb-2">
        <img className="thumbnail w-[100%]" src={`${video.thumbnail}`}/>
        <div className="time text-[12px] bg-black font-[500] text-white absolute right-[5px] bottom-2 p-1 rounded-[2px]">{video.time} </div>
      </div>
      <div className="video-info-grid grid grid-cols-[50px_1fr]">
        <div className="channel-picture relative">
          <img className="profile-picture rounded-[50px] w-[36px]" src={`${video.channelPic}`}/>
          <div className="dev-tooltip opacity-0 hover:opacity-100 pointer-events-none w-[210px] bg-white absolute top-[55px] 
          flex items-center rounded-[5px] px-[12px] py-[10px] shadow-2xl transition-opacity duration-500">
            <img className="dev-picture w-[36px] h-[36px] rounded-[18px] mr-[8px]"   src={`${video.channelPic}`}/>
            <div>
              <div className="dev-name font-bold text-[10px] lg:text-[15px]">{video.author}</div>
              <div className="dev-stats text-[#606060] text-[14px]">{video.channelStats}</div>
            </div>
          </div>
        </div>
        <div className="video-info">
          <a className="video-title-link" href={`${video.vidLink}`} target="_blank">
            <p className="video-title font-[500] mb-[10px] text-[14px] lg:text-[16px]">
            {video.title}
          </p>
          </a>
          
          <p className="video-author text-[12px] mb-1 text-[#606060]">
            {video.author}
          </p>
          <p className="video-stats text-[12px] text-[#606060]">
            {video.stats}
          </p>
        </div>
      </div>
    </div>
  )
}

export default RenderVideo