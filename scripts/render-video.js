import data from "../data/yt-data.js";

console.log(data)
const renderVideos = () => {
  let videos = '';

  data.forEach(video => {
    videos += `
      <div class="video-preview">
          <div class="thumbnail-row relative mb-2">
          <img class="thumbnail w-[100%]" src="${video.thumbnail}">
          <div class="time text-[12px] bg-black font-[500] text-white absolute right-[5px] bottom-2 p-1 rounded-[2px]">${video.time} </div>
        </div>
        <div class="video-info-grid grid grid-cols-[50px_1fr]">
          <div class="channel-picture relative">
            <img class="profile-picture rounded-[50px] w-[36px]" src="${video.channelPic}">
            <div class="dev-tooltip opacity-0 pointer-events-none w-[210px] bg-white absolute top-[55px] 
            flex items-center rounded-[5px] px-[12px] py-[10px] shadow-2xl transition-opacity duration-500">
              <img class="dev-picture w-[36px] h-[36px] rounded-[18px] mr-[8px]"   src="${video.channelPic}">
              <div>
                <div class="dev-name font-bold text-[10px] lg:text-[15px]">${video.author}</div>
                <div class="dev-stats text-[#606060] text-[14px]">${video.channelStats}</div>
              </div>
            </div>
          </div>
          <div class="video-info">
            <a class="video-title-link" href="${video.vidLink}" target="_blank">
              <p class="video-title font-[500] mb-[10px] text-[14px] lg:text-[16px]">
              ${video.title}
            </p>
            </a>
            
            <p class="video-author text-[12px] mb-1 text-[#606060]">
              ${video.author}
            </p>
            <p class="video-stats text-[12px] text-[#606060]">
              ${video.stats}
            </p>
        </div>
        </div>
      </div>
    `;
  });
  document.querySelector(".video-grid").innerHTML = videos;
}

renderVideos()
export default renderVideos