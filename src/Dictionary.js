import axios from "axios";
import React, { useState } from "react";
import Result from "./Result";
export default function Dictionary(){
  const [keyword , setKeyword]=useState();
  const [result , setResult] =useState([]);
  
  function showResult(respones){
  setResult(respones.data);
  }
  
  function showKeyword(event){
    event.preventDefault();
    let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showResult);
}
  function getKeyword(event){
    setKeyword(event.target.value);
  }
    return <div className="Dictionary">
        <p class="h4">What word do you want to look up?</p>
        <form onSubmit={showKeyword}>
            <input type="search" placeholder="Search for a word" class="form-control" onChange={getKeyword}/>
        </form>
         <br/>
         
        {result.map((result,index) =>{
        return <div key={index}>
       <Result  result={result} />
        </div> 
         })}
       </div>
}