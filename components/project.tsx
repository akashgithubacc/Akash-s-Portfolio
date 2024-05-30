"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      className="group mb-10 flex flex-col items-center rounded-lg border-2 border-gray-800/5"
      style={{
        scale: scale,
        opacity: opacity,
      }}
    >
      <a
        className=" relative h-[20rem] max-w-[28.58rem] cursor-pointer overflow-hidden bg-gray-100 pl-4 pt-8 shadow-2xl transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
        href={projectLink}
        target="_blank"
      >
        <div className="flex h-full w-1/2 flex-col pb-3 pr-4 group-even:ml-[50%] group-even:pl-3 group-even:pr-3">
          <p className=" pb-2 text-[1rem] font-semibold text-gray-950 dark:text-white">
            {title}
          </p>
          <p className=" pb-8 text-[0.7rem] font-medium leading-relaxed text-gray-600 dark:text-white/70 dark:hover:text-white">
            {description}
          </p>
          <div className="mt-auto flex flex-wrap items-center gap-2 ">
            {tags.map((tag) => (
              <div
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.5rem] font-semibold uppercase tracking-wider text-white dark:text-white/70 dark:hover:text-white"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute left-[16rem] top-8 w-1/2 transition-all group-even:left-[-1.2rem] group-hover:-translate-x-4  group-hover:-translate-y-2 group-hover:-rotate-3 group-hover:scale-[1.04] group-even:group-hover:translate-x-4 group-even:group-hover:rotate-3 ">
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className="h-[20rem] w-[32rem] rounded-xl"
          />
        </div>
      </a>
    </motion.div>
  );
}
