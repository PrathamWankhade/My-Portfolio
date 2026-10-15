import Image from "next/image";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";

/**
 * Primary project media. When a genuine screenshot is supplied
 * (`project.image`), it leads; the labelled SVG diagram remains the fallback
 * and later becomes the secondary architecture visual.
 */
export function ProjectMedia({ project }: { project: Project }) {
  if (project.image) {
    return (
      <figure
        className="overflow-hidden rounded-[10px] border"
        style={{ borderColor: "var(--line)", background: "var(--surface)" }}
      >
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={1600}
          height={900}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="h-auto w-full"
        />
      </figure>
    );
  }
  return <ProjectVisual project={project} />;
}
