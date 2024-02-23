"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data/data";
import { useSectionInView } from "@/lib/hooks/useSectionInView";
import ExperienceItem from "./experience-Item";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);

  return (
    <section ref={ref} id="experience" className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>

      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
