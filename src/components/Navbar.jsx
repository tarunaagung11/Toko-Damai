import React from "react";
import { Button, Navbar } from "flowbite-react";

const NavbarToko = () => {
  return (
    <div className="bg-[#3423d4]">
      <Navbar fluid rounded className="bg-[#3423d4]">
        <Navbar.Brand href="./">
          <img
            src="/src/assets/logo-ct.png"
            className="mr-3 h-9 sm:h-9"
            alt="Toko Damai Logo"
          />
          <span className="self-center font-swera text-2xl font-semibold text-primary ">
            Toko Damai
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 ">
          <Button gradientDuoTone="purpleToPink">Login</Button>
          <Navbar.Toggle className="" />
        </div>
        <Navbar.Collapse className=" text-center">
          <Navbar.Link className=" text-white hover:text-black" href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link
            className=" text-white hover:bg-orange-500 hover:text-black"
            href="#"
          >
            Promo
          </Navbar.Link>
          <Navbar.Link
            className="text-white hover:bg-orange-500 hover:text-black"
            href="#"
          >
            Event
          </Navbar.Link>
          <Navbar.Link
            className="text-white hover:bg-orange-500 hover:text-black"
            href="#"
          >
            Karir
          </Navbar.Link>
          <Navbar.Link
            className="text-white hover:bg-orange-500 hover:text-black"
            href="#"
          >
            Blog
          </Navbar.Link>
          <Navbar.Link
            className="text-white hover:bg-orange-500 hover:text-black"
            href="#"
          >
            Tentang Kami
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarToko;
