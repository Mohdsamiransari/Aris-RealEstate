import React, { useState, useEffect } from "react";
import { MdOutlineBathroom, MdOutlineBedroomParent } from "react-icons/md";
import { BsTextarea } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {URLS} from '../Url'
export const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handlePageNumberClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  // for all types of filtering
  // getting the values and storing it
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // getting all the data fromt the database and storing it in propertyapi
  const [propertyapi, setProperty] = useState([]);

  // setting up the pagination to show certain amount of property in a single page
  const pages = [];
  for (let i = 1; i <= Math.ceil(propertyapi.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItems = currentPage * itemsPerPage;
  const indexOfFirstItems = indexOfLastItems - itemsPerPage;
  const currentItems = propertyapi.slice(indexOfFirstItems, indexOfLastItems);

  const renderPageNumber = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <button
          key={number}
          id={number}
          onClick={handlePageNumberClick}
          className={
            currentPage === number
              ? "bg-slate-800 active:bg-slate-900 w-7 h-7 rounded-full text-white"
              : null
          }
        >
          {number}
        </button>
      );
    } else {
      return null;
    }
  });

  // Fetchin property from the database using fetch api
  useEffect(() => {
    getProperty();
  }, [propertyapi, search, minPrice, maxPrice, category]);

  const getProperty = async () => {
    let url = `${URLS}property?keyword=${search}`;
    if (category !== "All") {
      url += `&propertyCategory=${category}`;
    }
    if (minPrice !== "") {
      url += `&price[gte]=${minPrice}`;
    }
    if (maxPrice !== "") {
      url += `&price[lte]=${maxPrice}`;
    }
    let response = await fetch(url);
    const prop = await response.json();
    setProperty(prop.product);
  };

  // Handling all type of filters

  const handleSearchFilter = (e) => {
    setSearch(e.target.value);
  };
  const handleMinPriceFilter = (e) => {
    setMinPrice(e.target.value);
  };
  const handleMaxPriceFilter = (e) => {
    setMaxPrice(e.target.value);
  };
  const handleCategoryFilter = (e) => {
    setCategory(e.target.value);
  };

  // Handling the pagination

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  // list of all the category
  const categoryList = [
    "All",
    "Single_Family",
    "Villa",
    "Office",
    "Studio",
    "Penthouse",
    "Apartment",
  ];

  return (
    <div className="flex w-full h-full p-3  items-end">
      <Helmet>
        <title>Aris - DashBoard</title>
      </Helmet>
      <div className="w-full h-[80%]">
        {/********************** Handling all type of Filterings  **************************/}
        <div className="mb-5 flex justify-between mx-auto items-center max-sm:gap-4 max-sm:flex-col-reverse">
          <div className="flex gap-2">
            {/********************* Category Filter  */}
            <div>
              <label>Category: </label>
              <select
                className=" w-48 px-4 py-1  rounded-md border border-slate-800 focus:outline-none focus:border-indigo-500"
                onClick={handleCategoryFilter}
              >
                {/***************** Getting all the option values from the "categoryList" above ********************/}
                {categoryList.map((i) => (
                  <option defaultValue="All" value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-2 items-center">
              <label for="Min Price">Min Price: </label>
              <input
                type="tel"
                placeholder="Min Price"
                value={minPrice}
                onChange={handleMinPriceFilter}
                className=" w-32 px-4 py-1  rounded-md border border-slate-800 focus:outline-none focus:border-indigo-500"
              />
              <label for="Max Price">Max Price: </label>
              <input
                type="tel"
                placeholder="Max Price"
                value={maxPrice}
                onChange={handleMaxPriceFilter}
                className="  w-32 px-4 py-1  rounded-md border border-slate-800 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="rounded-3xl">
            <input
              className="appearance-none w-96 px-4 py-1 mr-2 rounded-md border border-slate-800 focus:outline-none focus:border-indigo-500"
              type="search"
              placeholder="Search"
              onChange={handleSearchFilter}
            />
          </div>
        </div>

        {/*----------------------------------- Showing the properties using  loop------------------------- */}
        <div className=" grid mx-auto mt-14 overflow-y-auto appearance-none scrollbar-none  h-[25rem]">
          <div className="grid-cols-4 max-md:grid-cols-1 max-xl:grid-cols-3 max-lg:grid-cols-2 gap-5 grid mx-auto items-center justify-center">
            {/********************************* The currentItems that is mapping is actually getting the "propertyapi" value from  the fetch api */}
            {currentItems.map((i) => (
              <div
                className="h-[22rem] w-[19rem] rounded-lg text-xs snap-start  px-2 py-1 hover:shadow-lg hover:shadow-slate-800 hover:-mt-2 hover:duration-150 hover:ease-in-out"
                key={i._id}
              >
                <a href={`/propertydetail/${i._id}`}>
                  <div
                    className="relative h-4/6  max-sm:h-3/6 mb-3 bg-cover rounded-lg"
                    style={{ backgroundImage: `url(${i.image})` }}
                  >
                    <div className="px-4 py-1 bg-white w-fit h-fit rounded-2xl top-2  left-2 relative">
                      {i.propertyType}
                    </div>
                  </div>
                  <h1 className="mb-1  text-2xl font-extrabold">
                    {i.desciption}
                  </h1>
                  <p className="text-sm mb-1 ">{i.name}</p>
                  <p className="text-sm mb-1 truncate ">{i.address}</p>
                  <div className="flex justify-between pr-2 text-xs">
                    <p>${i.price}</p>
                    <div className="flex gap-2">
                      {i.bedroom === 0 ? (
                        ""
                      ) : (
                        <i className="flex gap-1 items-center ">
                          <MdOutlineBathroom />
                          {i.bedroom}
                        </i>
                      )}
                      {i.bathroom === 0 ? (
                        ""
                      ) : (
                        <i className="flex gap-1 items-center">
                          <MdOutlineBedroomParent />
                          {i.bathroom}
                        </i>
                      )}

                      <i className="flex gap-1 items-center">
                        <BsTextarea />
                        {i.squareFoot} sq ft
                      </i>
                    </div>
                  </div>
                </a>
                <div className="flex justify-between px-1 text-white mt-2">
                  <Link
                    to={`/updateproperty/${i._id}`}
                    className="bg-slate-800 px-4 py-1 rounded-lg hover:shadow-md hover:shadow-slate-900"
                  >
                    Update
                  </Link>
                  <button className="bg-red-500 px-4 py-1 rounded-lg hover:shadow-md hover:shadow-slate-800">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/****************************** Buttons for the pagination ***********************************/}
        <ul className=" w-fit mx-auto flex justify-center items-center gap-3 py-1 px-3 mt-10  border-black border rounded-full  mb-10">
          <button
            onClick={handlePrevBtn}
            disabled={currentPage === pages[0] ? true : false}
            className="hover:bg-slate-800 px-4 py-2 rounded-full hover:text-white cursor-pointer"
          >
            Prev
          </button>
          {renderPageNumber}
          <button
            onClick={handleNextBtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
            className="hover:bg-slate-800 px-4 py-2 rounded-full hover:text-white cursor-pointer "
          >
            Next
          </button>
        </ul>
      </div>
    </div>
  );
};
