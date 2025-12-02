// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-6 lg:py-12">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#0c2340]/60 via-[#1d4f91]/40 to-[#d50032]/35 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-[#1d4f91]/18 blur-3xl" />
      <div className="pointer-events-none absolute -right-12 bottom-0 h-64 w-64 rounded-full bg-[#d50032]/16 blur-3xl" />

      <div className="grid grid-cols-1 items-start gap-y-10 lg:grid-cols-2 lg:gap-12">
        <div className="order-2 flex flex-col items-start justify-center space-y-6 rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-2xl lg:order-1 lg:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#d50032]">
            <span className="h-2 w-2 rounded-full bg-[#d50032] shadow-[0_0_0_6px_rgba(213,0,50,0.16)]" />
            Building the next wave
          </div>

          <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl lg:leading-[3.4rem]">
            Hey, I&apos;m <span className="text-[#1d4f91]">{personalData.name}</span> -{" "}
            <span className="text-[#d50032]">{personalData.designation}</span> crafting thoughtful
            products for the modern web.
          </h1>

          <p className="text-base text-white/70 lg:text-lg">
            I blend full-stack engineering with a UX-first mindset to deliver performant,
            accessible experiences. Let&apos;s build something that feels as good as it ships.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
            {["Full-stack JavaScript", "Cloud curious", "UI polish believer"].map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[0.7rem] backdrop-blur"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0d1224] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:border-[#d50032] hover:text-[#d50032]"
            >
              <span>Contact me</span>
              <RiContactsFill size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d50032] via-[#e8414c] to-[#1d4f91] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_15px_80px_-35px_rgba(13,35,64,0.9)] transition-transform duration-200 hover:-translate-y-0.5"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:border-[#d50032] hover:text-[#d50032]"
              href="/projects"
            >
              View projects
            </Link>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <Link
              href={personalData.github}
              target="_blank"
              className="transition-all text-white/70 hover:text-[#1d4f91] hover:-translate-y-0.5 duration-200"
            >
              <BsGithub size={26} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="transition-all text-white/70 hover:text-[#1d4f91] hover:-translate-y-0.5 duration-200"
            >
              <BsLinkedin size={26} />
            </Link>
            <Link
              href={personalData.facebook}
              target="_blank"
              className="transition-all text-white/70 hover:text-[#1d4f91] hover:-translate-y-0.5 duration-200"
            >
              <FaFacebook size={26} />
            </Link>
            <Link
              href={personalData.leetcode}
              target="_blank"
              className="transition-all text-white/70 hover:text-[#1d4f91] hover:-translate-y-0.5 duration-200"
            >
              <SiLeetcode size={24} />
            </Link>
            <Link
              href={personalData.twitter}
              target="_blank"
              className="transition-all text-white/70 hover:text-[#1d4f91] hover:-translate-y-0.5 duration-200"
            >
              <FaTwitterSquare size={26} />
            </Link>
          </div>
        </div>

        <div className="relative order-1 rounded-3xl border border-white/5 bg-gradient-to-b from-white/10 via-white/0 to-white/5 shadow-[0_30px_120px_-50px_rgba(0,0,0,0.9)] lg:order-2">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d50032] to-[#1d4f91]" />
            <div className="h-[1px] w-full bg-gradient-to-r from-[#1d4f91] to-transparent" />
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-orange-400" />
              <div className="h-3 w-3 rounded-full bg-green-200" />
            </div>
          </div>
          <div className="overflow-hidden border-t border-white/5 px-4 py-4 lg:px-8 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base leading-6 text-white/80">
              <div className="blink">
                <span className="mr-2 text-[#d50032]">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-[#d50032]">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Mark Cirineo</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NextJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Redux</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Express</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NestJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySql</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Docker</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AWS</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
              </div>
              <div>
                <span className="text-gray-400">{`};`}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
