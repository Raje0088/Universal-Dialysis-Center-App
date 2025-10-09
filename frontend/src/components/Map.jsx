// import React, { useState, useEffect, useRef } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import {
//   FaMapMarkerAlt,
//   FaLocationArrow,
//   FaPhone,
//   FaClock,
// } from "react-icons/fa";
// import styles from "./Map.module.css";

// // Fix for default markers in react-leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//   iconUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// });

// // Custom icons for different marker types
// const dialysisCenterIcon = new L.Icon({
//   iconUrl:
//     "data:image/svg+xml;base64," +
//     btoa(`
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#008080" width="32" height="32">
//       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//     </svg>
//   `),
//   iconSize: [32, 32],
//   iconAnchor: [16, 32],
//   popupAnchor: [0, -32],
// });

// const userLocationIcon = new L.Icon({
//   iconUrl:
//     "data:image/svg+xml;base64," +
//     btoa(`
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff4444" width="32" height="32">
//       <circle cx="12" cy="12" r="8" fill="#ff4444" stroke="#fff" stroke-width="2"/>
//       <circle cx="12" cy="12" r="3" fill="#fff"/>
//     </svg>
//   `),
//   iconSize: [32, 32],
//   iconAnchor: [16, 16],
//   popupAnchor: [0, -16],
// });

// const nearestCenterIcon = new L.Icon({
//   iconUrl:
//     "data:image/svg+xml;base64," +
//     btoa(`
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00ff00" width="36" height="36">
//       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//       <circle cx="12" cy="9" r="1.5" fill="#fff"/>
//     </svg>
//   `),
//   iconSize: [36, 36],
//   iconAnchor: [18, 36],
//   popupAnchor: [0, -36],
// });

