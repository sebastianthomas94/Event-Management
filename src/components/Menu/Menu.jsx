import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
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
];

function Menu() {
  return (
    <div className="flex flex-col items-center justify-start w-[19%] gap-[227px] p-5 border-purple-500 border-2 border-solid shadow-xs rounded-[16px]">
    <div className="flex flex-col items-center justify-start w-full gap-1 text-white">
      <select
        name="events"
        className="flex w-full pl-5 pr-[35px] gap-px py-[18px] text-purple-500 text-xl border-purple-500 border border-solid bg-black shadow-sm rounded-lg"
        // onChange={handleChange}
      >
        <option value="" disabled selected hidden>
          Events
        </option>
        {dropDownOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="flex flex-row justify-end w-full pt-[3px]">
        <div className="flex flex-row justify-start items-start w-[89%] gap-[5px]">
          <div className="flex flex-col items-center justify-start w-[6%]">
            <div className="flex flex-col items-center justify-start w-full">
              {/* <div className="flex flex-col items-center justify-start w-full z-[1] text-white-A700">


              </div> */}
              {/* <div className="flex flex-col items-center justify-start w-full mt-[-10px]">

              </div> */}
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[93%] gap-2">
            <button className="flex items-center justify-center w-full h-[36px] px-[13px] text-[#d175b6] text-center text-sm font-light border-[#d175b6] border border-solid bg-black shadow-xs rounded">
              New Requests
            </button>
            <div className="flex flex-row justify-between items-center w-full p-1 text-white-A700">
              <p className="ml-2.5 capitalize ">
                estimate{" "}
              </p>
              <p
                className="flex justify-center items-center h-[24px] w-[24px] mt-1 mr-[5px]  bg-white text-shadow-ts1 text-center rounded-[50%] text-black"
              >
                9
              </p>
            </div>
            <div className="flex flex-row justify-start w-full p-1.5">
              <p

                className="mt-px ml-[7px] capitalize "
              >
                Events
              </p>
            </div>
            <div className="flex flex-row justify-start w-full p-[5px]">
              <p

                className="mt-[3px] ml-2 capitalize"
              >
                Partial Requests
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start w-full p-2.5">
        <p  className="ml-[9px] capitalize text-xl">
          Positions
        </p>
      </div>
      <div className="flex flex-row justify-start w-full p-2.5">
        <p  className="mt-px ml-[9px] capitalize text-xl">
          Contractors
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full p-3">
        <p  className="mt-px ml-[7px] capitalize text-xl">
          Users
        </p>
      </div>
      <div className="flex flex-row justify-end w-full pt-[3px]">
        <div className="flex flex-row justify-start items-start w-[89%] gap-[5px]">
          <div className="flex flex-col items-center justify-start w-[6%]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">

              </div>

            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[93%] mt-[3px] gap-2">
            <div className="flex flex-row justify-start w-full p-[7px]">
              <p  className="ml-1.5 capitalize">
                admins
              </p>
            </div>
            <div className="flex flex-row justify-start w-full p-[7px]">
              <p  className="ml-1.5 capitalize">
                clients
              </p>
            </div>
            <div className="flex flex-row justify-start w-full p-[7px]">
              <p className="ml-1.5 capitalize">
                Coordinators
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start w-full p-2.5">
        <p className="ml-[9px] capitalize">
          Profile
        </p>
      </div>
    </div>
    <button
      className="flex items-center justify-center w-full h-[56px] gap-4 px-[35px] text-white-A700 capitalize text-center text-base bg-black shadow-xs rounded-lg"
    >
      Logout
    </button>
  </div>
  );
}

export default Menu;
