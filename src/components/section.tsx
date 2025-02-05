import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

export type BadgeProps = PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
> & { title: string };

export function Section({ className, children, title, ...props }: BadgeProps) {
  return (
    <section
      className={cn("flex min-h-0 flex-col gap-y-3", className)}
      {...props}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
    </section>
  );
}
