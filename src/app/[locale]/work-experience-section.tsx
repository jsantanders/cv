"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { useResumeData } from "@/data/use-resume-data";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

type Props = {
  jobs: ReturnType<typeof useResumeData>["work"];
  dict: {
    seeMore: string;
    seeLess: string;
    workExperience: string;
  };
};

export const WorkExperienceSection = (props: Props) => {
  const {
    jobs,
    dict: { seeMore, seeLess, workExperience },
  } = props;
  const [isFullJobList, setIsFullJobList] = useState(false);

  useEffect(() => {
    /**
     * Adds listeners for crossbrowser print callback
     * @param callback - callback function
     */
    function onPrint(callback: () => void) {
      window.addEventListener("beforeprint", callback);
    }

    onPrint(() => setIsFullJobList(true));

    return () => {
      window.removeEventListener("beforeprint", () => setIsFullJobList(false));
    };
  }, []);

  const listLenght = isFullJobList ? jobs.length : 3;

  return (
    <Section>
      <h2 className="text-xl font-bold">{workExperience}</h2>
      {jobs.slice(0, listLenght).map((work) => {
        return (
          <Card key={work.company}>
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <div className="flex flex-row items-center gap-x-2">
                  <Button className="h-9 w-9" variant="ghost" size="icon" asChild>
                    <a href={work.link}>
                      <Image alt={work.company} src={work.logo} />
                    </a>
                  </Button>
                  <div>
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge variant="secondary" className="align-middle text-xs" key={badge}>
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <h4 className="font-mono text-sm leading-none">{work.title}</h4>
                  </div>
                </div>
                <div className="text-end text-sm tabular-nums text-muted-foreground">
                  {work.start} - {work.end}
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-2 text-sm">
              <ul className="ml-3 flex list-disc flex-col gap-y-1">
                {work.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        );
      })}
      <Button
        className="mx-auto max-w-sm gap-x-1 print:hidden"
        variant="ghost"
        size="sm"
        onClick={() => setIsFullJobList((status) => !status)}
      >
        {isFullJobList ? seeLess : seeMore}
        {isFullJobList ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Button>
    </Section>
  );
};
