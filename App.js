import React from "react";

//components
import Header from "./components/Header";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Comment from "./components/Comment";

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Services />
      <Comment />
    </div>
  );
};

export default App;
