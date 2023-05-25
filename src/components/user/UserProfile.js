import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { UserInfo } from './UserInfo'
import { ChangePassword } from './ChangePassword'
import { Dashboard } from '../Admin/Dashboard'
import { Helmet } from "react-helmet";
const Buttons = ({ label, onClick }) => {
  return (
    <button className="px-4 py-2 mx-2 font-medium" onClick={onClick}>
      {label}
    </button>
  );
};
const Content = ({ activeContent }) => {
  
  return (
    <div className="h-full basis-full">
      {activeContent === 1 && <UserInfo />}
      {activeContent === 2 && <ChangePassword />}
      {activeContent === 3 && <Dashboard />}
    </div>
  );
};
const UserProfile = () => {
  const userData = JSON.parse(localStorage.getItem("auth"))

  const navigate = useNavigate();

  const [activeContent, setActiveContent] = useState(1);

  const changeContent = (contentNumber) => {
    setActiveContent(contentNumber);
  };
  const logoutHandle = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };
  return (
    <div className="container  ">
      <Helmet>
        <title>Aris - Profile</title>
      </Helmet>
      <div className="h-screen flex flex-row items-end p-1  ">

        <div className="basis-[20%]  flex flex-col border-r-2 h-[86%] ">
          <div className="basis-2/6 grid ">
            <h1 className="text-xl font-semibold place-self-center tracking-wide font-sans">
              User Profile
            </h1>
          </div>
          <div className="basis-full  flex flex-col mx-auto justify-center gap-5 text-lg">
            <div className="flex items-center">
              <CgProfile />
              <Buttons label="User Info" onClick={() => changeContent(1)} />
            </div>
            <div className="flex items-center">
              <CgProfile />
              <Buttons label="Security" onClick={() => changeContent(2)} />
            </div>

            
            <div className="flex items-center">
            <CgProfile />
            <Buttons label="DashBoard" onClick={() => changeContent(3)} />
          </div>
          </div>
          <div className="basis-5/6 flex justify-center w-5/6">
            <button
              className="text-red-500 flex items-center gap-1 hover:text-red-700"
              onClick={logoutHandle}
            >
              <RiLogoutCircleLine />
              Log out
            </button>
          </div>
        </div>
        <Content activeContent={activeContent} />
      </div>
    </div>
  );
};
export default UserProfile;