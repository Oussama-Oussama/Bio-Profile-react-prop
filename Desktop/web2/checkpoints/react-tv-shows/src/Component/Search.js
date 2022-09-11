import React from "react";
import { useRef } from "react";

function Search({ setData, items }) {
  const movie = useRef(null)
  const filtering = () => {
    setData(
      items.filter((item) => item.title.toLowerCase().includes(movie.current.value.toLowerCase()))
    );
  };
  return (
    <div
      style={{
        width: "70%",
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        name="search"
        ref={movie}
        placeholder="Movie name"
        onChange={filtering}
        style={{
          width: "calc(100% - 100px)",
          height: 40,
          border: "none",
          borderRadius: "5px 0 0 5px",
          outline: "none",
          padding: "0 25px",
          fontSize: "19px",
        }}
      />
      <button
        style={{
          width: 100,
          height: 40,
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "0 5px 5px 0",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
