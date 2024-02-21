"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-40 max-w-[45rem] text-center leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After a successful experience working as a{" "}
        <span className="font-medium">Customs Broker</span>, my interest in
        programming led me to the decision to change my career path. I completed
        courses and acquired skills in{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is
        solving problems, gaining new knowledge, and acquiring experience. My
        core stack includes{" "}
        <span className="font-medium">React, Node.js, and MongoDB</span>, and I
        am always looking to learn new technologies. Currently, I am exploring{" "}
        <span className="font-medium">TypeScript and Next.js</span>.
      </p>
      <p className="mb-3">
        <span className="italic">In my free time</span>, I enjoy participating
        in sports, traveling, playing video games, and watching movies.
      </p>
      <p>
        I am currently looking for a{" "}
        <span className="font-medium">
          full-time position as a Full-stack Developer
        </span>{" "}
        where I can contribute my skills and knowledge.
      </p>
    </motion.section>
  );
}
