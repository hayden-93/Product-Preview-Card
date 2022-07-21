import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string;
}

export const Title = ({ children, className }: TitleProps) => {
  const classes = ["", className].join(" ").trim();
  return <h2 className={classes}>{children}</h2>;
};
