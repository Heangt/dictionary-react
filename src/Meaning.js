import React from "react";
import "./Meaning.css";
export default function Meanings(props) {
  let definitions = props.meanings.definitions;

  function showSimilar(synonyms) {
    if (synonyms.length) return "Similar";
    else return null;
  }

  return (
    <div className="Meaning">
      <h5>{props.meanings.partOfSpeech}</h5>

      {definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <span>
              <p>🔑{definition.definition}</p>
              <p>
                <em>{definition.example}</em>
              </p>
              <div>
                {showSimilar(definition.synonyms)}
                {definition.synonyms.map(function (synonym, index) {
                  return <span key={index}> {synonym} </span>;
                })}
              </div>
            </span>
          </div>
        );
      })}
    </div>
  );
}
