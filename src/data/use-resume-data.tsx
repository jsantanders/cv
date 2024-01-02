import LaikaLogo from "@/images/logos/laika-logo.png";
import MicrosoftLogo from "@/images/logos/microsoft-logo.png";
import AlphasLogo from "@/images/logos/alphas-logo.png";
import FerrisoftLogo from "@/images/logos/ferrisoft-logo.png";
import NavicuLogo from "@/images/logos/navicu-logo.png";
import TecFenixLogo from "@/images/logos/tecfenix-logo.png";
import UniversityOfCaraboboLogo from "@/images/logos/uc.png";
import AzureDeveloperBadge from "@/images/logos/microsoft-certified-associate-badge.svg";
import { GitHubLogoIcon, HomeIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";

export const useResumeData = () => {
  const t = useTranslations();

  return {
    name: "Jesus Santander",
    initials: "JS",
    location: "Valencia, VE, EST",
    about: t("about"),
    summary: t("summary"),
    locationLink: "https://www.google.com/maps/place/Valencia,+Carabobo,+Venezuela",
    avatarUrl: "https://avatars.githubusercontent.com/u/15827589?v=4",
    personalWebsiteUrl: "https://jsantanders.dev",
    contact: {
      social: [
        {
          name: "GitHub",
          url: "https://github.com/jsantanders",
          icon: GitHubLogoIcon,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/jsantanders/",
          icon: LinkedInLogoIcon,
        },
        {
          name: "X",
          url: "https://x.com/jsantanders",
          icon: TwitterLogoIcon,
        },
        {
          name: "Website",
          url: "https://jsantanders.dev",
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
        logo: UniversityOfCaraboboLogo,
      },
      {
        school: t("education.bachelor.school"),
        degree: t("education.bachelor.degree"),
        start: "2010",
        end: "2015",
        logo: UniversityOfCaraboboLogo,
      },
    ],
    certifications: [
      {
        issuer: t("certifications.azure.issuer"),
        date: "2023",
        title: t("certifications.azure.title"),
        badge: AzureDeveloperBadge,
        link: "https://learn.microsoft.com/api/credentials/share/en-us/jsantanders/99E494EC83B32890?sharingId=889F6D6C033C9537",
      },
    ],
    publications: [
      {
        title: t("publications.1.title"),
        publisher: t("publications.1.publisher"),
        date: "Aug 1, 2017",
        link: "https://www.researchgate.net/publication/321062609_Procedure_for_access_to_the_ERS_and_ENVISAT_mission_data_through_the_ESA_portal_and_the_interactive_tool_EOLI-SA",
      },
    ],
    work: [
      {
        company: "Laika",
        link: "https://www.linkedin.com/company/laika-app",
        badges: ["Remote"],
        title: t("work.laika.title"),
        logo: LaikaLogo,
        start: "Oct 2022",
        end: t("present"),
        description: [
          t("work.laika.description.1"),
          t("work.laika.description.2"),
          t("work.laika.description.3"),
        ],
      },
      {
        company: "Microsoft",
        link: "https://www.linkedin.com/company/microsoft",
        badges: ["Remote"],
        title: t("work.microsoft.title"),
        logo: MicrosoftLogo,
        start: "Apr 2021",
        end: "Sep 2022",
        description: [
          t("work.microsoft.description.1"),
          t("work.microsoft.description.2"),
          t("work.microsoft.description.3"),
        ],
      },
      {
        company: "Alphas",
        link: "https://alphasremote.team/",
        badges: ["Remote"],
        title: t("work.alphas.title"),
        logo: AlphasLogo,
        start: "Jun 2019",
        end: "Mar 2021",
        description: [
          t("work.alphas.description.1"),
          t("work.alphas.description.2"),
          t("work.alphas.description.3"),
        ],
      },
      {
        company: "Ferrisoft",
        badges: [],
        link: "https://www.linkedin.com/company/ferrisoft/",
        title: t("work.ferrisoft.title"),
        logo: FerrisoftLogo,
        start: "Jan 2018",
        end: "May 2019",
        description: [t("work.ferrisoft.description.1"), t("work.ferrisoft.description.2")],
      },
      {
        company: "Navicu",
        badges: [],
        link: "https://navicu.com/",
        title: t("work.ferrisoft.title"),
        logo: NavicuLogo,
        start: "Jan 2017",
        end: "Dec 2017",
        description: [t("work.navicu.description.1")],
      },
      {
        company: "Tecfenix",
        badges: [],
        link: "http://www.tecfenix.com/",
        title: t("work.tecfenix.title"),
        logo: TecFenixLogo,
        start: "Jan 206",
        end: "Dec 2016",
        description: [t("work.tecfenix.description.1")],
      },
    ],
    skills: ["JavaScript", "TypeScript", "React/Next.js/Remix", "Node.js", ".NET/C#/ASP.NET", "Go"],
    projects: [
      {
        title: t("projects.blog.title"),
        techStack: ["Side Project", "TypeScript", "Next.js", "MDX"],
        description: t("projects.blog.description"),
        link: {
          label: "jsantanders.dev",
          href: "https://jsantanders.dev/",
        },
      },
      {
        title: t("projects.learning.title"),
        techStack: ["Side Project", "Quarto", "R", "Statistics"],
        description: t("projects.learning.description"),
        link: {
          label: "learning.jsantanders.dev",
          href: "https://learning.jsantanders.dev/",
        },
      },
      {
        title: t("projects.ddd.title"),
        techStack: ["Side Project", "Nest.js", "DDD", "CQRS"],
        description: t("projects.ddd.description"),
        link: {
          label: "github.com",
          href: "https://github.com/jsantanders/modular-monolith-nestjs",
        },
      },
    ],
  } as const;
};
