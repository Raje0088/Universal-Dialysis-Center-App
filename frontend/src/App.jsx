import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import About from "./components/About";
import Services from "./components/Services";
import MakeAppointment from "./components/MakeAppointment";
import Department from "./components/Department";
import Testimonials from "./components/Testimonials";
import Doctors from "./components/Doctors";
import Pricing from "./components/Pricing";
import QNA from "./components/QNA";
import Contact from "./components/Contact";
import I2s2Footer from "./components/i2s2Footer";
import Gallery from "./components/Gallery";
import Map from "./components/Map";
import WhatsApp from "./components/WhatsApp";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <>
      <div id="home">
        <Header />
      </div>
      <div id="home">
        <Carousel />
      </div>
      <Cards />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="team">
        <Doctors />
      </div>
      <MakeAppointment />
      <Department />
      <Testimonials />
      <Gallery />
      <div id="centers">
        <Map />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Pricing />
      <QNA />
      <I2s2Footer />
      <WhatsApp />
      <Chatbot />
    </>
  );
}

export default App;
