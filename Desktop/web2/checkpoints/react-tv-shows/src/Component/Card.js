import React from "react";
import "./Card.css";

function Card({ item , infos, setVideo}) {
  return (
    <div className="card" >
      <div className="image">
        <img src={item.imgSrc} alt="" />
      </div>
      <div className="title">
        <h3>{item.title}</h3>
      </div>
      <div className="time">
        <span>{item.time}</span>
        <button>watch</button>
      </div>
    </div>
  );
}

export default Card;
