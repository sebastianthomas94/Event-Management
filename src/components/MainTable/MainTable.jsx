import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const tableData = [
  {
    row: "Filled Name",
    eventstart: "Jan 12, 2024",
    roweventend: "Jan 14, 2024",
    rowclientname: "Muhammad Asad",
    contactinfo: "+ 1 234 566 7890",
    venue: "Lorem ipsum dolor sit amet",
  },
  {
    row: "Filled Name",
    eventstart: "Jan 12, 2024",
    roweventend: "Jan 14, 2024",
    rowclientname: "Muhammad Asad",
    contactinfo: "+ 1 234 566 7890",
    venue: "Lorem ipsum dolor sit amet",
  },
  {
    row: "Filled Name",
    eventstart: "Jan 12, 2024",
    roweventend: "Jan 14, 2024",
    rowclientname: "Muhammad Asad",
    contactinfo: "+ 1 234 566 7890",
    venue: "Lorem ipsum dolor sit amet",
  },
  {
    row: "Filled Name",
    eventstart: "Jan 12, 2024",
    roweventend: "Jan 14, 2024",
    rowclientname: "Muhammad Asad",
    contactinfo: "+ 1 234 566 7890",
    venue: "Lorem ipsum dolor sit amet",
  },
  {
    row: "Filled Name",
    eventstart: "Jan 12, 2024",
    roweventend: "Jan 14, 2024",
    rowclientname: "Muhammad Asad",
    contactinfo: "+ 1 234 566 7890",
    venue: "Lorem ipsum dolor sit amet",
  },
  {
    row: "Filled Name",
    eventstart: "Jan 12, 2024",
    roweventend: "Jan 14, 2024",
    rowclientname: "Muhammad Asad",
    contactinfo: "+ 1 234 566 7890",
    venue: "Lorem ipsum dolor sit amet",
  },
  {
    row: "Filled Name",
    eventstart: "Jan 12, 2024",
    roweventend: "Jan 14, 2024",
    rowclientname: "Muhammad Asad",
    contactinfo: "+ 1 234 566 7890",
    venue: "Lorem ipsum dolor sit amet",
  },
  {
    row: "Filled Name",
    eventstart: "Jan 12, 2024",
    roweventend: "Jan 14, 2024",
    rowclientname: "Muhammad Asad",
    contactinfo: "+ 1 234 566 7890",
    venue: "Lorem ipsum dolor sit amet",
  },
  {
    row: "Filled Name",
    eventstart: "Jan 12, 2024",
    roweventend: "Jan 14, 2024",
    rowclientname: "Muhammad Asad",
    contactinfo: "+ 1 234 566 7890",
    venue: "Lorem ipsum dolor sit amet",
  },
  {
    row: "Filled Name",
    eventstart: "Jan 12, 2024",
    roweventend: "Jan 14, 2024",
    rowclientname: "Muhammad Asad",
    contactinfo: "+ 1 234 566 7890",
    venue: "Lorem ipsum dolor sit amet",
  },
  {
    row: "Filled Name",
    eventstart: "Jan 12, 2024",
    roweventend: "Jan 14, 2024",
    rowclientname: "Muhammad Asad",
    contactinfo: "+ 1 234 566 7890",
    venue: "Lorem ipsum dolor sit amet",
  },
  {
    row: "Filled Name",
    eventstart: "Jan 12, 2024",
    roweventend: "Jan 14, 2024",
    rowclientname: "Muhammad Asad",
    contactinfo: "+ 1 234 566 7890",
    venue: "Lorem ipsum dolor sit amet",
  },
  {
    row: "Filled Name",
    eventstart: "Jan 12, 2024",
    roweventend: "Jan 14, 2024",
    rowclientname: "Muhammad Asad",
    contactinfo: "+ 1 234 566 7890",
    venue: "Lorem ipsum dolor sit amet",
  },
  {
    row: "Filled Name",
    eventstart: "Jan 12, 2024",
    roweventend: "Jan 14, 2024",
    rowclientname: "Muhammad Asad",
    contactinfo: "+ 1 234 566 7890",
    venue: "Lorem ipsum dolor sit amet",
  },
  {
    row: "Filled Name",
    eventstart: "Jan 12, 2024",
    roweventend: "Jan 14, 2024",
    rowclientname: "Muhammad Asad",
    contactinfo: "+ 1 234 566 7890",
    venue: "Lorem ipsum dolor sit amet",
  },
  {
    row: "Filled Name",
    eventstart: "Jan 12, 2024",
    roweventend: "Jan 14, 2024",
    rowclientname: "Muhammad Asad",
    contactinfo: "+ 1 234 566 7890",
    venue: "Lorem ipsum dolor sit amet",
  },
];

function MainTable() {
  const [searchBarValue, setSearchBarValue] = useState("");
  return (
    <div className="flex flex-col items-center justify-start w-[81%] border-purple-500 border-2 border-solid shadow-xs rounded-[16px]">
      {/* heading and search bar */}
      <div className="flex flex-row justify-between items-center w-full p-1.5">
        <p className="mt-[11px] ml-[33px] text-[#ffffff] text-2xl">
          Event Requests
        </p>
        <div className="flex flex-row justify-start items-center w-[27%] mr-[33px] gap-2.5">
          <div className="flex items-center justify-center w-[88%] h-[44px] pl-4 pr-[35px] gap-2.5 text-white text-base font-light border-white border border-solid shadow-xs rounded-lg ">
            <CiSearch size={35} />

            <input
              name="search"
              type="text"
              placeholder="Search here"
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e.target.value)}
              className=" bg-transparent w-full h-auto"
            />
          </div>

          <button className="flex items-center justify-center h-[34px] w-[34px] border-white border border-solid bg-[#751b8b] shadow-md rounded">
            <FaPlus color="white" />
          </button>
        </div>
      </div>
      {/* table */}
      <div className="flex flex-col items-center justify-start w-full border-[#d175b6] border-[3px] border-solid">
        <table className="w-full">
          <thead className="bg-[#d175b6]">
            <tr>
              <th className="px-3 py-2.5">Event Name</th>
              <th className="px-3 py-2.5">Event Start</th>
              <th className="px-3 py-2.5">Event End</th>
              <th className="px-3 py-2.5">Client Name</th>
              <th className="px-3 py-2.5">Contact Info</th>
              <th className="px-3 py-2.5">Venue</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="border-[#d175b6] border-b-2 border-solid text-white"
                >
                  <td className="px-3 py-2.5">{item.row}</td>
                  <td className="px-3 py-2.5">{item.eventstart}</td>
                  <td className="px-3 py-2.5">{item.roweventend}</td>
                  <td className="px-3 py-2.5">{item.rowclientname}</td>
                  <td className="px-3 py-2.5">{item.contactinfo}</td>
                  <td className="px-3 py-2.5">{item.venue}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex flex-row justify-center w-full p-3 rounded-bl-lg rounded-br-lg border-[#d175b6] border-t-2 border-solid bg-black">
          {/* page nation */}
          <div className="flex flex-row justify-start items-center w-[14%] gap-5">
            <FaLongArrowAltRight size={35} />

            <p className="">1</p>
            <p className="">2</p>
            <p className="">3</p>
            <p className="text-[#d175b6] text-lg ">4</p>
            <FaLongArrowAltLeft size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTable;
