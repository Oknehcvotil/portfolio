import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ralogisticsImg from "@/public/images/ralogistics.jpg";
import itsImg from "@/public/images/its.jpg";
import powerpulseImg from "@/public/images/powerpulse.jpg";
import phonebookImg from "@/public/images/phonebook.jpg";
import cinemaniaImg from "@/public/images/cinemania.jpg";
import miminoImg from "@/public/images/mimino.jpg";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "RA LOGISTICS",
    description:
      "A website for a freight forwarding company. It features a responsive layout, multilingual support, and a feedback form.",
    tags: [
      "React",
      "JS",
      "React Router",
      "Redux",
      "Formik",
      "Framer Motion",
      "react-i18next",
      "Node.js",
      "Nodemailer",
    ],
    href: "https://ralogistics.com.ua/",
    imageUrl: ralogisticsImg,
  },
  {
    title: "ITS",
    description:
      "A single-page website for a transport and logistics company with multilingual support and responsive design for use on all devices.",
    tags: ["React", "JS", "Redux", "react-i18next"],
    href: "https://ua-its.com/",
    imageUrl: itsImg,
  },
  {
    title: "Power Pulse",
    description:
      "Team project for a fitness app. It includes features such as authentication, searching, adding, removing, and filtering workouts and meals, pagination.",
    tags: [
      "React",
      "js",
      "Material UI",
      "Redux Toolkit",
      "Google API",
      "Node.js",
      "Express",
      "Mongo DB",
    ],
    href: "https://made-by-curiosity.github.io/power_pulse_frontend/welcome",
    imageUrl: powerpulseImg,
  },
  {
    title: "Phonebook",
    description:
      "An application that helps you save your private collection of contacts. You can register and log in to your account, as well as add, delete, and filter contacts.",
    tags: ["React", "JS", "Redux", "Axios", "Node.js", "EXPRESS.JS"],
    href: "https://oknehcvotil.github.io/goit-react-hw-08-phonebook/",
    imageUrl: phonebookImg,
  },
  {
    title: "Cinemania",
    description:
      "A team project of a mobile and tablet-friendly website that enables users to find information about upcoming, trending, new, and old movies by searching through The Movie Database (themoviedb) API.",
    tags: ["JS", "HTML/CSS", "Axios", "RESTful API", "AJAX"],
    href: "https://viktorsvertoka.github.io/cinemania/",
    imageUrl: cinemaniaImg,
  },
  {
    title: "Mimino",
    description:
      "A team project for a website where users can learn about a hotel and restaurant complex and the services available to them.",
    tags: ["JS", "HTML/CSS"],
    href: "https://dmytostas.github.io/mimino/",
    imageUrl: miminoImg,
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
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
