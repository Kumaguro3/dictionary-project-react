import React from "react";

export default function Phonetic(props) {
  return (
    <div className="phonetic">
      <a href={props.phonetic.audio} target="_blank">
        Listen to phonetic
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
