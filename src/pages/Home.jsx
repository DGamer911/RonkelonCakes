import React from "react";
import NavBar from "../components/NavBar";
import "../index.css";
import Hero from "../components/Hero";
import Section2 from "../components/Section2";

function Home() {
  return (
<>
<NavBar/>
    <div className="w-full overflow-x-hidden m-0">
      <Hero />
      <Section2/>
    </div>
</>
  );
}

export default Home;
