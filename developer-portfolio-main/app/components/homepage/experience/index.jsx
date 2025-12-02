// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#0C2340]"></span>
          <span className="bg-[#0C2340] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#0C2340]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="relative w-full h-full min-h-[320px] rounded-3xl border border-white/5 bg-gradient-to-br from-[#0c2340]/80 via-[#0f2748]/60 to-[#d50032]/20 p-6 shadow-[0_25px_90px_-50px_rgba(0,0,0,0.6)] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(213,0,50,0.25),transparent_35%),radial-gradient(circle_at_70%_40%,rgba(29,79,145,0.3),transparent_30%)]" />
              <div className="relative z-10 flex flex-col items-center gap-4 pt-4">
                <div className="uic-orbit">
                  <span className="orb orb-1" />
                  <span className="orb orb-2" />
                  <span className="orb orb-3" />
                </div>
                <p className="text-[#d50032] text-sm uppercase tracking-[0.18em]">Experience</p>
                <p className="text-white/80 text-center max-w-md text-sm lg:text-base">
                  Orbiting between research rigor and ship-fast execution—keeping delivery steady while ideas move.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#1d4f91]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-r from-[#0c2340]/70 via-[#0f2748]/70 to-[#d50032]/25 px-3 py-5">
                        <div className="flex items-center gap-x-6">
                          <div className="text-[#d50032] transition-all duration-300 hover:scale-125">
                            <BsPersonWorkspace size={36} />
                          </div>
                          <div>
                            <p className="text-base sm:text-xl mb-2 font-medium uppercase text-white">
                              {experience.title}
                            </p>
                            <p className="text-sm sm:text-base text-white/80">
                              {experience.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
