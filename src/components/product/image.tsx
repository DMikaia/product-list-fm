import { imageClass } from "../../helpers/image";

interface Props {
  src: string;
  alt: string;
  screen: string;
}

export default function ProductImage({ src, alt, screen }: Props) {
  const className = imageClass.find((style) => style.screen === screen);

  if (!className) {
    return;
  }

  return (
    <img
      className={`rounded-lg h-full w-full object-cover object-center aspect-auto ${className.style}`}
      src={src}
      alt={alt}
    />
  );
}
