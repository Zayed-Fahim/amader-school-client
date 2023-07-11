import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import About from "../Components/About";
import Features from "../Components/Features";
import SchoolList from "../Components/ServiceTakerList";
import ServicePrice from "../Components/ServicePrice";
import Counter from "../Components/Counter";
import Contact from "../Components/Contact";
import Map from "../Components/Map";

const Home = () => {
  const [clientList, setClientList] = useState([]);
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
      <SchoolList setClientList={setClientList} />
      {/* Pricing */}
      <ServicePrice />
      {/* counter of users */}
      <Counter clientList={clientList} />
      {/* contact */}
      <Contact />
      {/* Google Map */}
      <Map />
    </div>
  );
};

export default Home;
