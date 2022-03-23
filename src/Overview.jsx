import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./Overview.css";
import Footer from "./Footer";
import DehazeIcon from "@mui/icons-material/Dehaze";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
function Overview() {
  const [show, hide] = useState(false);
  let history = useHistory();

   useEffect(() => {
     document.title = "Web Crowd - OVERVIEW";
   }, []);

  //show and hide
  const ShowHide = () => {
    if (!show) {
      document.querySelector(".overviewSidebar").style.width = "200px";
      document.querySelector(".overviewSidebar ul").style.display = "block";

      document.querySelector(".overviewSidebar").style.position = "absolute";
      $(".overviewSidebar").css("z-index", "1");
      document.querySelector(".overviewContent").style.opacity = "0.5";
      hide(true);
    } else if (show) {
      document.querySelector(".overviewSidebar").style.width = "60px";
      document.querySelector(".overviewSidebar ul").style.display = "none";
      document.querySelector(".overviewSidebar").style.position = "absolute";
      document.querySelector(".overviewContent").style.opacity = "1";
      hide(false);
    } else {
    }
  };

  window.addEventListener("resize", function () {
    if (window.innerWidth > 871) {
      if (history.push(localStorage.getItem("current")) === "overview") {
        document.querySelector(".overviewSidebar").style.width = "200px";
        document.querySelector(".overviewSidebar ul").style.display = "block";
      }
      if (show) {
        try {
          document.querySelector(".overviewSidebar").style.width = "200px";
          document.querySelector(".overviewSidebar ul").style.display = "block";
        } catch (error) {}
      }
    } else if (window.innerWidth <= 871) {
      if (history.push(localStorage.getItem("current")) === "overview") {
        document.querySelector(".overviewSidebar").style.width = "60px";
        document.querySelector(".overviewSidebar ul").style.display = "none";
      }
      if (show && window.innerWidth <= 871) {
        try {
          document.querySelector(".overviewContent").style.opacity = "1";
          document.querySelector(".overviewSidebar").style.width = "60px";
          document.querySelector(".overviewSidebar ul").style.display = "none";
          hide(false);
        } catch (error) {}
      }
    } else {
    }
  });

  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
  };

  return (
    <div className="overview">
      <h3>Introduction :</h3>
      <p>
        In the current time, web development became one of the most important
        things that anybody must be aware of, it helps you a lot to get a
        passive income. In web development, you can create a website(s) for you
        or for others and get paid through. So when it comes to web development,
        you need two things :
      </p>
      <b>1 - Web browser : </b>
      <p>
        {" "}
        To display the web pages which are created with html. There is a bunch
        of web browsers such as Google Chrome , firefox and edge, i recommend to
        use Google Chrome.
      </p>
      <b>2 - Text editor :</b>
      <p>
        Where you can write your entire code of html, css, js...ect. i
        absolutely recommend{" "}
        <a
          className="content__links"
          href="https://code.visualstudio.com/download"
          target="SingleSecondaryWindowName"
        >
          Visual Studio Code
        </a>{" "}
        cause it is developed specifically for web development{" "}
        <a
          className="content__links"
          href="https://www.youtube.com/watch?v=WHQFUzZpA-U&t=18s"
          target="_blank"
        >
          Here is how to install it
        </a>
        .
      </p>
      <h3>Pre-requisites :</h3>
      <div className="thinking">
        <img src="thinking.jpeg" alt="" />
      </div>

      <p>
        You don't need any skills to start web development , you only should be
        aware of how to type on keyboard. So, now you need to Download{" "}
        <a
          className="content__links"
          href="https://www.youtube.com/watch?v=WHQFUzZpA-U&t=18s"
          target="_blank"
        >
          Visual Studio Code
        </a>
        . <br />
        After downloading it, you must install a bunch of Extensions which make
        your VsCode more Efficient. and help you write less. SO, here is the way
        of how to install those Extensions :
      </p>
      <ol>
        <li>Go to Visual Studio Code.</li>
        <li>Click on Extensions icon in the Left Side.</li>
        <li> Then Search for the following Extensions.</li>
      </ol>
      <ul>
        <li>Auto Close Tag</li>
        <li>Auto Rename Tag</li>
        <li>Live Server</li>
        <li>Quokka</li>
        <li>Tabnine</li>
        <li>Prettier</li>
      </ul>

      <p>
        Here is the Explanation :{" "}
        <a
          className="content__links"
          href="https://www.youtube.com/watch?v=8Q6irTUsuMY"
          target="_blank"
        >
          How to install these Extensions ?
        </a>
      </p>
      <p className="important">
        <b>Important !</b> : Click on File at top left, then click on (Auto
        save) to make Visual Studio Code automatically save every single word
        you write on your program.
      </p>
      <Footer />
    </div>
  );
}

export default Overview;
