import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <h3 className="searched-definition-speech">
        {props.meaning.partOfSpeech}
      </h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="definition">
              {definition.definition}
              <br />
              <span className="definition-example">{definition.example}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
