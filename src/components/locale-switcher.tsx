import { useLocale, useTranslations } from "next-intl";

import { SelectContent, SelectItem } from "@/components/ui/select";

import { LocaleSwitcherSelect } from "./locale-switcher-select";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("switcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      <SelectContent>
        {routing.locales.map((lang) => (
          <SelectItem key={lang} value={lang}>
            {t(lang)}
          </SelectItem>
        ))}
      </SelectContent>
    </LocaleSwitcherSelect>
  );
}
