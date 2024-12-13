import React from "react";
import Arrow from "../assets/arrow.png";

const Info = () => {
  return (
    <div>
      <section className=" bg-cover text-gray-600">
        <div className="container mx-auto px-5 py-24" bis_skin_checked="1">
          <div className="mb-20 text-center" bis_skin_checked="1">
            <h1 className=" mb-4 text-center text-2xl font-medium text-white sm:text-3xl">
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
              <div
                className="flex h-full items-center rounded bg-gray-100 p-4"
                bis_skin_checked="1"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="mr-4 size-6 shrink-0 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="font-medium">Hemat</span>
              </div>
            </div>
            <div className="w-full p-2 sm:w-1/2" bis_skin_checked="1">
              <div
                className="flex h-full items-center rounded bg-gray-100 p-4"
                bis_skin_checked="1"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="mr-4 h-6 w-6 flex-shrink-0 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className=" font-medium">Lengkap</span>
              </div>
            </div>
            <div className="w-full p-2 sm:w-1/2" bis_skin_checked="1">
              <div
                className="flex h-full items-center rounded bg-gray-100 p-4"
                bis_skin_checked="1"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="mr-4 size-6 shrink-0 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Berkualitas</span>
              </div>
            </div>
            <div class="w-full p-2 sm:w-1/2" bis_skin_checked="1">
              <div
                class="flex h-full items-center rounded bg-gray-100 p-4"
                bis_skin_checked="1"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="mr-4 size-6 shrink-0 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className=" font-medium">Promo Setiap Hari</span>
              </div>
            </div>
          </div>
          <button className="mx-auto mt-16 flex rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
            Ayo Belanja Sekarang🔥
          </button>
        </div>
      </section>
    </div>
  );
};

export default Info;
