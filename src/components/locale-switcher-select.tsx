"use client";

import { type ReactNode, useTransition } from "react";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "@/i18n/routing";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export function LocaleSwitcherSelect({ children, defaultValue, label }: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(lang: string) {
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });
  }

  return (
    <Select onValueChange={onSelectChange} defaultValue={defaultValue}>
      <SelectTrigger
        className={cn(
          "relative text-muted-foreground",
          isPending && "transition-opacity [&:disabled]:opacity-30",
          "w-[120px]",
        )}
      >
        <SelectValue placeholder={label} />
      </SelectTrigger>
      {children}
    </Select>
  );
}
