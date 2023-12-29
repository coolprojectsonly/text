"use client";
import React, { useEffect } from "react";
import App from "./components/App";
import store from "./components/store";
import { Provider } from "react-redux";

function page() {
  return (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
}

export default page;

// "use client";

// import React, { useState, useRef } from "react";

// const AudioPlayer = () => {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [volume, setVolume] = useState(1);

//   const togglePlay = () => {
//     setIsPlaying(!isPlaying);
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//   };

//   const handleVolumeChange = (event) => {
//     setVolume(event.target.value);
//     audioRef.current.volume = event.target.value;
//   };

//   return (
//     <div>
//       <h1>React Audio Player</h1>
//       <audio ref={audioRef} src="your-audio-file.mp3" />
//       <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
//       <input
//         type="range"
//         min="0"
//         max="1"
//         step="0.01"
//         value={volume}
//         onChange={handleVolumeChange}
//       />
//     </div>
//   );
// };

// export default AudioPlayer;
