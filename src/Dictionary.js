import axios from "axios";
import React, { useState } from "react";
import Result from "./Result";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [result, setResult] = useState([]);
  const [loaded, setLoaded] = useState(false);

  function showResult(respones) {
    setLoaded(true);
    setResult(respones.data);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showResult);
  }
  function receiveKeyword(event) {
    event.preventDefault();
    search();
  }
  function getKeyword(event) {
    setKeyword(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <p class="h4 my-4">What word do you want to look up?</p>
        <form onSubmit={receiveKeyword}>
          <input
            type="search"
            placeholder="Search for a word"
            class="form-control"
            onChange={getKeyword}
          />
        </form>
        <br />

        {result.map((result, index) => {
          return (
            <div key={index}>
              <Result result={result} />
            </div>
          );
        })}
      </div>
    );
  } else search();
}
