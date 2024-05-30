"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { animate, motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView({
    sectionName: "Skills",
    thresholdValue: 0.8,
  });

  return (
    <section
      ref={ref}
      className="mb:7 max-w-[53rem] scroll-mt-28 px-[0.5rem] text-center"
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className=" flex flex-wrap justify-center gap-2 text-[1rem] text-gray-800 sm:text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            className=" rounded-xl border-4 border-black/[0.1] bg-white px-3 py-2 sm:px-4 sm:py-2 dark:bg-white/10 dark:text-white/70 dark:hover:text-white"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