// // Sample dialysis centers across India
// const dialysisCenters = [
//   {
//     id: 1,
//     name: "Universal Dialysis at NM Wadia Heart institute of Cardiology Hospital - Pune",
//     lat: 18.530800965047032,
//     lng: 73.87723519941827,
//     address:
//       "NM Wadia Heart institute of Cardiology Hospital, 3rd Floor, 32, Sasoon Rd, Central Excise Colony, Sangamvadi, Pune, Maharashtra 411001",
//     phone: "+91-11-2334-5678",
//     hours: "24/7 Emergency Services",
//     services: ["Cardiology ", "Emergency Care"],
//   },
//   {
//     id: 2,
//     name: "Universal Dialysis at IMAX Hospital - Pune",
//     lat:  18.583024251940717,
//     lng: 73.98650189427586,
//     address:
//       "Universal Dialysis at IMAX Hospital4th floor, IMAX Hospital, Pune-Nagar Road, Kesnand Phata Chowk, Sant Tukaram Nagar, Wagholi, Pune, Maharashtra 412207",
//     phone: "+91-22-2654-3210",
//     hours: "24/7 Emergency Services",
//     services: ["Hemodialysis", "Peritoneal Dialysis", "Consultation"],
//   },
//   {
//     id: 3,
//     name: "Universal Dialysis at EON Hospital - Pune",
//     lat: 18.562736401503052,
//     lng: 73.93798023453844,
//     address:
//       "7th floor, HW7Q+25Q, Mundhwa - Kharadi Rd, near Om Battery, Shree Ram Society, Chandan Nagar, Kharadi, Pune, Maharashtra 411014",
//     phone: "+91-80-4567-8901",
//     hours: "24/7 Emergency Services",
//     services: ["Hemodialysis", "Peritoneal Dialysis", "Home Dialysis"],
//   },
//   {
//     id: 4,
//     name: "Universal Dialysis at Vinod Memorial Multi-speciality Hospital - Pune",
//     lat: 18.573475266779816,
//     lng: 73.8775043331239,
//     address:
//       "2nd floor, Vishrant Society, Vishrantwadi, Pune, Maharashtra 411015",
//     phone: "+91-44-2890-1234",
//     hours: "6:00 AM - 11:00 PM",
//     services: ["Hemodialysis", "Peritoneal Dialysis", "Pediatric Care"],
//   },
//   {
//     id: 5,
//     name: "Universal Dialysis at Kasturba Hospital - Pune",
//     lat: 18.57292708628729,
//     lng: 73.88172926794516,
//     address:
//       "1st floor, Plot No. 99A, Kasturba A Rd, Kasturba A, Kasturba Housing Society, Vishrantwadi, Pune, Maharashtra 411006",
//     phone: "+91-33-2267-5432",
//     hours: "24/7 Emergency Services",
//     services: ["Hemodialysis", "Peritoneal Dialysis", "ICU Support"],
//   },
//   {
//     id: 6,
//     name: "Universal Dialysis at Orchid Speciality Hospital- Pune",
//     lat: 18.60078538757158,
//     lng: 73.90967523682383,
//     address:
//       "4th floor, L-Square, Off. Dhanori Jakat Naka, Sr. No. - 282/3/3, Porwal Rd, Lohegaon, Pune, Maharashtra 411047",
//     phone: "+91-40-4012-3456",
//     hours: "6:00 AM - 10:00 PM",
//     services: ["Hemodialysis", "Peritoneal Dialysis", "Transplant Support"],
//   },
//   {
//     id: 7,
//     name: "Universal Dialysis at Sai Shradha Hospital - Pune",
//     lat: 18.6005079727987,
//     lng: 73.90952842148124,
//     address:
//       "4th floor, Sr No. - 282/3, 3, Porwal Rd, Kutwal Colony, Lohegaon, Pune, Maharashtra 411047",
//     phone: "+91-20-2613-7890",
//     hours: "24/7 Emergency Services",
//     services: ["Hemodialysis", "Peritoneal Dialysis", "Consultation"],
//   },
//   {
//     id: 8,
//     name: "Universal Dialysis at MAEER'S Vishwaraj Hospital - Pune",
//     lat: 18.49007113303672,
//     lng: 74.02249122702696,
//     address:
//       "1st floor, MAEER'S Vishwaraj Hospital, Pune Solapur Road, Near Loni Railway Station, Loni Kalbhor, Maharashtra 412201.",
//     phone: "+91-79-2630-4567",
//     hours: "6:00 AM - 11:00 PM",
//     services: ["Hemodialysis", "Peritoneal Dialysis", "Emergency Care"],
//   },
//   {
//     id: 9,
//     name: "Universal Dialysis at Urokul Hospital - Pune",
//     lat: 18.55653398480671,
//     lng: 73.76993306928628,
//     address:
//       "3rd floor, Plot No: 61/2/1, 11/1, Mumbai Pune Bypass Rd Flyover, next to Bitwise Terratower, Mohan Nagar Co-Op Society, Baner, Pune, Maharashtra 411045",
//     phone: "+91-141-2367-8901",
//     hours: "6:00 AM - 10:00 PM",
//     services: ["Hemodialysis", "Peritoneal Dialysis", "Home Care"],
//   },
//   {
//     id: 10,
//     name: " Universal Dialysis at Gastrohub Hospital - Pune",
//     lat: 18.59569764556311,
//     lng: 73.78645017709074,
//     address:
//       "4th floor, Gastrohub Hospital, Royal Radiance, Wakad - Bhosari BRTS Rd, Next to SPOT18, Rahatani, Pune, Maharashtra 411027.",
//     phone: "+91-484-2345-6789",
//     hours: "24/7 Emergency Services",
//     services: ["Hemodialysis", "Peritoneal Dialysis", "Pediatric Care"],
//   },

