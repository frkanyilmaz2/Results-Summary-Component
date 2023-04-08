import React from "react";
import data from "../data.json";

const Scores = () => {

  return (
    <div className="scores-container">
      <h3 className="scores-title">Summary</h3>
      <ul>
        {data.map((item, id) => (
            
          <li key={id} className="scores-item"  style={{
            background:`${item["bg-color"]}`
          }}>
           <div style={{color:`${item.color}`, fontWeight:600}}> <img src={`${item.icon}`} alt="icon"/> {item.category}</div>
              <div> <span className="item-score" style={{ color: "#303B59", fontWeight: 900 }}>    
              {item.score}
            </span>
            <span style={{ color: "rgb(160, 160, 160)", fontWeight: 900 }}> / 100</span></div>
          </li>
        ))}
      </ul>

      <button className="button">Continue</button>
    </div>
  );
};

export default Scores;
