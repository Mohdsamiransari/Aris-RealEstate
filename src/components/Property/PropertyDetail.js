import React, { useEffect, useState } from "react";
import { ImLocation } from "react-icons/im";
import { MdOutlineBathroom, MdOutlineBedroomParent } from "react-icons/md";
import { BsTextarea } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { URLS } from "../Url";

export const PropertyDetail = () => {
  let params = useParams();
  const [propertyId, setPropertyId] = useState([]);
  const [propertyapi, setProperty] = useState([]);

  const getPropertyId = async () => {
    let response = await fetch(
      `${URLS}singleProperty/${params._id}`
    );
    const prop = await response.json();
    setPropertyId(prop.product);
  };
  const propertyfilter = propertyId.propertyCategory;

  const getProperty = async () => {
    let response = await fetch(
      `${URLS}property?propertyCategory=${propertyfilter}`
    );
    const data = await response.json();
    setProperty(data.product);
  };

  useEffect(() => {
    getPropertyId();
    getProperty();
  }, [propertyapi]);

  return (
    <div>
      <Helmet>
        <title>Aris - Product Details</title>
      </Helmet>
      <div className="w-full  bg-black"></div>

      <>
        <div
          className="w-full h-screen bg-cover"
          style={{ backgroundImage: `url(${propertyId.image})` }}
        >
          <div className="flex w-full justify-center"></div>
          <div className="text-white  flex flex-col justify-end pb-8 pl-8 h-full gap-2">
            <div className="bg-slate-800 w-fit px-4 py-1 rounded-full">
              For {propertyId.propertyType}
            </div>
            <div className="flex items-center text-3xl gap-3 font-bold">
              <h1 className="text-3xl"> {propertyId.propertyCategory} </h1>
              <p className="bg-slate-800 px-4 py-1 rounded-full flex items-center gap-1">
                ${propertyId.price}
                {propertyId.propertyType === "Rent" ? (
                  <p className="text-xl">/month</p>
                ) : (
                  ""
                )}
              </p>
            </div>
            <p className="flex gap-1 items-center">
              <ImLocation /> {propertyId.address}
            </p>
          </div>
        </div>
        <div className="w-11/12 mx-auto h-24 my-8 ">
          <div className="w-1/2 flex gap-4 text-lg text-white">
            <div className="bg-slate-800 w-28 h-24 flex flex-col justify-center items-center gap-2 rounded-xl">
              <MdOutlineBathroom />
              {propertyId.bathroom}
            </div>
            <div className="bg-slate-800 w-28 h-24 flex flex-col justify-center items-center gap-2 rounded-xl">
              <MdOutlineBedroomParent />
              {propertyId.bedroom}
            </div>
            <div className="bg-slate-800 w-28 h-24 flex flex-col justify-center items-center gap-2 rounded-xl">
              <BsTextarea />
              {propertyId.squareFoot}
            </div>
          </div>
        </div>

        <div className="w-11/12 mx-auto mb-5 ">
          <h1 className="text-xl font-semibold">Property Detail</h1>
          <ul className="w-10/12 flex flex-col gap-3 ml-5 mt-4 ">
            <li className="flex gap-5">
              <h1>Description:-</h1>
              <p>{propertyId.description}</p>
            </li>
          </ul>
        </div>

        {/************************ Google map to show property address ***************************/}
        <div className="w-11/12 mx-auto mb-5 ">
          <h1 className="text-xl font-semibold">Property on Map</h1>
          <iframe
            title="google-map"
            className="overflow-hidden bg-none h-[70vh]  w-full"
            src={`https://maps.google.com/maps?q=${propertyId.address}, alla&t=&z=11&ie=UTF8&iwloc=&output=embed`}
          ></iframe>
        </div>
      </>

      {/************************** Showing the similar properties on the basis of category */}
      <div className="w-11/12 mx-auto mb-5 ">
        <h1 className="text-xl font-semibold">Similar Properties</h1>
        <div className=" mt-5 grid grid-cols-4 grid-rows-1 gap-2">
          {propertyapi.slice(0, 4).map((i) => (
            <div
              className="h-72  rounded-lg text-xs snap-start w-72"
              key={i._id}
            >
              <a href={`/propertydetail/${i._id}`}>
                <div
                  className="relative h-4/6  max-sm:h-3/6 mb-3 bg-cover rounded-lg"
                  style={{ backgroundImage: `url(${i.image})` }}
                ></div>
                <h1 className="mb-1  text-2xl font-extrabold">
                  {i.desciption}
                </h1>
                <p className="text-sm mb-1">{i.address}</p>
                <p className="text-sm mb-1">{i.propertyCategory}</p>
                <div className="flex justify-between pr-2 text-xs">
                  <p>${i.price}</p>
                  <div className="flex gap-2">
                    <i className="flex gap-1 items-center">
                      <MdOutlineBathroom />
                      {i.bedroom}
                    </i>
                    <i className="flex gap-1 items-center">
                      <MdOutlineBedroomParent />
                      {i.bathroom}
                    </i>
                    <i className="flex gap-1 items-center">
                      <BsTextarea />
                      {i.squareFoot} sq ft
                    </i>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
