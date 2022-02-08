import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./Contact.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
import Footer from "./Footer";
function Contact() {
  let history = useHistory();

  localStorage.setItem(
    "main__current",
    window.location.href.substring(window.location.href.lastIndexOf("/") + 1)
  );

  useEffect((e) => {
    history.push(localStorage.getItem("main__current"));

    if (localStorage.getItem("main__current") === "") {
      $(".main__header__home").addClass("main__active");
    } else if (localStorage.getItem("main__current") === "EARN__MONEY") {
      $(".main__header__earn").addClass("main__active");
    } else if (localStorage.getItem("main__current") === "ABOUT") {
      $(".main__header__about").addClass("main__active");
    } else if (localStorage.getItem("main__current") === "CONTACT") {
      $(".main__header__contact").addClass("main__active");
    } else {
    }
  }, []);

  return (
    <div className="contact">
      <img src="cover.jpeg" className="cover" alt="" />
      <div className="main__header">
        <Link className="cover__Pic" to="/">
          <div className="main__header__left">
            <img src="logo.png" className="main__logo" alt="" />
          </div>
        </Link>
        <ul className="">
          <Link to="/" className="main__header__home">
            <li>HOME</li>
          </Link>
          <Link to="/EARN__MONEY" className="main__header__earn ">
            <li>EARN MONEY</li>
          </Link>
          <Link to="/ABOUT" className="main__header__about ">
            <li>ABOUT</li>
          </Link>
          <Link to="/CONTACT" className="main__header__contact ">
            <li>CONTACT US</li>
          </Link>
        </ul>
      </div>
      <div className="contact__content">
        <div className="contact__content__left">
          <h1>Get in Touch</h1>
          <p>
            If you have any Questions, don't hesitate to ask.
            <br />
            Our mission is to help you to be a Full Stack
            <br />
            Web Developer as Soon as possible. <br />
            Fill out the form besides, we'll respond Soon.
          </p>
        </div>
        <div className="contact__content__right">
          <input type="text" placeholder="Enter Your Full Name" />
          <input type="text" placeholder="Enter Your Email" />
          <input type="text" placeholder="Enter a Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Type Your Message"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
