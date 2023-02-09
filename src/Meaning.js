import React from "react";
export default function Meanings(props){
   let definitions = props.meanings.definitions;
   
    return <div>
        <h5>{props.meanings.partOfSpeech}</h5>
        {definitions.map(function(definition, index){
          
       return <div key={index}> 
       <span>
        <p>🔑{definition.definition}</p>
        <p><em>{definition.example}</em></p>
        </span>
        </div>
          
        })}
      
      </div>
      }