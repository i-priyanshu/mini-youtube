import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="video-item zoom ui card centered segment inverted"
      data-content="youtube"
    >
      <div className="ui fluid centered image">
        <img
          alt={video.snippet.title}
          className="ui medium image float"
          src={video.snippet.thumbnails.medium.url}
        />
      </div>
      <div className="content">
        <div className="ui middle aligned">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
