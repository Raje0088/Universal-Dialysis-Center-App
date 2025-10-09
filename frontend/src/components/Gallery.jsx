import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const testimonialItems = [
    {
      id: 0,
      img: "ds",
      name: "raj",
      profession: "developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi pariatur deserunt error consectetur fugit!",
    },
    {
      id: 1,
      img: "ds",
      name: "raje",
      profession: "developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi pariatur deserunt error consectetur fugit!",
    },
    {
      id: 2,
      img: "ds",
      name: "kunal",
      profession: "developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi pariatur deserunt error consectetur fugit!",
    },
    {
      id: 3,
      img: "ds",
      name: "rutuj",
      profession: "developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi pariatur deserunt error consectetur fugit!",
    },
    {
      id: 4,
      img: "ds",
      name: "om",
      profession: "developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi pariatur deserunt error consectetur fugit!",
    },
  ];

  return (
    <div className="w-full h-auto flex flex-col gap-5 m-5 items-center justify-center px-20">
      {/* <h2 className="underline underline-offset-8 decoration-[var(--primary-bg)]">
        Gallery
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        modi pariatur deserunt error consectetur fugit!
      </p> */}
    </div>
  );
};

export default Gallery;
