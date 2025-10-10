import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import carousel1 from "../assets/hero-carousel-1.jpg";
import carousel2 from "../assets/hero-carousel-2.jpg";
import carousel3 from "../assets/hero-carousel-3.jpg";
import styles from "./Carousel.module.css";
import Typed from "typed.js";

const Carousel = () => {
  const images = [carousel1, carousel2, carousel3];
  const [openMission, setOpenMission] = useState(false)
  const [index, setIndex] = useState(0);
  const timerRef = useRef();
  const e1 = useRef(null);

  useEffect(() => {
    const typed = new Typed(e1.current, {
      strings: [
        "Welcome to Universal Dialysis Center",
        "A Project of Sai Renal Healthcare LLP",
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const startTimer = () => {
    clearInterval(timerRef.current); //clear old timer
    timerRef.current = setInterval(() => {
      handleNextCarousel();
    }, 5000);
  };
  useEffect(() => {
    startTimer(); //start when component mounts
    return () => clearInterval(timerRef.current); //cleanup on unmount
  }, []);

  const handleNextCarousel = () => {
    setIndex((prev) => (prev + 1) % images.length);
    startTimer();
  };
  const handlePrevCarousel = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    startTimer();
  };

  return (
    <div
      className={`w-full h-[70vh] bg-cover bg-center flex ${styles["animate-fadeIn"]}`}
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      <div className="w-1/10 h-auto flex items-center justify-center opacity-20 hover:opacity-100">
        <span className="w-[50px] h-[50px] bg-[var(--primary-bg)]  rounded-full flex items-center justify-center  cursor-pointer">
          <MdKeyboardArrowLeft
            onClick={handlePrevCarousel}
            className="text-4xl text-white"
          />
        </span>
      </div>
      <div className="w-8/10 h-auto flex  flex-col items-center justify-end gap-2">
        <div
          className={`w-full h-auto bg-white flex flex-col p-3 md:p-6 gap-5 items-center justify-center border-t-4 border-[var(--primary-bg)]`}
        >
          <h1 className="text-center" >
            <span ref={e1}></span>
          </h1>
          <h4 className="px-8 text-center leading-5">
           "Providing compassionate, high-quality dialysis care to enhance the
            lives of individuals with kidney disease."
          </h4>
        { openMission && <p className="px-8 text-justify md:text-center leading-5   italic">
            Universal Dialysis Center is a state-of-the-art facility dedicated
            to delivering exceptional dialysis services to patients with
            end-stage renal disease (ESRD). Our center prioritizes
            patient-centered care, comfort, and convenience.
          </p>}
          <button onClick={()=>{setOpenMission((prev)=>(!prev))}}>{openMission ? "Read Less" : "Read More"}</button>
        </div>
        <div className="p-2 flex gap-3">
          <span
            onClick={() => {
              setIndex(0);
            }}
            style={{ background: index === 0 ? "var(--primary-bg)" : "white" }}
            className="w-[10px] h-[10px] rounded-full bg-white cursor-pointer"
          ></span>
          <span
            onClick={() => {
              setIndex(1);
            }}
            style={{ background: index === 1 ? "var(--primary-bg)" : "white" }}
            className="w-[10px] h-[10px] rounded-full bg-white cursor-pointer"
          ></span>
          <span
            onClick={() => {
              setIndex(2);
            }}
            style={{ background: index === 2 ? "var(--primary-bg)" : "white" }}
            className="w-[10px] h-[10px] rounded-full bg-white cursor-pointer"
          ></span>
        </div>
      </div>
      <div className="w-1/10 h-auto flex items-center justify-center opacity-20 hover:opacity-100">
        <span className="w-[50px] h-[50px] bg-[var(--primary-bg)]  rounded-full flex items-center justify-center   cursor-pointer">
          <MdKeyboardArrowRight
            onClick={handleNextCarousel}
            className="text-4xl text-white"
          />
        </span>
      </div>
    </div>
  );
};

export default Carousel;
