import React from "react";
import Profile from "../../components/Profile/Profile.tsx";
import Menu from "../../components/Menu/Menu.jsx";
import MainTable from "../../components/MainTable/MainTable.jsx";
import { useNavigate } from "react-router-dom";

function Page1() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/details");
  };

  return (
    <div className="flex flex-row justify-center w-full " onClick={handleClick}>
      <div className="flex flex-col items-center justify-start w-[100vw] h-auto pt-auto gap-5 ">
        {" "}
        <Profile />
        <div className="flex flex-row justify-start w-full gap-4 p-[38px] my-10 ">
          {" "}
          <Menu />
          <MainTable />
        </div>
      </div>
    </div>
  );
}

export default Page1;
