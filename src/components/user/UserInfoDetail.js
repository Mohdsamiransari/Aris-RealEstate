import React from "react";

export const UserInfoDetail = ({ userinfoprop }) => {
  return (
    <div className=" flex flex-col gap-8 w-3/6 ml-12 ">
      <h3 className="font-semibold text-lg ">About You </h3>
      <div className="flex  justify-between text-black font-semibold">
        <div className=" ">
          <p>First Name</p>
          <p className="mt-1 border-b-2 border-gray-500 w-48  px-1 text-start text-gray-600 font-semibold">
            {userinfoprop.firstName}
          </p>
        </div>
        <div className=" gap-4">
          <p>Last Name:</p>
          <p className="mt-1 border-b-2 border-gray-500 w-48  px-1 text-start text-gray-600 font-semibold">
            {userinfoprop.lastName}
          </p>
        </div>
      </div>
      <div className="flex justify-between text-black font-semibold">
        <div className=" ">
          <p>Number</p>
          <p className="mt-1 border-b-2 border-gray-500 w-48  px-1 text-start text-gray-600 font-semibold">
            {userinfoprop.phoneNumber}
          </p>
        </div>
        <div>
          <p>Address</p>
          <p className="mt-1 border-b-2 border-gray-500 w-48  px-1 text-start text-gray-600 font-semibold">
            {userinfoprop.address}
          </p>
        </div>
      </div>
    </div>
  );
};
