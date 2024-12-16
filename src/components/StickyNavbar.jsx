import React from "react";
import Logo from "../assets/Logo.png";
import { motion } from "motion/react";
import { Navbar, Button, IconButton, Collapse } from "@material-tailwind/react";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <div className="sticky top-0 z-50 w-full ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none bg-white px-4  lg:px-8 lg:py-4">
        <div className="flex items-center justify-between font-roboto text-black">
          <a href="/">
            <motion.div
              className="h-auto w-56"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={Logo} />
            </motion.div>
          </a>
          <div className="flex items-center gap-8 ">
            <div className="mr-4 hidden lg:block">
              <ul className="mb-4 flex flex-col gap-2 lg:my-0 lg:flex-row lg:items-center lg:gap-12">
                <li className="text-black hover:text-blue-500">
                  <a href="/">Home</a>
                </li>
                <li className="text-black hover:text-blue-500">
                  <a href="#">Promo</a>
                </li>
                <li className="text-black hover:text-blue-500">
                  <a href="#">Event</a>
                </li>
                <li className="text-black hover:text-blue-500">
                  <a href="#">Karir</a>
                </li>
                <li className="text-black hover:text-blue-500">
                  <a href="#">Blog</a>
                </li>
                <li className="text-black hover:text-blue-500">
                  <a href="#">Tentang Kami</a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-x-1">
              <Button className="hidden from-green-400 to-blue-600 hover:bg-gradient-to-tl lg:inline-block">
                <span>Log In</span>
              </Button>
              <Button className="hidden from-green-400 to-blue-600 hover:bg-gradient-to-tl lg:inline-block">
                <span>Sign in</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto size-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="size-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {
            <ul className=" mb-4 mt-2 flex flex-col gap-2 text-center font-roboto text-black  lg:my-0 lg:flex-row lg:items-center lg:gap-6">
              <li className=" from-green-400 to-blue-600 hover:bg-gradient-to-tl hover:text-white">
                <a href="/">Home</a>
              </li>
              <li className=" from-green-400 to-blue-600 hover:bg-gradient-to-tl hover:text-white">
                <a href="#">Promo</a>
              </li>
              <li className=" from-green-400 to-blue-600 hover:bg-gradient-to-tl hover:text-white">
                <a href="#">Event</a>
              </li>
              <li className=" from-green-400 to-blue-600 hover:bg-gradient-to-tl hover:text-white">
                <a href="#">Karir</a>
              </li>
              <li className=" from-green-400 to-blue-600 hover:bg-gradient-to-tl hover:text-white">
                <a href="#">Blog</a>
              </li>
              <li className=" from-green-400 to-blue-600 hover:bg-gradient-to-tl hover:text-white">
                <a href="#">Tentang Kami</a>
              </li>
            </ul>
          }
          <div className="flex items-center justify-center gap-x-1 font-roboto">
            <Button className=" from-green-400 to-blue-600 hover:bg-gradient-to-tl ">
              <span>Log In</span>
            </Button>
            <Button className=" from-green-400 to-blue-600 hover:bg-gradient-to-tl ">
              <span>Sign In</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default StickyNavbar;
