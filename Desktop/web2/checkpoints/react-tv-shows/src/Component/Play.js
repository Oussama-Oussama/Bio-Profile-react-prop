import React from "react";

function Play({video}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {video.map(el => {
        return(
          <iframe
          width="70%"
          height="70%"
          src={el.iframeSrc}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
  
        )
      })}
    </div>
  );
}

export default Play;
