"use client";

import { ReactNode, useTransition } from "react";
import clsx from "clsx";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { usePathname, useRouter } from "@/lib/navigation";

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
        className={clsx(
          "relative text-muted-foreground",
          isPending && "transition-opacity [&:disabled]:opacity-30",
          "w-[120px]"
        )}
      >
        <SelectValue placeholder={label} />
      </SelectTrigger>
      {children}
    </Select>
  );
}
