import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "./section";
import { useResumeData } from "@/data/use-resume-data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const CertificationsSection = () => {
  const t = useTranslations();
  const resumeData = useResumeData();

  return (
    <Section title={t("sections.certifications")}>
      {resumeData.certifications.map((cert) => {
        return (
          <div key={cert.title} className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-x-1">
              <Image className="h-12 w-12" alt={cert.title} src={cert.badge} />
              <Card key={cert.issuer}>
                <CardHeader>
                  <div className="flex flex-row items-center gap-x-1">
                    <div>
                      <h3 className="font-semibold leading-none">
                        {cert.issuer}
                      </h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="hover:[&_a]:underline hover:[&_a]:underline-offset-4">
                  <a
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                    href={cert.link}
                  >
                    {cert.title}
                  </a>
                </CardContent>
              </Card>
            </div>
            <div className="text-end text-sm tabular-nums text-muted-foreground">
              {cert.date}
            </div>
          </div>
        );
      })}
    </Section>
  );
};
