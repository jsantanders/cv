"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Section } from "./section";
import { useResumeData } from "@/data/use-resume-data";
import { useEffect, useState } from "react";

export const WorkExperienceSection = () => {
  const t = useTranslations();
  const resumeData = useResumeData();
  const [showAll, setShowAll] = useState(false);

  // Limit the number of jobs shown by default
  const visibleJobs = showAll ? resumeData.jobs : resumeData.jobs.slice(0, 3);

  return (
    <Section title={t("sections.workExperience")}>
      <div className="flex flex-col space-y-4">
        {resumeData.jobs.map((work, index) => {
          const isVisible = showAll || index < 3;

          return (
            <Card
              className={isVisible ? "block" : "hidden print:!block"}
              key={work.company}
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <div className="flex flex-row items-center gap-x-2">
                    <Button
                      className="h-9 w-9"
                      variant="ghost"
                      size="icon"
                      asChild
                    >
                      <a href={work.link}>
                        <Image alt={work.company} src={work.logo} />
                      </a>
                    </Button>
                    <div>
                      <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none hover:[&_a]:underline hover:[&_a]:underline-offset-4">
                        <a href={work.link}>{work.company}</a>
                        <span className="inline-flex gap-x-1">
                          {work.badges.map((badge) => (
                            <Badge
                              variant="secondary"
                              className="align-middle text-xs font-normal"
                              key={badge}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </span>
                      </h3>
                      <h4 className="font-space-mono text-sm leading-none">
                        {work.title}
                      </h4>
                    </div>
                  </div>
                  <div className="text-end text-sm tabular-nums text-muted-foreground">
                    {work.start} - {work.end}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col text-sm pt-2 space-y-4">
                <ul className="ml-3 flex list-disc flex-col space-y-2">
                  {work.description.map((desc, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: yolo
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
                <div className="flex space-x-1 items-center">
                  {t("sections.skills")}:
                  {work.skills.map((skill, index) => (
                    <Badge
                      variant="outline"
                      className="font-normal"
                      key={`${work.company}-${skill}-${index}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      {resumeData.jobs.length > 3 && (
        <div className="mt-4 flex justify-center print:hidden">
          <Button variant="outline" onClick={() => setShowAll((prev) => !prev)}>
            {showAll ? t("seeLess") : t("seeMore")}
          </Button>
        </div>
      )}
    </Section>
  );
};
