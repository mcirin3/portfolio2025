"use client";

// @flow strict
import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import GlowCard to ensure it's only loaded client-side
const GlowCard = dynamic(() => import("../../helper/glow-card"), { ssr: false });

function Schedule() {
  return (
    <div id="schedule" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Fall 2025 Schedule
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <GlowCard identifier="schedule-table">
          <div className="p-5 relative text-white">
            <Image
              src="/blur-23.svg"
              alt="Hero"
              width={1080}
              height={200}
              className="absolute bottom-0 opacity-80"
            />
            {/* Embed Google Sheet as an iframe */}
            <iframe
              src="https://docs.google.com/spreadsheets/d/1Lrbj90O2zfE3L3wxGCIdcuxODq-sq2II11n4gmkS5Yg/edit?usp=sharing"
              width="100%"
              height="600"  // Adjust the height as needed
              frameBorder="0"
              style={{ border: "none" }}
              title="Google Sheet Schedule"
            ></iframe>
          </div>
        </GlowCard>

        {/* Office Hours Queue Button */}
        <button>
          <a
            href="https://oh-signin-queue.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-[#1a1443] text-white text-sm sm:text-base font-medium py-2 px-6 rounded-lg hover:bg-violet-700 transition-colors duration-300"
          >
            Office Hours Queue
          </a>
        </button>
      </div>
    </div>
  );
}

export default Schedule;