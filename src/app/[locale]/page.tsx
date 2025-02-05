import { use } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { useResumeData } from "@/data/use-resume-data";
import { ThemeToggle } from "@/components/theme-toggle";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/locale-switcher";
import { WorkExperienceSection } from "@/components/work-experience-section";
import { AboutSection } from "@/components/about-section";
import { EducationSection } from "@/components/education-section";
import { SkillsSection } from "../../components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { CertificationsSection } from "@/components/certifications-section";
import { PublicationsSection } from "@/components/publications-section";
import { MapPinned } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;

  const { locale } = params;

  const t = await getTranslations({ locale });
  return {
    title: `${t("name")} | ${t("about")}`,
    description: t("summary"),
  };
}

export default function Page(props: Props) {
  const params = use(props.params);
  const { locale } = params;

  setRequestLocale(locale);
  const t = useTranslations();
  const resumeData = useResumeData();

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16">
      <div className="mx-auto w-full max-w-2xl space-y-6">
        <div className="flex flex-row justify-end gap-x-2 print:hidden">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-2">
            <h1 className="text-3xl font-bold">{resumeData.name}</h1>
            <p className="max-w-md text-pretty font-space-mono text-sm text-muted-foreground">
              {t("about")}
            </p>
            <p className="max-w-md items-baseline text-pretty font-space-mono text-sm text-muted-foreground hover:[&_a]:underline hover:[&_a]:underline-offset-4">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none"
                href={resumeData.locationLink}
                target="_blank"
                rel="noreferrer"
              >
                <MapPinned className="h-4 w-4" />
                {resumeData.location}
              </a>
            </p>
            <div className="flex gap-x-1 font-space-mono text-sm text-muted-foreground print:hidden">
              {resumeData.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <Avatar className="h-28 w-28">
            <AvatarImage alt={resumeData.name} src={resumeData.avatarUrl} />
            <AvatarFallback>{resumeData.initials}</AvatarFallback>
          </Avatar>
        </div>
        <AboutSection />
        <WorkExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <PublicationsSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
