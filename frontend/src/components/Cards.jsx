import React, { useRef, useState, useEffect } from "react";
import styles from "./Cards.module.css";
import marker from "../assets/SVG/marker-hospital.svg";
import care from "../assets/SVG/care.svg";
import support from "../assets/SVG/support.svg";
import team from "../assets/SVG/team.svg";
import bed from "../assets/SVG/hospital-bed.svg";
import two47 from "../assets/SVG/247.png";
import clean from "../assets/SVG/ecology.svg";
import appointment from "../assets/SVG/appointment.svg";
import docGif from "../assets/SVG/doctors-office.gif";
import { FaBedPulse } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const boxRef = useRef();
  const textRef = useRef();

  const cardItem = [
    {
      id: 1,
      img: marker,
      title: "Modern dialysis equipment and technology",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      img: bed,
      title: "Private treatment rooms for increased comfort and privacy",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      img: team,
      title: "Expert team of nephrologists, nurses, and dialysis technicians",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      img: care,
      title: "Personalized treatment plans and care coordination",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      img: support,
      title: "Comprehensive patient education and support",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      id: 6,
      img: appointment,
      title: "Convenient scheduling and flexible appointment options",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      id: 7,
      img: clean,
      title: "Clean and welcoming environment",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      id: 8,
      img: two47,
      title: "24/7 emergency dialysis support and monitoring",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      {
        y: -50,
        rotate: -45,
      },
      {
        duration: 2,
        y: 0,
        rotation: 0,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 100%",
          // end: "bottom 200%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      textRef.current,
      { x: -200 },
      { x: 0, duration: 3, ease: "bounce.out",  }
    );
  }, []);

  // Function to handle the tilt effect
  const handleMouseMove = (e, cardRef) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation based on mouse position
    // The further from center, the more tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 10; // Max 10 degrees rotation
    const rotateX = ((centerY - y) / centerY) * 10; // Inverted for correct direction

    // Apply the transformation
    card.style.setProperty("--rotateX", `${rotateX}deg`);
    card.style.setProperty("--rotateY", `${rotateY}deg`);
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);

    // Add the tilt effect class
    card.classList.add(styles["tilt-effect"]);
  };

  // Function to reset the tilt effect
  const handleMouseLeave = (cardRef) => {
    if (!cardRef.current) return;

    const card = cardRef.current;

    // Reset the transformation
    card.style.setProperty("--rotateX", "0deg");
    card.style.setProperty("--rotateY", "0deg");

    // Remove the tilt effect class
    card.classList.remove(styles["tilt-effect"]);
  };

  // Create refs for each card
  const cardRefs = useRef(cardItem.map(() => React.createRef()));

  return (
    <div className="w-full h-full">
      <div className="px-10 md:px-20 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {cardItem.map((item, idx) => (
          <div
            key={idx}
            ref={cardRefs.current[idx]}
            className={`inset-shadow-sm shadow-xl/20 rounded-2xl p-5 flex flex-col gap-5 relative overflow-hidden group ${styles["tilt-card"]}`}
            onMouseMove={(e) => handleMouseMove(e, cardRefs.current[idx])}
            onMouseLeave={() => handleMouseLeave(cardRefs.current[idx])}
          >
            <div className={styles["tilt-content"]}>
              <img
                src={item.img}
                alt="Hospital Marker"
                className="w-8 h-8 mx-auto transition-transform  hover:scale-125 duration-200"
              />
              <h4 className="text-center italic">{item.title}</h4>
            </div>
            <div className="w-full h-full absolute bg-[var(--primary-bg)] translate-y-full group-hover:translate-y-0 top-0 right-0 transition-transform duration-400 ease-in-out"></div>
          </div>
        ))}
      </div>
      <div className="w-full h-auto  flex flex-col items-center justify-center py-10 px-10 md:px-20 gap-5 bg-[var(--primary-bg)] text-center text-white">
        <h1 className="flex gap-5 items-center">
          <label htmlFor="" ref={textRef}>
            {" "}
            We Are Here for You 24/7
          </label>
          <img
            src={docGif}
            alt=""
            ref={boxRef}
            className="w-16 h-16 rounded-2xl "
          />
        </h1>
        <h4 className="max-w-4xl ">
          At Universal Dialysis Center, our mission is to provide compassionate,
          high-quality dialysis care to improve the lives of individuals with
          kidney disease. Our dedicated team of nephrologists, nurses, and
          technicians ensures personalized treatment, comfort, and support every
          step of the way.
        </h4>
        <button className="border-white border-2 hover:scale-110 duration-500 transition-scale hover:bg-white hover:text-[var(--primary-bg)]">
          Make an Appointment
        </button>
      </div>
    </div>
  );
};

export default Cards;
