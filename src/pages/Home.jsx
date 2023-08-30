import React from "react";
import Hero from "../components/home/Hero";
import Clients from "../components/home/Clients";
import Features from "../components/home/Features";
import Benefits from "../components/home/Benefits";

const Home = () => {
  return (
    <div>
      <Hero />
      <Clients />
      <Features />
      <Benefits />
    </div>
  );
};

export default Home;
