import React from "react";
import ReactAudioPlayer from "react-audio-player";
//...
export default function Phonetics(props) {
  let audio = props.phonetics.audio;
  if (audio) {
    return (
      <div>
        <ReactAudioPlayer
          src={audio}
          autoPlay
          controls
          style={{ width: "100px", padding: "10px 0", margin: "-10px 0" }}
        />

        <span style={{ position: "absolute", padding: "4px 10px" }}>
          {props.phonetics.text}
        </span>
      </div>
    );
  } else return null;
}
