import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data/data";
import { useTheme } from "@/lib/hooks/useTheme";

type ExperienceItemProps = (typeof experiencesData)[number];

export default function ExperienceItem({
  date,
  icon,
  title,
  location,
  description,
}: ExperienceItemProps) {
  const { theme } = useTheme();

  return (
    <React.Fragment>
      <VerticalTimelineElement
        contentStyle={{
          background:
            theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight:
            theme === "light"
              ? "0.4rem solid #9ca3af"
              : "0.4rem solid rgba(255, 255, 255, 0.5)",
        }}
        date={date}
        icon={icon}
        iconStyle={{
          background: theme === "light" ? "#fff" : "rgba(255, 255, 255, 0.15)",
          fontSize: "1.5rem",
        }}
      >
        <h3 className="font-semibold capitalize">{title}</h3>
        <p className="!mt-0 font-normal">{location}</p>
        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
          {description}
        </p>
      </VerticalTimelineElement>
    </React.Fragment>
  );
}
