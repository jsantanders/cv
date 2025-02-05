import { Section } from "./section";
import { useTranslations } from "next-intl";

export const AboutSection = () => {
  const t = useTranslations();

  return (
    <Section title={t("sections.about")}>
      <p className="text-pretty font-space-mono text-sm text-muted-foreground">
        {t("summary")}
      </p>
    </Section>
  );
};
