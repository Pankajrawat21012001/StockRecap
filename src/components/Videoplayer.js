import React from 'react';
import ReactPlayer from 'react-player';
import './Videoplayer.css';

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <ReactPlayer
        url="videos/Tech_video.mp4"
        controls={false}
        loop={true}
        width="100%"
        height="100%"
        playing={true}
        muted={true}
        playsinline={true}
        style={{
          background: 'transparent',
          display: 'block',
          objectFit: 'fill',
        }}
      />
    </div>
  );
};

export default VideoPlayer;
