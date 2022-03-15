import React, { useState, useEffect } from "react";
import "./Productivity.css";
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
function Productivity() {
  let history = useHistory();

   useEffect(() => {
     document.title = "Web Crowd - productivity";
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
    <div className="productivity">
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

      <div className="Content productivityContent productivityTitles ">
        <p className="introToBooks">
          We are living in a world full of distractions, where productivity has
          become difficult thing to achieve, most of unproductive people are
          most of the time checking social media, lying in the bed, or basically
          they just don't feel like working, in this due too many factors, which
          I'm not going to mention it, instead, I will give you some tips and
          tricks to get back to the road and live the life you really wanted.{" "}
          <br />
          Before we get started I want you to be aware of the fact that, getting
          out of the comfort zone, is not going to be easy, you have to be
          willing to go the Extra Miles, the failure is a normal thing, just get
          ready to screw the first 3 days in what I call : productivity Neuron
          training, cause, basically you are just training your mind to get used
          to the new productive life, it called the plasticity, which is a good
          thing to know about, we are going to talk about it in the future
          blogs.
        </p>
        <h3> Now, let's get in the heart of the object buddies:</h3>
        <p>
          I am going to share with you just, enough, to get out of your rut, to
          shake off the rust, (Sounds like Rap hahaha), Trust me, I was there,
          feeling lost, weak, useless and my existence doesn't mean
          anything(Trying to be emotional, but I am not good at this hahaha)
        </p>
        <h3>
          1: Fix your sleep (I started with sleep because I love sleep hihihi):
        </h3>
        <p>
          Having a consistent sleep schedule is the most important thing you
          need to focus on if you want to stay active during the day, between 7
          and 7:30 hours are largely enough, Why 7 to 7:30 and not 7 to 8 hours
          as the influences and YouTuber say without any knowledge? We are going
          to talk about sleep in the next blog, it's such an interesting topic
          all it's own As a summary fix your sleep, stay consistent on it, I
          recommend hitting the bed at 11:00 PM and waking between 6:00 and 6:30
          am.
        </p>
        <h3>2: Prepare a To Do List:</h3>
        <p>
          I'm sure you have heard about this tip, and its efficiency, but trust
          me, people don't know how to prepare it well, they get motivated and
          they put on too many task that they wouldn't achieve, in the end of
          the day, they feel exhausted and suffocated because they couldn't
          achieve all the things they wrote down, to not fall into this trap, I
          suggest to put on your list just enough, the big titles, just the most
          4 important things, and make sure you get them done, don't sleep only
          and if only you get the work done, remember what I said, not going to
          be easy, you are training and stressing your mind to get back in
          truck, you will be happy after a week trust me
        </p>
        <h3>3: move your body (it's Sia Song I love it, xd) </h3>
        <p>
          The mind is connected with the body, to have an active mind, you
          should certainly have an active body, and if you are not used to do
          sport, I suggest to start with a simple follow along YouTube videos,
          then, move to some cardio or weight lifting, just to get that blood
          flowing in your vessels and mind, which going to speed up your neurons
          naturally so you will smarter, faster and better than the last version
          of yourself. <br /> <br />
          If you need some workout equipment, here you go : <br />1 :{" "}
          <a href="">Dumbbells</a>. <br />2 : <a href="">Resistance bands</a>.{" "}
          <br />3 : <a href="">Bar</a>. <br />
        </p>
        <h3>4 : DIET, DIET, DIET </h3>
        <p>
          We are what we eat; anything you put in your body will surely
          contribute in your look, energy and even your mentality, eating junk
          food all the time, will put your gut under an extreme amount of
          stress, these food contains a lot of unhealthy complicated oil, which
          is hard to digest so it stays for a long time in your body, you will
          get lazy fat buddy. <br />
          Consider fixing your diet, start eating healthy, only this can change
          your life forever.
        </p>
        <h3>5 : WATER, WATER, WATER</h3>
        <p>
          Again, these fake influencers say: You Should Drink 3 L of water,
          which is not scientifically proven, it depends on your ‘During the day
          activities', if you make a lot of physical effort, you should
          absolutely consider drinking more water, else, drink just enough to
          not feel dry.
        </p>
        <h3>
          5 : focus during the work, shut down the engines during the break.
        </h3>
        <p className="lastParag">
          Science has proven that the adult brain can stay concentrated only for
          45 minutes, I'm talking about the absolute full concentration, when
          you are totally focused on the task you are doing and you can't hear
          and be conscience about what around you, it might look exaggerated,
          but that's the real concentration (some people get red ears when they
          are concentrated, like me, don't interrupt them hahahha). <br />
          During the break, take a real break, do not think about your work, do
          something fun, move your body and leave your desk. <br />
          In summary, work like hell for 45 minutes, and take a break for 5 to
          10 minutes, repeat this process for 5 to 6 times, you will be chocked
          how much work you done.
        </p>

        <Footer />
      </div>
    </div>
  );
}

export default Productivity;
