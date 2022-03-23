import React from 'react'
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
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
              <FacebookIcon
                className="icon-facebook"
                onClick={() =>
                  window.open(
                    "https://web.facebook.com/people/Web-crowd/100076500933308/",
                    "_blank"
                  )
                }
              />
              <InstagramIcon
                className="icon-instagram"
                onClick={() =>
                  window.open("https://www.instagram.com/webcrowd01/", "_blank")
                }
              />
              <TwitterIcon
                className="icon-twitter"
                onClick={() =>
                  window.open("https://twitter.com/crowd_web", "_blank")
                }
              />
              <YouTubeIcon
                className="icon-youtube"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UCi7aWEyuj7NWXB-Wrh5LwAg/playlists",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__top">
              <Link className="titles" to="/earn">
                <p>Earn</p>
              </Link>
              <Link className="titles" to="/eBooks">
                eBooks
              </Link>
              <Link className="titles" to="/productivity">
                Productivity
              </Link>

              <a
                className="titles"
                href="mailto:hassanamouri031@gmail.com"
                target="_top"
              >
                Contact
              </a>

              <Link className="titles" to="/privacy">
                Privacy Policy
              </Link>
              <Link className="titles" to="/terms">
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




