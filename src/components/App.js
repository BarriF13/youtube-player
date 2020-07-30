import React, { Component } from 'react';
// import youtube from '../apis/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideosList'
import axios from 'axios'
const KEY = 'AIzaSyBBmeOObRT4jvNJb3ShAL8wHOBNASz146g';
 class App extends Component {
  state = { videos: [] };
onUserInputSubmit = async userInput =>{
 
  // console.log(userInput);
  // const res = await youtube.get('/search', {
  //   params:{
  //     q: userInput
  //   }
  // });
  // console.log(res);
  //------------------
  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part:'snippet',
      maxResult: 5,
      q: userInput,
      key: KEY
    } 
  });
      this.setState({ videos: response.data.items
      })
};
  render() {
    return (
      <div className="ui container">
       <SearchBar  onFormSubmit={this.onUserInputSubmit}/>
       {/* I have {this.state.videos.length} videos */}
       <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

export default App;
