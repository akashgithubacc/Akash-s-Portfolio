"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <section>
      <motion.div
        className="leading-1 my-[2rem] hidden bg-inherit text-[3rem] text-gray-300 sm:block dark:bg-opacity-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          type: "tween",
          stiffness: 200,
        }}
      >
        |
      </motion.div>
    </section>
  );
}
