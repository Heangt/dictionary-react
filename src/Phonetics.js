import React from "react";
import ReactAudioPlayer from "react-audio-player";
//...
export default function Phonetics(props) {
  let audio = props.phonetics.audio;
  if (audio) {
    return (
      <div>
        <ReactAudioPlayer src={audio} autoPlay controls />
        {""} <small>{props.phonetics.text}</small>
      </div>
    );
  } else return null;
}
