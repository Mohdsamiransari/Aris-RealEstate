import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { URLS } from "../Url";

export const UpdateProfile = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [post, setPosts] = useState([]);

  const updateUserProfile = async (
    firstName,
    lastName,
    phoneNumber,
    address
  ) => {
    await fetch(`${URLS}update/userProfile`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
        Cookie: document.cookie,
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        address: address,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts((posts) => [data, ...posts]);
        setFirstName("");
        setLastName("");
        setNumber("");
        setAddress("");

        if (data.success === true) {
          navigate("/");
        }
      });
  };

  console.log(post);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(firstName, lastName, phoneNumber, address);
  };

  return (
    <div className="w-full h-full  flex items-center justify-center">
      <Helmet>
        <title>Aris - UpdateProfile</title>
      </Helmet>
    <form
      className=" flex flex-col  h-3/6  w-1/2 gap-8  mt-20"
      onSubmit={handleSubmit}
    >
      
      
      <h3 className="font-semibold -ml-4">Update Profile </h3>
      <div className="flex gap-5 justify-between">
        <div className=" ">
          <p>First Name</p>
          <input
            type="text"
            placeholder="first name"
            className="mt-1 border-b-2 border-gray-500 px-1"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className=" gap-4">
          <p>Last Name:</p>
          <input
            type="text"
            placeholder="last name"
            className="mt-1 border-b-2 border-gray-500 px-1"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className=" ">
          <p>Number</p>
          <input
            type="tel"
            placeholder="number"
            className="mt-1 border-b-2 border-gray-500 px-1"
            value={phoneNumber}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="">
          <p>Address</p>
          <input
            type="text"
            placeholder="Address"
            className="mt-1 border-b-2 border-gray-500 px-1 w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-10">
        <button
          type="submit"
          className="border px-12 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-900"
        >
          Save Changes
        </button>
      </div>
    </form>
    </div>
  );
};
