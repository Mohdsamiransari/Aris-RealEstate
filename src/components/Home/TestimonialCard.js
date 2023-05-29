import React from "react";
import { ImQuotesLeft } from "react-icons/im";

export const TestimonialCard = () => {
  return (
    <div className="bg-gray-900 grid grid-rows-6 justify-between p-8 h-96 gap-2 shadow-md shadow-black">
      <i className="row-span-1 text-4xl">
        <ImQuotesLeft />
      </i>
      <p className="row-span-4    overflow-hidden ">
        John Smith exceeded my expectations as a real estate agent. His
        professionalism, expertise, and attention to detail made the process of
        selling my home a breeze. I highly recommend John to anyone looking to
        buy or sell their property.
      </p>
      <div className="row-span-1 ">
        <p>by Sarah Thompson</p>
      </div>
    </div>
  );
};
