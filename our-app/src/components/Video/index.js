import React, { useState, useEffect } from 'react';
import ReactPlayer from "react-player";

const Video = () => {

const [ songs, setSongs] = useState([
    { id: 0, title: 'Take Me Out', video: 'https://www.youtube.com/watch?v=Ijk4j-r7qPA'},
    { id: 1, title: 'The Dark of the Matinee', video: 'https://www.youtube.com/watch?v=r8k-iy_tWtQ'},
    { id: 2, title: 'Michael', video: 'https://www.youtube.com/watch?v=ktwlN_ocL-o'},
    { id: 3, title: 'his%20Fire', video: 'https://www.youtube.com/watch?v=haW_ruZ_Be8'}
  ])

  return (
    <div className="Video">
        <h2>{songs[0].title}</h2>
        <ReactPlayer url={songs[0].video} />
    </div>
  )

}

export default Video;