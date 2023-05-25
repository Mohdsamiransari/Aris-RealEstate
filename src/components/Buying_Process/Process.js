import React from "react";
import Contract from "../../assets/Contract.jpg";
import House_interior from "../../assets/House_interior.jpg";
import Map from "../../assets/Google_map.jpg";
import Books from "../../assets/Books.jpg";
import Couch from "../../assets/Couch.jpg";
import Schedule from "../../assets/Schedule.jpg";
import Key from "../../assets/Key.jpg";
import { Helmet } from "react-helmet";


export const Process = () => {
  return (
    <div className="font-sans">
      <Helmet>
        <title>Aris - Process</title>
      </Helmet>
      <div
        className="w-full h-[80vh] max-sm:h-[50vh] bg-cover flex items-center justify-center   "
        style={{ backgroundImage: `url(${Contract})` }}
      >
        <h1 className="text-white text-5xl max-sm:text-3xl font-semibold ">
          THE WAY TO GET YOUR KEY
        </h1>
      </div>
      <div className=" flex flex-col gap-28 max-sm:gap-16 mt-24 items-center">
        <div className="flex max-md:flex-col w-10/12 items-center   gap-5  max-sm:gap-10 ">
          <img
            loading="lazy"
            className="w-4/12 max-sm:w-6/12 rounded-full outline  outline-offset-8 "
            src={House_interior}
            alt="property"
          />
          <div className="w-1/2 max-md:w-full  ml-10 max-sm:ml-0">
            <h1 className="text-3xl mb-5 text-[#333333] font-semibold">
              Choose What You Want
            </h1>
            <p>
              We understand that finding the perfect property is an important
              decision, and we're here to assist you every step of the way. To
              help you narrow down your search and find the ideal property,
              please choose from the following options: Locality, Size, Price,
              New or Resale.
            </p>
          </div>
        </div>
        <div className="flex max-md:flex-col-reverse w-10/12 items-center   gap-5 max-sm:gap-10">
          <div className="w-1/2 max-md:w-full mr-10  max-sm:mr-0">
            <h1 className="text-3xl mb-5 text-[#333333] font-semibold">
              Find On Map
            </h1>
            <p>
              Visualizing the location of a property is crucial during your
              search. To help you find properties on a map, we have integrated
              an interactive map feature. Here's how you can utilize it:
              <ol>
                <li>1. Start by entering the desired location</li>
                <li>
                  2. Markers indicating available properties in the selected
                  area.
                </li>
                <li>3. You can also switch to different map views.</li>
              </ol>
            </p>
          </div>
          <img
            loading="lazy"
            className="w-4/12 max-sm:w-6/12 rounded-full outline  outline-offset-8 "
            src={Map}
            alt="property"
          />
        </div>
        <div className=" flex max-md:flex-col w-10/12 items-center  gap-5  max-sm:gap-10">
          <div className="relative w-1/3 justify-end flex">
            <img
              loading="lazy"
              className="w-3/4 max-sm:w-full"
              src={Books}
              alt="property"
            />
            <img
              loading="lazy"
              className="w-7/12 max-sm:w-8/12 rounded-full border-4 border-white absolute left-0 -top-10 max-sm:-left-8 max-sm:-top-8 "
              src={Couch}
              alt="Detail"
            />
          </div>
          <div className="w-1/2 max-md:w-full ml-10 max-sm:ml-0">
            <h1 className="text-3xl mb-5 text-[#333333] font-semibold">
              See In Details
            </h1>
            <p>
              Certainly! we offer a "See in Detail" feature that allows you to
              explore properties more comprehensively. Here's how you can access
              and utilize this feature which may include:
              <ol>
                <li>1. High-resolution images</li>
                <li>2. Description and specifications</li>
                <li>3. Floor plans</li>
                <li>4. Location information</li>
                <li>5. Pricing and contact details</li>
              </ol>
            </p>
          </div>
        </div>
        <div className="flex max-md:flex-col-reverse w-10/12 items-center gap-5 max-sm:gap-10">
          <div className="w-1/2 max-md:w-full mr-10 max-sm:mr-0">
            <h1 className="text-3xl mb-5 text-[#333333] font-semibold">
              Schedule Watching
            </h1>
            <p>
              At our real estate agency, we understand that viewing properties
              in person is a crucial part of the home-buying process. To ensure
              a seamless and personalized experience, we offer property viewing
              appointments that allow you to explore properties of interest at
              your convenience. Browse through our listings on our website or
              contact our team to identify properties that align with your
              preferences, location, budget, and other criteria. Once you have
              identified a property you'd like to view, you can request a
              viewing appointment through our website, via phone, or by
              contacting our team directly.
            </p>
          </div>
          <img
            loading="lazy"
            className="w-4/12 max-sm:w-6/12  rounded-full outline  outline-offset-8 "
            src={Schedule}
            alt="property"
          />
        </div>
        <div className="flex max-md:flex-col w-10/12 items-center  gap-5 max-sm:gap-10 ">
          <img
            loading="lazy"
            className="w-4/12 max-sm:w-6/12 rounded-full outline  outline-offset-8 "
            src={Key}
            alt="property"
          />
          <div className="w-1/2 max-md:w-full ml-10 max-sm:ml-0">
            <h1 className="text-3xl mb-5 font-semibold text-[#333333]">
              Take the Key
            </h1>
            <p>
              We have implemented a secure and convenient process for
              prospective buyers or tenants to obtain property keys. We
              prioritize the security and smooth transfer of keys to ensure a
              positive experience for all parties involved. If you have any
              questions or require further information regarding the key
              acquisition process, please do not hesitate to contact our team.
              We are here to assist you throughout your property journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
