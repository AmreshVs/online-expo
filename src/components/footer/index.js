/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {

  let today = new Date();
  let year = today.getFullYear();

  return(
    <div className="grad-2">
      <section id="footer" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-sm-8 col-md-8">
              <div className="footer-widget footer-link">
                <h4>We concern about you <br/> to grow business rapidly.</h4>
                <p>World Trade Hub is an initiative to conduct expo's online, Our company is reputed for its flawless execution of events. The company prides in extending its expertise to ensure all events, including corporate, family, and other occasions are conducted in the most exceptional and memorable manner possible.</p>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-md-4">
              <div className="footer-widget footer-link">
                <h4>About</h4>
                <ul>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://worldtradehub.in/about-us">About Us</a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://worldtradehub.in/#service-head">Service</a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://worldtradehub.in/#pricing">Pricing</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6 col-md-6">
              <div className="footer-widget footer-link">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#">How it Works</a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://worldtradehub.in/contact">Support</a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://worldtradehub.in/privacy-policy">Privacy Policy</a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://worldtradehub.in/terms-and-conditions">Terms & Condition</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="footer-widget footer-text">
                <h4>Our location</h4>
                <p className="mail"><span>Mail:</span> worldtradehub.in@gmail.com</p>
                <p><span>Location:</span><br/> Jagaur Media & Entertainment LLP, <br/> No.106, Royal Placid Layout, Harlur HSR Layout Phase 1, <br/> Bangalore, Karnataka, India. 562102 </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="footer-copy">
                © {year} worldtradehub inc. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer;