import React from "react";
import Logo from "../assets/Logo.png";
import IconButton from "./IconButton.jsx";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div>
      <footer className=" text-gray-600">
        <div
          className="container mx-auto my-0 flex flex-col items-center px-5 py-8 sm:flex-row"
          bis_skin_checked="1"
        >
          <a className=" flex items-center justify-center font-medium text-gray-900 md:justify-start">
            <img src={Logo} className="mr-3 h-9 sm:h-9" alt="Toko Damai Logo" />
          </a>
          <p className="mt-4 text-sm text-white sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
            © 2024 Toko Damai —
            <a
              href="https://www.instagram.com/tokodamai.kendari/"
              className="ml-1 text-white"
              rel="noopener noreferrer"
              target="_blank"
            >
              @tokodamai.kendari
            </a>
          </p>
          <div>
            {/* social media button */}
            <div className="ml-3 flex items-center justify-center gap-4">
              <a href="https://www.tiktok.com/@tokodamaikendari">
                <IconButton text="@tokodamaikendari">
                  <FaTiktok size={30} />
                </IconButton>
              </a>
              <a href="https://www.facebook.com/tokodamaikendari">
                <IconButton text="TokoDamai" color="bg-blue-600">
                  <FaFacebook size={30} />
                </IconButton>
              </a>
              <a href="https://www.instagram.com/tokodamai.kendari">
                <IconButton
                  text="tokodamai.kendari"
                  color="bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500"
                >
                  <GrInstagram size={30} />
                </IconButton>
              </a>
              <a href="https://api.whatsapp.com/send?phone=6281140205645&text=Halo%20kak%20saya%20ingin%20berbelanja%20di%20Toko%20Damai">
                <IconButton text="081140205645" color="bg-green-500">
                  <FaWhatsapp size={30} />
                </IconButton>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
