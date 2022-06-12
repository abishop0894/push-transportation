import React from "react";

import Navigation from "./Navigation";

import "bootstrap/dist/css/bootstrap.min.css";
import HeaderChild from "./HeaderChild";
import ItemCarousel from "./Carousel";
import LeftRight from "./LeftRight";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";

const Push = () => {
  return (
    <div>
      <Navigation></Navigation>
      <HeaderChild></HeaderChild>
      <ItemCarousel></ItemCarousel>
      <LeftRight></LeftRight>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Push;
