import React from "react";
export default function Meanings(props){
   let definitions = props.meanings.definitions;
    return <div>
        <h5>{props.meanings.partOfSpeech}</h5>
        {definitions.map(function(definition, index){
       return <div key={index}> 
       <span>
        <p>Definition: {definition.definition}</p>
        <p>Example: {""}<em>{definition.example}</em></p>
        </span>
        </div>
        })}
      </div>
      }