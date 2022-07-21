import { ReactNode } from "react";

interface DescriptionProps {
  children: ReactNode;
  className?: string;
}

export const Description = ({ children, className }: DescriptionProps) => {
  const classes = [
    "text-neutral-dark-grayish-blue font-display text-sm",
    className,
  ]
    .join(" ")
    .trim();

  return <p className={classes}>{children}</p>;
};
