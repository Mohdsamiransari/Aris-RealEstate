import React from "react";
import P1 from "../../assets/penthouse.jpg";
import Apartment from "../../assets/apartment.jpg";
import villa from "../../assets/villa.jpg";
import Office from "../../assets/office.jpg";
import Single_family from "../../assets/single_family.jpg";
import { useInView } from "react-intersection-observer";
export const Gallery = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div
        ref={ref}
        className="w-10/12 h-5/6 grid grid-cols-4 grid-rows-2 gap-3 max-lg:grid-cols-2 max-lg:grid-rows-4  "
      >
        <div
          className={`col-span-2 bg-cover row-span-2 max-sm:row-span-1  transition-all duration-1000 ${
            inView ? "translate-x-0" : "-translate-x-10 opacity-0"
          }`}
          style={{ backgroundImage: `url(${Apartment})` }}
        ></div>
        <div
          className={` bg-cover  transition-all duration-1000 ${
            inView ? "translate-x-0" : "translate-x-10 opacity-0"
          }`}
          style={{ backgroundImage: `url(${P1})` }}
        ></div>
        <div
          className={` bg-cover  transition-all duration-1000 ${
            inView ? "translate-x-0" : "translate-x-16 opacity-0"
          }`}
          style={{ backgroundImage: `url(${villa})` }}
        ></div>
        <div
          className={` bg-cover  transition-all duration-1000 ${
            inView ? "translate-x-0" : "translate-x-10 opacity-0"
          }`}
          style={{ backgroundImage: `url(${Single_family})` }}
        ></div>
        <div
          className={` bg-cover  transition-all duration-1000 ${
            inView ? "translate-x-0" : "translate-x-16 opacity-0"
          }`}
          style={{ backgroundImage: `url(${Office})` }}
        ></div>
      </div>
    </div>
  );
};
