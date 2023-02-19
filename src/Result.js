import React from "react";
import Meanings from "./Meaning";
import Phonetics from "./Phonetics";
import Photos from "./Photos";
export default function Result(props) {
  let meanings = props.result.meanings;
  let phonetics = props.result.phonetics;
  let keyword = props.result.word;

  return (
    <div className="Result">
      <section className="px-4">
        <h1>{keyword}</h1>
        {phonetics.map(function (phonetic, index) {
          return <Phonetics key={index} phonetics={phonetic} />;
        })}
        <Photos keyword={keyword} />;
      </section>
      {meanings.map(function (meaning, index) {
        return <Meanings key={index} meanings={meaning} />;
      })}
    </div>
  );
}
