import React, { useState, useEffect } from "react";
import SearchBar from "./searchBar";
import Youtube from "../APIs/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./Videodetail";
import useVideos from "../hooks/useVideos";
import "./VideoItem.css";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("sparkle");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div>
      <h2 className="ui  red block inverted center aligned header">
        <img src="youtube.png" className="ui image"></img>A Micro Youtube App
      </h2>
      <div className="ui inverted container">
        <SearchBar onFormSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
