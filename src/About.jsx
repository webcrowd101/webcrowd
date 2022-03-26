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

  useEffect(() => {
    document.title = "Web Crowd - about";
  }, []);
  useEffect((e) => {
    localStorage.setItem(
      "current",
      window.location.href
        .substring(window.location.href.lastIndexOf("/") + 1)
        .toLowerCase()
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
                Junior Data Scientist and a college Math Student, I have been
                working on too many Neural Network projects, interested in AI
                and extracting information and insights from data.
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
                I am a web developer, i've made a bunch of clones of social
                media such as facebook, twitter, youtube ,whatsapp...etc. I am
                looking forward to build a big App such whatsapp.
              </p>
            </div>
          </div>
          <div className="member__info">
            <div className="member__info__left">
              <img src="toustous.png" alt="" />
            </div>
            <div className="member__info__right">
              <div>Khalid Toustous</div>
              <i>Web & Motion Graphic designer </i>
              <p>
                I am a Web and Motion Graphic designer, i have been working on
                that for 3 years.
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
                <li>video motion graphics 15 seconds.</li>
                <li>video motion graphics 35 seconds.</li>
                <li>video motion graphics 60 seconds.</li>
              </ul>
            </div>
            <a href="mailto:fatnikhalid@gmail.com" target="_top">
              Apply now
            </a>
          </div>
          <div className="card__info">
            <b>Design</b>
            <div className="offers">
              <ul>
                <li>Web Design.</li>
                <li>Logo Design.</li>
                <li>Application Design.</li>
              </ul>
            </div>
            <a
              href="mailto:fatnikhalid@gmail.com"
              target="_top"
              
            >
              Apply now
            </a>
          </div>
          <div className="card__info">
            <b>Web development</b>
            <div className="offers">
              <ul>
                <li>Simple E-commerce website.</li>
                <li>Simple Blog.</li>
                <li>Professional Portfolio.</li>
              </ul>
            </div>
            <a href="mailto:hassanamouri031@gmail.com" target="_top">
              Apply now
            </a>
          </div>
          <div className="card__info">
            <b>Math & Programming</b>
            <div className="offers">
              <ul>
                <li>Real life problems solving using Math.</li>
                <li>Math and programming problems Solving.</li>
                <li>
                  Extracting useful insights from your Data using the latest
                  technologies.
                </li>
              </ul>
            </div>
            <a href="mailto:fatnikhalid@gmail.com" target="_top">
              Apply now
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
