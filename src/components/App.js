import React, { Component } from 'react';
import youtube from '../apis/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideosList'
// import axios from 'axios'
import VideoDetail from './VideoDetail'


const KEY = 'AIzaSyBBmeOObRT4jvNJb3ShAL8wHOBNASz146g';
class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };


  onUserInputSubmit = async userInput => {

    console.log(userInput);
    const response = await youtube.get('/search', {
      params: {
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
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  };

  onVideoSelect = (video) => {
    // console.log('form the app', video);
    this.setState({ selectedVideo: video });
  }

  componentDidMount(){
    this.onUserInputSubmit('cat')
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onUserInputSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            {/* I have {this.state.videos.length} videos */}
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
