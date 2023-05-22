import { getStrapiMedia } from "../lib/media";
import NextImage from "next/image";

const Image = ({ image }) => {
  if (image.data && image.data.hasOwnProperty('attributes')) {
    const { alternativeText, width, height } = image?.data?.attributes;
    return (
      <NextImage
        width={width}
        height={height}
        src={getStrapiMedia(image)}
        alt={alternativeText || ""}
        priority={true}
        blurDataURL="blur"
      />
    );
  } else {
    return null;
  }
};

export default Image;