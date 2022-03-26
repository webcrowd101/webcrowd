import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./Css.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
import ContentFooter from "./ContentFooter";
function Css() {
  const [show, hide] = useState(false);
  const [url, setUrl] = useState(window.location.href);
  let history = useHistory();

   useEffect(() => {
     document.title = "Web Crowd - CSS3";
   }, []);
  //show and hide
  const ShowHide = () => {
    if (!show) {
      document.querySelector(".Sidebar").style.width = "250px";
      document.querySelector(".Sidebar ul").style.display = "block";
      document.querySelector(".Content").style.opacity = "0.5";
      document.querySelector(".OpenSideBar").style.float = "right";
      document.querySelector(".OpenSideBar").style.margin = "3px";
      hide(true);
    } else if (show) {
      document.querySelector(".Sidebar").style.width = "40px";
      document.querySelector(".Sidebar ul").style.display = "none";
      document.querySelector(".Content").style.opacity = "1";
      document.querySelector(".OpenSideBar").style.margin = "0px";

      hide(false);
    } else {
    }
  };

  window.addEventListener("resize", function () {
    if (window.innerWidth > 871) {
      if (history.push(localStorage.getItem("current")) === "CSS3") {
        document.querySelector(".Sidebar").style.width = "250px";
        document.querySelector(".Sidebar ul").style.display = "block";
      }
      if (show) {
        try {
          document.querySelector(".Sidebar").style.width = "250px";
          document.querySelector(".Sidebar ul").style.display = "block";
        } catch (error) {}
      }
      if (show && window.innerWidth >= 871) {
        try {
          document.querySelector(".Content").style.opacity = "1";
          hide(false);
        } catch (error) {}
      }
    } else if (window.innerWidth <= 871) {
      if (history.push(localStorage.getItem("current")) === "CSS3") {
        document.querySelector(".Sidebar").style.width = "40px";
        document.querySelector(".Sidebar ul").style.display = "none";
      }
      if (show && window.innerWidth <= 871) {
        try {
          document.querySelector(".Content").style.opacity = "1";
          document.querySelector(".Sidebar").style.width = "40px";
          document.querySelector(".Sidebar ul").style.display = "none";
          hide(false);
        } catch (error) {}
      }
    } else {
    }
  });
  let cssQuizScore;
  const cssCompletedQuiz = () => {
    cssQuizScore = 0;
    if (document.querySelector(".cssQuestionOne").checked) {
      cssQuizScore++;
    }
    if (document.querySelector(".cssQuestionTwo").checked) {
      cssQuizScore++;
    }
    if (document.querySelector(".cssQuestionThree").checked) {
      cssQuizScore++;
    }
    if (document.querySelector(".cssQuestionFour").checked) {
      cssQuizScore++;
    }
    if (document.querySelector(".cssQuestionFive").checked) {
      cssQuizScore++;
    }
    if (document.querySelector(".cssQuestionSix").checked) {
      cssQuizScore++;
    }
    if (document.querySelector(".cssQuestionSeven").checked) {
      cssQuizScore++;
    }
    if (document.querySelector(".cssQuestionEight").checked) {
      cssQuizScore++;
    }
    if (document.querySelector(".cssQuestionNine").checked) {
      cssQuizScore++;
    }
    if (document.querySelector(".cssQuestionTen").checked) {
      cssQuizScore++;
    }
    document.querySelectorAll(".cancelIcon").forEach((rightCancel) => {
      rightCancel.style.setProperty("display", "inline", "important");
    });

    document.querySelectorAll(".doneIcon").forEach((rightCancel) => {
      rightCancel.style.setProperty("display", "inline", "important");
    });

    $(".cssScore").text("your score is " + cssQuizScore);
    return $(".Modal").show();
  };

  const hideModal = () => {
    $(".Modal").hide();
    cssQuizScore = 0;
  };

  const refleshCurrentPage = (e) => {
    $(".third").addClass("active");
    if (show && window.innerWidth < 871) {
      document.querySelector(".Sidebar").style.width = "40px";
      document.querySelector(".Sidebar ul").style.display = "none";
      document.querySelector(".Content").style.opacity = "1";
      document.querySelector(".OpenSideBar").style.margin = "0px";
      hide(false);
    }
    document.querySelectorAll(".List li").forEach((item) => {
      item.style.border = "none";
      item.style.background = "none";
    });
    e.target.style.border = "1px solid #0b0453";

    e.target.style.backgroundColor = "#b0baff";
    e.target.classList.add("activatedLi");
  };
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
  };
  useEffect(() => {
    history.push("CSS3");
    $(".third").addClass("active");
    $(".first").removeClass("active");
    $(".second").removeClass("active");
    $(".fourth").removeClass("active");
  }, []);

  return (
    <div className="css">
      <div className="Modal">
        <CloseIcon className="closeModal" onClick={hideModal} />
        <p className="cssScore"></p>
      </div>
      <div className="Sidebar">
        {/* <DehazeIcon onClick={ShowHide} className="showSideBar" /> */}
        <DehazeIcon onClick={ShowHide} className="OpenSideBar" />
        <ul className="List">
          <a href="#introduction" onClick={refleshCurrentPage}>
            <li>Introduction</li>
          </a>
          <a onClick={refleshCurrentPage} href="#color">
            <li>Color</li>
          </a>
          <a onClick={refleshCurrentPage} href="#background">
            <li>Background</li>
          </a>
          <a onClick={refleshCurrentPage} href="#width">
            <li>Width</li>
          </a>
          <a onClick={refleshCurrentPage} href="#height">
            <li>Height</li>
          </a>
          <a onClick={refleshCurrentPage} href="#margin">
            <li>Margin</li>
          </a>
          <a onClick={refleshCurrentPage} href="#padding">
            <li>Padding</li>
          </a>
          <a onClick={refleshCurrentPage} href="#border">
            <li>Border</li>
          </a>
          <a onClick={refleshCurrentPage} href="#comment">
            <li>Comment</li>
          </a>
          <a onClick={refleshCurrentPage} href="#textAlign">
            <li>Text Align</li>
          </a>
          <a onClick={refleshCurrentPage} href="#position">
            <li>Position</li>
          </a>
          <a onClick={refleshCurrentPage} href="#opacity">
            <li>Opacity</li>
          </a>
          <a onClick={refleshCurrentPage} href="#font">
            <li>Font</li>
          </a>
          <a onClick={refleshCurrentPage} href="#hover">
            <li>hover</li>
          </a>
          <a onClick={refleshCurrentPage} href="#transition">
            <li>transition</li>
          </a>
          <a onClick={refleshCurrentPage} href="#flexbox">
            <li>Flexbox</li>
          </a>

          <a onClick={refleshCurrentPage} href="#animation">
            <li>Animation</li>
          </a>
          <a onClick={refleshCurrentPage} href="#mediaQuery">
            <li>Media Query</li>
          </a>
          <a onClick={refleshCurrentPage} href="#Exercises">
            <li>Exercises</li>
          </a>
          <a onClick={refleshCurrentPage} href="#cssQuiz">
            <li>Quiz</li>
          </a>
        </ul>
      </div>
      <div className="Content">
        <div className="addPaddingToSection" id="introduction">
          <h3 className="sectionTittle">Introduction</h3>
          <p className="clickHere">
            CSS stands for <b>C</b>ascading <b>S</b>tyle <b>S</b>heet , actually
            you can make a website using only HTML, however that website will
            look terrible, this is when CSS comes in, it makes your website
            awesome by adding Colors and Controlling the element's
            position...etc. <br />
            So, the bottom line is you should add some Styling to your Web
            Page(s) to make it looks Beautiful and Attractive.
            <br />
            <b className="instruction">Instruction :</b> Actually you can write
            Css code in the same file where you write HTML code (inside HTML
            file), but it will be better if you create a separated CSS file.{" "}
            <br />
            So, here is how to create CSS file and link it to your HTML file{" "}
            <a
              style={{ color: "blue" }}
              href="https://www.youtube.com/watch?v=915oonk1UaQ"
              target="_blank"
            >
              click here
            </a>{" "}
            <br />
            One more thing : if you feel distracted with css property, try read
            them one by one in examples.
          </p>
        </div>

        <div className="addPaddingToSection" id="color">
          <h3 className="sectionTittle">color</h3>
          <p className="clickHere">
            color is the most useful css Property in every website, So here is
            how to add color to a particular HTML element.
          </p>
          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">h1</span>&gt; this is h1 &lt;
                <span className="tag">/h1</span>&gt; <br />
                &nbsp; &lt;<span className="tag">p</span>&gt; this is p &lt;
                <span className="tag">/p</span>&gt; <br />
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">h1</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">red</span>; <br /> &nbsp;&#125;{" "}
                <br />
                <span className="cssTag">p</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br /> &nbsp;&#125;{" "}
                <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <h1 style={{ color: "red" }}>this is h1</h1>
              <p style={{ color: "blue" }}>this is p</p>
            </div>
          </div>
          <p className="clickHere">
            but if you have a bunch of &lt;h2&gt; tags in your web page, this
            style will be executed on all of them. as you can see below.
          </p>
          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">h1</span>&gt; this is h1 &lt;
                <span className="tag">/h1</span>&gt; <br />
                &nbsp; &lt;<span className="tag">h1</span>&gt; this is h1 &lt;
                <span className="tag">/h1</span>&gt; <br />
                &nbsp; &lt;<span className="tag">h1</span>&gt; this is h1 &lt;
                <span className="tag">/h1</span>&gt; <br />
                &nbsp; &lt;<span className="tag">p</span>&gt; this is p &lt;
                <span className="tag">/p</span>&gt; <br />
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">h1</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">red</span>; <br /> &nbsp;&#125;{" "}
                <br />
                <span className="cssTag">p</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br /> &nbsp;&#125;{" "}
                <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <h1 style={{ color: "red" }}>this is h1</h1>
              <h1 style={{ color: "red" }}>this is h1</h1>
              <h1 style={{ color: "red" }}>this is h1</h1>
              <p style={{ color: "blue" }}>this is p</p>
            </div>
          </div>
          <p className="clickHere">
            So, to prevent this problem, you should use what
            is called <b>class</b> or <b>id</b> or you can use both of them.{" "}
            let's try it out.
          </p>
          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">h1</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">firstH1</span>&gt; this is h1 &lt;
                <span className="tag">/h1</span>&gt; <br />
                &nbsp; &lt;<span className="tag">h1</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">secondH1</span>&gt; this is h1 &lt;
                <span className="tag">/h1</span>&gt; <br />
                &nbsp; &lt;<span className="tag">h1</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">thirdH1</span>&gt; this is h1 &lt;
                <span className="tag">/h1</span>&gt; <br />
                &nbsp; &lt;<span className="tag">p</span>&gt; this is p &lt;
                <span className="tag">/p</span>&gt; <br />
                &nbsp; &lt;<span className="tag">p</span>{" "}
                <span className="idProperty">id</span>=
                <span className="idValue">secondP</span>&gt; this is p &lt;
                <span className="tag">/p</span>&gt; <br />
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">.firstH1</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">red</span>; <br /> &nbsp;&#125;{" "}
                <br />
                <span className="cssTag">.secondH1</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">green</span>; <br /> &nbsp;&#125;{" "}
                <br />
                <span className="cssTag">.thirdH1</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">purple</span>; <br /> &nbsp;&#125;{" "}
                <br />
                <span className="cssTag">p</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br /> &nbsp;&#125;{" "}
                <br />
                <span className="cssTag">#secondP</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">orange</span>; <br /> &nbsp;&#125;{" "}
                <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <h1 style={{ color: "red" }}>this is h1</h1>
              <h1 style={{ color: "green" }}>this is h1</h1>
              <h1 style={{ color: "purple" }}>this is h1</h1>
              <p style={{ color: "blue" }}>this is p</p>
              <p style={{ color: "orange" }}>this is p</p>
            </div>
          </div>
          <p className="clickHere">
            So, as you can see, when we add class or id properties, we can take
            control of the duplicated tag's styling. You may wonder, what is the
            differences between these properties, and when do we use{" "}
            <b>class</b> instead of <b>id</b> or the opposite ?! don't worry,
            you will find a video explains when we use id instead of class{" "}
            <a
             style={{color:"blue"}}
              href="https://www.youtube.com/watch?v=CknsVN34lck&list=PLBRc8och4vXULbcJY-o1LMBLS5s2gMmom&index=5"
              target="_blank"
            >
              here
            </a>
            . <br />
            But don't watch it unless you complete the other properties. <br />
            <b className="importants">Important</b> : don't forget to add{" "}
            <b>.</b> before class name in css file and <b>#</b> before id name.{" "}
            <br />
          </p>
        </div>

        <div className="addPaddingToSection" id="background">
          <h3 className="sectionTittle">background</h3>
          <p className="clickHere">
            we often use background property in header to highlight it, to make
            your website's sections more clearly for users.
          </p>
          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>&gt; this is div &lt;
                <span className="tag">/div</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">secondDiv</span>
                &gt; this is div2 &lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">red</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">orange</span>; <br /> &nbsp;&#125;{" "}
                <br />
                <span className="cssTag">div</span>&#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">aqua</span>; <br /> &nbsp;&#125;{" "}
                <br />
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">white</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">purple</span>; <br /> &nbsp;&#125;{" "}
                <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <h3 style={{ color: "red", backgroundColor: "orange" }}>
                this is h3
              </h3>
              <div style={{ backgroundColor: "aqua" }}>this is div</div>
              <div style={{ backgroundColor: "purple", color: "white" }}>
                this is div2
              </div>
            </div>
          </div>
          <p className="clickHere"></p>
        </div>

        <div className="addPaddingToSection" id="width">
          <h3 className="sectionTittle">width</h3>
          <p className="clickHere">
            there are many ways to add width to a particular HTML tag, but we
            will discuss about three ways.
          </p>

          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>&gt; this is div1
                &lt;
                <span className="tag">/div</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">secondDiv</span>
                &gt; this is div2 &lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">red</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">orange</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">100px</span>; <br /> &nbsp;&#125;{" "}
                <br />
                <span className="cssTag">div</span>&#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">aqua</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">50%</span>; <br /> &nbsp;&#125;{" "}
                <br />
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">white</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">purple</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">10vw</span>; <br /> &nbsp;&#125;{" "}
                <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <h3
                style={{
                  color: "red",
                  backgroundColor: "orange",
                  width: "100px",
                }}
              >
                this is h3
              </h3>
              <div style={{ backgroundColor: "aqua", width: "50%" }}>
                this is div1
              </div>
              <div
                style={{
                  color: "white",
                  backgroundColor: "purple",
                  width: "10vw",
                }}
              >
                this is div2
              </div>
            </div>
          </div>
          <p className="clickHere">
            As you can see, when we typed <b>10vw</b> it takes 10% of the whole
            web page. because the right width of our page is <b>100vw</b>.{" "}
            <br />
            and when we typed <b>50%</b> for the first div tag, it takes a half
            of the container.
            <br />
          </p>
        </div>

        <div className="addPaddingToSection" id="height">
          <h3 className="sectionTittle">height</h3>
          <p className="clickHere">height is the same way as width.</p>
          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>&gt; this is div1
                &lt;
                <span className="tag">/div</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">secondDiv</span>
                &gt; this is div2 &lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">red</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">orange</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">100px</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;height</span>:{" "}
                <span className="cssValue">8vh</span>; <br /> &nbsp;&#125;{" "}
                <br />
                <span className="cssTag">div</span>&#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">aqua</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">50%</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;height</span>:{" "}
                <span className="cssValue">100px</span>; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">white</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">purple</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">10vw</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;height</span>:{" "}
                <span className="cssValue">20%</span>; <br /> &nbsp;&#125;{" "}
                <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <h3
                style={{
                  color: "red",
                  backgroundColor: "orange",
                  width: "100px",
                  height: "6vh",
                }}
              >
                this is h3
              </h3>
              <div
                style={{
                  backgroundColor: "aqua",
                  width: "50%",
                  height: "100px",
                }}
              >
                this is div1
              </div>
              <div
                style={{
                  color: "white",
                  backgroundColor: "purple",
                  width: "10vw",
                  height: "20%",
                }}
              >
                this is div2
              </div>
            </div>
          </div>
          <p className="clickHere"></p>
        </div>

        <div className="addPaddingToSection" id="margin">
          <h3 className="sectionTittle">margin</h3>
          <p className="clickHere">
            we can use margin to separate elements with space. we will apply
            margin on the same HTML elements above.
          </p>
          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>&gt; this is div1
                &lt;
                <span className="tag">/div</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">secondDiv</span>
                &gt; this is div2 &lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">red</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">orange</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">100px</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;margin</span>:{" "}
                <span className="cssValue">20px</span>; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">div</span>&#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">aqua</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">50%</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;height</span>:{" "}
                <span className="cssValue">100px</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;margin-left
                </span>: <span className="cssValue">auto</span>; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">white</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">purple</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">10vw</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;margin</span>:{" "}
                <span className="cssValue">auto</span>; <br />
                &nbsp;&#125; <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <h3
                style={{
                  color: "red",
                  backgroundColor: "orange",
                  width: "100px",
                  margin: "20px",
                }}
              >
                this is h3
              </h3>
              <div
                style={{
                  backgroundColor: "aqua",
                  width: "50%",
                  height: "100px",
                  marginLeft: "auto",
                }}
              >
                this is div1
              </div>
              <div
                style={{
                  color: "white",
                  backgroundColor: "purple",
                  width: "10vw",
                  margin: "auto",
                }}
              >
                this is div2
              </div>
            </div>
          </div>
          <p className="clickHere">
            As you can see, when we add margin property with 20px value to the
            first element, it creates a space between this element and the
            element around it. <br />
            and when we add margin-left with auto value to the second element,
            that makes the item slides to the right side, cause when you add
            margin-(left,right,top or bottom), that makes the item slides
            to the opposite side. <br />
            <b className="note">Note : </b> you can customize the margin format
            as following : <br />
            margin : 10px 20px 30px 40px; <br /> So that : <br />
          </p>

          <ul style={{ marginLeft: "50px", pointerEvents: "none" }}>
            <li>10px represents margin-top</li>
            <li>20px represents margin-right</li>
            <li>30px represents margin-bottom</li>
            <li>40px represents margin-left</li>
          </ul>
          <p style={{ margin: "20px" }}>
            you can also write as the following : <b>margin : 10px 20px;</b>{" "}
            <br /> So that : <br />
          </p>

          <ul style={{ marginLeft: "50px", pointerEvents: "none" }}>
            <li>10px represents margin-top and margin-bottom</li>
            <li>20px represents margin-right and margin-left</li>
          </ul>
          <p className="clickHere"></p>
        </div>

        <div className="addPaddingToSection" id="padding">
          <h3 className="sectionTittle">padding</h3>
          <p className="clickHere">
            padding property allows you to scale your element area, and you can
            write it the exact same as margin (padding-top,padding-right....)
          </p>
          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>&gt; this is div1
                &lt;
                <span className="tag">/div</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">secondDiv</span>
                &gt; this is div2 &lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">red</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">orange</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">100px</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;padding</span>:{" "}
                <span className="cssValue">10px</span>; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">div</span>&#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">aqua</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">50%</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;padding-left
                </span>: <span className="cssValue">20px</span>; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">white</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">purple</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">10vw</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;padding-bottom
                </span>: <span className="cssValue">30px</span>; <br />
                &nbsp;&#125; <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <h3
                style={{
                  color: "red",
                  backgroundColor: "orange",
                  width: "100px",
                  padding: "10px",
                }}
              >
                this is h3
              </h3>
              <div
                style={{
                  backgroundColor: "aqua",
                  width: "50%",
                  paddingLeft: "20px",
                }}
              >
                this is div1
              </div>
              <div
                style={{
                  color: "white",
                  backgroundColor: "purple",
                  width: "10vw",
                  paddingBottom: "30px",
                }}
              >
                this is div2
              </div>
            </div>
          </div>
          <p className="clickHere">
            As you can see, padding is the same thing as margin, the only
            difference between them is that margin makes space around the
            element when padding scale the element's area.
            <br />
          </p>
        </div>

        <div className="addPaddingToSection" id="border">
          <h3 className="sectionTittle">border</h3>
          <p className="clickHere">
            border property allows you to set a border of a particular element.
            you can also specify which side you want to add border to
            (border-top,border-left,border-bottom,border-right).
          </p>
          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>&gt; this is div1
                &lt;
                <span className="tag">/div</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">secondDiv</span>
                &gt; this is div2 &lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">red</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">fit-content</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;margin</span>:{" "}
                <span className="cssValue">10px</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;border-right
                </span>: <span className="cssValue">2px solid black</span>;{" "}
                <br />
                &nbsp;&#125; <br />
                <span className="cssTag">div</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">50%</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;border</span>:{" "}
                <span className="cssValue">5px solid purple</span>; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">10vw</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;border-bottom
                </span>: <span className="cssValue">8px solid red</span>; <br />
                &nbsp;&#125; <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <h3
                style={{
                  color: "red",
                  width: "fit-content",
                  margin: "10px",
                  borderRight: "2px solid black",
                }}
              >
                this is h3
              </h3>
              <div
                style={{
                  width: "50%",
                  border: "5px solid purple",
                }}
              >
                this is div1
              </div>
              <div
                style={{
                  color: "blue",
                  width: "10vw",
                  borderBottom: "8px solid red",
                }}
              >
                this is div2
              </div>
            </div>
          </div>
          <p className="clickHere">
            the first value of border property (2px) refers to a border{" "}
            <b>size</b>, the second (solid) refers to a border <b>style</b> (you
            can also type (dotted,dashed,double...etc)), and the last one refers to
            a border <b>color</b>.
            <br />
          </p>
        </div>

        <div className="addPaddingToSection" id="comment">
          <h3 className="sectionTittle">comment</h3>
          <p className="clickHere">
            As i mentioned before in HTML section, comments don't get executed.
          </p>
          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>&gt; this is div1
                &lt;
                <span className="tag">/div</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">secondDiv</span>
                &gt; this is div2 &lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">10vw</span>; <br />
                &nbsp;&nbsp;/*
                <span className="cssComment">
                  &nbsp;&nbsp;border-bottom
                </span>: <span className="cssComment">8px solid red</span>
                ;&nbsp;*/ <br />
                &nbsp;&#125; <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <h3>this is h3</h3>
              <div>this is div1</div>
              <div
                style={{
                  color: "blue",
                  width: "10vw",
                }}
              >
                this is div2
              </div>
            </div>
          </div>
          <p className="clickHere">
            As you can see, when we wrapped the last property in css with
            comment token (/* property : value; */), it's no longer applied.
            <br />
          </p>
        </div>

        <div className="addPaddingToSection" id="textAlign">
          <h3 className="sectionTittle">text-align</h3>
          <p className="clickHere">
            We can take control of item text position through align-text
            property.
          </p>
          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>&gt; this is div1
                &lt;
                <span className="tag">/div</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">secondDiv</span>
                &gt; this is div2 &lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">20vw</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">orange</span> &nbsp;; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;text-align
                </span>: <span className="cssValue">start</span>;&nbsp;
                <br />
                &nbsp;&#125; <br /> <span className="cssTag">
                  div
                </span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">aqua</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">20vw</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">blue</span>;<br />
                <span className="cssProperty">
                  &nbsp;&nbsp;text-align
                </span>: <span className="cssValue">center</span>;&nbsp; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">white</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">20vw</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">red</span>;&nbsp; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;text-align
                </span>: <span className="cssValue">end</span>;&nbsp; <br />
                &nbsp;&#125; <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <h3
                style={{
                  color: "blue",
                  width: "20vw",
                  backgroundColor: "orange",
                  textAlign: "start",
                }}
              >
                this is h3
              </h3>
              <div
                style={{
                  color: "blue",
                  width: "20vw",
                  backgroundColor: "aqua",
                  textAlign: "center",
                }}
              >
                this is div1
              </div>
              <div
                style={{
                  color: "white",
                  width: "20vw",
                  backgroundColor: "red",
                  textAlign: "end",
                }}
              >
                this is div2
              </div>
            </div>
          </div>
          <p className="clickHere">
            As you can see, when we add text-align : start nothing changes,
            because this is the default value of text-align property.
            <br />
          </p>
        </div>

        <div className="addPaddingToSection" id="position">
          <h3 className="sectionTittle">position</h3>
          <p className="clickHere">
            we can take control of element's position using different ways. such
            as transform,position...etc. So, we won't explain that in this
            section, cause we need the entire web page. to learn it click{" "}
            <a
              style={{ color: "blue" }}
              href="https://www.youtube.com/watch?v=89aVq9hwP8I&list=PLBRc8och4vXULbcJY-o1LMBLS5s2gMmom&index=6"
              target="_blank"
            >
              Here
            </a>
          </p>
        </div>

        <div className="addPaddingToSection" id="opacity">
          <h3 className="sectionTittle">opacity</h3>
          <p className="clickHere">
            opacity property allows us to take control of opacity/transparency
            of HTML element. opacity property can take value from 0 to 1
            (includes 0.1,0.2,...,0.9)
          </p>
          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>&gt; this is div &lt;
                <span className="tag">/div</span>&gt; <br />
                &nbsp; &lt;<span className="tag">img</span>{" "}
                <span className="classProperty">src</span>={" "}
                <span className="classValue linked">
                  "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                </span>
                <span className="tag">/</span>&gt; <br />
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">div</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">red</span>;<br />
                <span className="cssProperty">
                  &nbsp;&nbsp;text-align
                </span>: <span className="cssValue">center</span>;&nbsp; <br />
                <span className="cssProperty">&nbsp;&nbsp;opacity</span>:{" "}
                <span className="cssValue">0</span>;&nbsp; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">img</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">100px</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;height</span>:{" "}
                <span className="cssValue">100px</span>;&nbsp; <br />
                <span className="cssProperty">&nbsp;&nbsp;opacity</span>:{" "}
                <span className="cssValue">0.6</span>;&nbsp; <br />
                &nbsp;&#125; <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <h3>this is h3</h3>
              <div
                style={{
                  color: "blue",
                  textAlign: "center",
                  backgroundColor: "red",
                  opacity: "0",
                }}
              >
                this is div1
              </div>
              <img
                src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
                style={{ width: "100px", height: "100px", opacity: "0.6" }}
              />
            </div>
          </div>
          <p className="clickHere">
            As you can see, when we add <b>opacity : 0</b> to a div tag, it
            disappeared, actually it's existed but not clear.
            <br />
          </p>
        </div>

        <div className="addPaddingToSection" id="font">
          <h3 className="sectionTittle">font</h3>
          <p className="clickHere">
            font means the element's text, we can add a bunch of effects to this
            font in addition to color.
          </p>
          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>&gt; this is div &lt;
                <span className="tag">/div</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>{" "}
                <span className="classProperty"> class=</span>
                <span className="classValue">"secondDiv"</span> &gt; this is
                div2 &lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;font-style</span>:{" "}
                <span className="cssValue">italic</span>; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">div</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;font-size</span>:{" "}
                <span className="cssValue">40px</span>; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">purple</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;font-weight
                </span>: <span className="cssValue">800</span>; <br />
                &nbsp;&#125;
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <h3 style={{ fontStyle: "italic" }}>this is h3</h3>
              <div
                style={{
                  color: "blue",
                  fontSize: "40px",
                }}
              >
                this is div1
              </div>
              <div style={{ color: "purple", fontWeight: "800" }}>
                this is div2
              </div>
            </div>
          </div>
          <p className="clickHere">
            As you can see, <b>font-style : italic</b> makes the font diagonal,
            and <b>font-weight : 800</b> makes font bold (you can use 500 to
            800), and <b>font-size : 40px</b> makes font bigger. there is
            another useful one, it's <b>font-family</b> you can check out by
            typing <b>google fonts</b> in search bar.
            <br />
          </p>
        </div>

        <div className="addPaddingToSection" id="hover">
          <h3 className="sectionTittle">hover</h3>
          <p className="clickHere">
            we use hover, when the mouse hover over an element, So that we can
            add an effect to the element.
          </p>
          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">h3</span>
                &#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp; background-color
                </span>
                : <span className="cssValue">red</span>; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">h3</span>
                <span style={{ color: "blue" }}>:hover</span>&#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp; background-color
                </span>
                : <span className="cssValue">blue</span>; <br />
                &nbsp;&#125; <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <h3 className="h3Hover">this is h3</h3>
            </div>
          </div>
          <p className="clickHere">
            try hover over the element, then you will see that the element's
            background-color changes to blue.
            <br />
          </p>
        </div>

        <div className="addPaddingToSection" id="transition">
          <h3 className="sectionTittle">transition</h3>
          <p className="clickHere">
            transition property related to hover, So that when we hover over an
            element, we can take control of effect duration through transition
            property.
          </p>
          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">h3</span>
                &#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp; background-color
                </span>
                : <span className="cssValue">red</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp; transition
                </span>: <span className="cssValue">background-color 1s</span>;{" "}
                <br />
                &nbsp;&#125; <br />
                <span className="cssTag">h3</span>
                <span className="cssTag">:hover</span>&#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp; background-color
                </span>
                : <span className="cssValue">blue</span>; <br />
                &nbsp;&#125; <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <h3 className="h3Transition">this is h3</h3>
            </div>
          </div>
          <p className="clickHere">
            As you can see, when we hover over an element, it takes <b>1s</b> to
            completely apply the effect (changing background-color). you can
            apply transition on every property inside hover event, you should
            only write the property name in front of transition property. <br />
            <b className="note">Note : </b>you can make as much as you can of
            transitions, just add comma(,) between each transition. <br />
            for Example : <br />
            <b>
              element &#123; <br /> transition : color 2s , background-color 2s;
              <br /> &nbsp;&#125; <br />
              element:hover &#123; <br /> color : white; <br /> background-color
              : blue; <br /> &nbsp;&#125;
            </b>
            <br />
          </p>
        </div>

        <br />
        <div className="addPaddingToSection" id="flexbox">
          <h3 className="sectionTittle">flexbox</h3>
          <p className="clickHere">
            flexbox is considered as the most useful and powerful concept in web
            development. it helps you a lot to make a responsive website
            (website fits all devices including desktop, mobile, tablet...etc).
            So now we are going to be talking about the most useful properties
            in flexbox. <br />
            <b className="note">Note : </b> those properties applied on
            container tag. as the following.
          </p>
          <h4 className="flexboxProperties">display property :</h4>
          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">div</span>
                <span className="classProperty"> class=</span>
                <span className="classValue">"container"</span>&gt; <br />
                <br />
                &nbsp; &lt;
                <span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>&gt; this is div &lt;
                <span className="tag">/div</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>{" "}
                <span className="classProperty"> class=</span>
                <span className="classValue">"secondDiv"</span> &gt; this is
                div2 &lt;
                <span className="tag">/div</span>&gt; <br />
                <br />
                &lt;<span className="tag">/div</span>&gt;
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">.container</span>&#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">gray</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;display</span>:{" "}
                <span className="cssValue">flex</span>; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;font-style</span>:{" "}
                <span className="cssValue">italic</span>; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">div</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">purple</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;font-weight
                </span>: <span className="cssValue">800</span>; <br />
                &nbsp;&#125; <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <div style={{ display: "flex", backgroundColor: "gray" }}>
                <h3 style={{ fontStyle: "italic" }}>this is h3</h3>
                <div
                  style={{
                    color: "blue",
                  }}
                >
                  this is div1
                </div>
                <div style={{ color: "purple", fontWeight: "800" }}>
                  this is div2
                </div>
              </div>
            </div>
          </div>
          <p className="clickHere">
            when we set flex as a value of display property to a container, that
            concatenates all the elements inside this container in one line.{" "}
          </p>
          <h4 className="flexboxProperties">justify-content property :</h4>
          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">div</span>
                <span className="classProperty"> class=</span>
                <span className="classValue">"container"</span>&gt; <br />
                <br />
                &nbsp; &lt;
                <span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>&gt; this is div &lt;
                <span className="tag">/div</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>{" "}
                <span className="classProperty"> class=</span>
                <span className="classValue">"secondDiv"</span> &gt; this is
                div2 &lt;
                <span className="tag">/div</span>&gt; <br />
                <br />
                &lt;<span className="tag">/div</span>&gt;
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">.container</span>&#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">gray</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;display</span>:{" "}
                <span className="cssValue">flex</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;justify-content</span>
                : <span className="cssValue">space-between</span>; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;font-style</span>:{" "}
                <span className="cssValue">italic</span>; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">div</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">purple</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;font-weight
                </span>: <span className="cssValue">800</span>; <br />
                &nbsp;&#125; <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <div
                style={{
                  display: "flex",
                  backgroundColor: "gray",
                  justifyContent: "space-between",
                }}
              >
                <h3 style={{ fontStyle: "italic" }}>this is h3</h3>
                <div
                  style={{
                    color: "blue",
                  }}
                >
                  this is div1
                </div>
                <div style={{ color: "purple", fontWeight: "800" }}>
                  this is div2
                </div>
              </div>
            </div>
          </div>
          <p className="clickHere">
            you can also set <b>space-around</b> , <b>space-evenly</b> and{" "}
            <b>center</b> values. try it out to see the difference.{" "}
          </p>
          <h4 className="flexboxProperties">align-items property :</h4>
          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">div</span>
                <span className="classProperty"> class=</span>
                <span className="classValue">"container"</span>&gt; <br />
                <br />
                &nbsp; &lt;
                <span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>&gt; this is div &lt;
                <span className="tag">/div</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>{" "}
                <span className="classProperty"> class=</span>
                <span className="classValue">"secondDiv"</span> &gt; this is
                div2 &lt;
                <span className="tag">/div</span>&gt; <br />
                <br />
                &lt;<span className="tag">/div</span>&gt;
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">.container</span>&#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">gray</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;display</span>:{" "}
                <span className="cssValue">flex</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;justify-content</span>
                : <span className="cssValue">space-between</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;align-items
                </span>: <span className="cssValue">center</span>; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;font-style</span>:{" "}
                <span className="cssValue">italic</span>; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">div</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">red</span>; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">purple</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;font-weight
                </span>: <span className="cssValue">800</span>; <br />
                &nbsp;&#125; <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <div
                style={{
                  display: "flex",
                  backgroundColor: "gray",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3 style={{ fontStyle: "italic" }}>this is h3</h3>
                <div
                  style={{
                    color: "blue",
                    backgroundColor: "red",
                  }}
                >
                  this is div1
                </div>
                <div style={{ color: "purple", fontWeight: "800" }}>
                  this is div2
                </div>
              </div>
            </div>
          </div>
          <p className="clickHere">
            As you can see, when we added <b>align-items : center</b>, that
            centered all items inside, <br />
            you may not understand this, So try to set <b>start or end</b> as a
            value of <b>align-items</b>, then you will figure out the
            difference.
          </p>
          <h4 className="flexboxProperties">flex property :</h4>
          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">div</span>
                <span className="classProperty"> class=</span>
                <span className="classValue">"container"</span>&gt; <br />
                <br />
                &nbsp; &lt;
                <span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>&gt; this is div &lt;
                <span className="tag">/div</span>&gt; <br />
                &nbsp; &lt;<span className="tag">div</span>{" "}
                <span className="classProperty"> class=</span>
                <span className="classValue">"secondDiv"</span> &gt; this is
                div2 &lt;
                <span className="tag">/div</span>&gt; <br />
                <br />
                &lt;<span className="tag">/div</span>&gt;
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">.container</span>&#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">gray</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;display</span>:{" "}
                <span className="cssValue">flex</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;align-items
                </span>: <span className="cssValue">center</span>; <br />
                &nbsp;&#125; <br />
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;flex</span>:{" "}
                <span className="cssValue">1</span>; <br />
                &nbsp;&#125; <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <div
                style={{
                  display: "flex",
                  backgroundColor: "gray",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3 style={{ flex: "1" }}>this is h3</h3>
                <div>this is div1</div>
                <div>this is div2</div>
              </div>
            </div>
          </div>
          <p className="clickHere">
            As you can see, when we add <b>flex : 1</b> to a particular element,
            the right side elements get pushed completely to the right.
            <br />
          </p>
        </div>

        <div className="addPaddingToSection" id="animation">
          <h3 className="sectionTittle">animation</h3>
          <p className="clickHere">
            You, as a web designer you must be aware of animation in CSS,
            actually it makes your website looks beautiful. <br />
            So, when we talk about animation in CSS, we also talk about{" "}
            <b>keyframes</b> <br /> don't worry, everything will be easy for you
            in this example.
          </p>
          <div className="css__code">
            {" "}
            <div className="cssInput">
              {" "}
              <div className="htmlCode">
                <h3 className="inHtmlCssFile">in html file</h3>
                &nbsp; &lt;<span className="tag">div</span>
                <span className="classProperty"> class=</span>
                <span className="classValue">"container" </span>
                &gt; <br /> <br />
                &nbsp; &lt;<span className="tag">div</span>
                <span className="classProperty"> class=</span>
                <span className="classValue">"child" </span>&gt; &lt;
                <span className="tag">/div</span>&gt; <br /> <br />
                &nbsp;&nbsp;&lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="cssCode">
                <h3 className="inHtmlCssFile">in css file</h3>
                <span className="cssTag">.container</span>
                &#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp; background-color
                </span>
                : <span className="cssValue">red</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp; width</span>:{" "}
                <span className="cssValue">150px</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp; height</span>:{" "}
                <span className="cssValue">150px</span>;
                <br />
                &nbsp;&#125; <br />
                <span className="cssTag">.child</span>
                &#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp; background-color
                </span>
                : <span className="cssValue">blue</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp; width</span>:{" "}
                <span className="cssValue">30px</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp; height</span>:{" "}
                <span className="cssValue">30px</span>;
                <br />
                <span className="cssProperty">
                  &nbsp;&nbsp; animation
                </span>: <span className="cssValue">animate 4s infinite</span>;{" "}
                <br />
                &nbsp;&#125; <br /> <br />
                <span className="keyframes">@keyframes </span>
                <span className="animation__name">animate </span> &#123; <br />
                <span className="keyframes__percent">25%</span>&#123; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp; transform
                </span>: <span className="cssValue">translate</span>(0 , 120px);{" "}
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                <span className="keyframes__percent">50%</span>&#123; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp; transform
                </span>: <span className="cssValue">translate</span>
                (120px , 120px);
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                <span className="keyframes__percent">75% </span>&#123; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp; transform
                </span>: <span className="cssValue">translate</span>(120px , 0);{" "}
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                <span className="keyframes__percent">100% </span>&#123; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp; transform
                </span>: <span className="cssValue">translate</span>(0 , 0);{" "}
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &nbsp;&nbsp;&#125;
                <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="cssoutput">
              {" "}
              <div
                style={{
                  backgroundColor: "red",
                  width: "150px",
                  height: "150px",
                }}
              >
                <div
                  className="animatedItem"
                  style={{
                    backgroundColor: "blue",
                    width: "30px",
                    height: "30px",
                    animation: "animate 4s infinite",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <p className="clickHere">
            So, let's talk about what happens inside keyframes : <br />
            So when our animation reach 25% ,at this moment translate(X,Y) get
            applied (X mentions to horizontal line , Y mentions to vertical
            line). So the same thing as 50% ,75% and 100%(the end of animation).{" "}
            <br /> <br />
            add the following in child css :{" "}
            <span style={{ color: "blue" }}>
              animation : animate 4s infinite
            </span>{" "}
            So that : <br />
            <b>
              <span style={{ color: "red" }}>animation</span> represents
              property. <br />
              <span style={{ color: "red" }}>animate</span> represents the
              animation name (in front of keyframes). <br />
              <span style={{ color: "red" }}>4s</span> represents the animation
              duration. <br />
              <span style={{ color: "red" }}>infinite</span> makes our animation
              unstoppable.
            </b>
            <br />
          </p>
        </div>

        <div className="addPaddingToSection" id="mediaQuery">
          <h3 className="sectionTittle">media Query</h3>
          <p className="clickHere">
            keep in mind, all website on the internet are responsive. <br />
            So, if you want to earn money from your website and get paid from
            Google Adsense, your website must be responsive. this is where{" "}
            <b>Media Query</b> comes in. So, we can't explain that here, you may
            get confused here. <br />
            this is why we made a video explains that.{" "}
            <a
              href="https://www.youtube.com/watch?v=jKzvU_ZB-K0&list=PLBRc8och4vXULbcJY-o1LMBLS5s2gMmom&index=7"
              target="_blank"
            >
              click here
            </a>
            .
          </p>
        </div>

        <div className="addPaddingToSection" id="Exercises">
          <div style={{ width: "100%" }}>
            <h3 className="sectionTittle">Exercises</h3>
            <p className="clickHere">
              Don't be limited to these Exercises, try out more because{" "}
              <b>Practice makes perfect</b>.
            </p>
          </div>
          <div className="exercisesContainer">
            <div className="exercise">
              <h1
                style={{
                  textAlign: "center",
                  padding: "10px",
                  fontSize: "30px",
                  color: "blue",
                }}
              >
                Login form{" "}
              </h1>
              <div style={{ flex: "1" }}>
                <div style={{ margin: "5px" }}>Email :</div>
                <input
                  type="email"
                  placeholder="Email..."
                  style={{
                    outline: "none",
                    padding: "5px",
                    margin: "5px",
                  }}
                />
                <div style={{ margin: "5px" }}>Password :</div>
                <input
                  type="text"
                  placeholder="Password..."
                  style={{
                    outline: "none",
                    padding: "5px",
                    margin: "5px",
                  }}
                />
                <div className="div">
                  <button
                    style={{
                      border: "none",
                      outline: "none",
                      padding: "5px 10px",
                      margin: "5px",
                      backgroundColor: "blue",
                      color: "white",
                      fontWeight: "600",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    className="cssExerciseButton"
                  >
                    Login
                  </button>{" "}
                  <a href="">forgot password</a>
                </div>
              </div>
              <a
                href="https://www.youtube.com/watch?v=ce1tTXobkpg&list=PLBRc8och4vXULbcJY-o1LMBLS5s2gMmom&index=18"
                target="_blank"
                style={{
                  color: "blue",
                  cursor: "pointer",
                  display: "block",
                  width: "500px",
                  textAlign: "center",
                }}
              >
                Solution
              </a>
            </div>
            <div className="exercise">
              <h1
                style={{
                  textAlign: "center",
                  padding: "10px",
                  fontSize: "30px",
                  color: "blue",
                }}
              >
                Sign up
              </h1>
              <div style={{ flex: "1" }}>
                <table style={{ margin: "5px" }}>
                  <tr>
                    <td style={{ padding: "5px 0" }}>First Name </td>
                    <td style={{ padding: "5px 0" }}>
                      :{" "}
                      <input
                        type="text"
                        placeholder="First Name..."
                        style={{
                          border: "none",
                          outline: "none",
                          padding: "5px",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "5px 0" }}>Last Name </td>
                    <td style={{ padding: "5px 0" }}>
                      :{" "}
                      <input
                        type="text"
                        placeholder="Last Name..."
                        style={{
                          border: "none",
                          outline: "none",
                          padding: "5px",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "5px 0" }}>Email </td>
                    <td style={{ padding: "5px 0" }}>
                      :{" "}
                      <input
                        type="email"
                        placeholder="Email..."
                        style={{
                          border: "none",
                          outline: "none",
                          padding: "5px",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "5px 0" }}>password </td>
                    <td style={{ padding: "5px 0" }}>
                      :{" "}
                      <input
                        type="password"
                        placeholder="Password..."
                        style={{
                          border: "none",
                          outline: "none",
                          padding: "5px",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "5px 0" }}>Verify Password</td>
                    <td style={{ padding: "5px 0" }}>
                      :{" "}
                      <input
                        type="password"
                        placeholder="Verify Password..."
                        style={{
                          border: "none",
                          outline: "none",
                          padding: "5px",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "5px 0" }}>Country </td>
                    <td style={{ padding: "5px 0" }}>
                      :{" "}
                      <select
                        name=""
                        id=""
                        style={{
                          border: "none",
                          outline: "none",
                          padding: "5px 65px 5px 5px",
                        }}
                      >
                        <option value="">Select Country</option>
                        <option value="">Morocco</option>
                        <option value="">United States</option>
                        <option value="">Canada</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "5px 0" }}>Gender </td>
                    <td style={{ padding: "5px 0" }}>
                      : <input type="radio" />
                      <span> Man </span>
                      <input type="radio" />
                      <span> Woman</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "5px 0" }}></td>
                    <td style={{ padding: "5px 0" }}>
                      <input type="checkbox" /> Agree with Terms&Conditions
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "5px 0" }}></td>
                    <td style={{ padding: "5px 0" }}>
                      <button
                        style={{
                          padding: "5px 10px",
                          border: "none",
                          outline: "none",
                          cursor: "pointer",
                          backgroundColor: "blue",
                          color: "white",
                          fontWeight: "600",
                          borderRadius: "5px",
                          marginRight: "5px",
                        }}
                        className="signupButton"
                      >
                        Sign up
                      </button>{" "}
                      <button
                        style={{
                          padding: "5px 10px",
                          border: "none",
                          outline: "none",
                          cursor: "pointer",
                          backgroundColor: "black",
                          color: "white",
                          fontWeight: "600",
                          borderRadius: "5px",
                        }}
                      >
                        Reset
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
              <a
                href="https://www.youtube.com/watch?v=vpaPlONgHKs&list=PLBRc8och4vXULbcJY-o1LMBLS5s2gMmom&index=19"
                target="_blank"
                style={{
                  color: "blue",
                  cursor: "pointer",
                  display: "block",
                  width: "500px",
                  textAlign: "center",
                }}
              >
                Solution
              </a>
            </div>
            <div className="exercise">
              <h1
                style={{
                  textAlign: "center",
                  padding: "10px",
                  fontSize: "30px",
                  color: "blue",
                }}
              >
                Responsive NavBar{" "}
              </h1>
              <div style={{ flex: "1" }}>
                <header>
                  <ul
                    style={{
                      backgroundColor: "purple",
                      width: "100%",
                      height: "70px",
                      display: "flex",
                      margin: "30px 0",
                    }}
                  >
                    <li className="responsiveNavBarItemsHover">Home</li>
                    <li className="responsiveNavBarItemsHover">Pricing</li>
                    <li className="responsiveNavBarItemsHover">FAQ's</li>
                    <li className="responsiveNavBarItemsHover">About</li>
                    <li className="responsiveNavBarItemsHover">Contact</li>
                  </ul>
                </header>
              </div>
              <a
                href="https://www.youtube.com/watch?v=KhFQbUEvzrY&list=PLBRc8och4vXULbcJY-o1LMBLS5s2gMmom&index=20"
                target="_blank"
                style={{
                  color: "blue",
                  cursor: "pointer",
                  display: "block",
                  width: "500px",
                  textAlign: "center",
                }}
              >
                Solution
              </a>
            </div>
          </div>
          <p style={{ margin: "20px" }}></p>
        </div>

        <div className="addPaddingToSection" id="cssQuiz">
          <h3 className="sectionTittle">Quiz</h3>
          <p className="clickHere">
            <b className="note">Note : </b> Make sure that you have read the
            introduction of every Concept we discussed about above before you
            start this Quiz. <br /> So, when you complete all of those
            questions, click on <b className="note">i'm Done</b> button to
            display the result immediately. <br />
          </p>

          <div className="cssQuiz__content">
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 1
            </h5>
            <p className="clickHere">is Css a programming language ?</p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="firstQuestionName"
              className="csswrongOne"
            />
            <span className="showWrongIcon cssWrongAnswerOne">
              yes <CancelIcon className="cancelIcon" />
            </span>

            <br />

            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="firstQuestionName"
              className="cssQuestionOne"
            />
            <span className="cssAnswerOne">
              no <DoneIcon className="doneIcon" />
            </span>

            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 2
            </h5>
            <p className="clickHere">why do we use Media Query ?</p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="secondQuestionName"
              className="csswrongTwo1"
            />
            <span className="showWrongIcon cssWrongAnswerTwo1">
              to make a space between html elements.{" "}
              <CancelIcon className="cancelIcon" />
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="secondQuestionName"
              className="cssQuestionTwo"
            />
            <span className="cssAnswerTwo">
              to make our website responsive <DoneIcon className="doneIcon" />
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="secondQuestionName"
              className="csswrongTwo2"
            />
            <span className="showWrongIcon cssWrongAnswerTwo2">
              to add color to html element <CancelIcon className="cancelIcon" />
            </span>
            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 3
            </h5>
            <p className="clickHere">why do we use Css ?</p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="thirdQuestionName"
              className="cssQuestionThree"
            />
            <span className="cssAnswerThree">
              to make our website looks beautiful
              <DoneIcon className="doneIcon" />
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="thirdQuestionName"
              className="csswrongThree1"
            />
            <span className="showWrongIcon cssWrongAnswerThree1">
              to make our website more interractive{" "}
              <CancelIcon className="cancelIcon" />
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="thirdQuestionName"
              className="csswrongThree2"
            />
            <span className="showWrongIcon cssWrongAnswerThree2">
              to submit our html form <CancelIcon className="cancelIcon" />
            </span>
            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 4
            </h5>
            <p className="clickHere">
              which of the following used to scale html element's area ?
            </p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="fourthQuestionName"
              className="csswrongFour1"
            />
            <span className="showWrongIcon cssWrongAnswerFour1">
              margin <CancelIcon className="cancelIcon" />
            </span>

            <br />

            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="fourthQuestionName"
              className="csswrongFour2"
            />
            <span className="showWrongIcon cssWrongAnswerFour2">
              text-align <CancelIcon className="cancelIcon" />
            </span>

            <br />

            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="fourthQuestionName"
              className="cssQuestionFour"
            />
            <span className="cssAnswerFour">
              padding <DoneIcon className="doneIcon" />
            </span>

            <br />

            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 5
            </h5>
            <p className="clickHere">
              what is the right format for adding margin-bottom of 20px ?
            </p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="fifthQuestionName"
              className="cssQuestionFive"
            />
            <span className="cssAnswerFive">
              border: 10px 10px 20px 10px <DoneIcon className="doneIcon" />
            </span>

            <br />

            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="fifthQuestionName"
              className="csswrongFive"
            />
            <span className="showWrongIcon cssWrongAnswerFive">
              border: 10px 20px 10px 10px <CancelIcon className="cancelIcon" />
            </span>
            <br />

            <hr />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 6
            </h5>
            <p className="clickHere">why do we use classe and id ?</p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="sixthQuestionName"
              className="cssQuestionSix"
            />
            <span className="cssAnswerSix">
              to specify html elements <DoneIcon className="doneIcon" />
            </span>

            <br />

            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="sixthQuestionName"
              className="csswrongSix"
            />
            <span className="showWrongIcon cssWrongAnswerSix">
              to make our website responsive{" "}
              <CancelIcon className="cancelIcon" />
            </span>
            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 7
            </h5>
            <p className="clickHere">
              what is the highest value the opacity can take ?
            </p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="seventhQuestionName"
              className="cssQuestionSeven"
            />
            <span className="cssAnswerSeven">
              1 <DoneIcon className="doneIcon" />
            </span>

            <br />

            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="seventhQuestionName"
              className="csswrongSeven1"
            />
            <span className="showWrongIcon cssWrongAnswerSeven1">
              10 <CancelIcon className="cancelIcon" />
            </span>

            <br />

            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="seventhQuestionName"
              className="csswrongSeven2"
            />
            <span className="showWrongIcon cssWrongAnswerSeven2">
              100 <CancelIcon className="cancelIcon" />
            </span>

            <br />

            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 8
            </h5>
            <p className="clickHere">
              {" "}
              do we use flexbox when we have html element as a container ?
            </p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="eightQuestionName"
              className="cssQuestionEight"
            />
            <span className="cssAnswerEight">
              yes <DoneIcon className="doneIcon" />
            </span>

            <br />

            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="eightQuestionName"
              className="csswrongEight"
            />
            <span className="showWrongIcon cssWrongAnswerEight">
              no <CancelIcon className="cancelIcon" />
            </span>

            <br />

            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 9
            </h5>
            <p className="clickHere">can i write css code inside html file ?</p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="ninthQuestionName"
              className="cssQuestionNine"
            />
            <span className="cssAnswerNine">
              yes <DoneIcon className="doneIcon" />
            </span>

            <br />

            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="ninthQuestionName"
              className="csswrongNine"
            />
            <span className="showWrongIcon cssWrongAnswerNine">
              no <CancelIcon className="cancelIcon" />
            </span>

            <br />

            <hr />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 10
            </h5>
            <p className="clickHere">
              can we add a multiple of classes to one particular html element ?
            </p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="tenthQuestionName"
              className="cssQuestionTen"
            />
            <span className="cssAnswerTen">
              yes <DoneIcon className="doneIcon" />
            </span>

            <br />

            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="tenthQuestionName"
              className="csswrongTen"
            />
            <span className="showWrongIcon cssWrongAnswerTen">
              no <CancelIcon className="cancelIcon" />
            </span>

            <br />

            <button className="iamDone" onClick={cssCompletedQuiz}>
              i'm Done
            </button>
          </div>
        </div>
        <ContentFooter />
      </div>
    </div>
  );
}
export default Css;
