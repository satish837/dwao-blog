import React from "react";
import Link from "next/link";
import NextImage from "./image";

const Card = ({ article }) => {
  return (
    <div
      className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <Link className="uk-link-reset" href={`/article/${article.attributes.slug}`}>
        <NextImage className="rounded-t-lg" image={article.attributes.image} />
      </Link>
      <div className="p-6">
        <p className="mb-4 text-base text-neutral-600">
          {article.attributes.category.data.attributes.name}
        </p>
        <h5
          className="mb-2 text-xl font-medium leading-tight text-neutral-800">
          {article.attributes.title}
        </h5>
      </div>
    </div>
  );
};

export default Card;
