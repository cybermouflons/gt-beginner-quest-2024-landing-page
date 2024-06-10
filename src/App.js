import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Ctf from "./components/Ctf";
import Steps from "./components/Steps";
import Story from "./components/Story";
import Footer from "./components/Footer";
import TwoImageStrip from "./components/TwoImageStrip";


function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Ctf />
      <Story />
      <Steps />
      <TwoImageStrip/>
      <Footer />
    </div>
  );
}

export default App;