//   {
//     id: 11,
//     name: "Universal Dialysis at Aadhar Multi-speciality Hospital - Pune",
//     lat: 18.98290151629482,
//     lng: 74.0835249656701,
//     address:
//       "2nd floor, Aadhar Hospital, X3MM+3C3, Pargaon Shingave, Pargaon Tarf Awasari Bk., Maharashtra 412406",
//     phone: "+91-484-2345-6789",
//     hours: "24/7 Emergency Services",
//     services: ["Hemodialysis", "Peritoneal Dialysis", "Pediatric Care"],
//   },
//   {
//     id: 12,
//     name: "Universal Dialysis at AiMS Hospital - Pune",
//     lat: 18.563867561720333,
//     lng: 73.81041336168632,
//     address:
//       "Ground floor and 4th floor, AIMS HOSPITAL & REASEARCH CENTER, Near AIMS square, Aundh Gaon, Aundh, Pune, Maharashtra 411007",
//     phone: "+91-484-2345-6789",
//     hours: "24/7 Emergency Services",
//     services: ["Hemodialysis", "Peritoneal Dialysis", "Pediatric Care"],
//   },
//   {
//     id: 13,
//     name: "Universal Dialysis at 7 Orange Hospital - Pune",
//     lat: 18.645321830419505,
//     lng: 73.77860528946054,
//     address:
//       "Bijli Nagar Rd, Pawana Nagar Housing Society, Chinchwad, Pimpri-Chinchwad, Maharashtra 411033",
//     phone: "+91-484-2345-6789",
//     hours: "24/7 Emergency Services",
//     services: ["Hemodialysis", "Peritoneal Dialysis", "Pediatric Care"],
//   },
// ];

// // Component to handle map updates
// const MapUpdater = ({ center, zoom }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (center) {
//       map.setView(center, zoom);
//     }
//   }, [center, zoom, map]);

//   return null;
// };

// // Calculate distance between two points using Haversine formula
// const calculateDistance = (lat1, lng1, lat2, lng2) => {
//   const R = 6371; // Radius of the Earth in kilometers
//   const dLat = ((lat2 - lat1) * Math.PI) / 180;
//   const dLng = ((lng2 - lng1) * Math.PI) / 180;
//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos((lat1 * Math.PI) / 180) *
//       Math.cos((lat2 * Math.PI) / 180) *
//       Math.sin(dLng / 2) *
//       Math.sin(dLng / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   const distance = R * c;
//   return distance;
// };

// const Map = () => {
//   const [userLocation, setUserLocation] = useState(null);
//   const [mapCenter, setMapCenter] = useState([20.5937, 78.9629]); // Center of India
//   const [mapZoom, setMapZoom] = useState(5);
//   const [nearestCenter, setNearestCenter] = useState(null);
//   const [locationError, setLocationError] = useState(null);
//   const [isLocating, setIsLocating] = useState(false);

//   // Get user's current location
//   const getCurrentLocation = () => {
//     setIsLocating(true);
//     setLocationError(null);

//     if (!navigator.geolocation) {
//       setLocationError("Geolocation is not supported by this browser.");
//       setIsLocating(false);
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         const newLocation = [latitude, longitude];

//         setUserLocation(newLocation);
//         setMapCenter(newLocation);
//         setMapZoom(12);

//         // Find nearest dialysis center
//         let nearest = null;
//         let minDistance = Infinity;

//         dialysisCenters.forEach((center) => {
//           const distance = calculateDistance(
//             latitude,
//             longitude,
//             center.lat,
//             center.lng
//           );
//           if (distance < minDistance) {
//             minDistance = distance;
//             nearest = { ...center, distance: distance.toFixed(2) };
//           }
//         });

//         setNearestCenter(nearest);
//         setIsLocating(false);
//       },
//       (error) => {
//         let errorMessage = "Unable to retrieve your location.";
//         switch (error.code) {
//           case error.PERMISSION_DENIED:
//             errorMessage = "Location access denied by user.";
//             break;
//           case error.POSITION_UNAVAILABLE:
//             errorMessage = "Location information is unavailable.";
//             break;
//           case error.TIMEOUT:
//             errorMessage = "Location request timed out.";
//             break;
//         }
//         setLocationError(errorMessage);
//         setIsLocating(false);
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 10000,
//         maximumAge: 60000,
//       }
//     );
//   };

//   // Focus on a specific center
//   const focusOnCenter = (center) => {
//     setMapCenter([center.lat, center.lng]);
//     setMapZoom(15);
//   };

