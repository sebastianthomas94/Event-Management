import React, { useState } from "react";

function Tabs() {

    const [activeTab, setActiveTab] = useState(0); // State to track the active tab

    const handleTabClick = (index) => {
      setActiveTab(index); // Update the active tab when clicked
    };
  return (
    <div className="flex flex-row justify-start w-fit mt-2  border-purple-600 border-2 border-solid rounded-lg">
      <div
        className={`ps-4 p-2 capitalize text-base font-normal cursor-pointer ${
          activeTab === 0 ? "bg-[#ff3ec5] text-black" : "text-purple-600 " // Apply background color when active
        }`}
        onClick={() => handleTabClick(0)} // Handle click event
      >
        Event Details
      </div>
      <div
        className={`ps-4 p-2 capitalize text-base font-normal cursor-pointer ${
          activeTab === 1 ? "bg-[#ff3ec5] text-black" : "text-purple-600 " // Apply background color when active
        }`}
        onClick={() => handleTabClick(1)} // Handle click event
      >
        Assign Coordinator/Coordinator
      </div>
      <div
        className={`ps-4 p-2 capitalize text-base font-normal cursor-pointer ${
          activeTab === 2 ? "bg-[#ff3ec5] text-black" : "text-purple-600 " // Apply background color when active
        }`}
        onClick={() => handleTabClick(2)} // Handle click event
      >
        Session Management
      </div>
      <div
        className={`ps-4 p-2 capitalize text-base font-normal cursor-pointer ${
          activeTab === 3 ? "bg-[#ff3ec5] text-black" : "text-purple-600 " // Apply background color when active
        }`}
        onClick={() => handleTabClick(3)} // Handle click event
      >
        Generate SOW
      </div>
    </div>
  );
}

export default Tabs;
