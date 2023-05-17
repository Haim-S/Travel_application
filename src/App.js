

import React from "react";
import Navbar from "./components/navbar/Navbar";
import VideoBG from "./components/video/VideoBG";
import Destinations from "./components/destination/Destinations";
import Search from "./components/search/Search";
import Selects from "./components/selects/Selects";


function App() {
  return (
    <div>
     <Navbar/>
     <VideoBG/>
     <Destinations/>
     <Search/>
     <Selects/>
    </div>
  );
}

export default App;
