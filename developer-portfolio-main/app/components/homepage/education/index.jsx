// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdSchool } from "react-icons/md";
import GlowCard from "../../helper/glow-card";
import GymBadge from "../../helper/gym-badge";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#111827]"></span>
          <span className="bg-[#111827] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-[#111827]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full min-h-[320px] max-w-md">
              <div className="uic-grad-scene cap-only">
                <div className="uic-cap uic-cap-float" />
                <div className="uic-logo-badge">UIC</div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                educations.map(education => (
                  <GlowCard key={education.id} identifier={`education-${education.id}`}>
                    <div className="p-3 relative text-white">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[var(--secondary-color)]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-[var(--primary-color)] transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base">{education.institution}</p>
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

      {/* Gym Badges Achievement Section */}
      <div className="mt-16 pt-8 border-t border-[#25213b]">
        <div className="flex justify-center mb-8">
          <span className="bg-[#111827] w-fit text-white p-2 px-5 text-xl rounded-md">
            Achievement Badges
          </span>
        </div>
        <div className="flex justify-center gap-8 lg:gap-12 flex-wrap">
          <GymBadge icon="🎓" label="UIC Badge" year="2024" />
          <GymBadge icon="⚡" label="Developer" year="2024" />
          <GymBadge icon="🔥" label="Full-Stack" year="2023" />
        </div>
      </div>
    </div>
  );
};

export default Education;
