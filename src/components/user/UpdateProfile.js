import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export const UpdateProfile = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [alternateNumber, setAlternateNumber] = useState("");
  const [address, setAddress] = useState("");
  const [post, setPosts] = useState([]);

  const updateUserProfile = async (
    firstName,
    lastName,
    number,
    alternateNumber,
    address
  ) => {
    await fetch(`${URL}update/userProfile`, {
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
        number: number,
        alternateNumber: alternateNumber,
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
        setAlternateNumber("");
        setAddress("");

        if (data.success === true) {
          navigate("/");
        }
      });
  };

  console.log(post);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(firstName, lastName, number, alternateNumber, address);
  };

  return (
    <form
      className="basis-full flex flex-col  w-3/6 ml-12 relative top-[50%] -translate-y-44 gap-8"
      onSubmit={handleSubmit}
    >
      <Helmet>
        <title>Aris - UpdateProfile</title>
      </Helmet>
      
      <h3 className="font-semibold -ml-4">Update Your Details </h3>
      <div className="flex  justify-between">
        <div className=" ">
          <p>First Name</p>
          <input
            type="text"
            placeholder="MOHD"
            className="mt-1 border-b-2 border-gray-500 px-1"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className=" gap-4">
          <p>Last Name:</p>
          <input
            type="text"
            placeholder="Samir"
            className="mt-1 border-b-2 border-gray-500 px-1"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className=" ">
          <p>Number</p>
          <input
            type="tel"
            placeholder="7521884782"
            className="mt-1 border-b-2 border-gray-500 px-1"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="">
          <p>Address</p>
          <input
            type="text"
            placeholder="Enter Your Address"
            className="mt-1 border-b-2 border-gray-500 px-1 w-full"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-10">
        <button
          type="submit"
          className="border px-12 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-900"
        >
          Save
        </button>
      </div>
    </form>
  );
};