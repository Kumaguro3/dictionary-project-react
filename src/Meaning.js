import React from "react";
import Synonyms from "./Synonyms";
import "./Dictionary.css";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <h2 className="verb-adj-noun">
        {" "}
        <strong>{props.meaning.partOfSpeech}</strong>
      </h2>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="search-word-definition">
              <div className="definition">Definition</div>{" "}
              <p className="definition-text"> {definition.definition} </p>
              <p className="example-text">{definition.example}</p>
              <div className="synonym-text">
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
