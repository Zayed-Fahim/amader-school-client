import React from "react";
import Carousel from "../Carousel/Carousel";
import About from "../Components/About";
import Features from "../Components/Features";
import SchoolList from "../Components/ServiceTakerList";
import ServicePrice from "../Components/ServicePrice";
import Counter from "../Components/Counter";
import Contact from "../Components/Contact";
import Map from "../Components/Map";

const Home = () => {
  return (
    <div id="home">
      {/* Home Carousel */}
      <Carousel />
      {/* Home Banner */}
      {/* <HomeBanner /> */}
      {/* about */}
      <About />
      {/* features */}
      <Features />
      {/* School list */}
      <SchoolList />
      {/* Pricing */}
      <ServicePrice />
      {/* counter of users */}
      <Counter />
      {/* contact */}
      <Contact />
      {/* Google Map */}
      <Map />
    </div>
  );
};

export default Home;
