import axios from 'axios';

// const KEY = 'AIzaSyBBmeOObRT4jvNJb3ShAL8wHOBNASz146g';
//MAKING : pre configured instance of axios that is already has a  base URL and some default parameters loaded into it
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  //option object which called params which contains all the different query string parameters that we want to add it to the request 
  // params: {
  //   part: 'snippet',
  //   maxResult: 5,
  //   key: KEY

  // }

});

//client id
// 307659022211-femeo7vkejqftk1pvdqedq3n3le8rbep.apps.
// googleusercontent.com
// client secret SBULar9Q6FzFOE1muP9t0q0h