import { ReactNode } from "react";

interface PriceProps {
  children: ReactNode;
  className?: string;
}

export const Price = ({ children, className }: PriceProps) => {
  const classes = ["", className].join(" ").trim();

  return <p className={classes}>{children}</p>;
};
