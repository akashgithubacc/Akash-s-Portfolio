"use client";

import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setactiveSection, settimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none  border-white border-opacity-50 bg-white bg-opacity-80 shadow-lg
     shadow-black/[0.03] sm:top-6 sm:h-[3.5rem] sm:w-[36rem] sm:rounded-full dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75"
        initial={{ y: -500, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-row flex-wrap items-center justify-center gap-y-1 text-[0.9rem] sm:w-[initial] sm:flex-nowrap sm:gap-5 ">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className={clsx(
                "relative flex h-3/4 items-center justify-center font-semibold text-gray-500",
                {
                  "text-black": activeSection === link.name,
                },
              )}
              initial={{ y: -500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300 ",
                  {
                    "text-black dark:text-gray-100":
                      activeSection === link.name,
                  },
                )}
                href={link.hash}
                onClick={() => {
                  setactiveSection(link.name);
                  settimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className=" absolute inset-0 -z-10 rounded-full bg-gray-200 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      damping: 30,
                      stiffness: 380,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
