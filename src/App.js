

import React from "react";
import Navbar from "./components/navbar/Navbar";
import VideoBG from "./components/video/VideoBG";
import Destinations from "./components/destination/Destinations";
import Search from "./components/search/Search";
import Selects from "./components/selects/Selects";
import Carousel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div>
     <Navbar/>
     <VideoBG/>
     <Destinations/>
     <Search/>
     <Selects/>
     <Carousel/>
     <Footer/>
    </div>
  );
}

export default App;
