import React from "react";
import Hero from "../../assets/Hero.jpg";
import { Card } from "./Card";
import { Testimonial } from "./Testimonial";
import { PropertyDetail } from "./PropertyDetail";
import { Gallery } from "./Gallery";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Aris - Home</title>
      </Helmet>
      <div
        className="relative bg-cover bg-no-repeat h-screen w-full flex items-center justify-center"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="text-center w-1/2 text-white ">
          <h1 className="text-5xl  mb-3">Welcome to Aris</h1>
          <p className="text-lg max-sm:text-sm break-words">
            Packed with 100+ new features and improvements, it is the biggest
            all-in-one solution for real estate companies and professionals
          </p>
        </div>
      </div>

      <div className="relative w-full h-[38rem] flex justify-center items-center">
        <div className="relative overflow-hidden w-10/12 h-4/6">
          <h1 className="text-2xl font-semibold ">
            Discover Latest Properties
          </h1>
          <p className="text-sm">Newest Properties Around You</p>
          <div
            id="carousel"
            className="mt-4 grid grid-flow-col  overflow-x-scroll  gap-5 scrollbar-none  "
            style={{ scrollbarGutter: "auto" }}
          >
            <Card />
          </div>
        </div>
      </div>

      {/*Property detail */}
      <PropertyDetail />

      {/*Gallery */}
      <Gallery />

      {/*Testimonial*/}
      <Testimonial />
    </div>
  );
}

export default Home;
