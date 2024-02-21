"use client";

import { projectsData } from "@/lib/data/data";
import Image from "next/image";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  href,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLLIElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.li
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-8 last:mb-0 group"
    >
      <div className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8">
        <div className="relative flex h-full flex-col px-5 pb-6 pt-4 sm:max-w-[50%] sm:pl-7 sm:pr-2 sm:pt-6 sm:group-even:ml-[19.5rem]">
          <h3 className="text-2xl hidden font-semibold text-center sm:block">
            {title}
          </h3>

          <div className="sm:hidden text-center">
            <a
              href={href}
              target="_blank"
              className="focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer mx-auto text-2xl font-semibold"
            >
              {title}
            </a>
          </div>

          <p className="mt-2 leading-6 text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-x-2 gap-y-1 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <a href={href} target="_blank" className="hidden sm:block">
          <Image
            className="absolute -right-40 top-8 w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 "
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
          />
        </a>
      </div>
    </motion.li>
  );
}
