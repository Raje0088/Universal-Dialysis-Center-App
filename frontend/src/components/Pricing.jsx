import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Pricing.module.css";
import image from "../assets/Doctor/doctors-1.jpg";
import { TbAssemblyFilled } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const highlightsRef = useRef([]);
  const titleRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Expanded doctor items to simulate 40 cards
  const doctorItems = [
    {
      id: 0,
      img: image,
      name: "Dr. Raj Kashiram Chincholkar",
      profession: "Nephrologist",
      price: "connect",
      description:
        "Specialized in kidney disease management with over 10 years of experience in dialysis treatment.",
    },
    {
      id: 1,
      img: image,
      name: "Dr. Shikha Ashok Ghete",
      profession: "Dialysis Specialist",
         price: "connect",
      description:
        "Expert in hemodialysis and peritoneal dialysis procedures with advanced certification in renal care.",
    },
    {
      id: 2,
      img: image,
      name: "Dr. Raj Kashiram Chincholkar",
      profession: "Renal Nutritionist",
          price: "connect",
      description:
        "Specialized in dietary management for kidney patients with focus on balanced nutrition for dialysis patients.",
    },
    {
      id: 3,
      img: image,
      name: "Dr. Raj Kashiram Chincholkar",
      profession: "Nephrology Surgeon",
         price: "connect",
      description:
        "Experienced in vascular access creation and maintenance for dialysis patients with minimally invasive techniques.",
    },
    {
      id: 4,
      img: image,
      name: "Dr. Raj Kashiram Chincholkar",
      profession: "Pediatric Nephrologist",
          price: "connect",
      description:
        "Specialized in treating kidney diseases in children with a compassionate approach to pediatric renal care.",
    },
    {
      id: 5,
      img: image,
      name: "Dr. Raj Kashiram Chincholkar",
      profession: "Transplant Specialist",
         price: "connect",
      description:
        "Expert in kidney transplantation procedures with extensive experience in pre and post-transplant care.",
    },
    {
      id: 6,
      img: image,
      name: "Dr. Raj Kashiram Chincholkar",
      profession: "Renal Pathologist",
          price: "connect",
      description:
        "Specialized in diagnosing kidney diseases through tissue analysis and microscopic examination.",
    },
    {
      id: 7,
      img: image,
      name: "Dr. Raj Kashiram Chincholkar",
      profession: "Hypertension Specialist",
          price: "connect",
      description:
        "Expert in managing hypertension related to kidney disease with focus on blood pressure control strategies.",
    },
    // Additional doctors to simulate 40 cards (repeating with different IDs)
    // You can add more unique doctors as needed
  ];

  // Generate 40 doctors by repeating the existing ones with new IDs
  const allDoctors = Array(5)
    .fill()
    .flatMap((_, i) =>
      doctorItems.map((doctor, index) => ({
        ...doctor,
        id: i * doctorItems.length + index,
      }))
    );

  useEffect(() => {
    // Initialize empty arrays
    cardsRef.current = [];
    highlightsRef.current = [];

    const ctx = gsap.context(() => {
      // Title animation with 3D effect
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          rotationX: 90,
          transformOrigin: "center top",
        },
        {
          opacity: 1,
          rotationX: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Staggered fade-up animation for text elements
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".fade-up:not(.highlight-item)"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Highlight items animation
      highlightsRef.current.forEach((highlight, index) => {
        if (highlight) {
          gsap.fromTo(
            highlight,
            {
              opacity: 0,
              scale: 0.8,
              rotation: -5 + Math.random() * 10,
            },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.8,
              delay: 0.1 * index,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: highlight,
                start: "top bottom-=50",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Handle card hover effects
  const handleCardHover = (index) => {
    setHoveredCard(index);

    if (cardsRef.current[index]) {
      // Create hover animation for the card
      gsap.to(cardsRef.current[index], {
        scale: 1.05,
        boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)",
        y: -10,
        rotationY: 5,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  // Handle card hover out
  const handleCardLeave = () => {
    setHoveredCard(null);

    // Reset all cards
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.to(card, {
          scale: 1,
          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    });
  };

  // Handle slide change
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div
      ref={sectionRef}
      className="w-full h-auto flex flex-col items-center justify-center gap-5 px-10 md:px-20 py-5 "
    >
      <h2 className=" tracking-wider  underline-center">Our Team</h2>

      {/* Description Section */}
      <h4 className="text-justify md:text-center text-gray-600  fade-up">
        Our panel of expert nephrologists at{" "}
        <span className="font-semibold">Universal Dialysis Center</span> brings
        together a wealth of knowledge, expertise, and experience in:
      </h4>

      {/* Highlight Points */}
      <ul className="w-full list-disc text-gray-700 fade-up text-left max-w-4xl  space-y-2 pl-6 px-4">
        <li>Managing end-stage renal disease (ESRD)</li>
        <li>Dialysis modalities (hemodialysis, peritoneal dialysis)</li>
        <li>Kidney transplantation</li>
        <li>Hypertension and diabetes management</li>
        <li>Nutrition and lifestyle counseling</li>
      </ul>

      {/* Key Highlights */}
      <div className="mt-6 sm:mt-8 fade-up w-full px-4">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-center">
          Key Highlights:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 text-gray-700">
          {[
            "Certified nephrologists",
            "Extensive experience in dialysis care",
            "Expertise in kidney disease management",
            "Compassionate and personalized approach",
            "Commitment to latest medical advancements",
          ].map((highlight, idx) => (
            <div
              key={idx}
              ref={(el) => (highlightsRef.current[idx] = el)}
              className="bg-white p-3 sm:p-4 md:p-5 shadow-lg rounded-2xl text-center hover:shadow-2xl transition-all duration-500 highlight-item"
            >
              {highlight}
            </div>
          ))}
        </div>
      </div>

      {/* Doctor Cards Section with Swiper */}
      <div className="w-full mt-6 sm:mt-8 md:mt-10 px-2">
        <div className={`${styles.swiperContainer}`}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            onSlideChange={handleSlideChange}
            className={styles.mySwiper}
          >
            {allDoctors.map((item, idx) => (
              <SwiperSlide key={item.id} className={styles.swiperSlide}>
                <div
                  ref={(el) => (cardsRef.current[idx] = el)}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 h-full ${
                    styles.card
                  } ${hoveredCard === idx ? styles.cardActive : ""}`}
                  onMouseEnter={() => handleCardHover(idx)}
                  onMouseLeave={handleCardLeave}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="text-center p-3 sm:p-4 bg-[var(--primary-bg)] text-white font-semibold relative overflow-hidden">
                    <div className={styles.imageWrapper}>
                      <img
                        src={item.img}
                        alt={item.profession}
                        className={styles.doctorImage}
                      />
                      <div className={styles.imageOverlay}></div>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 md:p-6 flex flex-col items-start height justify-center gap-2 sm:gap-3 text-center">
                    <h4 className="font-bold text-base mx-auto  md:text-/5">
                      {item.name}
                    </h4>
                    <h4 className="font-bold text-base  mx-auto md:text-sm/5 flex items-center justify-center gap-2">
                      <span className={styles["icon-wrapper"]}>
                        <span className={styles["gradient-ring"]}></span>
                        <TbAssemblyFilled
                          className={styles["icon-inner"]}
                          size={20}
                        />
                      </span>
                      {/* <TbAssemblyFilled className={`text-[20px] text-[var(--primary-bg)] ${styles["animate-slow-spin"]} ${styles["gradient-rotate"]}`} /> */}
                      {item.profession}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base text-justify">
                      {item.description}
                    </p>
                    <div
                      className={`w-full flex items-center justify-center ${styles.priceTag} mt-2`}
                    >
                      <span>{item.price}</span>
                    </div>
                  </div>
                  {/* <div className="text-center p-3 sm:p-4 bg-gray-100">
                    <button className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-[var(--primary-bg)] text-white rounded-full hover:bg-[#087e8b] transition ${styles.pulseButton}`}>
                      Know More
                    </button>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Swiper pagination indicator */}
        {/* <div className="text-center mt-4 text-gray-500">
          <span className="font-medium">Doctor {activeIndex + 1}</span> of{" "}
          <span className="font-medium">{allDoctors.length}</span>
        </div> */}
      </div>
    </div>
  );
};

export default Pricing;
