import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="phonetic">
      <div className="phonetic-audio">
        <ReactAudioPlayer src={props.phonetic.audio} controls id="player" />
      </div>
      <br />
      <div className="phonetic-text">{props.phonetic.text}</div>
      <br />
    </div>
  );
}
