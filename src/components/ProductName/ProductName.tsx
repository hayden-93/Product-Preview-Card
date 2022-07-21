import { ReactNode } from "react";

interface ProductNameProps {
  children: ReactNode;
  className?: string;
}

export const ProductName = ({ children, className }: ProductNameProps) => {
  const classes = ["", className].join(" ").trim();
  return <h2 className={classes}>{children}</h2>;
};
