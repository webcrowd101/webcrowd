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
        <h2>Certificate of use</h2>
        <p style={{ marginBottom: "70px" }}>
          Hello to all the followers and visitors to the site, There is no doubt
          our honorable visitor that you are one of the priorities of the site,
          and we always hope you Get in touch with us and always try to be on
          your best mind. But first, we would like to draw your attention to
          some important points And to ask you to comply. First, web crowd is an
          Educational site Interested in providing simplified explanations of
          Web Development Languages. You can get to know the site better by
          visiting Our <a href="">Facebook page</a> or visit our{" "}
          <a href="https://www.youtube.com/channel/UCi7aWEyuj7NWXB-Wrh5LwAg" target="_blank">
            YouTube channel
          </a>
          . Therefore, no visitor or member is allowed to violate the following
          terms: <br /> 1: Comments may not be used to promote people or
          organizations. <br />
          2: It is forbidden to offend other people or entities, whether
          verbally or otherwise. <br /> 3: It is prohibited to use the blog to
          promote any extremist, religious or ethnic ideas 4: It is prohibited
          to put any links to any external sites, whether public or personal
          sites. In addition, these terms must be adhered to and are not subject
          to discussion. It is also subject to renewal and change at any time.
          We hope that everyone will abide by these terms so that the benefit
          continues for everyone. thank you all.
        </p>
        <Footer />
      </div>
    </div>
  );
}

export default Terms;
