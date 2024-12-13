import React from "react";
import { Button, Navbar } from "flowbite-react";
import Logo from "../assets/Logo.png";

const NavbarToko = () => {
  return (
    <div className=" bg-primary">
      <Navbar fluid rounded className="bg-white">
        <Navbar.Brand href="./">
          <img src={Logo} className="mr-3 h-9 sm:h-9" alt="Toko Damai Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2 ">
          <Button gradientDuoTone="purpleToPink">Login</Button>
          <Navbar.Toggle className="hover:text-black" />
        </div>
        <Navbar.Collapse className=" text-center">
          <Navbar.Link
            className=" bg-white text-cyan-700 hover:bg-orange-500 hover:text-black"
            href="#"
            active
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            className=" text-cyan-700 hover:bg-orange-500 hover:text-black"
            href="#"
          >
            Promo
          </Navbar.Link>
          <Navbar.Link
            className="text-cyan-700 hover:bg-orange-500 hover:text-black"
            href="#"
          >
            Event
          </Navbar.Link>
          <Navbar.Link
            className="text-cyan-700 hover:bg-orange-500 hover:text-black"
            href="#"
          >
            Karir
          </Navbar.Link>
          <Navbar.Link
            className="text-cyan-700 hover:bg-orange-500 hover:text-black"
            href="#"
          >
            Blog
          </Navbar.Link>
          <Navbar.Link
            className="text-cyan-700 hover:bg-orange-500 hover:text-black"
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
