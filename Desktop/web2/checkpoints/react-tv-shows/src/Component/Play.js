import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Play({ vid }) {
  return (
    <div
      style={{
        width: "100%",
        height: "150vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.9)",
      }}
    >
      <div
        className="back"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin:"10px 0 50px 0"
        }}
      >
        <Link to="/" style={{
          color:"white",
          fontSize:25,
          textDecoration:"none",
        }}>
          <ArrowBackIosIcon color="white" /> back
        </Link>
      </div>
      <iframe
        width="100%"
        height="52%"
        src={vid.src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div
        className="dscription"
        style={{
          width: "100%",
          height: 200,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          className="avatar"
          style={{
            width: "250px",
            height: "60%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            src="/Images/spiderman.jpg"
            alt="spiderman"
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
            }}
          />
          <h3 style={{ color: "white", textAlign: "center" }}>Oustimos Osté</h3>
        </div>
        <div
          className="text"
          style={{
            width: "calc(100% - 300px)",
            height: "60%",
            padding: "0 25px",
          }}
        >
          <h4 style={{ color: "white", textAlign: "center" }}>{vid.dscr}</h4>
        </div>
      </div>
    </div>
  );
}

export default Play;
