import React from "react";
import Profile from "../../components/Profile/Profile.tsx";
import Menu from "../../components/Menu/Menu";
import DetailsMain from "../../components/DetailsMain/DetailsMain.jsx";
import { useNavigate } from "react-router-dom";

function Page2() {

  return (
    <div className="flex flex-row justify-center w-full ">
      <div className="flex flex-col items-center justify-start w-[100vw] h-auto pt-auto gap-5 ">
        {" "}
        <Profile />
        <div className="flex flex-row justify-start w-full gap-4 p-[38px] my-10 ">
          {" "}
          <Menu />
          <DetailsMain />
        </div>
      </div>
    </div>
  );
}

export default Page2;
