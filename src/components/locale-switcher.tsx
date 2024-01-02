import { useLocale, useTranslations } from "next-intl";

import { SelectContent, SelectItem } from "@/components/ui/select";
import { locales } from "@/i18n";

import { LocaleSwitcherSelect } from "./locale-switcher-select";

export default function LocaleSwitcher() {
  const t = useTranslations("switcher");
  const locale = useLocale() as any;

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t(locale)}>
      <SelectContent>
        {locales.map((lang: any) => (
          <SelectItem key={lang} value={lang}>
            {t(lang)}
          </SelectItem>
        ))}
      </SelectContent>
    </LocaleSwitcherSelect>
  );
}
