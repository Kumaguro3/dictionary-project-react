import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";
import "./Phonetic.css";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("Happy");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function HandleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  function Load() {
    setLoaded(true);
    Search();
  }

  function HandleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function Search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(HandleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001e819dfc4922a4ab9a9d8aabf4f993bf5";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
            <div className="container-photos">
              <Photos photos={photos} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    Load();
    return "Loading...";
  }
}
