import "./App.css";
import Search from "./Component/Search";
import MovieList from "./Component/MovieList"
import Play from "./Component/Play"
import { useState } from "react";
import {Routes, Route} from "react-router-dom"

function App() {
  const items = [
    {
      title: "Wlad L7lal Episode 1",
      time: "25:21 min",
      imgSrc: "/Images/images.jfif",
      iframeSrc: "https://www.youtube.com/embed/CvgrhB6WA3M",
      dscr:`أولاد الحلال - Official Trailer
      ⚠ اكتشفوا الومضة الرسمية للمسلسل الدرامي الجديد أولاد الحلال - Wlad Hlal!
      Echorouk + كونوا في الموعد هذا الرمضان على قناة`,
    },
    {
      title: "Wlad L7lal Episode 2",
      time: "25:21 min",
      imgSrc: "/Images/images.jfif",
      iframeSrc: "https://www.youtube.com/embed/5tjt7SJ_X-A",
      dscr:`أولاد الحلال ، حصريا على قناة الشروق`,
    },
    {
      title: "Wlad L7lal Episode 3",
      time: "25:21 min",
      imgSrc: "/Images/images.jfif",
      iframeSrc: "https://www.youtube.com/embed/-SoTRk8-EV0",
      dscr:`اقوي مشاهد مسلسل ولاد الحلال Best of Wlad Hlal - 2 -`,
    },
    {
      title: "Wlad L7lal Episode 4",
      time: "25:21 min",
      imgSrc: "/Images/images.jfif",
      iframeSrc: "https://www.youtube.com/embed/aXoXLqxjD38",
      dscr:`أفضل لقاطت لمسلسل أولاد الحلال 😍😍`,

    },
    {
      title: "Curulus Osman Episode 1",
      time: "25:21 min",
      imgSrc: "/Images/osman.png",
      iframeSrc: "https://www.youtube.com/embed/-7WKCPMFjhg",
      dscr:`اصبحت وحيدًا يا سيد عثمان تصميم حزين عن فراق عثمان لجميع عائلته 😢💔 || جودة رهيبه FHD`,
    },
    {
      title: "Curulus Osman Episode 2",
      time: "25:21 min",
      imgSrc: "/Images/osman.png",
      iframeSrc: "https://www.youtube.com/embed/fNxsrl_lWQw",
      dscr:`موت سالجان هذا المشهد فعلاً من احزن المشاهد حزن عثمان وبكاء افراد القبيلة على موت سالجان (مترجم)`,
    },
    {
      title: "Curulus Osman Episode 3",
      time: "25:21 min",
      imgSrc: "/Images/osman.png",
      iframeSrc: "https://www.youtube.com/embed/DEE5bJobB6E",
      dscr:`وقفة السيد عثمان بجانب الفقراء والمحتاجين!`
    },
    {
      title: "Curulus Osman Episode 4",
      time: "25:21 min",
      imgSrc: "/Images/osman.png",
      iframeSrc: "https://www.youtube.com/embed/mCCPLl3HZLM",
      dscr:`موت أيغول وحزن وبكاء جيركوتاي (مترجم) جودة رهيبة 1080 FHD موت ايجول موت أيغول`,
    },

    
    
  ];
  const [data, setData] = useState([]);
  const [vid, setVid] = useState({
    src:"",
    dscr:"",
  })
  return (
    <div className="App">

      <nav>
        <Search items={items}  setData={setData}  />
      </nav>
      <Routes>
        <Route path="/" element={<MovieList data={data} setVid={setVid}/>}/>
        <Route index element={<MovieList data={data} setVid={setVid}/>}/>
        <Route path="/Play" element={<Play vid={vid}/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;


