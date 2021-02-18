import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="video-item item ui card"
      data-content="youtube"
    >
      <div className="image">
        <img
          alt={video.snippet.title}
          className="ui medium image"
          src={video.snippet.thumbnails.medium.url}
        />
      </div>
      <div className="content">
        <div className="description">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
