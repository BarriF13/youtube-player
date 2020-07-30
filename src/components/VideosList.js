import React from 'react'
import VideoItem from './VideoItem'
const VideosList = ({videos }) => {
  //props.vidoes an array 
   const renderedList = videos.map((video) => {
     return <VideoItem video={video}/>;
   })

  return (
    <div>
      {renderedList}
    </div>
  )
}

export default VideosList
