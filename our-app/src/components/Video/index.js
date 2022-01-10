import React, { useState, useEffect } from 'react';
import ReactPlayer from "react-player";

const Video = () => {

const [ songs, setSongs] = useState([
    { id: 0, title: 'Take Me Out', video: 'https://www.youtube.com/watch?v=Ijk4j-r7qPA'},
    { id: 1, title: 'The Dark of the Matinee', video: 'https://www.youtube.com/watch?v=r8k-iy_tWtQ'},
    { id: 2, title: 'Michael', video: 'https://www.youtube.com/watch?v=ktwlN_ocL-o'},
    { id: 3, title: 'his%20Fire', video: 'https://www.youtube.com/watch?v=haW_ruZ_Be8'}
  ])

  const [ chosenSong, setChosenSong ] = useState();

  const handleSongSelect = songId => {
    const chosenSong = songs.find(s => s.id === songId);
    setChosenSong(chosenSong);
  };

  return (
    <div className="Video">
        <h2>{songs[0].title}</h2>
        <ReactPlayer url={songs[0].video} />
        <h2>{songs[1].title}</h2>
        <ReactPlayer url={songs[1].video} />
        <h2>{songs[2].title}</h2>
        <ReactPlayer url={songs[2].video} />
        <h2>{songs[3].title}</h2>
        <ReactPlayer url={songs[3].video} />
    </div>
  )

}

export default Video;