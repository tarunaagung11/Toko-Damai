import { React } from "react";
import { motion } from "motion/react";
import Logo from "../assets/Damairun/RUN TAGLINE 2.png";
import Waveline from "../assets/Damairun/WAVELINE.png";
import LogoPutih from "../assets/Damairun/LOGO 1 PUTIH.png";

const Step = () => {
  return (
    <div>
      <section
        className=" text-white"
        style={{ backgroundImage: `url(${Waveline})` }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.25 }}
          className="container mx-auto flex flex-wrap justify-center px-5 py-10"
          bis_skin_checked="1"
        >
          <img src={LogoPutih} className="w-[350px] justify-center pb-6" />

          <div className="flex w-full flex-wrap" bis_skin_checked="1">
            <div
              className="md:w-1/2 md:py-6 md:pr-10 lg:w-2/5"
              bis_skin_checked="1"
            >
              <div className="relative flex pb-12" bis_skin_checked="1">
                <div
                  className="absolute inset-0 flex h-full w-10 items-center justify-center"
                  bis_skin_checked="1"
                >
                  <div
                    className="pointer-events-none h-full w-1 bg-gray-200"
                    bis_skin_checked="1"
                  ></div>
                </div>
                <div
                  className="relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white"
                  bis_skin_checked="1"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="size-5 "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="grow pl-4" bis_skin_checked="1">
                  <h2 className=" mb-1 text-sm font-medium tracking-wider text-white">
                    STEP 1
                  </h2>
                  <p className="leading-relaxed">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
              <div className="relative flex pb-12" bis_skin_checked="1">
                <div
                  className="absolute inset-0 flex h-full w-10 items-center justify-center"
                  bis_skin_checked="1"
                >
                  <div
                    className="pointer-events-none h-full w-1 bg-gray-200"
                    bis_skin_checked="1"
                  ></div>
                </div>
                <div
                  className="relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white"
                  bis_skin_checked="1"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="size-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="grow pl-4" bis_skin_checked="1">
                  <h2 className=" mb-1 text-sm font-medium tracking-wider text-white">
                    STEP 2
                  </h2>
                  <p className="leading-relaxed">
                    Vice migas literally kitsch +1 pok pok. Truffaut hot chicken
                    slow-carb health goth, vape typewriter.
                  </p>
                </div>
              </div>
              <div className="relative flex pb-12" bis_skin_checked="1">
                <div
                  className="absolute inset-0 flex h-full w-10 items-center justify-center"
                  bis_skin_checked="1"
                >
                  <div
                    className="pointer-events-none h-full w-1 bg-gray-200"
                    bis_skin_checked="1"
                  ></div>
                </div>
                <div
                  className="relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white"
                  bis_skin_checked="1"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="size-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="grow pl-4" bis_skin_checked="1">
                  <h2 className=" mb-1 text-sm font-medium tracking-wider text-white">
                    STEP 3
                  </h2>
                  <p className="leading-relaxed">
                    Coloring book nar whal glossier master cleanse umami. Salvia
                    +1 master cleanse blog taiyaki.
                  </p>
                </div>
              </div>
              <div className="relative flex pb-12" bis_skin_checked="1">
                <div
                  className="absolute inset-0 flex h-full w-10 items-center justify-center"
                  bis_skin_checked="1"
                >
                  <div
                    className="pointer-events-none h-full w-1 bg-gray-200"
                    bis_skin_checked="1"
                  ></div>
                </div>
                <div
                  className="relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white"
                  bis_skin_checked="1"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="size-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="grow pl-4" bis_skin_checked="1">
                  <h2 className=" mb-1 text-sm font-medium tracking-wider text-white">
                    STEP 4
                  </h2>
                  <p className="leading-relaxed">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
              <div className="relative flex" bis_skin_checked="1">
                <div
                  className="relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white"
                  bis_skin_checked="1"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="size-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="grow pl-4" bis_skin_checked="1">
                  <h2 className=" mb-1 text-sm font-medium tracking-wider text-white">
                    FINISH
                  </h2>
                  <p className="leading-relaxed">
                    Pitchfork ugh tattooed scenester echo park gastropub
                    whatever cold-pressed retro.
                  </p>
                </div>
              </div>
            </div>
            <motion.img
              variants={{
                hidden: { opacity: 0.25, x: -200 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.25 }}
              className="mt-12 rounded-lg object-cover object-center  md:mt-36 md:h-[310px] md:w-[360px] lg:mt-10 lg:h-[500px] lg:w-[580px] "
              src={Logo}
              alt="step"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Step;
