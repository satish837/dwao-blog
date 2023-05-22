import React from "react";
import dynamic from 'next/dynamic';
import { fetchAPI } from "../lib/api";

const Articles = dynamic(() => import('../components/articles'))
const Layout = dynamic(() => import('../components/layout'))
const Seo = dynamic(() => import('../components/seo'))


const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <Articles articles={articles} />  
    </Layout>
  );
};

export async function getServerSideProps({ res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
  };
}

export default Home;