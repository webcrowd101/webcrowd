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
                        <div className='footer__titles'>Softwares</div>
                        <Link className='footer__links' to=""><div>Adobe XD</div></Link><br />
                        <Link className='footer__links' to=""><div>PhotoShop</div></Link><br />
                        <Link className='footer__links' to=""><div>Adobe Illustrator</div></Link>
                    </div>
                    <div className="affiliate__programs">
                        <div className='footer__titles'>Affiliate Programmes</div>
                        <Link className='footer__links' to=""><div>Click Bank</div></Link><br />
                        <Link className='footer__links' to=""><div>Digistore24</div></Link><br />
                        <Link className='footer__links' to=""><div>Amazon Affiliate</div></Link>
                    </div>
                    <div className="blogs">
                        <div className='footer__titles'>Current Topics</div>
                        <Link className='footer__links' to=""><div>Productivity</div></Link><br />
                        <Link className='footer__links' to=""><div>Profit</div></Link><br />
                        <Link className='footer__links' to=""><div>Business</div></Link>
                        </div>
                        <div className="social__media">
                        <div className='footer__titles'>Follow us</div>
                        <div className="media__icons">
                            <FacebookIcon className="icon-facebook"/>
                            <InstagramIcon className="icon-instagram"/>
                            <TwitterIcon className="icon-twitter"/>
                            <LinkedInIcon className="icon-linkedin"/>
                            <YouTubeIcon className="icon-youtube"/>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className='footer__bottm__firstDiv'></div>
                    <div className="terms__privacy">
                        <Link className="privacy" to=''>Privacy Policy</Link>
                        <Link className='terms' to=''>Terms of use</Link>
                    </div>
                    <p>© copyright 2022, All Rights Reserved.</p>
                </div>
           </div>
        </div>
    )
}

export default Footer




