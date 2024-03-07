import React from "react";
import { RxDot } from "react-icons/rx";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const tableData = [
  {
    position: "Camera 1 (Video)",
    time: "9 am - 7 pm",
    info: "LP default",
    quantity: "20",
  },
  {
    position: "Camera 1 (Video)",
    time: "9 am - 7 pm",
    info: "LP default",
    quantity: "20",
  },
  {
    position: "Camera 1 (Video)",
    time: "9 am - 7 pm",
    info: "LP default",
    quantity: "20",
  },
  {
    position: "Camera 1 (Video)",
    time: "9 am - 7 pm",
    info: "LP default",
    quantity: "20",
  },
  {
    position: "Camera 1 (Video)",
    time: "9 am - 7 pm",
    info: "LP default",
    quantity: "20",
  },
  {
    position: "Camera 1 (Video)",
    time: "9 am - 7 pm",
    info: "LP default",
    quantity: "20",
  },
  {
    position: "Camera 1 (Video)",
    time: "9 am - 7 pm",
    info: "LP default",
    quantity: "20",
  },
  {
    position: "Camera 1 (Video)",
    time: "9 am - 7 pm",
    info: "LP default",
    quantity: "20",
  },
  {
    position: "Camera 1 (Video)",
    time: "9 am - 7 pm",
    info: "LP default",
    quantity: "20",
  },
];

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

function Positions() {
  return (
    <div className="flex flex-col items-start justify-start w-[72%] pt-[38px] gap-2 overflow-visible">
      <p className="text-xl">Positions</p>
      <div className="flex flex-row justify-start w-full">
        <div className="flex flex-col items-center justify-start w-full border-purple-700 border border-solid shadow-xl rounded-xl bg-black">
          <table className="border-collapse w-full">
            <thead>
              <tr className=" text-white border-purple-800 ">
                <th className=" px-4 py-2">Position</th>
                <th className=" px-4 py-2">Time</th>
                <th className=" px-4 py-2">Info</th>
                <th className=" px-4 py-2">Quantity</th>
                <th className=" px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr
                  key={index}
                  className="text-center border border-purple-800"
                >
                  <td className=" px-4 py-2">{data.position}</td>
                  <td className=" px-4 py-2">{data.time}</td>
                  <td className=" px-4 py-2">{data.info}</td>
                  <td className=" px-4 py-2">{data.quantity}</td>
                  <td className=" px-4 py-2">
                    {" "}
                    <select
                      name="Search Coordinator"
                      className="w-full gap-px font-light text-xs rounded-lg  bg-transparent border border-white py-2 mt-0"
                    >
                      <option
                        key={100}
                        value={"Search Coordinator"}
                        className=""
                      >
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-row justify-center w-full p-2 rounded-bl-lg rounded-br-lg bg-black-900">
            <FaLongArrowAltRight className="my-auto" />
            <RxDot size={35} />
            <RxDot color="purple" size={35} />
            <FaLongArrowAltLeft className="my-auto" />

            {/* <Img
            src="images/img_frame_39235.svg"
            alt="image_one"
            className="h-[24px]"
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Positions;
