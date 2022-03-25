import React, { useState, useEffect } from "react";
import "./Faq.css";
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
function Faq() {
    let history = useHistory();

     useEffect(() => {
       document.title = "Web Crowd - faq";
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

      <div className="Content faqContent">
        <p style={{ marginTop: "50px" }}>
          You as a Web developer when you apply for Job at any particular
          company you will come across a bunch of Questions about Web
          development, So here are 20 Questions of the most popular asking
          Questions in web development :
        </p>
        <div className="question__number">1 : what is HTML ?</div>
        <p>
          HTML stands for Hyper Text Markup Language, it structures everything
          you see in front of you in any website, actually you can make a
          website only using this language, but it will look terrible. So that's
          why html is not enough for building a decent website.{" "}
        </p>
        <div className="question__number">
          2 : which html tag used to switch between website's pages ?
        </div>
        <p>
          to switch between a website pages you can use <b>a</b> tag, in
          addition to that, you can also use it to scroll among page's sections.
        </p>
        <div className="question__number">
          3 : what does responsive website mean ?
        </div>
        <p>
          responsive website is a website that fits all devices size, its
          structure can be changed according to the device's type.
        </p>
        <div className="question__number">4 : what css used for ? </div>
        <p>
           css makes the website beautiful by adding some styles to the
          web pages such as color,background,padding,margin,width,height...etc.
          and it responsible on making the website more responsive.
        </p>
        <div className="question__number">
          5 : what is the difference between{" "}
          <b style={{ color: "#0a0453" }}>visibility : hidden</b> and{" "}
          <b style={{ color: "#0a0453" }}>display : none</b> properties ?
        </div>
        <p>
          display:none removes the element from the layout flow. but
          visibility:hidden hides it but leaves the space.
        </p>
        <div className="question__number">
          6 : what is the Highest and Lowest value can opacity accept ?{" "}
        </div>
        <p>
          the highest value can opacity take is 1, and the lowest value is 0.
        </p>
        <div className="question__number">7 : what is a server ?</div>
        <p>
          a server is a computer that provides services to other computers, but
          the difference between server and other simple computers is that
          server has a hardware with high performances and qualities, it allows
          other computers to connect with each others.
        </p>
        <div className="question__number">8 : what is a domain ?</div>
        <p>
          a domain name is just an address to your website, is a link that is
          showed up in google's search bar. you can buy a domain name from a lot
          of companies such as NameCheap or firebase or GoDaddy...etc.
        </p>
        <div className="question__number">9 : what is a hosting ?</div>
        <p>
          hosting is a home of your website, if you own a website you need to
          host it in somewhere, So basically a hosting is a computer that keeps
          your website available across the internet.
        </p>
        <div className="question__number">
          10 : what are the differences between http and https ?
        </div>
        <p>
          {" "}
          HTTP stands for Hypertext Transfer Protocol while HTTPS stands for
          Hypertext Transfer Protocol Secure, So as you can see, https is also
          http but secured.
        </p>
        <div className="question__number">11 : what does IDE mean ?</div>
        <p>
          IDE stands for Integrated Development Environment, is an environment
          where you can build Games, softwares and websites, it's basically where
          you write the programming languages code. there are a bunch of IDEs
          such as visual studio code, sublime,atom,visual studio...etc.{" "}
        </p>
        <div className="question__number">12 : what is JavaScript ?</div>
        <p>
          JavaScript is a programming language allows you to make your website
          more Interactive, for example : when you want to sign up at facebook,
          first of all you fill up all form fields then you click on sign up
          button to submit info and become a member at Facebook, So the click
          event made by JavaScript.
        </p>
        <div className="question__number">13 : what does DOM mean ?</div>
        <p>
          DOM stands for Document Object Model, is everything you see in front
          of you when you get in any particular website, it's basically HTML
          content.
        </p>
        <div className="question__number">14 : what loops are used for ?</div>
        <p>
          loops allow you to do repetitive tasks without re-write the same code,
          you can repeat a code as much as you need.
        </p>
        <div className="question__number">
          15 : what are JavaScript scopes ?
        </div>
        <p>
          there are three scopes, Global scope, Function scope and Block scope.{" "}
        </p>
        <div className="question__number">
          16 : what is the difference between join and split functions ?
        </div>
        <p>
          join function combines array item to string, while split does the
          opposite, it transforms string to array according to a given value.
        </p>
        <div className="question__number">
          17 : what is the difference between setTimeout and setInterval
          functions ?
        </div>
        <p>
          setTimeout function execute the internal code one time, once the page
          gets loaded, on the other hand setInterval function re-execute the same code every given time interval.
        </p>
        <div className="question__number">
          18 : why do we use reduce function in array ?
        </div>
        <p>
          we use reduce function in array to add digital array items together.
        </p>
        <div className="question__number">
          19 : which string function do we use to check if string contains a
          particular alphabet ?
        </div>
        <p>in this case we use includes() function.</p>
        <div className="question__number">
          20 : which array function allows us to add item at the end of array ?
        </div>
        <p>in this case we use push() function.</p>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default Faq;
