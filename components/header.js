import React from "react";
import Link from "next/link";

const Header = ({ categories }) => {
  return (
    <header className="active">
      <div className="top-menu">
        <nav id='cssmenu'>
          <div className="logo"><Link href="/">DWAO</Link></div>
          <div id="head-mobile"></div>
          <div className="button"></div>
          <ul>
            <li><a target="_blank"  href="https://dwao.in/about">About</a>
            </li>
            <li className="has-sub"><a  target="_blank" href="#">Capabilities</a>
              <ul>
                <li className="has-sub"><a  target="_blank" href="https://dwao.in/digital-analytics/">Digital Analytics</a>
                  <ul>
                    <li><a  target="_blank" href="https://dwao.in/adobe-analytics/">Adobe Analytics</a></li>
                    <li><a  target="_blank" href="https://dwao.in/ga4/">GA4</a></li>
                    <li><a  target="_blank" href="https://dwao.in/google-analytics-360/">Google Analytics</a></li>
                    <li><a  target="_blank" href="https://dwao.in/customer-journey/">Customer Journey</a></li>
                    <li><a  target="_blank" href="https://dwao.in/mixpanel/">Mixpanel</a></li>
                  </ul>
                  <span className="submenu-button"></span></li>
                <li className="has-sub"><a  target="_blank" href="https://dwao.in/marketing-automation/">Marketing Automation</a>
                  <ul>
                    <li><a  target="_blank" href="https://dwao.in/adobe-campaign/">Adobe Campaign Classic</a></li>
                    <li><a  target="_blank" href="https://dwao.in/clevertap/">Clevertap</a></li>
                    <li><a  target="_blank" href="https://dwao.in/mo-engage/">Moengage</a></li>
                    <li><a  target="_blank" href="https://dwao.in/web-engage/">Web Engage</a></li>
                  </ul>
                  <span className="submenu-button"></span></li>
                <li className="has-sub"><a  target="_blank" href="https://dwao.in/ab-testing-and-personalization-cro/">AB Testing and Personalization (CRO)</a>
                  <ul>
                    <li><a  target="_blank" href="https://dwao.in/adobe-target/">Adobe Target</a></li>
                    <li><a  target="_blank" href="https://dwao.in/google-optimize-360/">Google Optimize</a></li>
                    <li><a  target="_blank" href="https://dwao.in/optimizely/">Optimizely</a></li>
                  </ul>
                  <span className="submenu-button"></span></li>
                <li className="has-sub"><a  target="_blank" href="https://dwao.in/digital-marketing-activation/">Digital Marketing Activation</a>
                  <ul>
                    <li><a  target="_blank" href="https://dwao.in/paid-search/">Paid Search</a></li>
                    <li><a  target="_blank" href="https://dwao.in/dv360/">DV360</a></li>
                    <li><a  target="_blank" href="https://dwao.in/seo-services/">SEO</a></li>
                    <li><a  target="_blank" href="https://dwao.in/paid-social/">Paid Social</a></li>
                    <li><a  target="_blank" href="https://dwao.in/affiliate-marketing/">Affiliate Marketing</a></li>
                  </ul>
                  <span className="submenu-button"></span></li>
                <li className="has-sub"><a  target="_blank" href="#">Technology</a>
                  <ul>
                    <li><a  target="_blank" href="https://dwao.in/adobe-experience-manager/">Adobe AEM</a></li>
                    <li><a  target="_blank" href="https://dwao.in/aem-assets/">AEM Assets</a></li>
                    <li><a  target="_blank" href="https://dwao.in/web-framework/">Web Framework</a></li>
                    <li><a  target="_blank" href="https://dwao.in/user-experience-design/">User Experience Design</a></li>

                  </ul>
                  <span className="submenu-button"></span></li>
                <li className="has-sub"><a  target="_blank" href="https://dwao.in/ml-and-ai/">ML and AI</a>
                  <ul>
                    <li><a  target="_blank" href="https://dwao.in/data-automation/">Data Automation</a></li>
                    <li><a  target="_blank" href="https://dwao.in/ml-and-ai/">Business Intelligence</a>
                    </li></ul><span className="submenu-button"></span></li>
                <li className="has-sub"><a  target="_blank" href="https://dwao.in/customer-data-platform/">Customer Data Platform [CDP]</a>
                  <ul>
                    <li><a  target="_blank" href="https://dwao.in/adobe-experience-platform/">Adobe Experience Platform</a></li>
                    <li><a  target="_blank" href="https://dwao.in/segment/">Segment</a></li>
                  </ul>
                  <span className="submenu-button"></span></li>
                <li className="has-sub"><a  target="_blank" href="https://dwao.in/data-management-platform/">Data Management Platform</a>
                  <ul>
                    <li><a  target="_blank" href="https://dwao.in/adobe-audience-manager/">Adobe Audience Manager</a></li>
                  </ul>
                  <span className="submenu-button"></span></li>

                <li><a  target="_blank" href="https://dwao.in/training-and-workshop/">Training and Workshops</a></li>

              </ul>
              <span className="submenu-button"></span></li>
            <li className="has-sub"><a  target="_blank" href="https://dwao.in/partners/">Partners</a>
              <ul>
                <li><a  target="_blank" href="https://dwao.in/partners/">Adobe</a></li>
                <li><a  target="_blank" href="https://dwao.in/partners/">Google</a></li>
                <li><a  target="_blank" href="https://dwao.in/partners/">Mixpanel</a></li>
                <li><a  target="_blank" href="https://dwao.in/partners/">Clevertap</a></li>
                <li><a  target="_blank" href="https://dwao.in/partners/">MoEngage</a></li>
                <li><a  target="_blank" href="https://dwao.in/partners/">OneTrust</a></li>
              </ul>
              <span className="submenu-button"></span></li>
            <li><a  target="_blank" href="https://dwao.in/insights-and-case-studies/">Insights &amp; case studies</a></li>


            <li><a  target="_blank" href="https://dwao.in/contact-us/">Contact Us</a></li>
          </ul>
        </nav>
      </div>
      <div className="home-nav">
      <div className="container">
        <ul>
        {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link className="uk-link-reset" href={`/category/${category.attributes.slug}`}>
                    {category.attributes.name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
    </header>
  );
};

export default Header;