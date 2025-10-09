import React, { useState } from "react";
import styles from "./Department.module.css";
import prepareImg from "../assets/dialysis/preparing.jpg";
import workingImg from "../assets/dialysis/working.jpg";
import dietImg from "../assets/dialysis/diet.jpg";
import transplantImg from "../assets/dialysis/transplant.jpg";
import lastImg from "../assets/dialysis/last.jpg";

const Department = () => {
  const [departIndex, setDepartIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const departmentItem = [
    {
      id: 0,
      title: "Preparing for Dialysis",
      des1: "1. Education: Learn about dialysis options and lifestyle changes.",
      des2: "2. Vascular Access: Create a vascular access site for hemodialysis.",
      des3: "3. Dietary Changes: Adjust diet to manage waste buildup.",
      des4: "4. Emotional Support: Seek support from family, friends, and healthcare professionals.",
      des5: "5. Financial Planning: Understand the costs associated with dialysis.",
      img: prepareImg,
    },
    {
      id: 1,
      title: "Working while on Dialysis",
      des1: "1. Schedule Adjustments: Adjust work schedule to accommodate dialysis sessions.",
      des2: "2. Fatigue Management: Manage fatigue through rest and exercise.",
      des3: "3. Communication: Inform employer about dialysis needs.",
      des4: "4. Disability Benefits: Explore disability benefits if needed.",
      des5: "",
      img: workingImg,
    },
    {
      id: 2,
      title: "Diet while on Dialysis",
      des1: "1. Fluid Restriction: Limit fluid intake to avoid fluid buildup.",
      des2: "2. Sodium Restriction: Limit sodium intake to manage blood pressure.",
      des3: "3. Protein Restriction: Monitor protein intake to manage waste buildup.",
      des4: "4. Potassium and Phosphorus Management: Monitor levels to avoid complications.",
      des5: "5. Vitamin and Mineral Supplements: Take supplements as recommended by healthcare provider.",
      img: dietImg,
    },
    {
      id: 3,
      title: "Diet and Kidney Transplant",
      des1: "1. Post-Transplant Diet: Follow a balanced diet to support transplant health.",
      des2: "2. Immunosuppressant Management: Manage medication side effects.",
      des3: "3. Infection Prevention: Take precautions to prevent infections.",
      des4: "4. Regular Follow-up: Schedule regular follow-up appointments.",
      des5: "5. Lifestyle Changes: Make lifestyle changes to support overall health.",
      img: transplantImg,
    },
    {
      id: 4,
      title: "Kidney Transplant",
      des1: "A kidney transplant is a surgical procedure where a healthy kidney is transplanted into a person with kidney failure. There are two types:",
      des2: "1. Living Donor Transplant: From a living donor, usually a family member or friend.",
      des3: "2. Deceased Donor Transplant: From a deceased donor.",
      des4: "It's essential to consult healthcare professionals for personalized guidance on managing kidney disease, dialysis, and transplantation",
      des5: "",
      img: lastImg,
    },
  ];

  const handleDepartIndex = (index) => {
    setDepartIndex(index);
    setAnimate(false);
    setTimeout(() => setAnimate(true), 10);
  };
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center gap-5 px-10 md:px-20 py-5 ">
      <h2 className=" tracking-widest  underline-center">
        Know More About Dialysis
      </h2>
      <h4 className="text-justify m-auto md:text-center">
        Dialysis is a medical treatment that filters waste products from the
        blood when the kidneys are no longer able to perform this function.
        There are two types:
      </h4>
      <div className="w-full  flex justify-start">
        <ol>
          <li>
            <strong>Hemodialysis:</strong> Uses a machine to filter blood
            outside the body.
            <ul>
              <li>
                <strong>In-center hemodialysis:</strong> Performed at a dialysis
                center.
              </li>
              <li>
                <strong>Home hemodialysis:</strong> Performed at home.
              </li>
            </ul>
          </li>
          <li>
            <strong>Peritoneal Dialysis:</strong> Uses the peritoneum as a
            filter within the body.
            <ul>
              <li>
                <strong>
                  Continuous Ambulatory Peritoneal Dialysis (CAPD):
                </strong>{" "}
                Manual exchanges throughout the day.
              </li>
              <li>
                <strong>Automated Peritoneal Dialysis (APD):</strong> Uses a
                machine to perform exchanges at night.
              </li>
            </ul>
          </li>
        </ol>
      </div>

<div className="w-full flex flex-col md:flex-row">
  {/* Left Side (Menu) */}
  <div className="w-full md:w-1/5 px-1 flex md:flex-col gap-1 md:gap-0 font-bold overflow-x-auto md:overflow-visible">
    {[
      "Preparing for Dialysis",
      "Working while on Dialysis",
      "Diet while on Dialysis",
      "Diet and Kidney Transplant",
      "Kidney Transplant",
    ].map((item, index) => (
      <p
        key={index}
        style={
          departIndex === index
            ? {
                color: "var(--primary-bg)",
                borderBottom: "3px solid var(--primary-bg)",
                ...(window.innerWidth >= 768
                  ? { borderRight: "4px solid var(--primary-bg)", borderBottom: "none" }
                  : {}),
              }
            : {}
        }
        className="hover:text-[var(--primary-bg)] p-2 cursor-pointer font-bold whitespace-nowrap"
        onClick={() => handleDepartIndex(index)}
      >
        {item}
      </p>
    ))}
  </div>

  {/* Middle Section (Content) */}
  <div className="w-full md:w-3/5 px-3 md:px-5 mt-3 md:mt-0">
    <h4 className="text-lg md:text-xl font-semibold">{departmentItem[departIndex].title}</h4>
    <div className={`p-2 md:p-4 flex flex-col gap-2 ${styles.sidebar}`}>
      {[
        departmentItem[departIndex].des1,
        departmentItem[departIndex].des2,
        departmentItem[departIndex].des3,
        departmentItem[departIndex].des4,
        departmentItem[departIndex].des5,
      ].map(
        (text, i) =>
          text && (
            <p
              key={i}
              className={`${styles.sidebarText} ${
                animate ? styles.animate : ""
              } text-sm md:text-base`}
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {text}
            </p>
          )
      )}
    </div>
  </div>

  {/* Right Side (Image) */}
  <div className="w-full md:w-1/5 flex items-center justify-center mt-3 md:mt-0">
    <img
      src={departmentItem[departIndex].img}
      alt=""
      className={`w-full h-48 md:h-full object-cover bg-center transition-transform duration-500 ease-out ${
        departIndex ? styles["animate-fall"] : ""
      }`}
    />
  </div>
</div>

    </div>
  );
};

export default Department;
