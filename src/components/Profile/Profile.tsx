import React from "react";
import { CiSquareInfo } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import profilePic from './img/profilePic.jpeg';


function Profile() {
  return (
    <div className="flex flex-row justify-center w-[34%] top-[3%] right-0 left-0 m-auto relative ">
      <div className="flex flex-row justify-between items-center w-full">
        <CiSquareInfo className="h-[32px] w-[32px]" />
        <IoIosNotificationsOutline  className="h-[32px] w-[32px]" />
        <div className="flex flex-row justify-start items-center w-[67%] gap-2">
          <div className="flex flex-col items-start justify-start w-[68%]">
            <p className="text-shadow-ts">
              <span className="text-white">Hi, </span>
              <span className="text-[#00eec5]">Muhammad Asad</span>
            </p>
            <p className="!font-light text-shadow-ts">welcome back!</p>
          </div>
          <img
            src={profilePic}
            alt="circleimage"
            className="h-[64px] w-[64px] rounded-[50%] border-2 border-purple-300"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
