import React from "react";
import Synonyms from "./Synonyms";
import "./Dictionary.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <h3 class="verb-adj-noun">
        {" "}
        <strong>{props.meaning.partOfSpeech}</strong>
      </h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="search-word-definition">
              <strong className="definition-text">Definition:</strong>{" "}
              {definition.definition}
              <br />
              <strong className="examples-text">Examples:</strong>
              <em>{definition.example}</em>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
