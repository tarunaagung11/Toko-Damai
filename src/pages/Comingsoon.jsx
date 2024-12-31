// src/components/ComingSoon.jsx
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import LogoPutih from "../assets/Damairun/LOGO 1 PUTIH.png";
import Waveline from "../assets/Damairun/WAVELINE.png";
import { Button } from "flowbite-react";
import Tagline from "../assets/Damairun/RUN TAGLINE 2.png";

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const countDownEndDate = "January 20, 2025 00:00:00";
    const endDate = new Date(countDownEndDate).getTime();

    const interval = setInterval(() => {
      const timeNow = new Date().getTime();
      const timeLeft = endDate - timeNow;

      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setCountdown({
          days: days < 10 ? `0${days}` : days.toString(),
          hours: hours < 10 ? `0${hours}` : hours.toString(),
          minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
          seconds: seconds < 10 ? `0${seconds}` : seconds.toString(),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-10 flex w-full text-left ">
      <ul className="mx-auto flex w-full place-content-center gap-5 text-gray-50 md:place-content-end">
        <li>
          <div
            className=" flex size-16 items-center justify-center rounded-full border-4 border-dotted text-2xl font-bold text-white lg:size-24 lg:text-4xl"
            id="cdD"
          >
            {countdown.days}
          </div>
          <p className="mt-2 text-center text-xs">Days</p>
        </li>
        <li>
          <div
            className="flex size-16 items-center justify-center rounded-full border-4 border-dotted border-white text-2xl font-bold text-white lg:size-24 lg:text-4xl"
            id="cdH"
          >
            {countdown.hours}
          </div>
          <p className="mt-2 text-center text-xs">Hours</p>
        </li>
        <li>
          <div
            className="flex size-16 items-center justify-center rounded-full border-4 border-dotted border-white text-2xl font-bold text-white lg:size-24 lg:text-4xl"
            id="cdM"
          >
            {countdown.minutes}
          </div>
          <p className="mt-2 text-center text-xs">Minutes</p>
        </li>
        <li>
          <div
            className="flex size-16 items-center justify-center rounded-full border-4 border-dotted border-white text-2xl font-bold text-white lg:size-24 lg:text-4xl"
            id="cdS"
          >
            {countdown.seconds}
          </div>
          <p className="mt-2 text-center text-xs">Seconds</p>
        </li>
      </ul>
    </div>
  );
};

const Comingsoon = () => {
  return (
    <header
      className="flex w-full bg-cover bg-center "
      style={{ backgroundImage: `url(${Waveline})` }}
    >
      <motion.div
        className="flex flex-wrap justify-center"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.25 }}
      >
        <div className="flex min-h-screen w-full   p-10 md:w-1/2">
          <div className="my-auto w-full text-center">
            <img src={LogoPutih} className="w-[350px] justify-center pb-6" />
            <h6 className=" mb-14 text-4xl font-bold uppercase text-white md:-mr-20 md:text-right md:text-5xl lg:text-6xl">
              Batas <span className="text-white/70 md:-mr-20">Pendaftaran</span>
            </h6>
            {/* Countdown Component */}
            <Countdown />
            {/* Content */}
            <p className="mb-10 text-base text-gray-200 md:text-right">
              Bergabunglah dalam sejarah! Kami mengundang Anda untuk menjadi
              bagian dari Damai Half Marathon 2024, lomba lari pertama di
              Sulawesi Tenggara yang menggabungkan semangat olahraga dengan
              keindahan alam lokal.
            </p>
            {/* Social media */}
            <div className="flex w-full text-left">
              <ul className="mx-auto flex w-full place-content-center gap-10 text-gray-500 md:place-content-end">
                <a href="/damaihalfmarathon">
                  <Button gradientDuoTone="tealToLime">Daftar Sekarang</Button>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="items-center justify-center self-center">
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
            src={Tagline}
            className="mt-0 flex w-[600px] items-center justify-self-center pl-24 sm:mt-0 md:mt-0 lg:mt-48"
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Comingsoon;
