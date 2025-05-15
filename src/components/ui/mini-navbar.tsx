"use client";

import React from "react";

export function Navbar() {
  const logoElement = (
    <div className="relative flex items-center">
      <span className="text-gray-200 font-extrabold tracking-tight text-normal hover:text-white transition-colors">
        <span className="relative inline-block">
          <span
            className="text-red-500 font-black transform hover:scale-110 transition-transform duration-200 inline-block"
            style={{
              fontFamily: "'TT Berlinerins', 'Hope Sans', cursive",
              fontSize: "1.1rem",
              textShadow: "0 0 10px rgba(255, 0, 0, 0.3)",
              transform: "",
              filter: "drop-shadow(0 0 2px rgba(255, 0, 0, 0.5))",
              letterSpacing: "0.08rem",
              fontWeight: "bold",
            }}
          >
            n
          </span>
        </span>
        ovaa
      </span>
    </div>
  );

  const contactButtonElement = (
    <div className="relative group w-full sm:w-auto">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/30 to-red-500/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 group-hover:opacity-75 opacity-50"></div>
      <a
        href="mailto:help@novaa.computer"
        className="relative inline-block px-4 py-2 text-sm font-semibold text-white bg-black/30 backdrop-blur-sm rounded-full border border-white/20 hover:bg-black/40 transition-all duration-200 shadow-[0_0_12px_rgba(234,179,8,0.2)] hover:shadow-[0_0_16px_rgba(234,179,8,0.3)] w-full sm:w-auto"
      >
        Contact Us
      </a>
    </div>
  );

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center pl-6 pr-6 py-3 backdrop-blur-sm rounded-full border border-[#333] bg-[#1f1f1f57] w-[calc(100%-2rem)] sm:w-[600px] md:w-[720px] lg:w-[920px]">
      <div className="flex items-center justify-between w-full gap-x-6">
        <div className="flex items-center">{logoElement}</div>
        <div className="flex items-center">{contactButtonElement}</div>
      </div>
    </header>
  );
}
