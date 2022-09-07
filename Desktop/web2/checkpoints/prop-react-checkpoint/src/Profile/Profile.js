import React from "react";
import "./Profile.css";

function Profile(props) {
    const {brand,home,mater,goal,achievement,hobbies,skills} = props.bio;
  return (
    <div className="profile">
      <div className="part1">
        {props.children}
        <h1 style={{ fontFamily: "'Courier New', Courier, monospace",marginTop:35 }}>
          {props.fullName}
        </h1>
        <h3
          style={{
            fontFamily: "'Courier New', Courier, monospace",
            color: "grey",
          }}
        >
          {props.profession}
        </h3>
      </div>
      <div className="part2">
        <ul>
          <li>
            <span className="left">Full-name :</span>
            <span className="right">{props.fullName}</span>
          </li>
          <li>
            <span className="left">Current job :</span>
            <span className="right">{props.profession}</span>
          </li>
          <li>
            <span className="left">Personal brand statement :</span>
            <span className="right">{brand}</span>
          </li>
          <li>
            <span className="left">Hometown :</span>
            <span className="right">{home}</span>
          </li>
          <li>
            <span className="left">Alma mater :</span>
            <span className="right">{mater}</span>
          </li>
          <li>
            <span className="left">Personal goals :</span>
            <span className="right">{goal}</span>
          </li>
          <li>
            <span className="left">Relevant achievement :</span>
            <span className="right">{achievement}</span>
          </li>
          <li>
            <span className="left">Hobbies :</span>
            <span className="right">{hobbies}</span>
          </li>
          <li>
            <span className="left">skills and area of expertise :</span>
            <span className="right">{skills}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
