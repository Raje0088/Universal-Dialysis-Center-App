import React from "react";
import doc1 from "../assets/Doctor/doctors-1.jpg";
import doc2 from "../assets/Doctor/doctors-2.jpg";
import Slider from "react-slick";
import { FaFacebook, FaInstagram, FaLinkedin  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Doctors.module.css";

const Doctors = () => {
  const doctorItems = [
    {
      id: 0,
      img: doc1,
      name: "raj",
      profession: "developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi pariatur deserunt error consectetur fugit!",
    },
    {
      id: 1,
      img: doc2,
      name: "Raje",
      profession: "specialist",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi pariatur deserunt error consectetur fugit!",
    },
    {
      id: 2,
      img: doc1,
      name: "kunal",
      profession: "trainer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi pariatur deserunt error consectetur fugit!",
    },
    {
      id: 3,
      img: doc2,
      name: "rutuj",
      profession: "developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi pariatur deserunt error consectetur fugit!",
    },
    {
      id: 4,
      img: doc1,
      name: "Shikha",
      profession: "developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi pariatur deserunt error consectetur fugit!",
    },
    {
      id: 5,
      img: doc2,
      name: "Golu",
      profession: "specialist",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi pariatur deserunt error consectetur fugit!",
    },
    {
      id: 6,
      img: doc1,
      name: "Molu",
      profession: "trainer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi pariatur deserunt error consectetur fugit!",
    },
    {
      id: 7,
      img: doc2,
      name: "diresh",
      profession: "developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi pariatur deserunt error consectetur fugit!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <div className="w-full h-auto flex flex-col gap-5 items-center justify-center px-10 md:px-20 bg-[#f7fcfc] py-10">
      <h2 className="underline-center tracking-widest"> 
        Doctors
      </h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
      <div className="w-full h-auto">
        <Slider {...settings}>
          {doctorItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[var(--primary--bg)] p-4  shadow-2xl rounded-2xl group"
            >
              <div className="w-auto  h-auto group relative  overflow-hidden">
                <div className="w-full ">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-auto md:h-48 object-cover rounded-lg"
                  />
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 bottom-[-60px]  flex gap-2 text-[24px] transition-all duration-700 ease-in-out  group-hover:bottom-4">
                  <FaFacebook />
                  <FaInstagram />
                  <FaLinkedin />
                 <FaXTwitter />
                </div>
              </div>
              <div className="p-4">
                <h4>{item.name}</h4>
                <p>{item.profession}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
