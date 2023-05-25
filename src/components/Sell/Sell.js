import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { URL } from "../Url";

export const Sell = () => {
  const [name, setPropertyName] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [propertyCategory, setPropertyCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [squareFoot, setSquareFoot] = useState("");

  const newProperty = async (
    name,
    propertyType,
    propertyCategory,
    image,
    price,
    description,
    address,
    bedroom,
    bathroom,
    squareFoot
  ) => {
    await fetch(`${URL}newProperty`, {
      method: "POST",
      credentials: "include",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
        Cookie: document.cookie,
      },
      body: JSON.stringify({
        name: name,
        propertyType: propertyType,
        propertyCategory: propertyCategory,
        image: image,
        price: price,
        description: description,
        address: address,
        bedroom: bedroom,
        bathroom: bathroom,
        squareFoot: squareFoot,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPropertyName("");
        setPropertyType("");
        setPropertyCategory("");
        setImage("");
        setPrice("");
        setDescription("");
        setAddress("");
        setBedroom("");
        setBathroom("");
        setSquareFoot("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    newProperty(
      name,
      propertyType,
      propertyCategory,
      image,
      price,
      description,
      address,
      bedroom,
      bathroom,
      squareFoot
    );
  };

  const onImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    setFileToBase(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  return (
    <div className="w-full h-[120vh] max-md:h-[140vh]   relative flex items-center">
      <Helmet>
        <title>Aris - Sell</title>
      </Helmet>
      <div className="w-11/12 max-lg:w-full max-md:grid-cols-1 max-md:gap-8 mx-auto h-4/6  items-center  justify-end grid grid-cols-2 ">
        <div className="m-auto w-3/4">
          <h1 className="text-2xl font-bold mb-5">
            Create Custom Capture Forms And Manage Leads With The Integrated
            Aris CRM
          </h1>
          <p>
            The Inquiry Form Widget allows you to design unique forms to capture
            your leads. It connects with Aris CRM and your email inbox to keep
            your work everything on track.
          </p>
        </div>
        <form
          className="bg-white w-8/12 max-lg:w-10/12 mx-auto h-full relative p-7 bg-opacity-75 shadow-xl shadow-slate-800"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-3 ">
            <div className="w-full text-sm ">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Property Type
              </label>
              <select
                className=" block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  hover:shadow-md hover:shadow-slate-800"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="" disabled>
                  Select Property Type
                </option>
                <option>Rent</option>
                <option>Sell</option>
              </select>
            </div>

            <div className="w-full text-sm ">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Property Category
              </label>
              <select
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:shadow-md hover:shadow-slate-800"
                value={propertyCategory}
                onChange={(e) => setPropertyCategory(e.target.value)}
              >
                <option value="" disabled>
                  Select Property Category
                </option>
                <option>Single_Family</option>
                <option>Villa</option>
                <option>Office</option>
                <option>Studio</option>
                <option>Penthouse</option>
                <option>Apartment</option>
                <option>Restaurant</option>
              </select>
            </div>
            <div className="w-full text-sm font-semibold">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Property Name
              </label>
              <input
                className=" block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:shadow-md hover:shadow-slate-800"
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setPropertyName(e.target.value)}
              />
            </div>
            <div className="w-full text-sm font-semibold">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Property Address
              </label>
              <input
                className=" block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:shadow-md hover:shadow-slate-800"
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="w-full text-sm font-semibold">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Property Description
              </label>
              <input
                className=" block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:shadow-md hover:shadow-slate-800"
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="w-full text-sm font-semibold">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Property Image
              </label>
              <input
                className=" block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:shadow-md hover:shadow-slate-800"
                type="file"
                placeholder="Select Image"
                accept="image/png, image/jpeg"
                // value={image}
                // multiple={true}
                onChange={onImageChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:shadow-md hover:shadow-slate-800"
                type="number"
                placeholder="No. of Bathroom"
                value={bathroom}
                onChange={(e) => setBathroom(e.target.value)}
              />
              <input
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:shadow-md hover:shadow-slate-800"
                type="number"
                placeholder="No. of Bedroom"
                value={bedroom}
                onChange={(e) => setBedroom(e.target.value)}
              />
              <input
                className="  block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:shadow-md hover:shadow-slate-800"
                type="number"
                placeholder="Enter Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:shadow-md hover:shadow-slate-800"
                type="number"
                placeholder="Enter Area"
                value={squareFoot}
                onChange={(e) => setSquareFoot(e.target.value)}
              />
            </div>
            <button
              className="bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
