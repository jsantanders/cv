import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/ui/section";
import { useResumeData } from "@/data/use-resume-data";
import { useTranslations } from "next-intl";

export const ProjectsSection = () => {
  const t = useTranslations();
  const resumeData = useResumeData();

  return (
    <Section className="scroll-mb-16">
      <h2 className="text-xl font-bold">{t("sections.projects")}</h2>
      <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
        {resumeData.projects.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={"link" in project ? project.link.href : undefined}
            />
          );
        })}
      </div>
    </Section>
  );
};
