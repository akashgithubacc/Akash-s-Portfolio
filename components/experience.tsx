"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "@/context/theme-context";
import { color } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView({
    sectionName: "Experience",
    thresholdValue: 0.5,
  });

  const { theme } = useTheme();

  return (
    <section id="experience" className=" scroll-mt-28" ref={ref}>
      <div className=" mb-4">
        <SectionHeading>My Experience</SectionHeading>
      </div>

      <VerticalTimeline
        lineColor={theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)"}
        animate={true}
      >
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            icon={experience.icon}
            date={experience.date}
            visible
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0,0,0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            iconStyle={{
              background: theme === "light" ? "white" : "rgba(255, 255, 255,0)",
              fontSize: "1.5rem",
              zIndex: "1",
            }}
          >
            <div>
              <h3 className=" !text-[1.2rem] font-bold capitalize text-black dark:text-white">
                {experience.title}
              </h3>
              <h4 className=" !mt-0 !text-[1rem] font-semibold text-black dark:text-white/75">
                {experience.location}
              </h4>
              <p className=" !mt-1 !text-[0.9rem] !font-normal text-gray-700 dark:text-white/75">
                {experience.description}
              </p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <div></div>
    </section>
  );
}
