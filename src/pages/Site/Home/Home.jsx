import React from "react";
import HomeSection from "../../../components/Home/HomeSection/HomeSection";
import About from "../../../components/Home/About/About";
import Service from "../../../components/Home/Service/Service";
import Roadmap from "../../../components/Home/Roadmap/Roadmap";
import Team from "../../../components/Home/Team/Team";
import Contact from "../../../components/Home/Contact/Contact";

const Home = () => {
  return (
    <>
      <HomeSection />
      <About />
      <Service />
      <Roadmap />
      <Team />
      <Contact />
    </>
  );
};

export default Home;
