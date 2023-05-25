import React, { useEffect, useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineBathroom, MdOutlineBedroomParent } from "react-icons/md";
import { BsTextarea } from "react-icons/bs";
import { URL } from "../Url";

export const PropertyDetail = () => {
  const [propertyapi, setProperty] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const getProperty = async () => {
    let response = await fetch(`${URL}property`);
    const prop = await response.json();
    setProperty(prop.product);
    setActiveTab(prop.product[0]);
  };

  useEffect(() => {
    getProperty();
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="h-screen max-lg:h-fit  flex justify-center items-center">
      <div className="w-10/12 h-5/6 max-lg:h-fit relative">
        {activeTab && (
          <div className="h-5/6  grid grid-cols-2 max-lg:grid-cols-1 gap-8">
            <div className="">
              <img
                src={activeTab.image}
                alt="Property"
                className="rounded-lg"
              />
            </div>

            <div className=" flex flex-col gap-3 ">
              <div className="flex justify-between">
                <div className="flex justify-between gap-5 text-white">
                  <p className="bg-slate-900 px-3 py-1 rounded-2xl">
                    For {activeTab.propertyType}{" "}
                  </p>
                  <p className="bg-slate-900 px-3 py-1 rounded-2xl">Featured</p>
                </div>
                {/* <p>Build 2018</p> */}
              </div>
              <div>
                <h1 className="text-3xl mb-1">{activeTab.name} </h1>
                <p className="text-sm">{activeTab.address}</p>
              </div>
              <div className="flex gap-5 text-white relative left-[-5pc] max-lg:left-0 mb-3">
                <div className="w-28 h-24 bg-slate-900 rounded-lg flex justify-center items-center gap-2">
                  <MdOutlineBathroom /> {activeTab.bathroom}
                </div>
                <div className="w-28 h-24 bg-slate-900 rounded-lg flex justify-center items-center gap-2">
                  <MdOutlineBedroomParent /> {activeTab.bedroom}
                </div>
                <div className="w-36 h-24 bg-slate-900 rounded-lg flex justify-center items-center gap-2">
                  <BsTextarea />
                  {activeTab.squareFoot}
                </div>
              </div>
              <p className="text-2xl">
                ${activeTab.price} <span className="text-lg">/ Monthly</span>
              </p>
              <p className="text-sm w-5/6 truncate">{activeTab.description}</p>
            </div>
          </div>
        )}

        <div className="grid w-1/2 max-lg:w-5/6 max-sm:w-full  grid-cols-7 gap-2 h-[20%]  relative">
          {propertyapi.slice(0, 3).map((index, i) => (
            <img
              key={i._id}
              src={index.image}
              alt={index.title}
              className="cursor-pointer col-span-2 rounded-lg h-full"
              onClick={() => handleTabClick(index)}
            />
          ))}
          <div className="bg-slate-900 justify-center items-center text-white flex flex-col  rounded-lg">
            <i className="text-xl">
              <HiOutlineHome />
            </i>
            <p>3</p>
            <p className="text-sm max-sm:hidden ">Properties</p>
          </div>
        </div>
      </div>
    </div>
  );
};
