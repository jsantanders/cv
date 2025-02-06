import { useTranslations } from "next-intl";
import { GithubIcon } from "@/components/icons/github-icon";
import { HomeIcon } from "lucide-react";
import { XIcon } from "@/components/icons/x-icon";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";

import StandfordLogo from "@/images/logos/standford.png";
import MitLogo from "@/images/logos/mit.png";
import AwsLogo from "@/images/logos/aws_cert.png";
import OracleLogo from "@/images/logos/oracle.png";
import RedhatLogo from "@/images/logos/redhat.png";
import MongoDbLogo from "@/images/logos/mongodb.webp";
import IntelLogo from "@/images/logos/intel.png";

export const useResumeData = () => {
  const t = useTranslations();

  return {
    name: t("name"),
    initials: "AS",
    location: "Seattle, WA, PST",
    about: t("about"),
    summary: t("summary"),
    locationLink:
      "https://www.google.com/maps/place/Seattle,+WA,+USA/@47.608715,-122.3397979,11z/data=!3m1!4b1!4m6!3m5!1s0x5490102c93e83355:0x102565466944d59a!8m2!3d47.6061389!4d-122.3328481!16zL20vMGQ5anI?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D",
    avatarUrl: "/images/thispersondoesnotexist.jpg",
    contact: {
      social: [
        {
          name: "GitHub",
          url: "https://github.com/#",
          icon: GithubIcon,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/#",
          icon: LinkedInIcon,
        },
        {
          name: "X",
          url: "https://x.com/#",
          icon: XIcon,
        },
        {
          name: "Website",
          url: "www.example.com/#",
          icon: HomeIcon,
        },
      ],
    },
    education: [
      {
        school: t("education.master.school"),
        degree: t("education.master.degree"),
        start: "2022",
        end: t("present"),
        logo: MitLogo,
      },
      {
        school: t("education.bachelor.school"),
        degree: t("education.bachelor.degree"),
        start: "2010",
        end: "2015",
        logo: StandfordLogo,
      },
    ],
    certifications: [
      {
        issuer: t("certifications.aws.issuer"),
        date: "2023",
        title: t("certifications.aws.title"),
        badge: AwsLogo,
        link: "https://example.com/cert",
      },
    ],
    publications: [
      {
        title: t("publications.1.title"),
        publisher: t("publications.1.publisher"),
        date: "Aug 1, 2017",
        link: "https://www.example.com/pub",
      },
    ],
    jobs: [
      {
        company: "Oracle",
        link: "https://www.linkedin.com/company/oracle",
        badges: [t("remote")],
        title: t("work.oracle.title"),
        logo: OracleLogo,
        start: `${t("months.jan")} 2024`,
        end: t("present"),
        description: [
          t("work.oracle.description.1"),
          t("work.oracle.description.2"),
          t("work.oracle.description.3"),
        ],
        skills: ["C++", "Rust", "Database Optimization", "Distributed Systems"],
      },
      {
        company: "Red Hat",
        link: "https://www.linkedin.com/company/redhat",
        badges: [t("remote")],
        title: t("work.redhat.title"),
        logo: RedhatLogo,
        start: `${t("months.oct")} 2022`,
        end: `${t("months.jan")} 2024`,
        description: [
          t("work.redhat.description.1"),
          t("work.redhat.description.2"),
          t("work.redhat.description.3"),
        ],
        skills: ["Rust", "Linux Kernel", "Distributed File Systems"],
      },
      {
        company: "MongoDB",
        link: "https://www.linkedin.com/company/mongodb",
        badges: [t("remote")],
        title: t("work.mongodb.title"),
        logo: MongoDbLogo,
        start: `${t("months.apr")} 2021`,
        end: `${t("months.sep")} 2022`,
        description: [
          t("work.mongodb.description.1"),
          t("work.mongodb.description.2"),
          t("work.mongodb.description.3"),
        ],
        skills: ["C++", "Rust", "Database Engines", "Query Optimization"],
      },
      {
        company: "Intel",
        link: "https://www.linkedin.com/company/intel",
        badges: [t("remote")],
        title: t("work.intel.title"),
        logo: IntelLogo,
        start: `${t("months.jun")} 2019`,
        end: `${t("months.mar")} 2021`,
        description: [
          t("work.intel.description.1"),
          t("work.intel.description.2"),
          t("work.intel.description.3"),
        ],
        skills: ["C++", "Rust", "Hardware Acceleration", "Real-Time Systems"],
      },
    ],
    skills: [
      "C++",
      "Rust",
      "Database Engines",
      "Distributed Systems",
      "Linux Kernel",
      "Query Optimization",
      "Real-Time Systems",
    ],
    projects: [
      {
        title: t("projects.database.title"),
        techStack: ["Side Project", "Rust", "Database Engine"],
        description: t("projects.database.description"),
        link: {
          label: "example.com",
          href: "https://example.com/rustdb",
        },
      },
      {
        title: t("projects.compiler.title"),
        techStack: ["Side Project", "C++", "Static Analysis"],
        description: t("projects.compiler.description"),
        link: {
          label: "example.com",
          href: "https://example.com/cpp-analyzer",
        },
      },
      {
        title: t("projects.os.title"),
        techStack: ["Side Project", "Rust", "Microkernel"],
        description: t("projects.os.description"),
        link: {
          label: "example.com",
          href: "https://example.com/microkernel-os",
        },
      },
    ],
  } as const;
};
