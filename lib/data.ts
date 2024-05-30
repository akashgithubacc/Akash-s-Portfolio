import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cypherveilImg from "@/public/cypherveil.png";
import fitfusionImg from "@/public/fitfusion.png";
import memoriesImg from "@/public/memories.png";

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
    title: "Full-Stack Developer",
    location: "Baavlibuch",
    description:
      "Successfully implemented responsive front-end features in the site, entered databases into the system, maintained and cleaned more than 500 lines of code.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023",
  },
  {
    title: "Learning MERN stack",
    location: "NIT Rourkela",
    description:
      "As an enthusiatic developer, I learned MERN stack and developed multiple frontend and full stack projects.",
    icon: React.createElement(FaReact),
    date: "2023-now",
  },
] as const;

export const projectsData = [
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
] as const;
