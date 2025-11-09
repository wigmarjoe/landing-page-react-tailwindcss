import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="px-4 md:px-16 lg:px-32">
      
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
