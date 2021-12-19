import React from "react";

//components
import Header from "./components/Header";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Comment from "./components/Comment";
import Accardion from "./components/Accardion";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Services />
      <Comment />
      <Accardion />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
