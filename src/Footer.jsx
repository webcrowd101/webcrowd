import React from 'react'
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {
    BrowserRouter as Router,
    Switch,
    Route,
      Link,
      useHistory,
      useLocation
  } from "react-router-dom";
function Footer() {
    return (
      <div>
        <div className="footer">
          <div className="footer__top">
            <div className="softwares">
              <div className="footer__titles">Education</div>
              <Link className="footer__links" to="">
                <div>eBooks</div>
              </Link>
              <br />
              <Link className="footer__links" to="">
                <div>Seo</div>
              </Link>
              <br />
              <Link className="footer__links" to="">
                <div>Productivity</div>
              </Link>
            </div>
            <div className="affiliate__programs">
              <div className="footer__titles">Services</div>
              <Link className="footer__links" to="">
                <div>Motion Design</div>
              </Link>
              <br />
              <Link className="footer__links" to="">
                <div>Web Design</div>
              </Link>
              <br />
              <Link className="footer__links" to="">
                <div>Photoshop</div>
              </Link>
            </div>
            <div className="blogs">
              <div className="footer__titles">Popular</div>
              <Link className="footer__links" to="">
                <div>FAQ's</div>
              </Link>
              <br />
              <Link className="footer__links" to="">
                <div>Blog</div>
              </Link>
              <br />
              <Link className="footer__links" to="">
                <div>Help</div>
              </Link>
            </div>
            <div className="social__media">
              <div className="footer__titles">Follow us</div>
              <div className="media__icons">
                <FacebookIcon className="icon-facebook" />
                <InstagramIcon className="icon-instagram" />
                <TwitterIcon className="icon-twitter" />
                <LinkedInIcon className="icon-linkedin" />
                <YouTubeIcon className="icon-youtube" />
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottm__firstDiv"></div>
            <div className="terms__privacy">
              <Link className="privacy" to="">
                Privacy Policy
              </Link>
              <Link className="terms" to="">
                Terms of use
              </Link>
            </div>
            <p>© copyright 2022, All Rights Reserved.</p>
          </div>
        </div>
      </div>
    );
}

export default Footer




