import React, { useState, useEffect, useRef } from "react";
import styles from "./Testimonials.module.css";
import { FaChevronLeft, FaChevronRight, FaUser } from "react-icons/fa";
import doc from "../assets/Doctor/doctors-1.jpg";
const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const testimonialRefs = useRef([]);

  const testimonialItems = [
    {
      id: 0,
      img: doc,
      name: "Raj Kumar",
      profession: "Patient",
      description:
        "The care I received at Universal Dialysis was exceptional. The staff was attentive and made me feel comfortable during every session.",
    },
    {
      id: 1,
      img: doc,
      name: "Rajesh Patel",
      profession: "Family Member",
      description:
        "My father has been receiving treatment here for over a year. The facility is clean, modern, and the medical team is highly professional.",
    },
    {
      id: 2,
      img: doc,
      name: "Kunal Singh",
      profession: "Patient",
      description:
        "Universal Dialysis has made a difficult process much easier to manage. Their flexible scheduling and caring approach has been a blessing.",
    },
    {
      id: 3,
      img: doc,
      name: "Rutuj Mehta",
      profession: "Healthcare Professional",
      description:
        "As a referring physician, I'm impressed with the quality of care my patients receive at Universal Dialysis. Their communication is excellent.",
    },
    {
      id: 4,
      img: doc,
      name: "Om Sharma",
      profession: "Patient",
      description:
        "The team at Universal Dialysis treats you like family. They remember your name and preferences, making each visit as pleasant as possible.",
    },
  ];

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e, index) => {
    if (!testimonialRefs.current[index]) return;

    const card = testimonialRefs.current[index];
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (index) => {
    if (!testimonialRefs.current[index]) return;
    const card = testimonialRefs.current[index];
    card.style.transform = "rotateX(0) rotateY(0)";
  };

  useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % testimonialItems.length);
      }, 4000);
    }

    return () => clearInterval(timer);
  }, [isPaused, testimonialItems.length]);

  // Manual controls
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonialItems.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonialItems.length - 1 : prev - 1));
  };

  const handleDotClick = (dotIndex) => {
    setIndex(dotIndex);
  };
  // 🔻 Added for responsive card scrolling
  const getVisibleCards = () => {
    if (window.innerWidth <= 768) return 1; // mobile
    if (window.innerWidth <= 1024) return 2; // tablet
    return 3; // desktop
  };

  return (
    <div className="w-full h-auto flex flex-col gap-5 items-center justify-center px-10 md:px-20 py-10">
      <h2 className=" tracking-widest  underline-center">Testimonials</h2>

      <div className={styles["testimonials-container"]}>
        <div
          ref={carouselRef}
          className={styles["testimonials-track"]}
          style={{
            transform: `translateX(-${index * (100 / getVisibleCards())}%)`,
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {testimonialItems.map((item, idx) => (
            <div key={item.id} className={styles["testimonial-item"]}>
              <div
                className={styles["testimonial-card"]}
                ref={(el) => (testimonialRefs.current[idx] = el)}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
              >
                <div className={styles["testimonial-content"]}>
                  <p className={styles["testimonial-description"]}>
                    "{item.description}"
                  </p>
                  <div className={styles["testimonial-author"]}>
                    <div className={styles["author-image"]}>
                      {item.img === "ds" ? (
                        <FaUser size={40} />
                      ) : (
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover object-center"
                        />
                      )}
                    </div>
                    <div className={styles["author-info"]}>
                      <p className={styles["author-name"]}>{item.name}</p>
                      <p className={styles["author-profession"]}>
                        {item.profession}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles["controls"]}>
          <button className={styles["control-button"]} onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <button className={styles["control-button"]} onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>

        <div className={styles["dots-container"]}>
          {testimonialItems.map((_, idx) => (
            <div
              key={idx}
              className={`${styles.dot} ${idx === index ? styles.active : ""}`}
              onClick={() => handleDotClick(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
