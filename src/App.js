

import React from "react";
import Navbar from "./components/navbar/Navbar";
import VideoBG from "./components/video/VideoBG";
import Destinations from "./components/destination/Destinations";
import Search from "./components/search/Search";


function App() {
  return (
    <div>
     <Navbar/>
     <VideoBG/>
     <Destinations/>
     <Search/>
    </div>
  );
}

export default App;
