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
    <div className="w-full h-auto flex flex-col gap-5 items-center justify-center px-10 md:px-20 bg-[#f7fcfc] py-10">
      <h2 className="underline-center tracking-wider">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 text-center max-w-2xl">
        Get quick answers to the most common questions from our patients.
      </p>
 <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col gap-4">
        {qna.map((item, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300 ${
              index === idx ? "border-[var(--primary-bg)]" : ""
            }`}
          >
            {/* Question */}
            <div
              onClick={() => handleToggle(idx)}
              className="w-full flex justify-between items-center px-5 py-4 cursor-pointer"
            >
              <p
                className={`font-medium text-gray-800 transition-colors duration-300 ${
                  index === idx ? "text-[var(--primary-bg)]" : ""
                }`}
              >
                {item.que}
              </p>
              <MdKeyboardArrowRight
                className={`text-2xl transform transition-transform duration-500 ease-in-out ${
                  index === idx ? "rotate-90 text-[var(--primary-bg)]" : "text-gray-500"
                }`}
              />
            </div>

            {/* Answer */}
            <div
              className={`px-5 overflow-hidden transition-all duration-500 ease-in-out ${
                index === idx
                  ? "max-h-40 opacity-100 pb-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.ans}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QNA;
