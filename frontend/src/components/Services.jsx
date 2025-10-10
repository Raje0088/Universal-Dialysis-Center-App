import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import dialysis from "../assets/dialysis_images.jpg";

const services = [
  {
    title: "Hemodialysis",
    des: `Hemodialysis is a life-sustaining treatment for patients with end-stage renal disease (ESRD). Our expert team uses advanced equipment to:
- Filter waste products from the blood
- Maintain optimal electrolyte balance
- Regulate fluid levels
- Monitor vital signs and treatment parameters

Treatment sessions typically last 4 hours, 3 times a week.`,
    icon: "🩺",
  },
  {
    title: "Home Hemodialysis",
    des: `Our home hemodialysis program empowers patients to manage their dialysis treatments in the comfort of their own homes. We provide:
- Comprehensive training for patients and caregivers
- Advanced equipment and supplies
- Ongoing support and monitoring
- Personalized treatment plans
- Regular follow-up visits

Benefits include increased flexibility, reduced travel, and improved quality of life.`,
    icon: "🏠",
  },
  {
    title: "Continuous Renal Replacement Therapy (CRRT)",
    des: `CRRT is a gentle, continuous dialysis treatment for critically ill patients with acute kidney injury. This therapy:
- Removes fluid and waste products slowly and constantly
- Reduces strain on the kidneys
- Helps stabilize vital signs
- Supports recovery

CRRT is typically used in ICU settings.`,
    icon: "⚕️",
  },
  {
    title: "Sustainable low efficiency Dialysis (SLED)",
    des: `SLED is an extended, slower dialysis treatment for patients who require more gentle fluid removal. This therapy:
- Removes excess fluid gradually
- Reduces risk of hypotension
- Improves blood pressure control
- Enhances patient comfort

Treatment sessions typically last 6-8 hours.`,
    icon: "🔄",
  },
  {
    title: "Plasma apheresis",
    des: `Plasma apheresis is a treatment that:
- Separates and removes harmful antibodies from the blood
- Helps manage autoimmune disorders (e.g., lupus, rheumatoid arthritis)
- Treats conditions like Guillain-Barré syndrome
- Uses advanced technology to isolate and remove pathogenic antibodies`,
    icon: "🧪",
  },
  {
    title: "Dialysis on Call",
    des: `Our dialysis on-call service provides:
- Urgent dialysis treatments for patients requiring immediate care
- Support for travelers or those experiencing emergency situations
- 24/7 access to dialysis experts
- Coordination with emergency services
- "Dialysis on Call: Expert dialysis services available to hospitals without a dedicated dialysis department."`,
    icon: "📞",
  },
  {
    title: "Dialysis access management",
    des: `Our expert team manages:
- Creation of vascular access (AV fistula, graft, or catheter)
- Maintenance and repair of existing access
- Monitoring for complications
- Interventional procedures (e.g., angioplasty, stenting)`,
    icon: "🔧",
  },
  {
    title: "Laboratory testing and blood work",
    des: `We offer comprehensive laboratory testing and blood work services to:
- Monitor kidney function (eGFR, creatinine)
- Track electrolyte levels (potassium, sodium)
- Measure waste products (urea, phosphate)
- Screen for anemia and other conditions`,
    icon: "🧬",
  },
  {
    title: "Nutritional counselling",
    des: `Our registered dietitians provide personalized guidance on:
- Dietary restrictions (protein, potassium, phosphorus)
- Nutrient supplementation (vitamins, minerals)
- Fluid management
- Healthy eating habits
- Meal planning and education`,
    icon: "🥗",
  },
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const cardRefs = useRef([]);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
 
  useEffect(() => {
    // Initialize cards with falling animation
    const cards = cardRefs.current.filter(Boolean);
    
    // Set initial positions (above the viewport)
    gsap.set(cards, {
      y: -200,
      opacity: 0,
      rotation: 0,
      scale: 0.8,
    });

    // Create the falling animation timeline
    const createFallingAnimation = () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      
      cards.forEach((card, index) => {
        const delay = index * 0.3; // Stagger the falling effect
        const randomRotation = gsap.utils.random(-15, 15);
        const randomX = gsap.utils.random(-20, 20);
        
        tl.to(card, {
          y: 0,
          opacity: 1,
          rotation: randomRotation,
          scale: 1,
          x: randomX,
          duration: 1.2,
          ease: "bounce.out",
          delay: delay,
        }, 0)
        .to(card, {
          rotation: 0,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        }, delay + 1.2)
        .to(card, {
          y: -200,
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          ease: "power2.in",
        }, delay + 4);
      });
      
      return tl;
    };

    animationRef.current = createFallingAnimation();

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  const handleMouseEnter = (service, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Calculate available space in different directions
    const spaceAbove = rect.top;
    const spaceBelow = viewportHeight - rect.bottom;
    const spaceLeft = rect.left;
    const spaceRight = viewportWidth - rect.right;
    
    // Default position (centered above)
    let x = rect.left - containerRect.left + rect.width / 2;
    let y = rect.top - containerRect.top - 10;
    let position = 'top'; // Default position
    
    // Determine best position based on available space
    if (spaceBelow > 250 && spaceBelow > spaceAbove) {
      // Position below if there's more space
      y = rect.bottom - containerRect.top + 10;
      position = 'bottom';
    } else if (spaceRight > 300 && spaceRight > spaceLeft) {
      // Position to the right if there's more space
      x = rect.right - containerRect.left + 10;
      y = rect.top - containerRect.top + rect.height / 2;
      position = 'right';
    } else if (spaceLeft > 300) {
      // Position to the left if there's space
      x = rect.left - containerRect.left - 10;
      y = rect.top - containerRect.top + rect.height / 2;
      position = 'left';
    }
    
    setPopupPosition({
      x,
      y,
      position
    });
    
    setHoveredService(service);
    
    // Pause animation on hover
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    setHoveredService(null);
    
    // Resume animation
    if (animationRef.current) {
      animationRef.current.resume();
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ backgroundImage: `url(${dialysis})` }}
      className="relative w-full min-h-screen bg-cover bg-center bg-fixed py-10 sm:py-12 md:py-16 px-2 sm:px-4 md:px-6 lg:px-8 flex flex-col items-center overflow-hidden"
    >
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Header */}
      <div className="relative z-10 text-center mb-8 sm:mb-10 md:mb-16">
        <h2 className="text-white underline-center tracking-wider text-2xl sm:text-3xl md:text-4xl font-bold">
          Our Services
        </h2>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 max-w-7xl w-full px-2 sm:px-4">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="group relative bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:bg-opacity-100 min-h-[160px] xs:min-h-[180px] sm:min-h-[200px] md:min-h-[220px] flex flex-col items-center justify-center text-center"
            onMouseEnter={(e) => handleMouseEnter(service, e)}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => handleMouseEnter(service, e)} /* Add click handler for mobile devices */
          >
            {/* Service Icon */}
            <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            
            {/* Service Title */}
            <h3 className="text-base xs:text-lg sm:text-xl md:text-lg font-bold text-gray-800 group-hover:text-teal-600 transition-colors duration-300 leading-tight">
              {service.title}
            </h3>
            
            {/* Hover indicator */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Hover Popup */}
      {hoveredService && (
        <div
          className={`absolute z-50 bg-gray-900 bg-opacity-95 backdrop-blur-md text-white p-4 sm:p-6 rounded-2xl shadow-2xl max-w-[90vw] sm:max-w-sm lg:max-w-md border border-teal-400 transition-all duration-200`}
          style={{
            left: popupPosition.position === 'left' 
              ? `${popupPosition.x - 10}px` 
              : popupPosition.position === 'right'
                ? `${popupPosition.x}px`
                : `${popupPosition.x}px`,
            top: popupPosition.position === 'bottom'
              ? `${popupPosition.y}px`
              : popupPosition.position === 'left' || popupPosition.position === 'right'
                ? `${popupPosition.y}px`
                : `${popupPosition.y}px`,
            transform: 
              popupPosition.position === 'top' 
                ? 'translate(-50%, -100%)' 
                : popupPosition.position === 'bottom'
                  ? 'translate(-50%, 0)'
                  : popupPosition.position === 'left'
                    ? 'translate(-100%, -50%)'
                    : popupPosition.position === 'right'
                      ? 'translate(0, -50%)'
                      : 'translate(-50%, -100%)',
            maxHeight: 'none',
            overflow: 'visible'
          }}
        >
          {/* Popup arrow */}
          {popupPosition.position === 'top' && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-teal-400"></div>
          )}
          {popupPosition.position === 'bottom' && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-teal-400"></div>
          )}
          {popupPosition.position === 'left' && (
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-teal-400"></div>
          )}
          {popupPosition.position === 'right' && (
            <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-teal-400"></div>
          )}
          
          {/* Popup content */}
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-3">{hoveredService.icon}</span>
            <h4 className="text-lg sm:text-xl font-bold text-teal-400">
              {hoveredService.title}
            </h4>
          </div>
          
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed whitespace-pre-line">
            {hoveredService.des}
          </p>
        </div>
      )}

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-teal-400 bg-opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-400 bg-opacity-20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-green-400 bg-opacity-20 rounded-full animate-pulse delay-2000"></div>
    </div>
  );
};

export default Services;
