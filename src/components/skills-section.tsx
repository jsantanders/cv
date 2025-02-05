import { Badge } from "@/components/ui/badge";
import { Section } from "./section";
import { useResumeData } from "@/data/use-resume-data";
import { useTranslations } from "next-intl";

export const SkillsSection = () => {
  const t = useTranslations();
  const resumeData = useResumeData();

  return (
    <Section title={t("sections.skills")}>
      <div className="flex flex-wrap gap-1">
        {resumeData.skills.map((skill) => {
          return (
            <Badge variant="outline" className="font-normal" key={skill}>
              {skill}
            </Badge>
          );
        })}
      </div>
    </Section>
  );
};
