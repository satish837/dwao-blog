import dynamic from "next/dynamic";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import AppImage from "../../components/image";

const ParseStaticContent = dynamic(() => import('../../components/parse-html'))
const Layout = dynamic(() => import('../../components/layout'))
const Seo = dynamic(() => import('../../components/seo'))

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.attributes.image);

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  };

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <section className="relative py-48 px-4 mb-10">
        <div className="absolute inset-0 h-auto z-10">
          {
             // eslint-disable-next-line @next/next/no-img-element
            //  <img src={imageUrl} alt="" className="h-full w-full object-fit-cover"/>
           !!imageUrl && <AppImage image={article.attributes.image}  className="h-full w-full object-fit-cover"/>
          }
        </div>
      </section>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <h1 className="text-black">{article.attributes.title}</h1>
          <ParseStaticContent pageContent={article.attributes.content}/>
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {article.attributes.author.data.attributes.picture && (
                // eslint-disable-next-line @next/next/no-img-element
                <AppImage image={article.attributes.author.data.attributes.picture}/>
               
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By {article.attributes.author.data.attributes.name}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">
                  {article.attributes.published_at}
                </Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ res, params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: ["image", "category", "author.picture"],
  });
  const categoriesRes = await fetchAPI("/categories");

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
  };
}

export default Article;