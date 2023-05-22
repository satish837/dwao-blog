import React from "react";
import { getStrapiMedia } from "../lib/media";
import NextImage from "next/image";

const Image = ({ image }) => {
  const imagePath = React.useMemo(() => image.data && image.data.hasOwnProperty('attributes') ? getStrapiMedia(image) : '', [image])
  const [src, setSrc] = React.useState(imagePath);
  if (image.data && image.data.hasOwnProperty('attributes')) {
    const { alternativeText, width, height } = image?.data?.attributes;
    return (
      <NextImage
        width={width}
        height={height}
        src={src}
        alt={alternativeText || ""}
        priority={true}
        blurDataURL={src}
        onError={() => setSrc(src)}
      />
    );
  } else {
    return null;
  }
};

export default Image;