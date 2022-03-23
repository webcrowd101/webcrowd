import React, { useState, useEffect } from "react";
import "./Earn.css";
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
function Earn() {
  let history = useHistory();

  useEffect(() => {
    document.title = "Web Crowd - Earn";
  }, []);
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
  return (
    <div className="earn">
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
          {/* <img src="logo.jpg" className="main__logo" alt="" /> */}
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

      <div className="Content earnContent">
          
        <p className="earn__intro">
            <h2>Introduction :</h2>
          There are several ways to make Money Online, but best of them is
          Passive Income, So that you could be a Millionaire through . So what
          is Passive Income and Why it's considered as the Best Option of Making
          Money Online ? <br />
          <i>Passive Income is a Money that is NOT directly tied to our Time
          . basically it's a money that you can earn while you sleep.</i> <br />
        
          <b className="note">Note : </b>
          There is no such thing of how to make Money by doing surveys or
          clicking on ads or another Dumb things. the only way of making Money
          is to Provide value. <br />
          in this article we are going to be talking about{" "}
          <b>9 Passive Income</b> ideas of how to Make a Passive Income :
        </p>

        <div className="passive__income__title">
          <p>
            <h2>1 : Youtube Channel</h2>
            Creating a Youtube Channel became one of the most popular way of
            Making Passive Income, So how can you make money through Youtube
            Channel ? first of all you must pick the right content for your
            youtube channel, a content that impresses audience, the second thing
            you should keep in mind that you must be eligible for Monetization,
            you need 1000 of Subscribers and 4000 hours watch time. when you
            reach out this amount of subscribers and watch time, you should run
            ads on your videos.
          </p>
          <img src="youtube.jpg" alt="" />
        </div>

        <div className="passive__income__title">
          <p>
            <h2>2 : Affiliate Marketing </h2>
            You can make money by Promoting or selling others people Products
            and get a percentage of the sells. actually Affiliate Marketers are
            doing very well in their Job. <br /> So there are a bunch of
            Affiliate Programs you can use, such as Amazon associates,
            clickBank, Digistore24...etc, but the most popular of them is Amazon
            Associates, So that you can create an account at then get affiliate
            links then Promote them and get Commission ( you get commission
            whenever someone buys this product through your affiliate link).
          </p>
          <img src="affiliate.jpg" alt="" />
        </div>

        <div className="passive__income__title">
          <p>
            <h2>3 : Selling Digital Products </h2>
            for example : you can write a book and sell it on Merch by Amazon,
            your book must give a value, such identifying others people Problems
            they have, and give them a quick solution.
          </p>
          <img src="digital.jpg" alt="" />
        </div>

        <div className="passive__income__title">
          <p>
            <h2>4 : Selling Courses </h2>
            selling products became so popular in the current time, a bunch of
            YouTubers decided to start this kind of Business in addition to
            their free courses on Youtube, the start making Paid courses and
            mentioning to through their Channels. you can sell your courses
            through a bunch of Platforms such as Skill-share, but it's gonna be
            better if you create your own website and sell courses on. it's
            pretty easy to do.{" "}
          </p>
          <img src="courses.jpg" alt="" />
        </div>

        <div className="passive__income__title">
          <p>
            <h2>5 : Building a website or Blog</h2>
            In our opinion, building a website is the best option for you to
            make a Passive Income, it's so easy to build, you can just learn web
            development Languages such HTML, CSS, JAVASCRIPT...etc. if you don't
            have enough time to Learn how to Code, you can just use a specific
            Platform for building websites such as Wordpress, Wix,
            Blogger...etc. but it's gonna be better if you learn the Languages
            we mentioned above. <br />
            <b className="note">Note :</b> don't forget to run Ads on your
            website after getting finished.
          </p>
          <img src="website.png" alt="" />
        </div>

        <div className="passive__income__title">
          <p>
            <h2>6 : Building an App.</h2>
            you can build your own App that gives a value to People, then run
            Ads on using Google Admob. building an App is also requires the
            languages that we mentioned to above, or you can use some Platforms.
          </p>
          <img src="app.jpg" alt="" />
        </div>

        <div className="passive__income__title">
          <p>
            <h2>7 : Trading </h2>
            Trading depends on Expectations, basically, there are two types of
            Trading : <br />
            <h4>1 : Buying and Selling Products and Getting Profit :</h4> let's
            assume this Bicycle's cost of the moment is 100$, and you expect
            that its cost will rise to 200$ in the common days, in this case you
            will buy this Bicycle and wait till its cose rise and sell it and
            get Profit. this is a simple example of this type pf Trading. <br />
            <h4>2 : Investing Money on Particular Companies :</h4> There are a
            bunch of Platforms you can start Investing on such as Forex, Etoro,
            FBS...etc. So you can invest on Tesla's company if you expect that
            its Income will rise, and get Profit. for example : if Tesla's
            income increased by 20% , your money also will increase by 20% (
            100$ will be 120$ ).
          </p>
          <img src="trading.jpg" alt="" />
        </div>
        <p className="conclusion">
          <b className="note">Conclusion :</b> there are another ways to make a
          Passive Income but those are the most popular. we can't deny that they
          take time, but after a few dedicated months you will make money{" "}
          <b>while you SLEEP</b>.{" "}
        </p>
        <Footer/>
      </div>
    </div>
  );
}

export default Earn;
