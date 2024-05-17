import { useEffect, useRef, useState } from "react";
import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa";

import sound1 from "./1.mp3";
import sound2 from "./2.mp3";

const SoundPlayer = () => {
  const music = [sound1, sound2];
  const [play, togglePlay] = useState(false);
  const [currentPlay, setCurrentPlay] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const next = () => {
    if (currentPlay < music.length - 1) {
      setCurrentPlay((prev) => prev + 1);
    } else {
      setCurrentPlay(0);
    }
    togglePlay(true);
  };

  const prev = () => {
    if (currentPlay > 0) {
      setCurrentPlay((prev) => prev - 1);
    } else {
      setCurrentPlay(music.length - 1);
    }
    togglePlay(true);
  };

  useEffect(() => {
    if (audioRef.current) {
      if (play) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [play, currentPlay]);

  return (
    <div>
      <button onClick={prev}>
        <FaBackward />
      </button>
      <button onClick={() => togglePlay((prev) => !prev)}>
        {play ? <FaPause /> : <FaPlay />}
      </button>
      <button onClick={next}>
        <FaForward />
      </button>
      <audio ref={audioRef} src={music[currentPlay]} />
    </div>
  );
};

export default SoundPlayer;
