import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import doc1 from "../assets/Doctor/doctors-1.jpg";
import doc2 from "../assets/Doctor/doctors-2.jpg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const doctorItems = [
  { id: 0, img: doc1, name: "Raj", profession: "Developer" },
  { id: 1, img: doc2, name: "Raje", profession: "Specialist" },
  { id: 2, img: doc1, name: "Kunal", profession: "Trainer" },
  { id: 3, img: doc2, name: "Rutuj", profession: "Developer" },
  { id: 4, img: doc1, name: "Shikha", profession: "Developer" },
  { id: 5, img: doc2, name: "Golu", profession: "Specialist" },
  { id: 6, img: doc1, name: "Molu", profession: "Trainer" },
  { id: 7, img: doc2, name: "Diresh", profession: "Developer" },
];

const Doctors = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  // 🔹 Detect screen size on load + resize
  const updateSlides = () => {
    const width = window.innerWidth;
    if (width < 480) setSlidesToShow(1);
    else if (width < 768) setSlidesToShow(2);
    else if (width < 1024) setSlidesToShow(3);
    else setSlidesToShow(4);
  };

  useEffect(() => {
    updateSlides(); // Run once on mount
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };

  return (
    <div className="w-full h-auto flex flex-col items-center px-5 md:px-20 py-12 bg-[#f7fcfc]">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-bg)] mb-2">
        Our Expert Doctors
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mb-8">
        Meet our team of professional and experienced specialists.
      </p>

      <div className="w-full">
        <Slider {...settings}>
          {doctorItems.map((item) => (
            <div key={item.id} className="px-3">
              <div className="bg-white rounded-2xl shadow-lg group overflow-hidden relative">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-64 object-cover rounded-xl transform group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-[-60px] flex gap-3 text-white transition-all duration-700 ease-in-out group-hover:bottom-4">
                    {[FaFacebook, FaInstagram, FaLinkedin, FaXTwitter].map(
                      (Icon, i) => (
                        <Icon
                          key={i}
                          className="bg-[var(--primary-bg)] p-2 rounded-full w-8 h-8 hover:bg-[#0f7c7c]"
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="text-center mt-4 px-2 pb-4">
                  <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
