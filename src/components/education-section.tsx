import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "./section";
import { useResumeData } from "@/data/use-resume-data";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const EducationSection = () => {
  const t = useTranslations();
  const resumeData = useResumeData();

  return (
    <Section title={t("sections.education")}>
      {resumeData.education.map((education) => {
        return (
          <div key={education.degree} className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-x-1">
              <Image
                className="h-12 w-12"
                alt={education.degree}
                src={education.logo}
              />
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold ">{education.school}</h3>
                  </div>
                </CardHeader>
                <CardContent>{education.degree}</CardContent>
              </Card>
            </div>
            <div className="text-end text-sm tabular-nums text-muted-foreground">
              {education.start} - {education.end}
            </div>
          </div>
        );
      })}
    </Section>
  );
};
