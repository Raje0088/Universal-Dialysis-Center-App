import React from "react";

const MakeAppointment = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5 items-center px-10 md:px-20 py-10 bg-[#f7fcfc]">
      <h2 className="tracking-widest  underline-center">
        MAKE AN APPOINTMENT 
      </h2>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        praesentium blanditiis dolore vitae incidunt quia sint aliquam
        asperiores laudantium voluptatibus necessitatibus ipsam dolores velit
        officiis sunt, totam distinctio veritatis? Pariatur.
      </h4>
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10">
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
          type="date"
          className="w-full bg-white border-1 p-2"
          placeholder="Date of Birth"
        />
        <select name="" id="" className="w-full bg-white border-1 p-2">
          <option value="1">Select Department</option>
          <option value="1">Department 1</option>
          <option value="2">Department 2</option>
          <option value="3">Department 3</option>
        </select>
        <select name="" id="" className="w-full bg-white border-1 p-2">
          <option value="1">Select Doctor</option>
          <option value="1">Doctor 1</option>
          <option value="2">Doctor 2</option>
          <option value="3">Doctor 3</option>
        </select>
      </div>
      <div className="w-full h-32">
        <textarea className="w-full h-32 bg-white border p-2 overflow-auto !resize-y"></textarea>
      </div>
      <div className="w-full h-auto flex items-center justify-center ">
        <button>Make an Appointment</button>
      </div>
    </div>
  );
};

export default MakeAppointment;
