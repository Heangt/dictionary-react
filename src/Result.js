import React from "react";
import Meanings from "./Meaning";
import Phonetics from "./Phonetics";
export default function Result(props){
  let meanings =props.result.meanings;
   let phonetics =props.result.phonetics;
     
    return <div class="text-left">
        <h1>{props.result.word}</h1>
        <span>{phonetics.map(function(phonetic,index){
        return <Phonetics key={index} phonetics={phonetic}/>
        })}</span>
        {meanings.map(function(meaning ,index){
      return  <Meanings key={index} meanings={meaning} />
      })}
      </div>
}