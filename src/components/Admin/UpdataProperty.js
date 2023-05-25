import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineBathroom, MdOutlineBedroomParent } from "react-icons/md";
import { BsTextarea } from "react-icons/bs";
import { Helmet } from "react-helmet";
import {URL} from '../Url'

export const UpdataProperty = () => {
  let params = useParams();
  const navigate = useNavigate();

  const [propertyId, setPropertyId] = useState([]);
  useEffect(() => {
    getPropertyId();
  }, [propertyId]);

  const getPropertyId = async () => {
    let response = await fetch(
      `${URL}singleProperty/${params._id}`
    );
    const prop = await response.json();
    setPropertyId(prop.product);
  };

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
    await fetch(`${URL}updateProperty/${params._id}`, {
      method: "PUT",
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
        if (data.success === true) {
          navigate("/");
        }
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
    <div>
      <Helmet>
        <title>Aris - UpdataProperty</title>
      </Helmet>
      <div className="w-full h-[115vh] max-md:h-[160vh] max-sm:h-[120vh] relative flex items-center">
        <div className="w-11/12 max-lg:w-full max-md:grid-cols-1 max-md:gap-8 mx-auto h-4/6    justify-end grid grid-cols-2 shadow-slate-800 shadow-md items-center border-slate-800 border rounded-lg px-7">
          <div className=" w-full h-5/6">
            <div className="h-full rounded-lg text-xs snap-start">
              <div
                className="relative h-4/6  max-sm:h-3/6 mb-3 bg-cover rounded-lg"
                style={{ backgroundImage: `url(${propertyId.image})` }}
              >
                <div className="px-4 py-1 bg-white w-fit h-fit rounded-2xl top-2  left-2 relative">
                  {propertyId.propertyType}
                </div>
              </div>

              <div className="flex justify-between">
                <p className="text-sm mb-1">{propertyId.propertyCategory}</p>
                <p className="text-sm mb-1">{propertyId.name}</p>
              </div>
              <p className="text-sm mb-1">{propertyId.address}</p>
              <h1 className="mb-1">{propertyId.description}</h1>
              <div className="flex justify-between pr-2 text-xs">
                <p>${propertyId.price}</p>
                <div className="flex gap-2">
                  <i className="flex gap-1 items-center">
                    <MdOutlineBathroom />
                    {propertyId.bedroom}
                  </i>
                  <i className="flex gap-1 items-center">
                    <MdOutlineBedroomParent />
                    {propertyId.bathroom}
                  </i>
                  <i className="flex gap-1 items-center">
                    <BsTextarea />
                    {propertyId.squareFoot} sq ft
                  </i>
                </div>
              </div>
            </div>
          </div>
          <form
            className="bg-white w-11/12 max-lg:w-10/12 mx-auto h-5/6 relative p-7 bg-opacity-75 rounded-lg"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-3 ">
              <div className="flex gap-5">
                <div className="w-1/2 text-sm ">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Property Type
                  </label>
                  <select
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
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

                <div className="w-1/2 text-sm ">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Property Category
                  </label>
                  <select
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
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
              </div>

              <div className="flex gap-5">
                <div className="w-1/2 text-sm font-semibold">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Property Name
                  </label>
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setPropertyName(e.target.value)}
                  />
                </div>
                <div className="w-1/2 text-sm font-semibold">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Property Address
                  </label>
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    type="text"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full text-sm font-semibold">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Property Description
                </label>
                <input
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
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
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
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
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="tel"
                  placeholder="No. of Bathroom"
                  value={bathroom}
                  onChange={(e) => setBathroom(e.target.value)}
                />
                <input
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="tel"
                  placeholder="No. of Bedroom"
                  value={bedroom}
                  onChange={(e) => setBedroom(e.target.value)}
                />
                <input
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="tel"
                  placeholder="Enter Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <input
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="tel"
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
    </div>
  );
};
