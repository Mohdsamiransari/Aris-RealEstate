import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileIllustration from '../../assets/ProfileIllustration.jpg'
import { Helmet } from "react-helmet";
import { URLS } from "../Url";


export const Register = ({ open }) => {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [post, setPosts] = useState([]);

  const addNewUser = async (
    username,
    avatar,
    email,
    firstName,
    lastName,
    phoneNumber,
    address,
    password
  ) => {
    await fetch(`${URLS}newUser`, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        avatar: avatar,
        email: email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        address: address,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts((posts) => [data, ...posts]);
        setUserName("");
        setAvatar("");
        setEmail("");
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setAddress("");
        setPassword("");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewUser(
      username,
      avatar,
      email,
      firstName,
      lastName,
      phoneNumber,
      address,
      password
    );
  };
  const onImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setSelectedAvatar(URL.createObjectURL(file));
    setFileToBase(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
  };

  return (
    <>
    <Helmet>
      <title>Aris - Register</title>
    </Helmet>
      <div className="h-20"></div>
      <div className="h-screen w-full flex items-center ">
        <form
          className=" w-9/12 max-sm:w-11/12 mx-auto grid grid-cols-2 max-lg:grid-cols-1 h-[80%] max-sm:h-full mt-12 shadow-lg shadow-slate-900 items-center rounded-xl"
          onSubmit={handleSubmit}
        >
          <div className="w-full text-sm font-semibold p-5 h-[89%] max-sm:h-full ">
            <label
              htmlFor="Avatar"
              className="block cursor-pointer w-[90%] max-sm:w-full h-[95%] max-sm:h-full  rounded-full"
            >
              {!selectedAvatar ? (
                <div className="bg-cover w-full h-full rounded-full"
                style={{ backgroundImage: `url(${ProfileIllustration})` }}>
                  
                </div>
              ) : (
                <div
                  className="bg-cover w-full h-full rounded-full"
                  style={{ backgroundImage: `url(${selectedAvatar})` }}
                ></div>
              )}
            </label>
            <input
              className="hidden"
              type="file"
              id="Avatar"
              placeholder="Select Image"
              accept="image/png, image/jpeg"
              onChange={onImageChange}
            />
          </div>
          <div className=" w-5/6 max-sm:h-1/2 ">
            <div className="mb-2">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className=" block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:shadow-md hover:shadow-slate-800"

              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-2">
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:shadow-md hover:shadow-slate-800"

                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:shadow-md hover:shadow-slate-800"

                />
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:shadow-md hover:shadow-slate-800"

              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className=" block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:shadow-md hover:shadow-slate-800"

              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="address"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className=" block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:shadow-md hover:shadow-slate-800"

              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:shadow-md hover:shadow-slate-800"

              />
            </div>
            <button
              className="w-full bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

              type="submit"
            >
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
