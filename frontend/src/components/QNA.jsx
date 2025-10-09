import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const QNA = () => {
  const [index, setIndex] = useState(null);
  const qna = [
    {
      id: 0,
      que: "Non consectetur a erat nam at lectus urna duis?",
      ans: "Feugiat pretium nibh ipsum consequat.",
    },
    {
      id: 1,
      que: "Feugiat scelerisque varius morbi enim nunc faucibus?",
      ans: "Feugiat pretium nibh ipsum consequat.",
    },
    {
      id: 2,
      que: "Dolor sit amet consectetur adipiscing elit pellentesque?",
      ans: "Feugiat pretium nibh ipsum consequat. c odio tempor orci dapibus. Aliquam eleifend mi in null c odio tempor orci dapibus. Aliquam eleifend mi in null c odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in null",
    },
    {
      id: 3,
      que: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
      ans: "Feugiat pretium nibh ipsum consequat. c odio tempor orci dapibus. Aliquam eleifend mi in null c odio tempor orci dapibus. Aliquam eleifend mi in null c odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in nullc odio tempor orci dapibus. Aliquam eleifend mi in null",
    },
  ];
  const handleToggle = (idx) => {
    setIndex(index === idx ? null : idx);
  };
  return (
    <div className="w-full h-auto flex flex-col gap-5 items-center justify-center px-20 bg-[#f7fcfc] py-10">
      <h2 className="underline underline-offset-8 decoration-[var(--primary-bg)]">
        Frequently Asked Questions
      </h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
      <div className="w-full h-auto ">
        {qna.map((item, idx) => (
          <div key={idx} className="p-2 m-2 bg-white border-1">
            <div
              className="w-full h-auto cursor-pointer text-[var(--primary-bg)] flex items-center justify-between"
              onClick={() => {
                handleToggle(idx);
              }}
            >
              <p>{item.que}</p>
              <MdKeyboardArrowRight
                className={`text-2xl transition-all duration-500 ease-in-out ${
                  index === idx ? "rotate-90" : ""
                }`}
              />
            </div>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                index === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-2">{item.ans}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QNA;
