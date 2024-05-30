/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import profileImg from "@/public/profileImg.jpeg";
import { motion, spring } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView({
    sectionName: "Home",
    thresholdValue: 0.8,
  });

  const { setactiveSection, settimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id="home"
      ref={ref}
      className="flex max-w-[50rem] scroll-mt-[7rem] flex-col gap-y-[1.5rem]"
    >
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            <Image
              className="h-[10rem] w-[8rem] rounded-full border-[6px] border-white object-cover shadow-xl"
              src={profileImg}
              alt="Profile Photograph"
              quality="95"
              priority={true}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0, y: "-2rem" }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}
          >
            <p className="absolute left-[75%] top-[80%] text-[2rem]">🙋🏻‍♂️</p>
          </motion.div>
        </div>
      </div>

      <motion.p
        className="mx-4 text-center text-[1rem] leading-loose sm:text-[1.2rem]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Akash Singh,</span> A final year
        undergrad at <span className="font-bold"> NIT Rourkela.</span> Exploring
        and building web apps with{" "}
        <span className="font-bold">MERN stack and Nextjs.</span> I enjoy
        <span className="font-bold italic">
          {" "}
          data structures & algorithm, solving real world problems.
        </span>{" "}
        Actively looking for{" "}
        <span className="font-bold">
          Internships or remote work opportunities.
        </span>
      </motion.p>

      <motion.div
        className="mx-2 flex flex-col items-center justify-center gap-y-2 sm:flex-row sm:gap-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-1 rounded-full bg-gray-900 px-4 py-2 text-[0.8rem] font-semibold text-white outline-none transition-all duration-[0.4s] hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 sm:gap-2 sm:py-3 sm:text-[1rem]"
          onClick={() => {
            setactiveSection("Contact");
            settimeOfLastClick(Date.now());
          }}
        >
          Contact Me Here <BsArrowRight className="text-[1rem] opacity-80" />
        </Link>
        <a
          href="https://drive.google.com/drive/folders/1cq6QeSWo42aQkSYuVhqTxsrPG_LHYgV0?usp=sharing"
          className=" flex items-center
gap-1 rounded-full bg-white px-4 py-2 text-[0.8rem] font-semibold text-gray-700 outline-none transition-all duration-[0.4s] hover:scale-110
 hover:bg-gray-100 hover:text-gray-950 focus:scale-110 active:scale-105 sm:gap-2 sm:py-3 sm:text-[1rem] dark:bg-white/10 dark:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume <HiDownload className="text-[1rem] opacity-80" />
        </a>
        <a
          href="https://www.linkedin.com/in/akash-singh-986950237/"
          className="flex items-center gap-1 rounded-full bg-white px-4 py-3 text-[1.4rem] font-semibold  text-gray-700 outline-none transition-all
duration-[0.4s] hover:scale-110 hover:bg-gray-100 hover:text-gray-950 focus:scale-110 active:scale-95 dark:bg-white/10 dark:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="" />
        </a>
        <a
          href="https://github.com/akashgithubacc"
          className=" flex items-center
gap-1
rounded-full bg-white px-4 py-3 text-[1.5rem] font-semibold text-gray-700 outline-none transition-all duration-[0.4s]
hover:scale-110 hover:bg-gray-100 hover:text-gray-950 focus:scale-110 active:scale-95  dark:bg-white/10 dark:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare className="" />
        </a>

        <a
          href="https://leetcode.com/u/JakePeraltaBr99/"
          className=" flex items-center
gap-1
rounded-full bg-white px-4 py-3 text-[1.5rem] font-semibold text-gray-700 outline-none transition-all duration-[0.4s]
hover:scale-110 hover:bg-gray-100 hover:text-gray-950 focus:scale-110 active:scale-95  dark:bg-white/10 dark:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode className="" />
        </a>
      </motion.div>
    </section>
  );
}
