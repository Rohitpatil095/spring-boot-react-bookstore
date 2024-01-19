import React from "react";
import "./App.css";
import { ExploreTopBooks } from "./components/HomePage/ExploreTopBooks";
import { Navbar } from "./components/navbar/header";

function App() {
  return (
    <>
      <Navbar />
      <ExploreTopBooks/>
    </>
  );
}

export default App;
