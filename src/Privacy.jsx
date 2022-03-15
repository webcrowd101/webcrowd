import React, { useState, useEffect } from "react";
import "./Privacy.css";
import $ from "jquery";
import ContentFooter from "./ContentFooter";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
import Footer from "./Footer";
function Privacy() {
  let history = useHistory();

   useEffect(() => {
     document.title = "Web Crowd - privacy";
   }, []);

  useEffect((e) => {
    localStorage.setItem(
      "current",
      window.location.href.substring(window.location.href.lastIndexOf("/") + 1)
    );
    history.push(localStorage.getItem("current"));

    if (localStorage.getItem("current") === "") {
      $(".main__header__home").addClass("active");
    } else if (localStorage.getItem("current") === "EARN__MONEY") {
      $(".main__header__earn").addClass("active");
    } else if (localStorage.getItem("current") === "ABOUT") {
      $(".main__header__about").addClass("active");
    } else if (localStorage.getItem("current") === "FAQ") {
      $(".main__header__faq").addClass("active");
    } else {
    }
  }, []);
  return (
    <div className="faq">
      {/* <img src="secondCoverPic.jpeg" className="cover" alt="" /> */}
      <div className=" faq__header main__header">
        <Link className="main__header__left" to="/">
          <font
            className="nameOfWebsite"
            color="white"
            size="6"
            face=" a astro space"
          >
            web crowd
          </font>
          {/* <img src="logo.png" className="main__logo" alt="" /> */}
        </Link>
        <ul className="">
          <Link to="/" className="main__header__home">
            <li>HOME</li>
          </Link>
          <Link to="/EARN__MONEY" className="main__header__earn ">
            <li>EARN</li>
          </Link>
          <Link to="/ABOUT" className="main__header__about ">
            <li>ABOUT</li>
          </Link>
          <Link to="/FAQ" className="main__header__faq ">
            <li>FAQ's</li>
          </Link>
        </ul>
      </div>

      <div className="Content faqContent">
        <p>
          Your privacy, visitor, is extremely important to us, and the privacy
          policy in this article represents the types of personal information
          collected through your visit and how this information is used.
        </p>
        <p>
          We use third-party advertising companies to display ads, and when you
          visit the "Web crowd" site, these companies have the right to use
          information about your visits to this site (except for your name,
          address, email address or phone number) in order to provide
          advertisements about goods, products and services that interest you
          via a cookie. We use Google ads as an external financial resource, so
          Google uses cookies to display ads on our site. This will enable
          Google, by using the DART cookie, to serve ads "based on interests" to
          users based on their visits to our site. Our visitors can opt out of
          the use of the DART cookie by visiting{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
          >
            the Google ad and content network privacy policy
          </a>
          .
        </p>
        <h2>Log files:</h2>
        <p>
          Like most other site servers, it uses the log file system, and this
          includes the Internet protocol (addresses, browser type, ISP "Internet
          Service Providers", date / time, and number of clicks to analyze
          trends). Through this process, this is not intended to collect all
          this information in order to eavesdrop on visitors' personal matters,
          but rather it is analytical matters for the purposes of improving the
          quality of ads by Google, and in addition to that, all this
          information saved by us is completely confidential, and remains within
          the scope of private development and improvement. Our site only.
        </p>
        <h2>Cookies and network settings</h2>
        <p>
          Google uses cookies to store information about visitors' interests,
          along with a special user record in which specific information about
          the pages that have been accessed or visited, and with this step, we
          know the extent of visitors' interests and which topics are most
          preferred by them so that we can in turn develop our service and
          knowledge content appropriate for them. We add to that, that some of
          the companies that advertise on our site may look at cookies and
          network settings for our site and for you, and these companies. <br /> for
          example, Google and its advertising program{" "}
          <a href="https://www.google.com/adsense/start/" target="_blank">
            Google AdSense
          </a>
          , which is the first advertising company on our site. Of course, such
          advertisers, which are considered the third party in the privacy
          policy, follow such data and statistics via Internet protocols for the
          purposes of improving the quality of their advertisements and
          measuring their effectiveness. Also, under the agreements concluded
          with us, these companies are entitled to use technical means (such as
          cookies, network settings, and special “JavaScript” programming codes)
          for the same purposes mentioned above, which are to develop the
          advertising content of these companies and measure the effectiveness
          of these ads, without Any other objectives that may harm in one way or
          another the visitors of our site. Of course, the "web crowd" site cannot access or control these files, even after you
          allow and activate them to take them from your device (cookies), and
          we are not responsible in any way for the illegal use of them if they
          happen, God forbid. You should review the third-party privacy policy
          in this document, advertisers such as{" "}
          <a href="https://www.google.com/adsense/start/" target="_blank">
            Google AdSense
          </a>{" "}
          or ad network servers for more information on their various practices
          and activities. To review the{" "}
          <a href="https://www.google.com/adsense/start/" target="_blank">
            Google AdSense
          </a>{" "}
          advertising program privacy policy of Google, please click{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
          >
            here
          </a>
          . <br />
          Data may be collected for re-marketing on the Display Network and the
          Search Network via the Ads policy that targets the interests and
          locations of visitors, and this feature can be disabled from{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout/?hl=en"
            target="_blank"
          >
            here
          </a>
          . <br />
          Finally, we are obligated within the terms of this agreement to show
          you how to disable the cookie feature, where you can do so through
          your browser options, or by following{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
          >
            the privacy policy of Google ads and the content network
          </a>
          . <br />
          If you need more information or have any questions about the privacy
          policy, feel free to contact us by entering the{" "}
          <a href="mailto:webcrowd101@gmail.com" target="_top">
            Contact us
          </a> section
          .
        </p>


        <Footer />
      </div>
    </div>
  );
}

export default Privacy;
