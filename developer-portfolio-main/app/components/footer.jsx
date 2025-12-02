// @flow strict
import Link from "next/link";
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t border-white/5 bg-white/5 text-white backdrop-blur-xl">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#d50032] to-transparent" />
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-white/70">
            Crafted by{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/mark-cirineo-65248b175/"
              className="text-[#d50032] transition-colors duration-200 hover:text-[#1d4f91]"
            >
              Mark Cirineo
            </Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/mcirin3/portfolio2025"
              className="flex items-center gap-2 uppercase transition-colors duration-200 hover:text-[#d50032]"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/mcirin3/portfolio2025/fork"
              className="flex items-center gap-2 uppercase transition-colors duration-200 hover:text-[#d50032]"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
