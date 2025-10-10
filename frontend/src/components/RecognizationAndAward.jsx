import React from 'react'
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


const RecognizationAndAward = () => {
  return (
    <div className="w-full h-full py-10 px-10 md:px-20 flex flex-col items-center justify-center gap-2">
      <div className="w-full h-full  flex flex-col pb-10  items-center justify-center gap-5  ">
        <h2 className="tracking-widest  underline-center ">
          Recognizition & Press Release
        </h2>
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
            globally
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
  )
}

export default RecognizationAndAward
