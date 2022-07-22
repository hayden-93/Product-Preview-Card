import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  const classes = ["font-display rounded-lg px-16 py-3 md:px-4", className]
    .join(" ")
    .trim();
  return <button className={classes}>{children}</button>;
};
