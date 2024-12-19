import React from "react";
import StickyNavbar from "../components/StickyNavbar";
import Karircard from "../components/Karircard";

const Karir = () => {
  return (
    <div>
      <StickyNavbar />
      <h1 className=" mt-2 text-center text-3xl font-bold text-white">
        Lowongan Kerja
      </h1>
      <div className=" flex flex-wrap justify-center">
        <Karircard />
        <Karircard />
        <Karircard />
        <Karircard />
        <Karircard />
        <Karircard />
      </div>
    </div>
  );
};

export default Karir;
