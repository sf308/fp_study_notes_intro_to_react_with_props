import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Video } from '../../components';

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
  //const [lyrics, setLyrics] = useState(
  //  {lyrics: ""}
  //);
  const [lyrics, setLyrics] = useState("");
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
          let data;
          if (artistinfo.artist===""&&artistinfo.title===""){
            //data = await axios.get(`https://api.lyrics.ovh/v1/Franz%20Ferdinand/Take%20Me%20Out`);t
            setLyrics("Get Lyrics from above!");
          }
          else {
            data = await axios.get(`https://api.lyrics.ovh/v1/${artistinfo.artist}/${artistinfo.title}`);
            setLyrics(data.data.lyrics);
          }
          console.log(lyrics);
          }
        getLyrics()
  }, [ artistinfo])

  return (
    <div className="App">
      <header className="App-header">
        <List />
        <Video />
      </header>
    </div>
  );

};

export default Songs;