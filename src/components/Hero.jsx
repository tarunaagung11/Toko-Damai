import React from "react";
import { Carousel } from "flowbite-react";
import Gambar from "/src/assets/Gambar.jpg";

const Hero = () => {
  return (
    <div className="z-10 mx-5 mt-2 h-56 sm:mt-2 sm:h-80 md:h-[500px] lg:mt-0 lg:h-[550px] xl:h-[700px] 2xl:mt-0 2xl:h-[600px]">
      <Carousel slideInterval={2000} className="">
        <img className="size-full lg:size-4/5 " src={Gambar} alt="..." />
        <img className="size-full lg:size-4/5 " src={Gambar} alt="..." />
        <img className="size-full lg:size-4/5 " src={Gambar} alt="..." />
        <img className="size-full lg:size-4/5 " src={Gambar} alt="..." />
      </Carousel>
    </div>
  );
};

export default Hero;
