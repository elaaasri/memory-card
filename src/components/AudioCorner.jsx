import { useState, useRef } from "react";
import shrekAudio from "../utils/audio/shrek-music.mp3";
const AudioCorner = () => {
  const [isMusicOn, setMusic] = useState(true);
  const audioRef = useRef(new Audio(shrekAudio));
  // handles music event :
  const handleMusic = () => {
    const audio = audioRef.current;
    console.log(isMusicOn);
    if (isMusicOn) {
      audio.play();
      setMusic(false);
    } else {
      audio.pause();
      setMusic(true);
    }
  };
  return (
    <div className="audio-corner">
      <img
        src="./public/imgs/music-icon.png"
        id="music-icon"
        alt="music icon"
        onClick={handleMusic}
      />
      <img src="./public/imgs/note-icon.png" id="note-icon" alt="note icon" />
    </div>
  );
};
export default AudioCorner;
