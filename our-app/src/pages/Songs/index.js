import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Songs = () => {

  //const [ likes, setLikes ] = useState(0);
  const [ s1likes, s1setLikes ] = useState(0);
  const [ s2likes, s2setLikes ] = useState(0);
  const [ s3likes, s3setLikes ] = useState(0);
  const [ s4likes, s4setLikes ] = useState(0);
  const [ artistinfo, setartistinfo] = useState({
    artist: "",
    title: ""
  });
  const [lyrics, setLyrics] = useState(
    {lyrics: ""}
  )
  const updateLikes = (likes, setLikes) => {if (likes ===1){
    setLikes(likes - 1);
  }
    else{
      setLikes(likes + 1);
    }
  };

  const updateLyrics = (songartist, songtitle) => {
    setartistinfo({artist: songartist, title: songtitle});
  }

  useEffect(() => {
        async function getLyrics(){
          console.log("Lyrics here");
          console.log(artistinfo.artist);
          let data = await axios.get(`https://api.lyrics.ovh/v1/${artistinfo.artist}/${artistinfo.title}`);
          console.log(data);
          setLyrics(data);
          }
          getLyrics()
  }, [ artistinfo])

  return (
    <div className="App">
      <header className="App-header">
        <div id="songs">
        <ul>
        <li><a
          className="App-link"
          href="https://www.youtube.com/watch?v=Ijk4j-r7qPA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Take Me Out (Released 12th January 2004)
        </a><p> Likes: {s1likes}</p> <button onClick={() => updateLikes(s1likes, s1setLikes)}>+</button>
        <p> Get Lyrics </p> <button onClick={() => updateLyrics("Franz Ferdinand", "Take Me Out")}> Fetch</button>
        </li>
        <li><a
          className="App-link"
          href="https://www.youtube.com/watch?v=r8k-iy_tWtQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Dark of the Matinée (Released 19th April 2004)
        </a><p> Likes: {s2likes}</p> <button onClick={() => updateLikes(s2likes, s2setLikes)}>+</button>
        <p> Get Lyrics </p> <button onClick={() => updateLikes(s2likes, s2setLikes)}> Fetch</button>
        </li>
        <li>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=ktwlN_ocL-o"
          target="_blank"
          rel="noopener noreferrer"
        >
          Michael (Released 16th August 2004)
        </a><p> Likes: {s3likes}</p> <button onClick={() => updateLikes(s3likes, s3setLikes)}>+</button>
        <p> Get Lyrics </p> <button> Fetch</button>
        </li>
        <li>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=haW_ruZ_Be8"
          target="_blank"
          rel="noopener noreferrer"
        >
          This Fffire (Released 9th February 2004)
        </a><p> Likes: {s4likes}</p> <button onClick={() => updateLikes(s4likes, s4setLikes)}>+</button>
        <p> Get Lyrics </p> <button> Fetch</button>
        </li>
        </ul>
        <p>{lyrics.lyrics}</p>
        </div>
      </header>
    </div>
  );

};

export default Songs;