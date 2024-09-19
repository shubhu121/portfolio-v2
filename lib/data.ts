import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import thinkspace from "@/public/thinkspace.png";
import stem from "@/public/stem.png";
import trelloImg from "@/public/trello.png";
import flame from "@/public/flame.png";
import rideme from '@/public/rideme.png'
import chat from '@/public/chat.png'

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
    title: "Software Developer Intern",
    company: "Builder.ai",
    description:
      "I majorly workded on backend of chrome extension based saas ai tool.",
    icon: React.createElement(FaReact),
    date: "2023(Oct) - 2024(Apr)",
  },
  {
    title: "Junior Software Developer Intern",
    company: "Reslink",
    description:
      "Started as a front end web developer using Reactjs and Material UI. Majorly worked on bug fixing, refactoring and folder structure.",
    icon: React.createElement(CgWorkAlt),
    date: "2022(May) - 2022(Aug)",
  },
  {
    title: "Electronics and Communication Engineering",
    company: "IIIT, Nagpur",
    description:
      "I am pursuing engineering in electronics and communication.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  }

] as const;

export const projectsData = [

  {
    title: "Ride-Me",
    description:
      "Ride Me is a web based app for pool cab booking, having two different set of users- drivers and commuters.",
    tags: ["ReactJs", , "TailwindCSS", "Firebase", "Firestore", "Typescript"],
    imageUrl: rideme,
    projectLink: 'https://ride-me.vercel.app/',
    githubLink: 'https://github.com/shubhu121/Ride-Me',
  },
  {
    title: "Team Chat application",
    description:
      "Real time chat application, where users can create room and chat in person as well. Also, media files can also be shared.",
    tags: ["ReactJs", "Vite", "Typescript", "MongoDb", "NodeJs", "Express"],
    imageUrl: chat,
    projectLink: 'https://mychat-5vyn.onrender.com/login',
    githubLink: 'https://github.com/shubhu121/Social_chat',
  },
  {
    title: "Thinkspace",
    description:
      "Full stack app for all in one Tool for Your Ideas, Documents And Plans..... ",
    tags: ["Next.js", "Tailwind", "shad-cn", "Zustand", "MySQL", "Prisma"],
    imageUrl: thinkspace,
    projectLink: 'https://think-space-xi.vercel.app/',
    githubLink: 'https://github.com/shubhu121/symmetrical-fishstick',
  },
  {
    title: "Flame n Foe",
    description:
      "Web based game made with Phaser.io library",
    tags: ["Typescript", "ReactJs", "Tailwind", "Paser.io", "VueJs", "Sass", "TailwindCSS"],
    imageUrl: flame,
    projectLink: 'https://flame-n-foe.vercel.app/',
    githubLink: 'https://github.com/shubhu121/web-game',
  },
  {
    title: "CuriouSTEAM",
    description:
      "Web based app for highlighting the opportunities, requirements, and potential future trends in STEM.",
    tags: ["React", "TypeScript", "Headless UI", "Next.js", "Tailwind", "Framer-motion"],
    imageUrl: stem,
    projectLink: 'https://curious-stem.vercel.app/',
    githubLink: 'https://github.com/shubhu121/CuriousSTEAM',
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Headless UI",
  "Express",
  "PostgreSQL",
  "Python",
  "Linux",
  "Framer Motion",
] as const;
