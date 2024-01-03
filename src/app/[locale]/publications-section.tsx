import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { useResumeData } from "@/data/use-resume-data";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const PublicationsSection = () => {
  const t = useTranslations();
  const resumeData = useResumeData();

  return (
    <Section>
      <h2 className="text-xl font-bold">{t("sections.publications")}</h2>
      {resumeData.publications.map((pub) => {
        return (
          <Card key={pub.publisher}>
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="font-semibold leading-none">{pub.publisher}</h3>
                <div className="text-sm tabular-nums text-muted-foreground">{pub.date}</div>
              </div>
            </CardHeader>
            <CardContent className="mt-2">
              <Link className="hover:underline" target="_blank" href={pub.link}>
                {pub.title}
              </Link>
            </CardContent>
          </Card>
        );
      })}
    </Section>
  );
};
