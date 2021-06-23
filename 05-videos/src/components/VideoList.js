import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className="ui relaxed divided list">
      {videos.map( v => <VideoItem
                          video={v}
                          key={v.id.videoId}
                          onVideoSelect={onVideoSelect}
                        />)}
    </div>
  );
}

export default VideoList;