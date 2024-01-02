import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { useResumeData } from "@/data/use-resume-data";
import { useTranslations } from "next-intl";

export const SkillsSection = () => {
  const t = useTranslations();
  const resumeData = useResumeData();

  return (
    <Section>
      <h2 className="text-xl font-bold">{t("sections.skills")}</h2>
      <div className="flex flex-wrap gap-1">
        {resumeData.skills.map((skill) => {
          return <Badge key={skill}>{skill}</Badge>;
        })}
      </div>
    </Section>
  );
};
