import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="phonetic">
      <div className="phonetic-audio">
        <ReactAudioPlayer src={props.phonetic.audio} controls />
      </div>
      <br />
      <div className="phonetic-text">{props.phonetic.text}</div>
    </div>
  );
}
