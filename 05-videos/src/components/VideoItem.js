import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // Why arrow for onClick?
    // onClick needs a callback to call each time!
    // So we give it a short function which just calls onVideoSelect
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
