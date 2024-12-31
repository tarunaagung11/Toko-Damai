import React from "react";
import Logo from "../assets/Damairun/RUN TAGLINE.png";

export default function Component() {
  return (
    <div>
      <div className="flex min-h-dvh flex-col items-center justify-center gap-8 px-4 py-5 md:px-6 md:py-5">
        <div className="flex flex-col items-center space-y-4  p-5 text-center">
          <CircleCheckIcon className="size-16 text-green-500" />
          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Pendaftaran telah berhasil
          </h1>
          <p className="max-w-[600px] text-white md:text-xl">
            Terima kasih telah menyelesaikan pendaftaran.
          </p>
          <img src={Logo} className=" h-96 " />
          <a
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-400 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Selesai
          </a>
        </div>
      </div>
    </div>
  );
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
