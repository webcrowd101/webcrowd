import React, { useState, useEffect } from "react";
import "./About.css";
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
function About() {
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

      <div className="Content aboutContent">
        <h1>OUR PERFECT TEAM</h1>
        <div className="about__container">
          <div className="member__info">
            <div className="member__info__left">
              <img src="snow.png" alt="" />
            </div>
            <div className="member__info__right">
              <div>Khalid Fatni</div>
              <i>Junior Data Scientist</i>
              <p>
                this boy is the fucking craziest person i have ever seen in my
                whole life. he has no time for loving, he is waiting for rockets
                exploding. cause he prays.
              </p>
            </div>
          </div>
          <div className="member__info">
            <div className="member__info__left">
              <img src="hassan.png" alt="" />
            </div>
            <div className="member__info__right">
              <div>Hassan El Amri</div>
              <i>Web developer</i>
              <p>
                a quick look at this boy, this boy learned html then he applied for NASA, whenever he likes a girl, it's turned out that she is taller than him.
              </p>
            </div>
          </div>
          <div className="member__info">
            <div className="member__info__left">
              <img src="toustous.png" alt="" />
            </div>
            <div className="member__info__right">
              <div>Khalid Toustous</div>
              <i>Jobless</i>
              <p>
                this boy likes indian girls, because of his exaggerating of watching india movies, he swear that can pick a piece of moon up to his girlfriend because of her birthday.
              </p>
            </div>
          </div>
        </div>
        <h1>Our Services</h1>
        <div className="services__container">
          <div className="card__info">
            <b>Motion Graphic</b>
            <div className="offers">
              <ul>
                <li>video motion graphic 10 seconds</li>
                <li>set an offer</li>
                <li>set an offer</li>
              </ul>
            </div>
            <button>Apply now</button>
          </div>
          <div className="card__info">
            <b>Web Design</b>
            <div className="offers">
              <ul>
                <li>set an offer</li>
                <li>set an offer</li>
                <li>set an offer</li>
              </ul>
            </div>
            <button>Apply now</button>
          </div>
          <div className="card__info">
            <b>Web development</b>
            <div className="offers">
              <ul>
                <li>set an offer</li>
                <li>set an offer</li>
                <li>set an offer</li>
              </ul>
            </div>
            <button>Apply now</button>
          </div>
           <div className="card__info">
            <b>Writing articles</b>
            <div className="offers">
              <ul>
                <li>set an offer</li>
                <li>set an offer</li>
                <li>set an offer</li>
              </ul>
            </div>
            <button>Apply now</button>
          </div>
          
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default About;
