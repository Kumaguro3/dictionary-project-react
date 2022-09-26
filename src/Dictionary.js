import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState(null);

  function HandleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  function HandleResponse(response) {
    console.log(response.data[0]);
  }

  function Search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(HandleResponse);

    alert(`Searching for ${keyWord} definition`);
  }

  return (
    <div className="dictionary ">
      <h1>Hello to dictionary</h1>
      <form className="form" onSubmit={Search}>
        <input type="search" autoFocus={true} onChange={HandleKeyWordChange} />
      </form>
    </div>
  );
}
