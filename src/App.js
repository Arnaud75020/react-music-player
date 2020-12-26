import React, { useState, useRef } from 'react'; 
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import data from './data';
import Library from './components/Library';
import Nav from './components/Nav';

function App() {

  const [ songs, setSongs ] = useState(data());
  const [ currentSong, setCurrentSong ] = useState(songs[0]);
  const [ isPlaying, setIsPlaying ] = useState(false);
  const audioRef = useRef(null);
  const [ songInfo, setSongInfo ] = useState({ 
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
 });
 const [ libraryStatus, setLibraryStatus ] = useState(false);

 const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  const roundedCurrent = Math.floor(current);
  const roundedDuration = Math.floor(duration);
  const animation = Math.floor((roundedCurrent / roundedDuration) * 100);

  setSongInfo({...songInfo, currentTime: current, duration, animationPercentage: animation});
};

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex(song => song.id === currentSong.id);
       await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
       if (isPlaying) audioRef.current.Play();
  }

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav 
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        />
      <Song currentSong={currentSong}/>
      <Player 
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        songs={songs}
        audioRef={audioRef} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo} />
      <Library 
        onEnded={songEndHandler}
        libraryStatus={libraryStatus}
        setSongs={setSongs}
        isPlaying={isPlaying}
        audioRef={audioRef}
        songs={songs} 
        setCurrentSong={setCurrentSong} />
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
