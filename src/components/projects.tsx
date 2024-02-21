"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks/useSectionInView";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>

      <ul>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}
