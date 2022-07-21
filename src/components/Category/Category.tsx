import { ReactNode } from "react";

interface CategoryProps {
  children: ReactNode;
  className?: string;
}

export const Category = ({ children, className }: CategoryProps) => {
  const classes = ["", className].join(" ").trim();

  return <p className={classes}>{children}</p>;
};
