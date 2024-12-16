import React from "react";
import Arrow from "../assets/arrow.png";
import { motion } from "motion/react";

const Info = () => {
  return (
    <div>
      <section className=" bg-cover text-gray-600 ">
        <div className="container mx-auto px-5 py-24" bis_skin_checked="1">
          <div className="mb-20 text-center" bis_skin_checked="1">
            <h1 className=" mb-4 text-center font-roboto text-2xl font-bold text-white sm:text-3xl">
              Keunggulan Belanja Di Toko Damai
            </h1>
            <p className=" mx-auto text-base leading-relaxed text-white lg:w-3/4 xl:w-2/4">
              Solusi Belanja Retail & Grosir Terbaik di Kendari!
            </p>
          </div>
          <div
            className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5"
            bis_skin_checked="1"
          >
            <div className="w-full p-2 sm:w-1/2" bis_skin_checked="1">
              <motion.div
                className="flex h-full items-center rounded bg-gray-100 p-4"
                bis_skin_checked="1"
                whileHover={{ scale: 0.95 }}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="mr-4 size-6 shrink-0 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="font-medium">Hemat</span>
              </motion.div>
            </div>
            <div className="w-full p-2 sm:w-1/2" bis_skin_checked="1">
              <motion.div
                className="flex h-full items-center rounded bg-gray-100 p-4"
                bis_skin_checked="1"
                whileHover={{ scale: 0.95 }}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className=" font-medium">Lengkap</span>
              </motion.div>
            </div>
            <div className="w-full p-2 sm:w-1/2" bis_skin_checked="1">
              <motion.div
                className="flex h-full items-center rounded bg-gray-100 p-4"
                bis_skin_checked="1"
                whileHover={{ scale: 0.95 }}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="mr-4 size-6 shrink-0 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Berkualitas</span>
              </motion.div>
            </div>
            <div className="w-full p-2 sm:w-1/2" bis_skin_checked="1">
              <motion.div
                className="flex h-full items-center rounded bg-gray-100 p-4"
                bis_skin_checked="1"
                whileHover={{ scale: 0.95 }}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="mr-4 size-6 shrink-0 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className=" font-medium">Promo Setiap Hari</span>
              </motion.div>
            </div>
          </div>
          <a href="https://api.whatsapp.com/send?phone=6281140205645&text=Halo%20kak%20saya%20ingin%20berbelanja%20di%20Toko%20Damai">
            <motion.button
              className="mx-auto mt-10 flex rounded-full bg-gradient-to-tl from-blue-600 to-green-400 px-8 py-2 text-lg text-white hover:bg-gradient-to-tl hover:from-green-400 hover:to-blue-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Ayo Belanja Sekarang🔥
            </motion.button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Info;