//   // Reset map view to show all of India
//   const resetMapView = () => {
//     setMapCenter([20.5937, 78.9629]);
//     setMapZoom(5);
//     setNearestCenter(null);
//   };

//   return (
//     <div className={styles.main}>
//       <div className={styles.mapContainer}>
//         <div className={styles.mapHeader}>
//           <h2>Universal Dialysis Centers</h2>
//           <div className={styles.mapControls}>
//             <button
//               onClick={getCurrentLocation}
//               className={styles.locationBtn}
//               disabled={isLocating}
//             >
//               <FaLocationArrow />
//               {isLocating ? "Locating..." : "Find My Location"}
//             </button>
//             <button onClick={resetMapView} className={styles.resetBtn}>
//               Reset View
//             </button>
//           </div>
//         </div>

//         {locationError && (
//           <div className={styles.errorMessage}>
//             <p>{locationError}</p>
//           </div>
//         )}

//         {nearestCenter && (
//           <div className={styles.nearestCenter}>
//             <h3>Nearest Center to You</h3>
//             <div className={styles.centerInfo}>
//               <h4>{nearestCenter.name}</h4>
//               <p>
//                 <FaMapMarkerAlt /> {nearestCenter.address}
//               </p>
//               <p>
//                 <FaPhone /> {nearestCenter.phone}
//               </p>
//               <p>
//                 <FaClock /> {nearestCenter.hours}
//               </p>
//               <p className={styles.distance}>
//                 Distance: {nearestCenter.distance} km
//               </p>
//               <button
//                 onClick={() => focusOnCenter(nearestCenter)}
//                 className={styles.focusBtn}
//               >
//                 View on Map
//               </button>
//               <button
//                 onClick={() => {
//                   const [lat, lng] = userLocation;
//                   const destLat = nearestCenter.lat;
//                   const destLng = nearestCenter.lng;
//                   const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${destLat},${destLng}&travelmode=driving`;
//                   window.open(googleMapsUrl, "_blank");
//                 }}
//                 className={styles.focusBtn}
//               >
//                 Open in Google Maps
//               </button>
//             </div>
//           </div>
//         )}

//         <div className={styles.mapWrapper}>
//           <MapContainer
//             center={mapCenter}
//             zoom={mapZoom}
//             className={styles.leafletMap}
//             scrollWheelZoom={true}
//             zoomControl={true}
//           >
//             <MapUpdater center={mapCenter} zoom={mapZoom} />

//             <TileLayer
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />

//             {/* User location marker */}
//             {userLocation && (
//               <Marker position={userLocation} icon={userLocationIcon}>
//                 <Popup>
//                   <div className={styles.popupContent}>
//                     <h4>Your Location</h4>
//                     <p>You are here!</p>
//                   </div>
//                 </Popup>
//               </Marker>
//             )}

//             {/* Dialysis center markers */}
//             {dialysisCenters.map((center) => (
//               <Marker
//                 key={center.id}
//                 position={[center.lat, center.lng]}
//                 icon={
//                   nearestCenter && nearestCenter.id === center.id
//                     ? nearestCenterIcon
//                     : dialysisCenterIcon
//                 }
//               >
//                 <Popup>
//                   <div className={styles.popupContent}>
//                     <h4>{center.name}</h4>
//                     {nearestCenter && nearestCenter.id === center.id && (
//                       <p className={styles.nearestTag}>
//                         Nearest to You ({nearestCenter.distance} km)
//                       </p>
//                     )}
//                     <p>
//                       <FaMapMarkerAlt /> {center.address}
//                     </p>
//                     <p>
//                       <FaPhone /> {center.phone}
//                     </p>
//                     <p>
//                       <FaClock /> {center.hours}
//                     </p>
//                     <div className={styles.services}>
//                       <strong>Services:</strong>
//                       <ul>
//                         {center.services.map((service, index) => (
//                           <li key={index}>{service}</li>
//                         ))}
//                       </ul>
//                     </div>
//                     <button
//                       onClick={() => focusOnCenter(center)}
//                       className={styles.focusBtn}
//                     >
//                       Focus Here
//                     </button>
//                   </div>
//                 </Popup>
//               </Marker>
//             ))}
//           </MapContainer>
//         </div>

