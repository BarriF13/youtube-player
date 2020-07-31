import React, { Component } from 'react';
import youtube from '../apis/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideosList'
// import axios from 'axios'


const KEY = 'AIzaSyBBmeOObRT4jvNJb3ShAL8wHOBNASz146g';
 class App extends Component {
  state = { videos: [] ,
  selectedVideo: null
  };


onUserInputSubmit = async userInput =>{
 
  console.log(userInput);
  const response = await youtube.get('/search', {
    params:{
      part: 'snippet',
    maxResult: 5,
    key: KEY,
    q: userInput
    }
  }
  );

  //------------------
  // const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
  //   params: {
  //     part:'snippet',
  //     maxResult: 5,
  //     q: userInput,
  //     key: KEY
  //   } 
  // });
  //-------------------------
      this.setState({ videos: response.data.items
      })
};

onVideoSelect = (video) =>{
  console.log('form the app', video);
}
  render() {
    return (
      <div className="ui container">
       <SearchBar  onFormSubmit={this.onUserInputSubmit}/>
       {/* I have {this.state.videos.length} videos */}
       <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
      </div>
    )
  }
}

export default App;
