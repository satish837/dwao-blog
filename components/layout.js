import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, categories, seo }) => (
  <>
    <Header categories={categories} />
    <div className="container articles" style={{paddingTop: '3rem'}}>
      <div className="mt-24 mb-12">
        {children}
      </div>
    </div>
    <Footer />
  </>
);

export default Layout;