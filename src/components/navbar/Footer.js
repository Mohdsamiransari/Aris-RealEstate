import React from "react";
import Logo from "../../assets/logo.png";
import { MdFacebook } from "react-icons/md";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { Links } from "../navbar/Links";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full max-sm:h-96  h-72 bg-slate-900 flex flex-col items-center p-8 text-white gap-5 mt-20">
      <h1 className="text-3xl">Aris</h1>
      <p className="text-center max-sm:w-5/6 w-1/2">
        Welcome to our real estate agency! At Aris, we are dedicated to
        providing exceptional real estate services tailored to your unique
        needs.
      </p>
      <ul className="flex gap-8 text-xl ">
        <li className="hover:text-black hover:bg-white rounded-full">
          <Link>
            <MdFacebook />
          </Link>
        </li>
        <li className="hover:text-black hover:bg-white rounded-full">
          <Link>
            <BsInstagram />
          </Link>
        </li>
        <li className="hover:text-black hover:bg-white rounded-full">
          <Link>
            <BsLinkedin />
          </Link>
        </li>
        <li className="hover:text-black hover:bg-white rounded-full">
          <Link>
            <BsTwitter />
          </Link>
        </li>
      </ul>
      <ul className="flex max-sm:gap-5 gap-8">
        <Links />
      </ul>
      <p>Created By - Aris</p>
    </div>
  );
};
