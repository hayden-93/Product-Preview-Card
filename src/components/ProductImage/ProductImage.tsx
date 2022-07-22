interface ProductImageProps {
  className?: string;
  src?: string;
  alt?: string;
}

export const ProductImage = ({ alt, className, src }: ProductImageProps) => {
  const classes = ["rounded-t-lg md:rounded-r-none md:rounded-l-lg", className]
    .join(" ")
    .trim();

  return <img src={src} alt={alt} className={classes} />;
};
