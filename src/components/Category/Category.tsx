import { ReactNode } from "react";

interface CategoryProps {
  children: ReactNode;
  className?: string;
}

export const Category = ({ children, className }: CategoryProps) => {
  const classes = [
    "text-sm text-neutral-dark-grayish-blue font-display tracking-widest uppercase",
    className,
  ]
    .join(" ")
    .trim();

  return <p className={classes}>{children}</p>;
};
