import "./App.css";
import row1 from "./data/row1.json";
import row2 from "./data/row2.json";
import row3 from "./data/row3.json";
import row4 from "./data/row4.json";
import row5 from "./data/row5.json";
import row6 from "./data/row6.json";
import row7 from "./data/row7.json";
import row8 from "./data/row8.json";
import row9 from "./data/row9.json";
import row10 from "./data/row10.json";
import topRow from "./data/topRow.json";
import settings from "./settings.json";
import React from "react";
function App() {
  return (
    <>
      <p className="rotateMessage">
        Rotate device or widen your browser window
      </p>
      <p className="rotateMessage">Good Luck!</p>
      <div className="team1">{settings.team1}</div>
      <div className="boardContainer">
        <div className="team2">{settings.team2}</div>
        {/* You can make this a nested for loop with 1 json object if you combine all the rows */}
        <div className="topRow">
          {topRow.map((box, i) => (
            <div key={`top row column ${i}`}>{box?.text}</div>
          ))}
        </div>
        <div className="row">
          {row1.map((box, i) => (
            <div key={`row 1 column ${i}`} className={"box"}>
              {box?.text}
            </div>
          ))}
        </div>
        <div className="row">
          {row2.map((box, i) => (
            <div key={`row 2 column ${i}`} className={"box"}>
              {box?.text}
            </div>
          ))}
        </div>
        <div className="row">
          {row3.map((box, i) => (
            <div key={`row 3 column ${i}`} className={"box"}>
              {box?.text}
            </div>
          ))}
        </div>
        <div className="row">
          {row4.map((box, i) => (
            <div key={`row 4 column ${i}`} className={"box"}>
              {box?.text}
            </div>
          ))}
        </div>
        <div className="row">
          {row5.map((box, i) => (
            <div key={`row 5 column ${i}`} className={"box"}>
              {box?.text}
            </div>
          ))}
        </div>
        <div className="row">
          {row6.map((box, i) => (
            <div key={`row 6 column ${i}`} className={"box"}>
              {box?.text}
            </div>
          ))}
        </div>
        <div className="row">
          {row7.map((box, i) => (
            <div key={`row 7 column ${i}`} className={"box"}>
              {box?.text}
            </div>
          ))}
        </div>
        <div className="row">
          {row8.map((box, i) => (
            <div key={`row 8 column ${i}`} className={"box"}>
              {box?.text}
            </div>
          ))}
        </div>
        <div className="row">
          {row9.map((box, i) => (
            <div key={`row 9 column ${i}`} className={"box"}>
              {box?.text}
            </div>
          ))}
        </div>
        <div className="row">
          {row10.map((box, i) => (
            <div key={`row 10 column ${i}`} className={"box"}>
              {box?.text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
