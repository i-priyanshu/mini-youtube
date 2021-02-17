import React from "react";
import SearchBar from "./searchBar";
import Youtube from "../APIs/youtube";

const KEY = 'AIzaSyBEjU_vd4nncN3o8CnqseCXjiRk6Rj_oCs';

class App extends React.Component {
  state = {videos : []};

  onTermSubmit = async term => {
   const response = await Youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key:KEY
      }
    });

    this.setState({videos : response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        I have {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;
