import React from "react";

const I2s2Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <div className="w-full px-10 md:px-20 py-1 bg-[#f7fcfc] ">
      <div className="flex flex-col md:flex-row gap-5 pb-10">
        <div className="w-full md:w-1/3 h-auto ">
          <div>
            <h4>Address</h4>
            <p>Universal Dialysis at NM Wadia Heart institute of Cardiology Hospital</p>
            <p>3rd Floor, 32, Sasoon Rd, Central Excise Colony,</p>
            <p>Sangamvadi, Pune,</p>
            <p>Maharashtra 411001</p>
            <p> 
              <strong>Phone:</strong> +91-9607008438 | +91-8956604412 
            </p>
            <p>
              <strong>Email:</strong> : info@universaldialysis.com | care@universaldialysis.com
            </p>
          </div>
        </div>
        <div className="w-full md:w-2/3 h-auto grid grid-cols-3 gap-5 ">
          <div className="">
            <h4>Useful Links</h4>
            <p>Home</p>
            <p>About us</p>
            <p>Services</p>
            <p>Terms of Service</p>
            <p>Privacy policy</p>
          </div>
          <div>
            <h4>Useful Links</h4>
            <p>Home</p>
            <p>About us</p>
            <p>Services</p>
            <p>Terms of Service</p>
            <p>Privacy policy</p>
          </div>
          <div>
            <h4>Useful Links</h4>
            <p>Home</p>
            <p>About us</p>
            <p>Services</p>
            <p>Terms of Service</p>
            <p>Privacy policy</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center p-2  text-center border-gray-200 border-t-2">
        <p>
          © Copyright {currYear} <strong>Universal Dialysis Center</strong> All Rights Reserved
        </p>
        <p>Designed by  <span><a href="https://www.i2s2world.com/" target="_blank">Instant Information Software Service Pvt. Ltd.</a></span></p>
      </div>
    </div>
  );
};

export default I2s2Footer;
