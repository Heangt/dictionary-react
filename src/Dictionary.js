import React, { useState } from "react";
export default function Dictionary(){
  const [keyword , setKeyword]=useState();
  function showKeyword(event){
    event.preventDefault();
    alert(keyword);
  }
  function getKeyword(event){
    setKeyword(event.target.value);
  }
    return <div className="Dictionary">
        <p class="h4">What word do you want to look up?</p>
        <form onSubmit={showKeyword}>
            <input type="search" placeholder="Search for a word" class="form-control" onChange={getKeyword}/>
        </form>
        
    </div>
}