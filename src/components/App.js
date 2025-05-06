import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      {/* add the <Home> component here */}
      {/* add your <About> component here */}
    </div>
  );
}

export default App;
