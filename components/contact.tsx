"use client";

import React, { useRef, useState } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { BsSendFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmails";

import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView({
    sectionName: "Contact",
    thresholdValue: 0.5,
  });

  return (
    <motion.section
      id="contact"
      className="mt-10 flex w-[min(100%,38rem)] scroll-mt-28 flex-col items-center justify-center"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <div className=" w-[20rem] sm:w-[34rem]  md:w-[38rem] lg:w-[38rem] xl:w-[38rem]">
        <p className=" text-center text-[1rem] text-gray-600 dark:text-white/80">
          please contact me at{" "}
          <span className=" cursor-pointer underline">
            <a href="mailto:akashsinghnitrkl@gmail.com">
              akashsinghnitrkl@gmail.com
            </a>
          </span>{" "}
          or through this form.
        </p>
      </div>

      <form
        className="dark:text-black"
        action={async (FormData) => {
          const { data, error } = await sendEmail(FormData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully !!");
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="">
            <input
              name="senderEmail"
              type="email"
              className=" peer mt-8 h-10 w-[20rem] rounded-md border-[0.1rem] bg-gray-200 px-4 py-2 text-gray-800 invalid:text-gray-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500 sm:w-[34rem]  md:w-[38rem] lg:w-[38rem] xl:w-[38rem] dark:bg-white/75 dark:outline-none dark:placeholder:font-semibold dark:placeholder:text-black/40 dark:focus:bg-white dark:placeholder:focus:text-black/50"
              placeholder="Your email"
              maxLength={500}
            />
            <p className=" ml-4 mt-1 hidden text-[0.8rem] font-bold text-pink-600 required:block peer-invalid:block">
              Enter a valid email.
            </p>
          </div>

          <textarea
            required
            name="message"
            maxLength={5000}
            className="mt-4
h-40 w-[20rem] rounded-md border-[0.1rem] bg-gray-200 px-4 py-2 transition-all focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500 sm:w-[34rem] md:w-[38rem] lg:w-[38rem] xl:w-[38rem] dark:bg-white/75 dark:outline-none dark:placeholder:font-semibold dark:placeholder:text-black/40 dark:focus:bg-white dark:placeholder:focus:text-black/50"
            placeholder="Your message"
          ></textarea>
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  );
}
