import React from "react";
import Meanings from "./Meaning";
export default function Result(props){
   let meanings=props.result.meanings;
     
    return <div class="text-left">
        <h1>{props.result.word}</h1>
        {meanings.map(function(meaning ,index){
      return  <Meanings key={index} meanings={meaning} />
      })}
      </div>
}