import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";
import { UserInfo } from './UserInfo'
import { ChangePassword } from './ChangePassword'
import { Dashboard } from '../Admin/Dashboard'
import { Helmet } from "react-helmet";
import { UpdateProfile } from "./UpdateProfile";
const Buttons = ({ label, onClick }) => {
  return (
    <button className="px-4 py-2 mx-2 " onClick={onClick}>
      {label}
    </button>
  );
};
const Content = ({ activeContent }) => {
  
  return (
    <div className="h-full basis-full">
      {activeContent === 1 && <UserInfo />}
      {activeContent === 2 && <UpdateProfile />}
      {activeContent === 3 && <ChangePassword />}
      {activeContent === 4 && <Dashboard />}
    </div>
  );
};
const UserProfile = () => {
  const isAuthenticatedUser = localStorage.getItem("auth");

   const userData = JSON.parse(isAuthenticatedUser)

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
          <div className="basis-2/6 grid items-center justify-center ">
            <div
              className="w-32 h-32  rounded-full ml-8 bg-cover"
              style={{ backgroundImage: `url(${userData.user.avatar})` }}
            ></div>
          </div>
          <div className="basis-full  flex flex-col mx-auto justify-center gap-5 text-lg">
            <div className="flex items-center">
            
              <Buttons label={userData.user.username} onClick={() => changeContent(1)} />
            </div>
            <div>
              <h2 className="font-semibold">Security</h2>
              <ul>
                <li className="flex items-center "><Buttons label="Update Profile" onClick={() => changeContent(2)} /></li>
                <li className="flex items-center"><Buttons label="Change Password" onClick={() => changeContent(3)} /></li>
              </ul>
            </div>
            {!isAuthenticatedUser?"":
            <div className={userData.user.role === "admin"?"flex items-center":"hidden"}>
              <h2 className="font-semibold">Admin</h2>
              <ul>
                <li className="flex items-center "><Buttons label="DashBoard" onClick={() => changeContent(4)} /></li>
              </ul>
            </div>
            }

           
           
            
            
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