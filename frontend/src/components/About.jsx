import React, { useEffect, useRef } from "react";
import awardvideo from "../assets/Data/award-video.mp4";
import data1 from "../assets/Data/data1.jpeg";
import data2 from "../assets/Data/data2.jpeg";
import data3 from "../assets/Data/data3.jpeg";
import trophy from "../assets/Data/trophy.jpeg";
import w1 from "../assets/Data/w1.png";
import w2 from "../assets/Data/w2.png";
import w3 from "../assets/Data/w3.png";
import w4 from "../assets/Data/w4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };
  const cardItem = [
    {
      id: 1,
      img: 1,
      title: "Lorem1",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      img: 1,
      title: "Lorem2",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      img: 1,
      title: "Lorem3",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      img: 1,
      title: "Lorem4",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
  ];
  const containerRef = useRef(null);

  return (
    <div className="w-full h-full py-10 px-10 md:px-20 flex flex-col items-center justify-center gap-2">
      <div className="w-full h-full py-10 flex flex-col  items-center justify-center gap-5  ">
        <h2 className="tracking-widest  underline-center ">About Us</h2>
        <h4 className="text-justify  mx-auto">
          At Universal Dialysis Center, we are committed to providing
          high-quality, patient-centered dialysis care that enhances the lives
          of individuals with kidney disease. Our goal is to combine comfort,
          safety, and advanced technology with compassionate care, ensuring
          every patient feels supported throughout their treatment journey.
        </h4>
        <div className="w-full h-auto flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2 h-auto ">
            <Slider {...settings}>
              {[w1, w3, w4, w2].map((item) => (
                <div className="w-full h-48 md:h-88  ">
                  <img
                    src={item}
                    alt=""
                    className="w-full h-full object-cover object-center p-2"
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="w-full md:w-1/2 h-auto">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>State-of-the-art dialysis equipment and technology</li>
              <li>Private treatment rooms for comfort and privacy </li>
              <li>
                Expert team of nephrologists, nurses, and dialysis technicians{" "}
              </li>
              <li>Personalized treatment plans tailored to each patient </li>
              <li>Comprehensive patient education and guidance </li>
              <li>Flexible scheduling and appointment options</li>
              <li>Clean, welcoming, and safe environment</li>
              <li>24/7 availability for emergencies and support</li>
            </ul>
            <h4>Compassionate care, advanced technology, better lives.</h4>
          </div>
        </div>
        <div>
          <h4 className="text-center ">
            We strive to create a friendly, professional, and supportive
            environment, where patients and their families feel confident in the
            care they receive.
          </h4>
        </div>
      </div>

      <div className="relative w-full h-[60vh] md:h-screen rounded-lg overflow-hidden">
        <video
          src={awardvideo}
          autoPlay
          muted
          loop
          controls
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col pb-4 items-center justify-end text-white text-center px-4">
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold">
            Our Awards & Achievements
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg max-w-2xl">
            Excellence in dialysis care and patient support, recognized
            globally.
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 py-10">
        {[data1, data2, data3, trophy].map((item, i) => (
          <div
            key={i}
            className={`w-full ${
              i === 3 ? "h-40 sm:h-48" : "h-auto"
            } image-card`}
          >
            <img
              src={item}
              alt=""
              className="w-full h-full object-cover rounded-lg duration-300 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
