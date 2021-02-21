import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div class="ui black icon message">
        <i class="notched circle loading icon"></i>
        <div class="content">
          <div class="header">Just one second</div>
          <p>We're fetching that content for you.</p>
        </div>
      </div>
    );
  }

  const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={VideoSrc} />
      </div>
      <div className="ui raised padded segment inverted">
        <h4 className="ui large header">{video.snippet.title}</h4>
        <p className="ui large content">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
