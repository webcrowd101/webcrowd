import React, { useState, useEffect } from "react";
import "./Terms.css";
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
function Terms() {
    let history = useHistory();

     useEffect(() => {
       document.title = "Web Crowd - terms";
     }, []);

  useEffect((e) => {
    localStorage.setItem(
      "current",
      window.location.href.substring(window.location.href.lastIndexOf("/") + 1)
    );
    history.push(localStorage.getItem("current"));

    if (localStorage.getItem("current") === "") {
      $(".main__header__home").addClass("active");
    } else if (localStorage.getItem("current") === "earn") {
      $(".main__header__earn").addClass("active");
    } else if (localStorage.getItem("current") === "about") {
      $(".main__header__about").addClass("active");
    } else if (localStorage.getItem("current") === "faq") {
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
          <Link to="/earn" className="main__header__earn ">
            <li>EARN</li>
          </Link>
          <Link to="/about" className="main__header__about ">
            <li>ABOUT</li>
          </Link>
          <Link to="/faq" className="main__header__faq ">
            <li>FAQ's</li>
          </Link>
        </ul>
      </div>

      <div className="Content faqContent termsHeight">
        <h2>Certificate of use</h2>
        <p>
          Hello dear visitor to the site, There is no doubt
          our honorable visitor, you are one of the priorities of our site,
          and we always hope you Get in touch with us and be in a good mood. but first, we would like to draw your attention to
          some important points And to ask you to comply. First, web crowd is an
          Educational website Interested in providing simplified explanations of
          Web Development Languages. You can get to know our site better by
          visiting Our{" "}
          <a href="https://web.facebook.com/people/Web-crowd/100076500933308/" 
          target="_blank"
          >
            Facebook page
          </a>{" "}
          or our{" "}
          <a
            href="https://www.youtube.com/channel/UCi7aWEyuj7NWXB-Wrh5LwAg"
            target="_blank"
          >
            YouTube channel
          </a>
          .
        </p>

        <Footer />
      </div>
    </div>
  );
}

export default Terms;