//         <div className={styles.centersList}>
//           <h3>All Universal Dialysis Centers in Pune</h3>
//           <div className={styles.centersGrid}>
//             {dialysisCenters.map((center) => (
//               <div key={center.id} className={styles.centerCard}>
//                 <h4>{center.name}</h4>
//                 <p>
//                   <span> <FaMapMarkerAlt /></span> {center.address}
//                 </p>
//                 <p>
//                   <FaPhone /> {center.phone}
//                 </p>
//                 <p>
//                   <FaClock /> {center.hours}
//                 </p>
//                 {nearestCenter && nearestCenter.id === center.id && (
//                   <p className={styles.nearestTag}>
//                     Nearest to You ({nearestCenter.distance} km)
//                   </p>
//                 )}
//                 <div className="flex whitespace-nowrap text-sm">
//                   <button
//                     onClick={() => focusOnCenter(center)}
//                     className={styles.viewBtn}
//                   >
//                     View on Map
//                   </button>
//                   <button
//                     onClick={() => {
//                       const destLat = center.lat;
//                       const destLng = center.lng;
//                       const googleMapsUrl =  `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${destLat},${destLng}&travelmode=driving`;
//                       window.open(googleMapsUrl, "_blank");
//                     }}
//                     className={styles.focusBtn}
//                   >
//                     Open in Google Maps
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Map;

// =================================================

import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaLocationArrow,
  FaPhone,
  FaClock,
} from "react-icons/fa";
import styles from "./Map.module.css";

