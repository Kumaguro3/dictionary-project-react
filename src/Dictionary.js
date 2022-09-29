import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";
import "./Phonetic.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("Happy");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function HandleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  function Load() {
    setLoaded(true);
    Search();
  }

  function HandleResponse(response) {
    setResults(response.data[0]);
  }

  function Search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(HandleResponse);
  }

  function HandleSubmit(event) {
    event.preventDefault();
    Search();
  }

  if (loaded) {
    return (
      <div className="dictionary ">
        <div className="container-form">
          <h1>What definition are you looking for?</h1>
          <form className="form" onSubmit={HandleSubmit}>
            <input
              type="search"
              placeholder="Type a word"
              autoFocus={true}
              onChange={HandleKeyWordChange}
              width="100"
            />
          </form>
        </div>
        <div className="container-results">
          <div className="results-search">
            <Results results={results} />
          </div>
        </div>
      </div>
    );
  } else {
    Load();
    return "Loading...";
  }
}
