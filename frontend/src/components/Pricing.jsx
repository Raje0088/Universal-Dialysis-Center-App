import React from "react";

const Pricing = () => {
  const doctorItems = [
    {
      id: 0,
      type: "Free",
      profession: "developer",
      price: "$50.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi pariatur deserunt error consectetur fugit!",
    },
    {
      id: 1,
      type: "Business",
      profession: "specialist",
      price: "$50.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi pariatur deserunt error consectetur fugit!",
    },
    {
      id: 2,
      type: "Developer",
      profession: "trainer",
      price: "$50.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi pariatur deserunt error consectetur fugit!",
    },
    {
      id: 3,
      type: "Ultimate",
      profession: "developer",
      price: "$50.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi pariatur deserunt error consectetur fugit!",
    },
  ];
  return (
    <div className="w-full h-auto flex flex-col gap-5 items-center justify-center px-20 bg-[#f7fcfc] py-10">
      <h2 className="underline underline-offset-8 decoration-[var(--primary-bg)]">
        Doctors
      </h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
      <div className="w-full h-auto grid grid-cols-4 gap-5 ">
        {doctorItems.map((item, idx) => (
          <div key={idx} className="w-auto bg-white  shadow-2xl ">
            <div className="w-auto  text-center p-4  bg-[var(--primary-bg)] text-white">
              {item.type}
            </div>
            <div className="w-auto  p-5 py-8 flex flex-col items-center justify-center gap-4">
              <h4>{item.price}</h4>
              <p>{item.profession}</p>
              <p className="text-center">{item.description}</p>
            </div>
            <div className="w-auto  text-center p-4 bg-gray-200">
              <button>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
