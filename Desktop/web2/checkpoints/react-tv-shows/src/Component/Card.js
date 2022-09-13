import React from "react";
import "./Card.css";
import {useNavigate} from "react-router-dom";

function Card({ item, setVid }) {
  const navigate = useNavigate()
  const handle =  (el, e) => {
    setVid({
      src:el,
      dscr:e,
    });
    navigate("/Play");

  }
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
        <button  onClick={() => handle(item.iframeSrc, item.dscr)}>watch</button>      
      </div>
    </div>
  );
}

export default Card;
