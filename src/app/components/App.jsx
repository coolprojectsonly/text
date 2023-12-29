import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getspeech } from "./action";
import ReactPlayer from "react-player";

import dynamic from "next/dynamic";

const DynamicReactPlayer = dynamic(() => import("react-player"), {
  ssr: true, // This ensures the component is not rendered on the server
});

function App() {
  const { data, status, error } = useSelector((state) => state.post);
  const [text, setText] = useState();

  const dispatch = useDispatch();

  // console.log(data?.result?.audio_url);

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(getspeech({ text }));
  };

  // const playAudio = () => {
  //   const decodedData = atob(data && data);
  //   const audio = new Audio();
  //   audio.src = `data:audio/wav;base64,${decodedData}`;
  //   audio.play();
  // };

  if (status === "pending") {
    return <h1>Loading...</h1>;
  }

  useEffect(() => {
    dispatch(getspeech());
  }, []);
  return (
    <>
      <h2>Text to Speech App</h2>
      <div className="inputContainer">
        <div className="inputWrapper">
          <label className="nameLabel">Your Text</label>
          <input
            type="text"
            id="inputField"
            className=""
            onChange={(e) => setText(e.target.value)}
            required
          ></input>
          <label htmlFor="inputField" className="inputLabel">
            Type Here...
          </label>
        </div>
        <button onClick={handleClick}>Get Speech</button>
      </div>

      <div className="speechContainer">
        <div className="speechWrapper">
          {/* <audio src={data && data}></audio> */}
          {/* 
          <ReactPlayer
            url={data?.result?.audio_url}
            controls={true}
            width="100%"
            height="50px"
          /> */}

          <DynamicReactPlayer
            url={data?.result?.audio_url}
            controls={true}
            width="100%"
            height="50px"
          />

          {/* <audio controls>
            <source src={data && data} type="audio/mpeg" />
          </audio> */}
        </div>
      </div>
    </>
  );
}

export default App;
