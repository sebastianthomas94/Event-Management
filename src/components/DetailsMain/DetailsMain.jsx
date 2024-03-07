import React, { useState } from "react";
import Tabs from "../Tabs";
import Meeting from "../Meeting/Meeting";
import Positions from "../Positions/Positions";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];


function DetailsMain() {
  return (
    <div className="flex flex-col px-8 py-3 justify-start w-[81%] border-purple-500 border-2 border-solid shadow-xs rounded-[16px]">
      {/* heading and search bar */}
      <div className="flex flex-row justify-start  items-baseline w-full p-1.5">
        <span className="text-white text-3xl">Event Name </span>
        <span className="text-white   font-light px-2">(Venue Details)</span>
      </div>
      {/* tabs topics clickable */}
      <Tabs />
      {/* first row */}
      <div className="flex flex-row justify-start items-start w-full gap-5 pt-5">
        <div className="flex flex-col items-start justify-start w-[50%] gap-[5px]">
          <p className="text-xl">Assign Coordinator</p>
          <div className="flex flex-col items-start justify-start w-full gap-1">
            <select
              name="Search Coordinator"
              className="w-full gap-px font-light rounded-lg  bg-transparent border border-white py-3.5 mt-0"
            >
              <option key={100} value={"Search Coordinator"} className="">
                Search Coordinator
              </option>
              {dropDownOptions.map((option) => (
                <option
                  key={option.value}
                  className="text-black"
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
            <p className="text-purple-700 capitalize text-sm">
              Add New Coordinator
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[50%] gap-[7px]">
          <p className="text-xl">
            <span className="text-white">Event Name </span>
            <span className="text-white text-sm font-light">(Venue Here)</span>
          </p>
          <div className="flex flex-col items-center justify-start w-full gap-2.5">
            <div className="flex flex-row justify-start w-full gap-[181px] p-[3px] border-purple border border-solid border-purple-500 bg-[#00000019] rounded-[3px]">
              <p size="lg" as="p" className="mt-px ml-1.5 font-medium">
                <span className="text-white-A700 font-light">Start:</span>
                <span className="text-white-A700">12-12-2023</span>
              </p>
              <p size="lg" as="p" className="!font-medium">
                <span className="text-white-A700 font-light">Ends:</span>
                <span className="text-white-A700">15-12-2023</span>
              </p>
            </div>
            <p className="flex justify-start items-center w-full h-auto pt-1.5 pb-px pl-2.5 pr-[35px] !font-medium border border-solid border-purple-500 bg-black-900_19 rounded-[3px]">
              <span className="text-white font-light">Venue Address:</span>
              <span className="text-white">
                Some Location 12, Name Here, City, State.
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* second row */}
      <div className="flex flex-row justify-start w-full gap-5 mt-5">
        {/* meeting block */}
        <div className="flex flex-col items-start justify-start w-[33%] gap-[5px]">
          <p className="text-xl my-2">Assign Contractor</p>
          <div className="flex flex-col w-full h-auto gap-4 p-[11px] border-purple-800 border border-solid bg-[#00000066] shadow-lg rounded-[12px]">
            {Array(5)
              .fill(0)
              .map((val, i) => (
                <Meeting i={i + 1} />
              ))}
          </div>
        </div>
        {/* positions block */}
        <Positions />
      </div>
      <button className=" mx-auto min-w-[212px] m-5 w-fit rounded-[12px] py-5 text-lg shadow-md bg-[#d85ad8]">
                        Save Edits
        </button>
    </div>
  );
}

export default DetailsMain;
