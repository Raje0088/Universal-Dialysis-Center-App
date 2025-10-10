import React from "react";
import address from "../assets/SVG/pin.svg";
import email from "../assets/SVG/emai.svg";
import call from "../assets/SVG/phone.gif";

const Contact = () => {
  return (
    <div className="w-full h-full flex flex-col  gap-10 items-center px-10 md:px-20 py-10 bg-[#f7fcfc]">
      <h2 className="underline underline-offset-8 decoration-[var(--primary-bg)]">
        Contact
      </h2>
      <div className="w-full h-full flex flex-col md:flex-row gap-15">
        <div className=" w-full md:w-1/2 h-auto flex flex-col gap-5">
          <div className="w-full  flex flex-col gap-0 bg-white p-2 items-center justify-center shadow-md rounded-2xl">
            <div className="w-full flex justify-center">
              <h4 className="font-bold"> Address</h4>
            </div>
            <div className="w-full  h-auto grid grid-cols-[20%_80%]    items-center justify-center p-2 ">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-8 h-8 ">
                  <img src={address} alt="" className="object-cover" />
                </div>
              </div>
              <div className="w-full ">
                <ul className="font-semibold list-none">
                  <li>
                    Universal Dialysis at NM Wadia Heart institute of Cardiology
                    Hospital, 3rd Floor, 32, Sasoon Rd, Central Excise Colony,
                    Sangamvadi, Pune, Maharashtra 411001
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full   bg-white  flex flex-col gap-0  p-2 items-center justify-center shadow-md rounded-2xl">
            <div className="w-full flex justify-center">
              <h4 className="font-bold"> Support Email</h4>
            </div>
            <div className="w-full  h-auto grid grid-cols-[20%_80%]    items-center justify-center p-2  ">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-8 h-8 ">
                  <img src={email} alt="" className="object-cover" />
                </div>
              </div>
              <div className="w-full ">
                <ul className="font-semibold lg:flex gap-10 items-center ">
                  <li>info@universaldialysis.com</li>
                  <li>care@universaldialysis.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full   bg-white  flex flex-col gap-0  p-2 items-center justify-center shadow-md rounded-2xl">
            <div className="w-full flex justify-center">
              <h4 className="font-bold"> Support Call Available 24/7</h4>
            </div>
            <div className="w-full  h-auto grid grid-cols-[20%_80%]    items-center justify-center p-2  ">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-8 h-8 ">
                  <img src={call} alt="" className="object-cover" />
                </div>
              </div>
              <div className="w-full ">
                <ul className="grid grid-cols-2 font-semibold  items-center justify-center">
                  <li> 93210 26100 </li>
                  <li>9607008436</li>
                  <li>9607008438</li>
                  <li>8956604412 </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-auto p-2 flex flex-col gap-5">
          <div className="w-fullp-2 flex items-center justify-center">
            <h4 className="font-bold">Connect Us We'd love to help!</h4>
          </div>
          <div className="w-full h-auto grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5">
            <input
              type="text"
              className="w-full bg-white border-1 p-2"
              placeholder="Name"
            />
            <input
              type="text"
              className="w-full bg-white border-1 p-2"
              placeholder="Your Email"
            />
            <input
              type="text"
              className="w-full bg-white border-1 p-2"
              placeholder="Your Phone"
            />
            <input
              type="text"
              className="w-full bg-white border-1 p-2"
              placeholder="Subject"
            />
          </div>
          <div className="w-full h-32">
            <textarea className="w-full h-32 bg-white border p-2 overflow-auto !resize-y"></textarea>
          </div>
          <div className="w-full h-auto flex items-center justify-center ">
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
