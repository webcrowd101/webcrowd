import React from "react";
import "./ContentFooter.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
function ContentFooter() {
  return (
    <div>
      <div className="ContentFooter">
        <div className="ContentFooter__social__media">
          <div className="ContentFooter__footer__titles">Follow us</div>
          <div className="ContentFooter__media__icons">
            <FacebookIcon className="icon-facebook" />
            <InstagramIcon className="icon-instagram" />
            <TwitterIcon className="icon-twitter" />
            <LinkedInIcon className="icon-linkedin" />
            <YouTubeIcon className="icon-youtube" />
          </div>
        </div>
        <div className="ContentFooter__footer__bottom">
          <div className="ContentFooter__footer__top">
            <Link className="ContentFooter__titles" to="">
              <p>Earn</p>
            </Link>
            <Link className="ContentFooter__titles" to="">
              eBooks
            </Link>
            <Link className="ContentFooter__titles" to="">
              Productivity
            </Link>

            
            <a
              className="ContentFooter__titles"
              href="mailto:webcrowd101@gmail.com"
              target="_top"
            >
              Contact
            </a>

            <Link className="ContentFooter__titles" to="/PRIVACY">
              Privacy Policy
            </Link>
            <Link className="ContentFooter__titles" to="/TERMS">
              Terms of use
            </Link>
          </div>
          <p>© copyright 2022, All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default ContentFooter;
