import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { CiMobile2 } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import logo from "../assets/Data/newLogo.png";
import logo2 from "../assets/dialysisLogo2.jpg";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [selectHeader, setSelectHeader] = useState("home");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrolltoSection = (id) => {
    setSelectHeader(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div
        className={`bg-[var(--primary-bg)] w-full h-auto flex flex-col  md:flex-row justify-around text-white p-2 ${
          isSticky ? styles.hiddenOnScroll : ""
        }`}
      >
        <p className="flex gap-1 items-center">
          <GoClock className={styles.icon} /> Monday - Saturday, 8AM to 10PM
        </p>
        <p className="flex gap-1 items-center">
          <CiMobile2 className={styles.icon} /> Call us now 93210 26100 /
          9607008436
        </p>
      </div>
      <div
        className={`flex gap-1 items-center justify-between md:py-3 px-4 md:px-20 bg-white ${styles.mainHeader}`}
      >
        <div className="h-16 w-32 flex items-center  ">
          <img
            src={logo}
            alt="logo"
            className="w-full h-full object-contain cursor-pointer "
            onClick={() => {
              handleScrolltoSection("home");
            }}
          />
        </div>
        <div
          className={`text-nowrap hidden items-center justify-center gap-5 md:flex `}
        >
          <h4
            className="hover:text-[var(--primary-bg)] cursor-pointer"
            style={{
              color: selectHeader === "home" ? "var(--primary-bg)" : "",
            }}
            onClick={() => {
              handleScrolltoSection("home");
            }}
          >
            HOME
          </h4>
          <h4
            className="hover:text-[var(--primary-bg)] cursor-pointer"
            style={{
              color: selectHeader === "about" ? "var(--primary-bg)" : "",
            }}
            onClick={() => {
              handleScrolltoSection("about");
            }}
          >
            ABOUT US
          </h4>
          <h4
            className="hover:text-[var(--primary-bg)] cursor-pointer"
            style={{
              color: selectHeader === "services" ? "var(--primary-bg)" : "",
            }}
            onClick={() => {
              handleScrolltoSection("services");
            }}
          >
            OUR SERVICES
          </h4>
          <h4
            className="hover:text-[var(--primary-bg)] cursor-pointer"
            style={{
              color: selectHeader === "centers" ? "var(--primary-bg)" : "",
            }}
            onClick={() => {
              handleScrolltoSection("centers");
            }}
          >
            OUR CENTERS
          </h4>
          <h4
            className="hover:text-[var(--primary-bg)] cursor-pointer"
            style={{
              color: selectHeader === "diet" ? "var(--primary-bg)" : "",
            }}
            onClick={() => {
              handleScrolltoSection("diet");
            }}
          >
            DIET
          </h4>
          <h4
            className="hover:text-[var(--primary-bg)] cursor-pointer"
            style={{
              color: selectHeader === "team" ? "var(--primary-bg)" : "",
            }}
            onClick={() => {
              handleScrolltoSection("team");
            }}
          >
            OUR TEAM
          </h4>
          <h4
            className="hover:text-[var(--primary-bg)] cursor-pointer"
            style={{
              color: selectHeader === "contact" ? "var(--primary-bg)" : "",
            }}
            onClick={() => {
              handleScrolltoSection("contact");
            }}
          >
            CONTACT
          </h4>
        </div>
        <button className="bg-[var(--primary-bg)] font-bold text-white px-4 py-2 rounded hover:opacity-90">
          Make an Appointment
        </button>
        <IoMenu
          className="flex text-2xl md:hidden"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        />
      </div>
      <div
        className={`w-[40%] h-auto bg-gray-500  fixed right-0 transition-transform duration-500 ${
          toggle === true ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <div
          className={`w-full h-full text-nowrap flex flex-col md:hidden gap-5 px-5 py-5 text-white`}
        >
           <h4
            className="hover:text-[var(--primary-bg)] cursor-pointer"
            style={{
              color: selectHeader === "home" ? "var(--primary-bg)" : "",
            }}
            onClick={() => {
              handleScrolltoSection("home");
            }}
          >
            HOME
          </h4>
          <h4
            className="hover:text-[var(--primary-bg)] cursor-pointer"
            style={{
              color: selectHeader === "about" ? "var(--primary-bg)" : "",
            }}
            onClick={() => {
              handleScrolltoSection("about");
            }}
          >
            ABOUT US
          </h4>
          <h4
            className="hover:text-[var(--primary-bg)] cursor-pointer"
            style={{
              color: selectHeader === "services" ? "var(--primary-bg)" : "",
            }}
            onClick={() => {
              handleScrolltoSection("services");
            }}
          >
            OUR SERVICES
          </h4>
          <h4
            className="hover:text-[var(--primary-bg)] cursor-pointer"
            style={{
              color: selectHeader === "centers" ? "var(--primary-bg)" : "",
            }}
            onClick={() => {
              handleScrolltoSection("centers");
            }}
          >
            OUR CENTERS
          </h4>
          <h4
            className="hover:text-[var(--primary-bg)] cursor-pointer"
            style={{
              color: selectHeader === "diet" ? "var(--primary-bg)" : "",
            }}
            onClick={() => {
              handleScrolltoSection("diet");
            }}
          >
            DIET
          </h4>
          <h4
            className="hover:text-[var(--primary-bg)] cursor-pointer"
            style={{
              color: selectHeader === "team" ? "var(--primary-bg)" : "",
            }}
            onClick={() => {
              handleScrolltoSection("team");
            }}
          >
            OUR TEAM
          </h4>
          <h4
            className="hover:text-[var(--primary-bg)] cursor-pointer"
            style={{
              color: selectHeader === "contact" ? "var(--primary-bg)" : "",
            }}
            onClick={() => {
              handleScrolltoSection("contact");
            }}
          >
            CONTACT
          </h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