// Sample dialysis centers across India
const dialysisCenters = [
  {
    id: 1,
    name: "Universal Dialysis at NM Wadia Heart institute of Cardiology Hospital - Pune",
    lat: 18.530800965047032,
    lng: 73.87723519941827,
    address:
      "NM Wadia Heart institute of Cardiology Hospital, 3rd Floor, 32, Sasoon Rd, Central Excise Colony, Sangamvadi, Pune, Maharashtra 411001",
    phone: "+91-11-2334-5678",
    hours: "24/7 Emergency Services",
    services: ["Cardiology ", "Emergency Care"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121054.6679449759!2d73.7948334659768!3d18.530783144499647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13e829c5a53%3A0x6960a239f028db68!2sUniversal%20Dialysis%20Center!5e0!3m2!1sen!2sin!4v1759913746143!5m2!1sen!2sin",
  },
  {
    id: 2,
    name: "Universal Dialysis at IMAX Hospital - Pune",
    lat: 18.583024251940717,
    lng: 73.98650189427586,
    address:
      "Universal Dialysis at IMAX Hospital4th floor, IMAX Hospital, Pune-Nagar Road, Kesnand Phata Chowk, Sant Tukaram Nagar, Wagholi, Pune, Maharashtra 412207",
    phone: "+91-22-2654-3210",
    hours: "24/7 Emergency Services",
    services: ["Hemodialysis", "Peritoneal Dialysis", "Consultation"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8009119824947!2d73.98392917393737!3d18.58301226726637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c37ed0eeb09d%3A0xa8c2f07677273f7c!2sIMHS%20MULTISPECIALITY%20HOSPITAL!5e0!3m2!1sen!2sin!4v1759915274665!5m2!1sen!2sin",
  },
  {
    id: 3,
    name: "Universal Dialysis at EON Hospital - Pune",
    lat: 18.562736401503052,
    lng: 73.93798023453844,
    address:
      "7th floor, HW7Q+25Q, Mundhwa - Kharadi Rd, near Om Battery, Shree Ram Society, Chandan Nagar, Kharadi, Pune, Maharashtra 411014",
    phone: "+91-80-4567-8901",
    hours: "24/7 Emergency Services",
    services: ["Hemodialysis", "Peritoneal Dialysis", "Home Dialysis"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60516.048987561255!2d73.8658945216797!3d18.56262640000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3e04dca5b35%3A0xe60a6f05a8c78018!2sEON%20HOSPITAL!5e0!3m2!1sen!2sin!4v1759915330404!5m2!1sen!2sin" 
  },
  {
    id: 4,
    name: "Universal Dialysis at Vinod Memorial Multi-speciality Hospital - Pune",
    lat: 18.573475266779816,
    lng: 73.8775043331239,
    address:
      "2nd floor, Vishrant Society, Vishrantwadi, Pune, Maharashtra 411015",
    phone: "+91-44-2890-1234",
    hours: "6:00 AM - 11:00 PM",
    services: ["Hemodialysis", "Peritoneal Dialysis", "Pediatric Care"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.029077590969!2d73.87510107393709!3d18.57272776758145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0d2739e99f3%3A0xec4c3c4a3bb12218!2sVinod%20memorial%20multi-speciality%20hospital!5e0!3m2!1sen!2sin!4v1759915368177!5m2!1sen!2sin" 
  },
  {
    id: 5,
    name: "Universal Dialysis at Kasturba Hospital - Pune",
    lat: 18.57292708628729,
    lng: 73.88172926794516,
    address:
      "1st floor, Plot No. 99A, Kasturba A Rd, Kasturba A, Kasturba Housing Society, Vishrantwadi, Pune, Maharashtra 411006",
    phone: "+91-33-2267-5432",
    hours: "24/7 Emergency Services",
    services: ["Hemodialysis", "Peritoneal Dialysis", "ICU Support"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30259.941831848326!2d73.8588892882988!3d18.55181186901732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c10daec1fe45%3A0x582b0f27b3cb8482!2sKasturba%20Hospital%2C%20Vishrantwadi%2C%20Pune!5e0!3m2!1sen!2sin!4v1759915413897!5m2!1sen!2sin"
  },
  {
    id: 6,
    name: "Universal Dialysis at Orchid Speciality Hospital- Pune",
    lat: 18.60078538757158,
    lng: 73.90967523682383,
    address:
      "4th floor, L-Square, Off. Dhanori Jakat Naka, Sr. No. - 282/3/3, Porwal Rd, Lohegaon, Pune, Maharashtra 411047",
    phone: "+91-40-4012-3456",
    hours: "6:00 AM - 10:00 PM",
    services: ["Hemodialysis", "Peritoneal Dialysis", "Transplant Support"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.411177125822!2d73.90712177393789!3d18.60056676672829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c6c0ffcb1773%3A0x14c46264ebd4f180!2sOrchid%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1759915457911!5m2!1sen!2sin"
  },
  {
    id: 7,
    name: "Universal Dialysis at Sai Shradha Hospital - Pune",
    lat: 18.6005079727987,
    lng: 73.90952842148124,
    address:
      "4th floor, Sr No. - 282/3, 3, Porwal Rd, Kutwal Colony, Lohegaon, Pune, Maharashtra 411047",
    phone: "+91-20-2613-7890",
    hours: "24/7 Emergency Services",
    services: ["Hemodialysis", "Peritoneal Dialysis", "Consultation"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.417532908655!2d73.90706982393782!3d18.600280616737084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c776e82d276b%3A0x8003078e8b17d370!2sSai%20Shradha%20Health%20Care%20Centre!5e0!3m2!1sen!2sin!4v1759915495668!5m2!1sen!2sin"
  },
  {
    id: 8,
    name: "Universal Dialysis at MAEER'S Vishwaraj Hospital - Pune",
    lat: 18.49007113303672,
    lng: 74.02249122702696,
    address:
      "1st floor, MAEER'S Vishwaraj Hospital, Pune Solapur Road, Near Loni Railway Station, Loni Kalbhor, Maharashtra 412201.",
    phone: "+91-79-2630-4567",
    hours: "6:00 AM - 11:00 PM",
    services: ["Hemodialysis", "Peritoneal Dialysis", "Emergency Care"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.867297027528!2d74.01975537393484!3d18.489669220120028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e962952e9f33%3A0x981154a5a58c7c16!2sVishwaRaj%20Hospital%20Pune!5e0!3m2!1sen!2sin!4v1759915543764!5m2!1sen!2sin"
  },
  {
    id: 9,
    name: "Universal Dialysis at Urokul Hospital - Pune",
    lat: 18.55653398480671,
    lng: 73.76993306928628,
    address:
      "3rd floor, Plot No: 61/2/1, 11/1, Mumbai Pune Bypass Rd Flyover, next to Bitwise Terratower, Mohan Nagar Co-Op Society, Baner, Pune, Maharashtra 411045",
    phone: "+91-141-2367-8901",
    hours: "6:00 AM - 10:00 PM",
    services: ["Hemodialysis", "Peritoneal Dialysis", "Home Care"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.389166672035!2d73.76736777393661!3d18.55648566807868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf51c774426b%3A0xa9cc5ad052c75e55!2sUrokul%20Hospital!5e0!3m2!1sen!2sin!4v1759915623540!5m2!1sen!2sin"
  },
  {
    id: 10,
    name: " Universal Dialysis at Gastrohub Hospital - Pune",
    lat: 18.59569764556311,
    lng: 73.78645017709074,
    address:
      "4th floor, Gastrohub Hospital, Royal Radiance, Wakad - Bhosari BRTS Rd, Next to SPOT18, Rahatani, Pune, Maharashtra 411027.",
    phone: "+91-484-2345-6789",
    hours: "24/7 Emergency Services",
    services: ["Hemodialysis", "Peritoneal Dialysis", "Pediatric Care"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7563.114953057825!2d73.77741647770995!3d18.593978999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b96e9f1ecb29%3A0x4eb944ff1993d1!2sGastrohub%20Hospital!5e0!3m2!1sen!2sin!4v1759915671139!5m2!1sen!2sin"
  },
  {
    id: 11,
    name: "Universal Dialysis at Aadhar Multi-speciality Hospital - Pune",
    lat: 18.98290151629482,
    lng: 74.0835249656701,
    address:
      "2nd floor, Aadhar Hospital, X3MM+3C3, Pargaon Shingave, Pargaon Tarf Awasari Bk., Maharashtra 412406",
    phone: "+91-484-2345-6789",
    hours: "24/7 Emergency Services",
    services: ["Hemodialysis", "Peritoneal Dialysis", "Pediatric Care"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.8404386680554!2d74.08096077394846!3d18.982652954898906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd2e8c04bf988b%3A0x7f3bbcb480ca182c!2sADHAR%20SUPERSPECIALITY%20HOSPITAL!5e0!3m2!1sen!2sin!4v1759915712069!5m2!1sen!2sin"
  },
  {
    id: 12,
    name: "Universal Dialysis at AiMS Hospital - Pune",
    lat: 18.563867561720333,
    lng: 73.81041336168632,
    address:
      "Ground floor and 4th floor, AIMS HOSPITAL & REASEARCH CENTER, Near AIMS square, Aundh Gaon, Aundh, Pune, Maharashtra 411007",
    phone: "+91-484-2345-6789",
    hours: "24/7 Emergency Services",
    services: ["Hemodialysis", "Peritoneal Dialysis", "Pediatric Care"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.250172848647!2d73.80772042393683!3d18.56275671788677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf85f7cb2933%3A0x11e85893cd229e97!2sAIMS%20HOSPITAL%20AND%20RESEARCH%20CENTER!5e0!3m2!1sen!2sin!4v1759915793586!5m2!1sen!2sin"
  },
  {
    id: 13,
    name: "Universal Dialysis at 7 Orange Hospital - Pune",
    lat: 18.645321830419505,
    lng: 73.77860528946054,
    address:
      "Bijli Nagar Rd, Pawana Nagar Housing Society, Chinchwad, Pimpri-Chinchwad, Maharashtra 411033",
    phone: "+91-484-2345-6789",
    hours: "24/7 Emergency Services",
    services: ["Hemodialysis", "Peritoneal Dialysis", "Pediatric Care"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120981.91166725199!2d73.63490184335936!3d18.633244500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9b96f6d7f11%3A0x83eed37a336ddf06!2s7%20Orange%20Hospital!5e0!3m2!1sen!2sin!4v1759915840307!5m2!1sen!2sin"
  },
];

const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearestCenter, setNearestCenter] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [isLocating, setIsLocating] = useState(false);
  const [mapId, setMapId] = useState(0);

  const getCurrentLocation = () => {
    setIsLocating(true);
    setLocationError(null);

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by this browser.");
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);

        // Find nearest dialysis center
        let nearest = null;
        let minDistance = Infinity;

        dialysisCenters.forEach((center) => {
          const distance = calculateDistance(
            latitude,
            longitude,
            center.lat,
            center.lng
          );
          if (distance < minDistance) {
            minDistance = distance;
            nearest = { ...center, distance: distance.toFixed(2) };
          }
        });

        setNearestCenter(nearest);
        setIsLocating(false);
      },
      (error) => {
        let errorMessage = "Unable to retrieve your location.";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied by user.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out.";
            break;
        }
        setLocationError(errorMessage);
        setIsLocating(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  };

  const openGoogleMaps = (center) => {
    const origin = userLocation ? userLocation.join(",") : "My+Location";
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${center.lat},${center.lng}&travelmode=driving`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className={`${styles.main}`}>
      <div className={`px-10 md:px-20 {styles.mapContainer}`}>
        <div className={styles.mapHeader}>
          <h2 className=" tracking-widest  underline-center">Universal Dialysis Centers</h2> 
          <div className={styles.mapControls}>
            <button
              onClick={getCurrentLocation}
              className={styles.locationBtn}
              disabled={isLocating}
            >
              <FaLocationArrow />
              {isLocating ? "Locating..." : "Find My Location"}
            </button>
          </div>
        </div>

        {locationError && (
          <div className={styles.errorMessage}>
            <p>{locationError}</p>
          </div>
        )}

        {nearestCenter && (
          <div className={styles.nearestCenter}>
            <h3>Nearest Center to You</h3>
            <div className={styles.centerInfo}>
              <h4>{nearestCenter.name}</h4>
              <p>
                <FaMapMarkerAlt /> {nearestCenter.address}
              </p>
              <p>
                <FaPhone /> {nearestCenter.phone}
              </p>
              <p>
                <FaClock /> {nearestCenter.hours}
              </p>
              <p className={styles.distance}>
                Distance: {nearestCenter.distance} km
              </p>
              <button
                onClick={() => openGoogleMaps(nearestCenter)}
                className={styles.focusBtn}
              >
                Open Google Maps 
              </button>
            </div>
          </div>
        )}

        <div className={styles.mapWrapper}>
          <iframe
            src={dialysisCenters[mapId].map} // use mapSrc instead of full iframe
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={styles.centersList}>
          <h3 className="underline-center">All Universal Dialysis Centers in Pune</h3>
          <div className={styles.centersGrid}>
            {dialysisCenters.map((center,index) => (
              <div key={center.id} className={styles.centerCard}>
                <h4>{center.name}</h4>
                <p>
                  <span>
                    <FaMapMarkerAlt />{" "}
                  </span>
                  {center.address}
                </p>
                <p>
                  <span>
                    <FaPhone />{" "}
                  </span>
                  {center.phone}
                </p>
                <p>
                  <span>
                    <FaClock />
                  </span>{" "}
                  {center.hours}
                </p>
                {nearestCenter && nearestCenter.id === center.id && (
                  <p className={styles.nearestTag}>
                    Nearest to You ({nearestCenter.distance} km)
                  </p>
                )}
                <div className="flex whitespace-nowrap text-sm items-center justify-center">
                  <button onClick={() => {setMapId(index)}} className={styles.focusBtn}>
                    View Map
                  </button>
                  <button
                    onClick={() => openGoogleMaps(center)}
                    className={styles.focusBtn}
                  >
                    Open Google Maps
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
