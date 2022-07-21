import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  const classes = ["", className].join(" ").trim();
  return <button className={classes}>{children}</button>;
};
