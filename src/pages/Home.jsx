import React from "react";
import NavBar from "../components/NavBar";
import "../index.css";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="w-full m-0">
      <NavBar />
      <Hero />
    </div>
  );
}

export default Home;
