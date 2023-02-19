import React from "react";
export default function Phonetics(props) {
  let audio = props.phonetics.audio;
  if (audio) {
    return (
      <div>
        <a href={audio} target="_blank" rel="noreferrer">
          Lisen
        </a>
        {""} <small>{props.phonetics.text}</small>
      </div>
    );
  } else return null;
}
