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
          <div className="footer__bottom">
            <div className="footer__top">
              <Link className="titles" to="">
                <p>Earn</p>
              </Link>
              <Link className="titles" to="/eBooks">
                eBooks
              </Link>
              <Link className="titles" to="">
                Productivity
              </Link>

              <a
                className="titles"
                href="mailto:webcrowd101@gmail.com"
                target="_top"
              >
                Contact
              </a>

              <Link className="titles" to="/PRIVACY">
                Privacy Policy
              </Link>
              <Link className="titles" to="/TERMS">
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




