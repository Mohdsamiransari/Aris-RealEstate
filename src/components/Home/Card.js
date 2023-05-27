import React, { useEffect, useState } from "react";
import { MdOutlineBathroom, MdOutlineBedroomParent } from "react-icons/md";
import { BsTextarea } from "react-icons/bs";
import {URLS} from '../Url'

export const Card = () => {
  const [propertyapi, setProperty] = useState([]);

  const getProperty = async () => {
    let response = await fetch(`${URLS}property`);
    const prop = await response.json();
    setProperty(prop.product);
  };
  useEffect(() => {
    getProperty();
  }, []);
  return (
    <>
      {propertyapi.slice(0, 10).map((i) => (
        <div className="h-72  rounded-lg text-xs  w-72" key={i._id}>
          <a href={`/propertydetail/${i._id}`}>
            <div
              className="relative h-4/6  max-sm:h-3/6 mb-3 bg-cover rounded-lg"
              style={{ backgroundImage: `url(${i.image})` }}
            ></div>
            <h1 className="mb-1  text-2xl font-extrabold">{i.desciption}</h1>
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
    </>
  );
};
