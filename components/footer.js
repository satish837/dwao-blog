import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (

    <footer>
      <div className="container">
        <div className="footer-wrap">
          <div className="left">
            <div className="logo"><Link href="/">DDWAO</Link></div>
            <div className="office-address">4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</div>
            <div className="subscribe">
              <h6>Stay current with our latest insights <br />and resources</h6>
              <div className="formContainer">
                <form action="">
                  <fieldset className="fieldInput">
                    <input className="form-input" type="email" placeholder="Enter your email ID" />
                    <button type="submit" className="form-submit">Subscribe</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          <div className="right">
            <ul>

              <li><a target="_blank" href="about/"><span>About</span></a></li>
              <li><a target="_blank" href="insights-and-case-studies/"><span>Insights & Case Studies</span></a></li>
              <li><a target="_blank" href="contact-us/"><span>Careers</span></a></li>
              <li><a target="_blank" href="contact-us/"><span>Contact</span></a></li>
            </ul>
            <ul>
              <li><a target="_blank" href="#"><span>Capabilities</span></a></li>
              <li><a target="_blank" href="digital-analytics/">Digital Analytics</a></li>
              <li><a target="_blank" href="marketing-automation/">Marketing Automation</a></li>
              <li><a target="_blank" href='adobe-analytics/'>Adobe Analytics</a></li>
              <li><a target="_blank" href="data-management-platform/">Data Management Platforms [DMP]</a></li>
              <li><a target="_blank" href="customer-data-platform/">Customer Data Platform [CDP]</a></li>
              <li><a target="_blank" href="digital-marketing-activation/">Digital Marketing Activation</a></li>
              <li><a target="_blank" href="business-intelligence/">Business Intelligence</a></li>
              <li><a target="_blank" href="data-automation/">Data Automation</a></li>
              <li><a target="_blank" href='dv360/'>DV360</a></li>
              <li><a target="_blank" href="#">Development</a></li>
              <li><a target="_blank" href="training-and-workshop/">Training and Workshops</a></li>
              <li><a target="_blank" href="#">Privacy Management</a></li>
            </ul>
            <ul>
              <li><a target="_blank" href="partners/"><span>Partners</span></a></li>
              <li><a target="_blank" href="https://solutionpartners.adobe.com/s/directory/detail/digital+web+analytics+and+optimization" target="_blank">Adobe</a></li>
              <li><a target="_blank" href="https://marketingplatform.google.com/about/partners/company/5152925231874048/gacp/5629499534213120/service/5724160613416960" target="_blank">Google</a></li>
              <li><a target="_blank" href="https://mixpanel.com/partners/solution-partner-dwao/">Mixpanel</a></li>
              <li><a target="_blank" href="https://clevertap.com/channel-partners/">Clevertap</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-btm">
          <div className="left">
            <ul>
              <li><a target="_blank" href="#">Privacy Policy</a></li>
              <li><a target="_blank" href="#">Terms & Conditions</a></li>
              <li><a target="_blank" href="#">Legal</a></li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li><a target="_blank" href="https://twitter.com/dwao_digital"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a target="_blank" href="https://in.linkedin.com/company/digital-web-analytics-and-optimization"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
