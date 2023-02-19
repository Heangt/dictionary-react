import React from "react";
import "./Meaning.css";
export default function Meanings(props) {
  let definitions = props.meanings.definitions;

  function showSimilar(synonyms) {
    if (synonyms.length) return "Similar:";
    else return null;
  }

  return (
    <div className="Meaning border-bottom">
      <h6>{props.meanings.partOfSpeech}</h6>

      {definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>

            <p className="Example">
              <em>{definition.example}</em>
            </p>
            <div>
              <ul>
                {showSimilar(definition.synonyms)}
                {definition.synonyms.map(function (synonym, index) {
                  return (
                    <span key={index}>
                      <li>{synonym}</li>{" "}
                    </span>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
