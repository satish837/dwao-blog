import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {
  return (
      <div className="grid grid-rows-2 grid-flow-col gap-10">
          {articles.map((article, i) => {
            return (
              <Card
                article={article}
                key={`article__left__${article.attributes.slug}`}
              />
            );
          })}
      </div>
  );
};

export default Articles;