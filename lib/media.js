import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const mediaUrl = media?.data?.attributes;
  const imageUrl = mediaUrl?.url.startsWith("/") ? getStrapiURL(mediaUrl.url) : '';
  return imageUrl;
}