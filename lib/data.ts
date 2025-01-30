import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import cypherveilImg from "@/public/cypherveil.png";
import fitfusionImg from "@/public/fitfusion.png";
import memoriesImg from "@/public/memories.png";
import anon from "@/public/anon.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "NIT Rourkela",
    location: "Odisha",
    description:
      "Currently in my final year, I am pursuing Btech in NIT Rourkela from 2021-2025",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  },
  {
    title: "Front end Developer Intern",
    location: "Blupp",
    description:
      "Reduced client site build size from 2MB+ to 0.5-0.9MB using Astro JS, Tailwind, JavaScript, and MDX, improving load times by 40-60%. Developed dynamic, responsive components with Tailwind CSS and JavaScript, ensuring smooth user experiences. Maintained clean code practices and efficient GitHub collaboration, enhancing teamwork across multiple projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2023- July 2024",
  },
  {
    title: "Front Developer Intern",
    location: "Baavlibuch",
    description:
      "Successfully implemented responsive front-end features in the site, entered databases into the system, maintained and cleaned more than 500 lines of code.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Anon",
    description:
      "Optimized MongoDB for Next.js edge runtime, implemented authentication, AI-powered message suggestions, OTP emails, and built a responsive UI with ShadCN and Zod validation.",
    tags: ["Nextjs", "Typescript", "Zod", "Hugging Face", "ShadCN", "MongoDB"],
    imageUrl: anon,
    projectLink: "https://github.com/anj20/CypherVeil",
  },
  {
    title: "Cypherveil",
    description:
      "Worked in a group project to develop Cypherveil, which allows users to make anonymous audio and video calls from anywhere in the world.",
    tags: ["React", "Material UI", "MongoDB", "Agora API", "Blockchain"],
    imageUrl: cypherveilImg,
    projectLink: "https://github.com/anj20/CypherVeil",
  },
  {
    title: "Fit Fusion",
    description:
      "Developed a React front-end application using 2 APIs which fetches more than 1000+ exercises data and helps users in their fitness journey.",
    tags: ["React", "Material UI", "Rapid APIs"],
    imageUrl: fitfusionImg,
    projectLink: "https://github.com/akashgithubacc/gym_exercises",
  },
  {
    title: "Memories",
    description:
      "Developed a Full stack MERN social media app, which allows users to post images along with captions and hashtags, along with edit post, like post and delete post feature.",
    tags: ["React", "Nodejs", "Expressjs", "MongoDB", "Material UI"],
    imageUrl: memoriesImg,
    projectLink: "https://github.com/akashgithubacc/memories_first",
  },
] as const;

export const skillsData = [
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "context API",
  "Express",
  "Python",
  "Framer Motion",
  "Material UI",
  "SQL",
  "APIs",
  "ShadCN",
] as const;
