import React, { useState } from "react";

import "../styles/App.css";

const searchArray = [
  "Newton",
  "School",
  "Newton School",
  "React",
  "Preact",
  "Node",
  "Mongoose",
  "Angular",
  "Vue",
  "Apple",
  "Microsoft",
  "Netflix",
  "Meta",
];
const App = () => {
  const [inputVal, setInputVal] = useState("");
  const [searchArrInp, setSearchArrInp] = useState([]);
  return (
    <div id="main">
      <label>
        Search
        <br />
        <br />
        <input
          type="text"
          id="search-input"
          onChange={function (e) {
            if (e.target.value.length > 0) {
              setSearchArrInp(
                searchArray.filter((el) => {
                  return el.toLowerCase().trim().includes(e.target.value);
                })
              );
            } else {
              setSearchArrInp([]);
            }
            setInputVal(e.target.value);
          }}
          // value={inputVal}
        />
      </label>
      <br />
      <br />
      <div>
        Results
        <ul>
          {searchArrInp.map((el, i) => {
            return <li key={i}>{el}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
