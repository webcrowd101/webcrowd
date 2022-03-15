import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./Main.css";
import Footer from "./Footer";
import SearchIcon from "@mui/icons-material/Search";
import AOS from "aos";
import "aos/dist/aos.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
function Main() {
  let history = useHistory();

   useEffect(() => {
     document.title = "Web Crowd - HOME";
   }, []);

  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
  };

  useEffect((e) => {
    localStorage.setItem(
      "current",
      window.location.href.substring(window.location.href.lastIndexOf("/") + 1)
    );
    history.push(localStorage.getItem("current"));

    if (localStorage.getItem("current") === "") {
      $(".main__header__home").addClass("active");
    } else if (localStorage.getItem("current") === "EARN") {
      $(".main__header__earn").addClass("active");
    } else if (localStorage.getItem("current") === "ABOUT") {
      $(".main__header__about").addClass("active");
    } else if (localStorage.getItem("current") === "FAQ") {
      $(".main__header__faq").addClass("active");
    } else {
    }
  }, []);

  

  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
  };

  AOS.init({
    duration: 2000,
  });
  return (
    <div className="main" name="main" id="main">
      <img src="cover.jpeg" className="cover" alt="" />
      {/* <img src="secondCoverPic.jpeg" className="cover" alt="" /> */}
      <div className="main__header">
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
          <Link to="/EARN" className="main__header__earn ">
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
      <div className="main__top">
        <div className="main__top__left">
          <font
            className="main__top__left__title"
            color="white"
            size="6"
            // face=" a astro space"
          >
            web crowd
          </font>
          {/* <div className="main__top__left__title">WEB CROWD</div> */}
          <br />
          <br />
          <br />
          <div>Your Path to become a Front End Web</div>
          <div> Developer with our community.</div>
          <div>Write Less, Do More.</div>
          <button className="mainBotton">
            <Link to="/OVERVIEW" className="getStartedButton">
              Get Started
            </Link>{" "}
          </button>
        </div>
        <div className="main__top__right">
          <img src="./laptop.png" alt="" />
        </div>
      </div>
      {/* <div className="waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="white"
            fill-opacity="1"
            d="M0,192L40,202.7C80,213,160,235,240,208C320,181,400,107,480,101.3C560,96,640,160,720,165.3C800,171,880,117,960,122.7C1040,128,1120,192,1200,218.7C1280,245,1360,235,1400,229.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div> */}
      <div className="main__center">
        <h1 data-aos="fade-down" data-aos-duration="1000">
          Why Web Development ?
        </h1>
        <div class="first__reason">
          <div
            class="first__reason__left"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h4>1-Growth & Popularity :</h4>
            <p>
              In the current time, according to 2022 Survey, web development
              became one of the most Popular Skills you must master. it makes
              you more Creative.
            </p>
          </div>
          <div
            class="first__reason__right"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img src="growth.jpg" alt="" />
          </div>
        </div>
        <div class="second__reason">
          <div
            class="second__reason__left"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <h4>2-Easy to Learn :</h4>
            <p>
              When it comes to Programming, Web development's considered as the
              easiest option for you, cause you can learn it faster comparing to others.
            </p>
          </div>
          <div
            class="second__reason__right"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <img src="easy.jpg" alt="" />
          </div>
        </div>
        <div class="third__reason">
          <div
            class="third__reason__left"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <h4>3-Helpful :</h4>
            <p>
              Websites can help you through Blogs which give a bunch of
              Information either related by Productivity or Health or Something
              like that.
            </p>
          </div>
          <div
            class="third__reason__right"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <img src="helpful.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
