"use client";

// @flow strict
import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import GlowCard to ensure it's only loaded client-side
const GlowCard = dynamic(() => import("../../helper/glow-card"), { ssr: false });

// Mock CSV data (replace with actual CSV loading logic)
const csvData = `Day,Time,Course,Location
MWF, 2:00 PM - 2:50 PM, CS 442: Software Engineering II , BSB 145
MWF, 3:30 PM - 4:45 PM,CS 422: User Interface & Design Programming, TBH 180G
MWF, 5:00 PM - 6:15 PM,CS 494: Mobile Robotics for CS, TBH 180G
T, 11:00 AM - 1:50 PM, CS 211 Lab Proctoring, SELE 2263
W, 11:15 AM - 1:15 PM,CS 211 Office Hours, CS Lounge
S, 8:00 - 9:00 PM,CS 211 Office Hours, (ONLINE via Zoom)`;

function parseCSV(data) {
  const rows = data.split("\n");
  const headers = rows[0].split(",");
  const entries = rows.slice(1).map(row => {
    const values = row.split(",");
    return headers.reduce((acc, header, index) => {
      acc[header.trim()] = values[index].trim();
      return acc;
    }, {});
  });
  return entries;
}

function Schedule() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // Simulate fetching and parsing CSV data
    const parsedData = parseCSV(csvData);
    setSchedule(parsedData);
  }, []);

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
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Spring 2025 Schedule
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
            <table className="w-full text-left text-sm sm:text-base">
              <thead>
                <tr className="text-[#16f2b3]">
                  <th className="py-2 px-4">Day</th>
                  <th className="py-2 px-4">Time</th>
                  <th className="py-2 px-4">Course</th>
                  <th className="py-2 px-4">Location</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((entry, index) => (
                  <tr key={index} className="border-b border-[#25213b]">
                    <td className="py-2 px-4">{entry.Day}</td>
                    <td className="py-2 px-4">{entry.Time}</td>
                    <td className="py-2 px-4">{entry.Course}</td>
                    <td className="py-2 px-4">{entry.Location}</td>
                  </tr>
                ))}
              </tbody>
            </table> 
            
          </div>
        </GlowCard>
        <button> 
          <a 
            href="https://oh-signin-queue.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 inline-block bg-[#1a1443] text-white text-sm sm:text-base font-medium py-2 px-6 rounded-lg hover:bg-violet-700 transition-colors duration-300"
          >
            Office Hours Queue
</a></button>
      </div>
    </div>
  );
}

export default Schedule;
