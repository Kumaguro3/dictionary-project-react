import React from "react";
import Synonyms from "./Synonyms";
import "./Dictionary.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <h3 className="verb-adj-noun">
        {" "}
        <strong>{props.meaning.partOfSpeech}</strong>
      </h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="search-word-definition">
              <strong className="definition-text">Definition:</strong>{" "}
              <p> {definition.definition} </p>
              <em>{definition.example}</em>
              <div className="synonyms-text">
                {" "}
                <Synonyms synonyms={definition.synonyms} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
