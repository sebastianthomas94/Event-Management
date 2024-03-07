import React from "react";
import { GiJusticeStar } from "react-icons/gi";

function Meeting({ i }) {
  return (
    <div
      className={`flex flex-row justify-center w-[100%] h-auto mt-[5px] p-[15px] mx-auto border-purple-300 border border-solid  shadow-xs rounded-[12px] ${
        i == 1 ? `bg-[#d175b6]` : `bg-black`
      }`}
    >
      <div className="flex flex-col items-start justify-start w-full gap-px">
        <div className="flex flex-row justify-start items-center pt-0.5 gap-2.5">
          <p className="font-medium">Meeting Room {i}</p>
          <GiJusticeStar size={35} />

          <p className="mr-[9px] !text-black-900 !font-medium">12 Positions</p>
        </div>
        <p className="text-sm">
          Start from 12 Jan, 2023 - Ends at 15 Jan, 2023
        </p>
      </div>
    </div>
  );
}

export default Meeting;
