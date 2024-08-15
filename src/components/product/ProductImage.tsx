import { imageClass } from "../../helpers/image";

interface Props {
  key: string;
  url: string;
  screen: string;
  description: string;
}

export default function ProductImage({ url, description, screen }: Props) {
  const className = imageClass.find((elt) => elt.screen === screen);

  if (!className) {
    return;
  }

  return (
    <img
      className={`${className.style} w-full h-full rounded-lg object-cover object-center`}
      src={url}
      alt={description}
      loading="lazy"
    />
  );
}
