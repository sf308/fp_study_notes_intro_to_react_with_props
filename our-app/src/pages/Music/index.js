import React, { useState } from 'react';

const Music = () => {

  const [ likes, setLikes ] = useState(0);
  const [ s1likes, s1setLikes ] = useState(0);
  const [ s2likes, s2setLikes ] = useState(0);
  const [ s3likes, s3setLikes ] = useState(0);
  const [ s4likes, s4setLikes ] = useState(0);

  const updateLikes = (likes, setLikes) => {if (likes ===1){
    setLikes(likes - 1);
  }
  else{
    setLikes(likes + 1);
  }
};
  return (
    <div className="App">
      <header className="App-header">
        <div id="band-title">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Franz_Ferdinand_-_O2_Academy_Brixton_-_Saturday_24th_February_2018_FranzFBrixton240218-38_%2826699814248%29.jpg/450px-Franz_Ferdinand_-_O2_Academy_Brixton_-_Saturday_24th_February_2018_FranzFBrixton240218-38_%2826699814248%29.jpg" alt="logo" />
          <h1 id="band">
            Franz Ferdinand
          </h1>
          <p>Genre: Indie rock</p>
          <p role="like"> Likes: {likes}</p> <button role="likebutton" onClick={() => updateLikes(likes, setLikes)}>+</button>
        </div>
        <div id="band-intro">
        <p>Franz Ferdinand are a Scottish rock band formed in Glasgow in 2002. The band's original line-up was composed of Alex Kapranos (lead vocals, lead guitar, keyboards), Nick McCarthy (rhythm guitar, keyboards, backing vocals), Bob Hardy (bass guitar), and Paul Thomson (drums, percussion, backing vocals). Julian Corrie (keyboards, lead guitar, backing vocals) and Dino Bardot (rhythm guitar, backing vocals) joined the band in 2017 after McCarthy left during the previous year, and Audrey Tait (drums) joined the band after Thomson left in 2021. The band is one of the more popular post-punk revival bands, garnering multiple UK top 20 hits.[1] They have been nominated for several Grammy Awards and have received two Brit Awards – winning one for Best British Group – as well as one NME Award.</p>
        </div>
        <div id="songs">
        <ul>
        <li><a
          className="App-link"
          href="https://www.youtube.com/watch?v=Ijk4j-r7qPA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Take Me Out (Released 12th January 2004)
        </a><p> Likes: {s1likes}</p> <button onClick={() => updateLikes(s1likes, s1setLikes)}>+</button></li>
        <li><a
          className="App-link"
          href="https://www.youtube.com/watch?v=r8k-iy_tWtQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Dark of the Matinée (Released 19th April 2004)
        </a><p> Likes: {s2likes}</p> <button onClick={() => updateLikes(s2likes, s2setLikes)}>+</button>
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
        </li>
        </ul>
        </div>
      </header>
    </div>
  );

};

export default Music;