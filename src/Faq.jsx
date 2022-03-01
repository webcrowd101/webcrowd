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
        
        <p style={{marginTop:"50px"}}>
          You as a Web developer when you apply for Job at any particular
          company you will come across a bunch of Question about Web
          development, So here are 20 Questions of the most popular asking
          Question in web development :
        </p>
        <div className="question__number">1 : what is html ?</div>
        <p>
          html stands for Hyper Text Markup Language, it represented everything
          you see in front of you in any website, actually you can make a
          website only using this language, but it will look terrible such as
          wikipedia. So that's why html is not enough for building a decent
          website.{" "}
        </p>
        <div className="question__number">
          2 : which html tag used to switch between website's pages ?
        </div>
        <p>
          to switch between a website pages you can use a tag, in addition that
          you can also use it to scroll among page's section.
        </p>
        <div className="question__number">
          3 : what does responsive website mean ?
        </div>
        <p>
          responsive website is a website that fits all devices size, its
          structure's changed according to device's type.
        </p>
        <div className="question__number">4 : what css used for ? </div>
        <p>
          we use css makes your website beautiful by adding some styles to our
          web pages such as color,background,padding,margin,width,height...etc,
          and it responsible on make a website more responsive.
        </p>
        <div className="question__number">
          5 : what is the difference between visibility : hidden and display :
          none properties ?
        </div>
        <p>
          display:none removes the element from the layout flow. but
          visibility:hidden hides it but leaves the space.
        </p>
        <div className="question__number">
          6 : what is the highest value can opacity accept ?{" "}
        </div>
        <p>
          the highest value can opacity take is 1, and the lowest value is 0.
        </p>
        <div className="question__number">7 : what is server ?</div>
        <p>
          a server is a computer that provides services to other computers, but
          the difference between server and other simple computers is that
          server has a hardware with high performances and qualities, it allows
          other computers to connect with each others.
        </p>
        <div className="question__number">8 : what is domain ?</div>
        <p>
          a domain name is just an address to your website, is a link that is
          showed up in google's search bar. you can buy a domain name from a lot
          of companies such as NameCheap or firebase of GoDaddy..etc.
        </p>
        <div className="question__number">9 : what is hosting ?</div>
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
          where you can build Games, softwares and websites, is basically where
          you write the programming languages code. there are a bunch of IDE's
          such as visual studio code, sublime,atom,visual studio...etc.{" "}
        </p>
        <div className="question__number">12 : what is JavaScript ?</div>
        <p>
          JavaScript is a programming language allows you to make your website
          more interractive, for example : when you want to sign up at facebook,
          first of all you fill up all form fields then you click on sign up
          botton to submit info and become a member at facebook, So the click
          event made by JavaScript.
        </p>
        <div className="question__number">13 : what does DOM mean ?</div>
        <p>
          DOM stands for Document Object Model, is everything you see in front
          of you when you get in any particular website, it's basically HTML
          content.
        </p>
        <div className="question__number">14 : what loops used for ?</div>
        <p>
          loops allow you to do repetitive tasks without re-write the same code,
          you can repeat code as much as you can.
        </p>
        <div className="question__number">
          15 : what are JavaScript scopes ?
        </div>
        <p>
          there are three scopes, Global scope, Function scope and Block scope.{" "}
        </p>
        <div className="question__number">
          16 : what is the defference between join and split functions ?
        </div>
        <p>
          join function combines array item to string, while split does the
          opposite, it transforms string to array according to a given value.
        </p>
        <div className="question__number">
          17 : what is the defference between setTimeout and setIntervals
          functions ?
        </div>
        <p>
          setTimeout function execute the internal code one time, once the page
          gets loaded, while setIntervals function re-execute the code every a
          bunch of times according to a given time.
        </p>
        <div className="question__number">
          18 : why do we use reduce function in array ?
        </div>
        <p>
          we use reduce function in array to add digital array items together.
        </p>
        <div className="question__number">
          19 : which string function do we use to check if string contains a
          particular alphbet ?
        </div>
        <p>in this case we use includes function.</p>
        <div className="question__number">
          20 : which array function allows us to add item at the end of array ?
        </div>
        <p>in this case we use push function.</p>
        <br /><br /><br />
        <Footer />
      </div>
    </div>
  );
}

export default Faq;
