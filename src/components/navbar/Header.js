import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { RxCross2 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { Links } from "./Links";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const isAuthenticatedUser = localStorage.getItem("auth");
  const navigate = useNavigate();

  const [hamburger, setHamburger] = useState(true);

  const isMenuClicked = () => {
    setHamburger(!hamburger);
  };
  const userData = JSON.parse(isAuthenticatedUser)
  const logoutHandle = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <div className="font-sans">
      <div
        className={
          !hamburger
            ? "grid grid-rows-4 h-screen w-1/2 max-sm:w-10/12  text-center bg-slate-800 text-white absolute right-0 z-20  ease-in-out duration-500"
            : "fixed right-[-100%]"
        }
      >
        <div className="text-2xl  m-10 flex items-center justify-between">
          <i>
            <CgProfile />
          </i>
          <button onClick={isMenuClicked}>
            {!hamburger ? <RxCross2 /> : ""}
          </button>
        </div>

        <ul className=" grid gap-5 ">
          <Links />
        </ul>
        <div className="grid items-end justify-center">
          {!isAuthenticatedUser ? (
            <Link to="/login">
              <button className="px-4 py-2 border border-white font-semibold  rounded-lg   hover:shadow-md hover:shadow-slate-300">
                Login
              </button>
            </Link>
          ) : (
            <button
              className="px-4 py-2 border border-white font-semibold  rounded-lg  hover:bg-black hover:shadow-md hover:shadow-slate-300"
              onClick={logoutHandle}
            >
              Logout
            </button>
          )}
        </div>
      </div>

      <div className=" absolute sm: z-10 w-full flex justify-evenly items-center py-6 bg-transparent text-white bg-gradient-to-t from-transparent to-black max-md:justify-around">
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" className="w-24" />
          </Link>
        </div>
        <ul className="flex justify-evenly gap-5 max-md:hidden  text-lg  ">
          <Links />
        </ul>
        <ul className="flex justify-evenly items-center gap-3 max-md:hidden">
          {!isAuthenticatedUser ? (
            ""
          ) : (
            <Link
              to="/profile"
              className="text-black bg-white w-9 h-9   rounded-full  text-xl  hover:shadow-md hover:shadow-slate-300 hover:ease-in-out hover:duration-200"
            >
              {userData.user.avatar?<div className="bg-cover w-full h-full rounded-full" style={{backgroundImage: `url(${userData.user.avatar})`}}></div>:<CgProfile/>}
            </Link>
          )}
          {!isAuthenticatedUser ? (
            <Link to="/login">
              <button className="px-4 py-2 border border-white font-semibold  rounded-lg  hover:bg-black hover:shadow-md hover:shadow-slate-300 hover:ease-in-out hover:duration-200">
                Login
              </button>
            </Link>
          ) : (
            <button
              className="px-4 py-2 border bg-red-700  border-white font-semibold  rounded-lg  hover:bg-black hover:shadow-md hover:shadow-slate-300 hover:ease-in-out hover:duration-200"
              onClick={logoutHandle}
            >
              Logout
            </button>
          )}
        </ul>
        <button className="md:hidden " onClick={isMenuClicked}>
          <div class="space-y-2">
            <span class="block w-6 h-0.5 bg-white"></span>
            <span class="block w-4 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
