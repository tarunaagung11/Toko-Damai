import React from "react";
import Blog1 from "../assets/Blog1.jpg";
import Blog2 from "../assets/Blog2.jpg";
import Blog3 from "../assets/Blog3.jpg";

const Blog = () => {
  return (
    <section className=" pt-4 text-gray-600">
      <h1 className="pb-6 text-center font-roboto text-3xl font-semibold text-white">
        Blog
      </h1>
      <div className="container mx-auto px-5" bis_skin_checked="1">
        <div className="-m-4 flex flex-wrap" bis_skin_checked="1">
          <div className="p-4 md:w-1/3" bis_skin_checked="1">
            <div
              // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
              className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60"
              bis_skin_checked="1"
            >
              <img
                className="w-full object-cover object-center md:h-36 lg:h-48"
                src={Blog1}
                alt="blog"
              />
              <div className="p-6" bis_skin_checked="1">
                <h2 className=" mb-1 text-xs font-medium tracking-widest text-white">
                  FRESH
                </h2>
                <h1 className=" mb-3 text-lg font-medium text-white">
                  Keajaiban Buah: Sumber Nutrisi dan Manfaat untuk Kesehatan
                </h1>
                <p className="mb-3 leading-relaxed text-white">
                  Buah-buahan adalah anugerah alam yang kaya akan nutrisi
                  penting bagi tubuh. Tidak hanya memiliki rasa yang lezat,
                  tetapi buah juga menawarkan berbagai manfaat kesehatan yang
                  luar biasa. Dalam artikel ini...
                </p>
                <div
                  className="flex flex-wrap items-center "
                  bis_skin_checked="1"
                >
                  <a className="inline-flex items-center text-white md:mb-2 lg:mb-0">
                    Learn More
                    <svg
                      className="ml-2 size-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-white md:ml-0 lg:ml-auto">
                    <svg
                      className="mr-1 size-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="inline-flex items-center text-sm leading-none text-white">
                    <svg
                      className="mr-1 size-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3" bis_skin_checked="1">
            <div
              // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
              className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60"
              bis_skin_checked="1"
            >
              <img
                className="w-full object-cover object-center md:h-36 lg:h-48"
                src={Blog2}
                alt="blog"
              />
              <div className="p-6" bis_skin_checked="1">
                <h2 className=" mb-1 text-xs font-medium tracking-widest text-white">
                  GROCERY
                </h2>
                <h1 className=" mb-3 text-lg font-medium text-white">
                  Panduan Belanja Groceries: Hemat, Efisien, dan Tepat Sasaran
                </h1>
                <p className="mb-3 leading-relaxed text-white">
                  Berbelanja groceries adalah aktivitas rutin yang penting untuk
                  memenuhi kebutuhan sehari-hari. Namun, tanpa perencanaan yang
                  baik, belanja bisa menjadi pemborosan waktu dan uang. Artikel
                  ini...
                </p>
                <div
                  className="flex flex-wrap items-center"
                  bis_skin_checked="1"
                >
                  <a className="inline-flex items-center text-white md:mb-2 lg:mb-0">
                    Learn More
                    <svg
                      className="ml-2 size-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-white md:ml-0 lg:ml-auto">
                    <svg
                      className="mr-1 size-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="inline-flex items-center text-sm leading-none text-white">
                    <svg
                      className="mr-1 size-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3" bis_skin_checked="1">
            <div
              // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
              className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60"
              bis_skin_checked="1"
            >
              <img
                className="w-full object-cover object-center md:h-36 lg:h-48"
                src={Blog3}
                alt="blog"
              />
              <div className="p-6" bis_skin_checked="1">
                <h2 className=" mb-1 text-xs font-medium tracking-widest text-white">
                  BEAUTY CORNER
                </h2>
                <h1 className=" mb-3 text-lg font-medium text-white">
                  Sudut Cantik untuk Perawatan dan Kesehatan Kulit
                </h1>
                <p className="mb-3 leading-relaxed text-white">
                  Di era modern ini, perawatan kulit dan kecantikan bukan lagi
                  sekadar kebutuhan, tetapi juga menjadi bagian dari gaya hidup.
                  Salah satu tren yang sedang populer...
                </p>
                <div
                  className="flex flex-wrap items-center "
                  bis_skin_checked="1"
                >
                  <a className="inline-flex items-center text-white md:mb-2 lg:mb-0">
                    Learn More
                    <svg
                      className="ml-2 size-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-white md:ml-0 lg:ml-auto">
                    <svg
                      className="mr-1 size-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="inline-flex items-center text-sm leading-none text-white">
                    <svg
                      className="mr-1 size-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
