// todo : if input is empty then don't show anything in results
//      => temprary solution is keep the intital state 0
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
            // if (inputVal.length == 0) {
            //   setInputVal(0);
            // }
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
          {searchArray
            .filter((el) => {
              if (el.toLowerCase().trim().includes(inputVal)) {
                return el.toLowerCase().trim().includes(inputVal);
              } else {
                return false;
              }
            })
            .map((el, i) => {
              return <li key={i}>{el}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default App;
