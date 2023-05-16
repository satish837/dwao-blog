import React, { useRef, useLayoutEffect, useState, useMemo } from "react";
import { isMobile } from "react-device-detect";
import LazyLoad from "react-lazyload";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
import { getStrapiMedia } from "../../lib/media";

/* eslint-disable */
const AppImage = ({ src, alt, borderRadius = 0, imageWidth = "", ...rest }) => {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, dpr: 1 });

  const attributes = useMemo(() => {
    return isMobile
      ? "?width=100px" + "&dpr=" + dimensions.dpr
      : "?width=" + dimensions.width + "&dpr=" + dimensions.dpr;
  }, [targetRef.current]);

  useIsomorphicLayoutEffect(() => {
    if (targetRef.current && typeof window !== "undefined") {
      setDimensions({
        width: targetRef.current.offsetWidth,
        dpr: window.devicePixelRatio,
      });
    }
  }, []);

  const imagePath = getStrapiMedia(src) + attributes;

  return (
    <div className="custom-image" ref={targetRef}>
      <LazyLoad
        height={"auto"}
        offset={100}
        debounce={100}
        once
        placeholder={null}
      >
        <img
          className="animate__animated animate__fadeIn"
          src={imagePath}
          style={{
            borderRadius: borderRadius,
            width: imageWidth ? imageWidth : "",
            objectFit: "cover",
          }}
          {...rest}
          alt={alt}
        />
      </LazyLoad>
    </div>
  );
};

export default AppImage;
