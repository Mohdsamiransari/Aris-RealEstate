import React from "react";

import { TestimonialCard } from "./TestimonialCard";
import { useInView } from "react-intersection-observer";

export const Testimonial = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  return (
    <div className="h-fit w-full flex items-center  mb-10">
      <div className=" w-10/12 mx-auto">
        <div className="text-center">
          <h1 className="text-3xl">Testimonial</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipicng edit</p>
        </div>
        <div
          ref={ref}
          className={`grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 mt-10 text-white
        transition-all duration-1000 ${
          inView ? "translate-y-0" : "translate-y-16 opacity-0"
        }
        `}
        >
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};
