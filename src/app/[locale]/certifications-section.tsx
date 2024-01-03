import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { useResumeData } from "@/data/use-resume-data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const CertificationsSection = () => {
  const t = useTranslations();
  const resumeData = useResumeData();

  return (
    <Section>
      <h2 className="text-xl font-bold">{t("sections.certifications")}</h2>
      {resumeData.certifications.map((cert) => {
        return (
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-x-1">
              <Image className="h-12 w-12" alt={cert.title} src={cert.badge} />
              <Card key={cert.issuer}>
                <CardHeader>
                  <div className="flex flex-row items-center gap-x-1">
                    <div>
                      <h3 className="font-semibold leading-none">{cert.issuer}</h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link className="hover:underline" target="_blank" href={cert.link}>
                    {cert.title}
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div className="text-end text-sm tabular-nums text-muted-foreground">{cert.date}</div>
          </div>
        );
      })}
    </Section>
  );
};
