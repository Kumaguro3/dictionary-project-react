import React from "react";
import Meaning from "./Meaning";
import "./Dictionary.css";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <div className="section">
          <h1 className="searched-word">{props.results.word}</h1>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div className="section" key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
