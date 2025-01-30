"use client";

/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView({
    sectionName: "About",
    thresholdValue: 0.8,
  });

  return (
    <motion.section
      ref={ref}
      id="about"
      className=" flex max-w-[50rem] scroll-mt-[6.5rem] flex-col items-center justify-center px-3 text-center text-[0.8rem] font-medium leading-loose sm:text-[1rem]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
      }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Hello! I'm <span className=" font-bold">Akash Singh</span> , a final
        year undergraduate at NIT Rourkela with a focus on{" "}
        <span className=" font-bold">full-stack development</span>. I'm skilled
        in using the{" "}
        <span className=" font-bold">
          {" "}
          MERN stack, Next.js, Tailwind CSS, and TypeScript{" "}
        </span>
        , having developed multiple projects that leverage these technologies.
        My expertise also extends to database management with{" "}
        <span className=" font-bold">SQL and MongoDB.</span>
        Passionate about solving real-world problems, I continuously enhance my
        abilities in web development and am proficient in Data Structures and
        Algorithms, solving over{" "}
        <span className=" font-bold">
          300+ problems on LeetCode and 150+ on codeforces.
        </span>
      </p>{" "}
      <p>
        Outside of the tech world, I enjoy playing cricket, football, and
        volleyball, which keep me active and refreshed.{" "}
        <span className=" font-bold">
          I am actively seeking internship and remote work opportunities where I
          can contribute to innovative projects and grow professionally.
        </span>{" "}
        Feel free to contact me to discuss how we can work together!
      </p>
    </motion.section>
  );
}
