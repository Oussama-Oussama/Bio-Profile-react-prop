import React from "react";
import Card from "./Card";

function MovieList({ data, setVid }) {
  return (
    <div
      style={{
        width: "calc(100% - 50px)",
        minHeight: 500,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: "25px",
        gap: 20,
        backgroundColor: "rgba(0,0,0,0.9)",
      }}
    >
      {data.map((el, i) => {
        return <Card key={i} item={el} setVid={setVid} />;
      })}
    </div>
  );
}

export default MovieList;
