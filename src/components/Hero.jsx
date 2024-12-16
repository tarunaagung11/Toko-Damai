import React from "react";
import { Carousel } from "flowbite-react";
import Hero1 from "/src/assets/Hero1.jpg";
import Hero2 from "/src/assets/Hero2.jpg";
import Hero3 from "/src/assets/Hero3.jpg";
import Hero4 from "/src/assets/Hero4.jpg";

const Hero = () => {
  return (
    <div className="z-10 mx-5 mt-2 h-56 sm:mt-2 sm:h-80 md:h-[500px] lg:mt-0 lg:h-[550px] xl:h-[700px] 2xl:mt-0 2xl:h-[600px]">
      <Carousel slideInterval={2000} className="">
        <img className="size-full lg:size-4/5 " src={Hero1} alt="..." />
        <img className="size-full lg:size-4/5 " src={Hero2} alt="..." />
        <img className="size-full lg:size-4/5 " src={Hero3} alt="..." />
        <img className="size-full lg:size-4/5 " src={Hero4} alt="..." />
      </Carousel>
    </div>
  );
};

export default Hero;
