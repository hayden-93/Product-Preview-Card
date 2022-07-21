import { ReactNode } from "react";

interface DescriptionProps {
  children: ReactNode;
  className?: string;
}

export const Description = ({ children, className }: DescriptionProps) => {
  const classes = ["", className].join(" ").trim();

  return <p className={classes}>{children}</p>;
};
