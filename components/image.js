import NextImage from "next/image";
import { getStrapiMedia } from "../lib/media";

const AppImage = ({ image }) => {
  if (image && image.data && image.data.hasOwnProperty('attributes')) {
    const { alternativeText, width, height } = image?.data?.attributes;
    return (
      <NextImage
        width={width}
        height={height}
        src={getStrapiMedia(image)}
        alt={alternativeText || ""}
        priority={true}
        blurDataURL={getStrapiMedia(image)}
      />
    );
  } else {
    return null;
  }
};

export default AppImage;