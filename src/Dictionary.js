import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState(null);

  function HandleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  function Search(event) {
    event.preventDefault();
    alert("Searching for ${keyWord} definition");
  }
  return (
    <div className="dictionary ">
      <h1>Hello to dictionary</h1>
      <form className="form" onSubnit={Search}>
        <input type="search" autoFocus={true} onChange={HandleKeyWordChange} />
      </form>
    </div>
  );
}
