import "./App.css";
import Search from "./Component/Search";
import MovieList from "./Component/MovieList"
// import Play from "./Component/Play"
import { useState } from "react";


function App() {
  const items = [
    {
      title: "Wlad L7lal Episode 1",
      time: "25:21 min",
      imgSrc: "/Images/images.jfif",
      iframeSrc: "https://www.youtube.com/embed/CvgrhB6WA3M",
    },
    {
      title: "Wlad L7lal Episode 2",
      time: "25:21 min",
      imgSrc: "/Images/images.jfif",
      iframeSrc: "https://www.youtube.com/embed/5tjt7SJ_X-A",
    },
    {
      title: "Wlad L7lal Episode 3",
      time: "25:21 min",
      imgSrc: "/Images/images.jfif",
      iframeSrc: "https://youtu.be/-SoTRk8-EV0",
    },
    {
      title: "Wlad L7lal Episode 4",
      time: "25:21 min",
      imgSrc: "/Images/images.jfif",
      iframeSrc: "https://youtu.be/aXoXLqxjD38",
    },
    {
      title: "Curulus Osman Episode 1",
      time: "25:21 min",
      imgSrc: "/Images/osman.png",
      iframeSrc: "https://youtu.be/-7WKCPMFjhg",
    },
    {
      title: "Curulus Osman Episode 2",
      time: "25:21 min",
      imgSrc: "/Images/osman.png",
      iframeSrc: "https://youtu.be/fNxsrl_lWQw",
    },
    {
      title: "Curulus Osman Episode 3",
      time: "25:21 min",
      imgSrc: "/Images/osman.png",
      iframeSrc: "https://youtu.be/DEE5bJobB6E",
    },
    {
      title: "Curulus Osman Episode 4",
      time: "25:21 min",
      imgSrc: "/Images/osman.png",
      iframeSrc: "https://youtu.be/mCCPLl3HZLM",
    },

    
    
  ];
  const [data, setData] = useState([]);
  // const [video, setVideo] = useState([])
  // useEffect(() => {
  //   setData(items)
  // })
  return (
    <div className="App">
      <nav>
        <Search items={items}  setData={setData}  />
      </nav>
      <MovieList data={data} />
      {/* <Play /> */}
    </div>
  );
}

export default App;


{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/CvgrhB6WA3M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/5tjt7SJ_X-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}