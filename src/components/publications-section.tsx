import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "./section";
import { useResumeData } from "@/data/use-resume-data";
import { useTranslations } from "next-intl";

export const PublicationsSection = async () => {
  const t = useTranslations();
  const resumeData = useResumeData();

  return (
    <Section title={t("sections.publications")}>
      {resumeData.publications.map((pub) => {
        return (
          <Card key={pub.publisher}>
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="font-semibold leading-none">{pub.publisher}</h3>
                <div className="text-sm tabular-nums text-muted-foreground">
                  {pub.date}
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-2 hover:[&_a]:underline hover:[&_a]:underline-offset-4">
              <a target="_blank" rel="noreferrer" href={pub.link}>
                {pub.title}
              </a>
            </CardContent>
          </Card>
        );
      })}
    </Section>
  );
};
