import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./Css.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
function Css() {
  const [show, hide] = useState(false);
  const [url, setUrl] = useState(window.location.href);
  let history = useHistory();

  //show and hide
  const ShowHide = () => {
    if (!show) {
      document.querySelector(".cssSidebar").style.width = "200px";
      document.querySelector(".cssSidebar ul").style.display = "block";
      document.querySelector(".cssContent").style.opacity = "0.5";
      hide(true);
    } else if (show) {
      document.querySelector(".cssSidebar").style.width = "60px";
      document.querySelector(".cssSidebar ul").style.display = "none";
      document.querySelector(".cssContent").style.opacity = "1";
      hide(false);
    } else {
    }
  };

  window.addEventListener("resize", function () {
    if (window.innerWidth > 871) {
      if (history.push(localStorage.getItem("current")) === "CSS3") {
        document.querySelector(".cssSidebar").style.width = "200px";
        document.querySelector(".cssSidebar ul").style.display = "block";
      }
      if (show) {
        try {
          document.querySelector(".cssSidebar").style.width = "200px";
          document.querySelector(".cssSidebar ul").style.display = "block";
        } catch (error) {}
      }
      if (show && window.innerWidth >= 871) {
        try {
          document.querySelector(".cssContent").style.opacity = "1";
          hide(false);
        } catch (error) {}
      }
    } else if (window.innerWidth <= 871) {
      if (history.push(localStorage.getItem("current")) === "CSS3") {
        document.querySelector(".cssSidebar").style.width = "60px";
        document.querySelector(".cssSidebar ul").style.display = "none";
      }
      if (show && window.innerWidth <= 871) {
        try {
          document.querySelector(".cssContent").style.opacity = "1";
          document.querySelector(".cssSidebar").style.width = "60px";
          document.querySelector(".cssSidebar ul").style.display = "none";
          hide(false);
        } catch (error) {}
      }
    } else {
    }
  });
  let cssQuizScore = 0;
  const cssCompletedQuiz = () => {
    if (document.querySelector(".cssQuestionOne").checked) {
      cssQuizScore++;
    }
    if (document.querySelector(".csswrongOne").checked) {
      document.querySelector(".cssWrongAnswerOne").style.backgroundColor =
        "red";
      document.querySelector(".cssAnswerOne").style.backgroundColor = "green";
    }

    if (document.querySelector(".cssQuestionTwo").checked) {
      cssQuizScore++;
    }
    if (document.querySelector(".csswrongTwo1").checked) {
      document.querySelector(".cssWrongAnswerTwo1").style.backgroundColor =
        "red";
      document.querySelector(".cssAnswerTwo").style.backgroundColor = "green";
    }
    if (document.querySelector(".csswrongTwo2").checked) {
      document.querySelector(".cssWrongAnswerTwo2").style.backgroundColor =
        "red";
      document.querySelector(".cssAnswerTwo").style.backgroundColor = "green";
    }
    if (document.querySelector(".cssQuestionThree").checked) {
      cssQuizScore++;
    }
    if (document.querySelector(".csswrongThree1").checked) {
      document.querySelector(".cssWrongAnswerThree1").style.backgroundColor =
        "red";
      document.querySelector(".cssAnswerThree").style.backgroundColor = "green";
    }
    if (document.querySelector(".csswrongThree2").checked) {
      document.querySelector(".cssWrongAnswerThree2").style.backgroundColor =
        "red";
      document.querySelector(".cssAnswerThree").style.backgroundColor = "green";
    }
    if (document.querySelector(".cssQuestionFour").checked) {
      cssQuizScore++;
    }
    if (document.querySelector(".csswrongFour1").checked) {
      document.querySelector(".cssWrongAnswerFour1").style.backgroundColor =
        "red";
      document.querySelector(".cssAnswerFour").style.backgroundColor = "green";
    }
    if (document.querySelector(".csswrongFour2").checked) {
      document.querySelector(".cssWrongAnswerFour2").style.backgroundColor =
        "red";
      document.querySelector(".cssAnswerFour").style.backgroundColor = "green";
    }
    if (document.querySelector(".cssQuestionFive").checked) {
      cssQuizScore++;
    }
    if (document.querySelector(".csswrongFive").checked) {
      document.querySelector(".cssWrongAnswerFive").style.backgroundColor =
        "red";
      document.querySelector(".cssAnswerFive").style.backgroundColor = "green";
    }
    if (document.querySelector(".cssQuestionSix").checked) {
      cssQuizScore++;
    }
    if (document.querySelector(".csswrongSix").checked) {
      document.querySelector(".cssWrongAnswerSix").style.backgroundColor =
        "red";
      document.querySelector(".cssAnswerSix").style.backgroundColor = "green";
    }

    if (document.querySelector(".cssQuestionSeven").checked) {
      cssQuizScore++;
    }
    if (document.querySelector(".csswrongSeven1").checked) {
      document.querySelector(".cssWrongAnswerSeven1").style.backgroundColor =
        "red";
      document.querySelector(".cssAnswerSeven").style.backgroundColor = "green";
    }
    if (document.querySelector(".csswrongSeven2").checked) {
      document.querySelector(".cssWrongAnswerSeven2").style.backgroundColor =
        "red";
      document.querySelector(".cssAnswerSeven").style.backgroundColor = "green";
    }
    if (document.querySelector(".cssQuestionEight").checked) {
      cssQuizScore++;
    }
    if (document.querySelector(".csswrongEight").checked) {
      document.querySelector(".cssWrongAnswerEight").style.backgroundColor =
        "red";
      document.querySelector(".cssAnswerEight").style.backgroundColor = "green";
    }
    if (document.querySelector(".cssQuestionNine").checked) {
      cssQuizScore++;
    }
    if (document.querySelector(".csswrongNine").checked) {
      document.querySelector(".cssWrongAnswerNine").style.backgroundColor =
        "red";
      document.querySelector(".cssAnswerNine").style.backgroundColor = "green";
    }

    if (document.querySelector(".cssQuestionTen").checked) {
      cssQuizScore++;
    }
    if (document.querySelector(".csswrongTen").checked) {
      document.querySelector(".cssWrongAnswerTen").style.backgroundColor =
        "red";
      document.querySelector(".cssAnswerTen").style.backgroundColor = "green";
    }

    $(".cssScore").text("your score is " + cssQuizScore);
    return $(".cssModal").show();
  };

  const hideModal = () => {
    $(".cssModal").hide();
    cssQuizScore = 0;
  };

  const refleshCurrentPage = () => {
    $(".third").addClass("active");
    if (show && window.innerWidth < 871) {
      document.querySelector(".cssSidebar").style.width = "60px";
      document.querySelector(".cssSidebar ul").style.display = "none";
      document.querySelector(".cssContent").style.opacity = "1";
      hide(false);
    }
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
      <div className="cssModal">
        <CloseIcon className="closeModal" onClick={hideModal} />
        <p className="cssScore"></p>
      </div>
      <div className="cssSidebar">
        <DehazeIcon onClick={ShowHide} className="showSideBar" />
        <ul>
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
          <a onClick={refleshCurrentPage} href="#grid">
            <li>Grid</li>
          </a>
          <a onClick={refleshCurrentPage} href="#animation">
            <li>Animation</li>
          </a>
          <a onClick={refleshCurrentPage} href="#mediaQuery">
            <li>Media Query</li>
          </a>
          <a onClick={refleshCurrentPage} href="#cssExercises">
            <li>Exercises</li>
          </a>
          <a onClick={refleshCurrentPage} href="#cssQuiz">
            <li>Quiz</li>
          </a>
        </ul>
      </div>
      <div className="cssContent">
        <div id="introduction">
          <h3>Introduction</h3>
          <p>
            CSS stands for <b>C</b>ascading <b>S</b>tyle <b>S</b>heet , actually
            you can make a website using only HTML, you that wibsite will look
            terrible, this is when CSS comes in, it makes your website awesome
            by adding Colors and Controlling the element's possition...etc.{" "}
            <br />
            So, the bottom line is you should add Some Styling to your Web
            Page(s) to make it looks Beautiful and Attractive.
          </p>
          <p>
            <b>Instruction :</b> Actually you can write Css code in the same
            file where you write html code (inside html file), but it will be
            better if you create a separated CSS file. <br />
            So, here is how to create CSS file and link it to your HTML file{" "}
            <a onClick={refleshCurrentPage} href="#">
              click here
            </a>
          </p>
          <p>
            So,one more thing : if you feel distructed with css property, try
            read them one by one in examples. Good Luck
          </p>
        </div>
        <div id="color">
          <h3>color</h3>
          <p>
            color is the most useful css Property in every website, So here is
            how to add color to a particular html element.
          </p>
          <div className="colors__code">
            <div readOnly className="colors__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">h1</span>&gt; this is h1 &lt;
                <span className="tag">/h1</span>&gt; <br />
                &lt;<span className="tag">p</span>&gt; this is p &lt;
                <span className="tag">/p</span>&gt; <br />
              </div>
              <div className="css__code">
                <h3>in css file</h3>
                <span className="cssTag">h1</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">red</span>; <br /> &#125; <br />
                <span className="cssTag">p</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br /> &#125; <br />
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="colors__output">
              <h1 style={{ color: "red" }}>this is h1</h1>
              <h1 style={{ color: "blue" }}>this is p</h1>
            </div>
          </div>
          <p>
            but if you have a bunch of &lt;h2&gt; tags in your web page, So,
            this style will be executed on all of them. as you can see below.
          </p>
          <div className="colors__code">
            <div readOnly className="colors__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">h1</span>&gt; this is h1 &lt;
                <span className="tag">/h1</span>&gt; <br />
                &lt;<span className="tag">h1</span>&gt; this is h1 &lt;
                <span className="tag">/h1</span>&gt; <br />
                &lt;<span className="tag">h1</span>&gt; this is h1 &lt;
                <span className="tag">/h1</span>&gt; <br />
                &lt;<span className="tag">p</span>&gt; this is p &lt;
                <span className="tag">/p</span>&gt; <br />
              </div>
              <div className="css__code">
                <h3>in css file</h3>
                <span className="cssTag">h1</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">red</span>; <br /> &#125; <br />
                <span className="cssTag">p</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br /> &#125; <br />
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="colors__output">
              <h1 style={{ color: "red" }}>this is h1</h1>
              <h1 style={{ color: "red" }}>this is h1</h1>
              <h1 style={{ color: "red" }}>this is h1</h1>
              <p style={{ color: "blue" }}>this is p</p>
            </div>
          </div>
          <p>
            So, if you don't want that happens, and you want to apply a
            particular style to each of them, in this case you Should use what
            is called <b>class</b> or <b>id</b> or you can use both of them.{" "}
            <br />
            let's try it out.
          </p>
          <div className="colors__code">
            <div readOnly className="colors__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">h1</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">firstH1</span>&gt; this is h1 &lt;
                <span className="tag">/h1</span>&gt; <br />
                &lt;<span className="tag">h1</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">secondH1</span>&gt; this is h1 &lt;
                <span className="tag">/h1</span>&gt; <br />
                &lt;<span className="tag">h1</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">thirdH1</span>&gt; this is h1 &lt;
                <span className="tag">/h1</span>&gt; <br />
                &lt;<span className="tag">p</span>&gt; this is p &lt;
                <span className="tag">/p</span>&gt; <br />
                &lt;<span className="tag">h1</span>{" "}
                <span className="idProperty">id</span>=
                <span className="idValue">secondP</span>&gt; this is p &lt;
                <span className="tag">/h1</span>&gt; <br />
              </div>
              <div className="css__code">
                <h3>in css file</h3>
                <span className="cssTag">.firstH1</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">red</span>; <br /> &#125; <br />
                <span className="cssTag">.secondH2</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">green</span>; <br /> &#125; <br />
                <span className="cssTag">.thirdH3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">purple</span>; <br /> &#125; <br />
                <span className="cssTag">p</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br /> &#125; <br />
                <span className="cssTag">#secondP</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">orange</span>; <br /> &#125; <br />
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="colors__output">
              <h1 style={{ color: "red" }}>this is h1</h1>
              <h1 style={{ color: "green" }}>this is h1</h1>
              <h1 style={{ color: "purple" }}>this is h1</h1>
              <p>this is p</p>
              <p style={{ color: "orange" }}>this is p</p>
            </div>
          </div>
          <p>
            So,as you can see, when we add class or id properties, we can take
            controle of the duplicated tag's styling. <br />
            You may wonder, what is the differences between these properties,and
            when do we use <b>class</b> instead of <b>id</b> or the opposite ?!{" "}
            <br />
            don't worry, you will find a video explain that{" "}
            <a onClick={refleshCurrentPage} href="#">
              here
            </a>
            , but don't watch it unless you complete the other properties.
            <p>
              <b>Important</b> : don't forget to add <b>.</b> before class name
              in css file and <b>#</b> before id name.
            </p>
          </p>
        </div>
        <div id="background">
          <h3>background</h3>
          <p>
            we often use background property in headear to highlight it, to make
            your website's sections more clearly for users.
          </p>
          <div className="background__code">
            <div readOnly className="background__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &lt;<span className="tag">div</span>&gt; this is div &lt;
                <span className="tag">/div</span>&gt; <br />
                &lt;<span className="tag">div</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">secondDiv</span>
                &gt; this is div &lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="css__code">
                <h3>in css file</h3>
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">red</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">orange</span>; <br /> &#125; <br />
                <span className="cssTag">div</span>&#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">aqua</span>; <br /> &#125; <br />
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">white</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">purple</span>; <br /> &#125; <br />
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="background__output">
              <h3 style={{ color: "red", backgroundColor: "orange" }}>
                this is h3
              </h3>
              <div style={{ backgroundColor: "aqua" }}>this is p</div>
              <div style={{ color: "white", backgroundColor: "purple" }}>
                this is p
              </div>
            </div>
          </div>
        </div>
        <div id="width">
          <h3>width</h3>
          <p>
            there are many ways to add width to aparticular html tag, but we
            will discuss about two ways
            <ol style={{ marginLeft: "50px" }}>
              <li>using px unit</li>
              <li>using % unit</li>
              <li>using vw unit</li>
            </ol>
          </p>
          <div className="width__code">
            <div readOnly className="width__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &lt;<span className="tag">div</span>&gt; this is div1 &lt;
                <span className="tag">/div</span>&gt; <br />
                &lt;<span className="tag">div</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">secondDiv</span>
                &gt; this is div2 &lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="css__code">
                <h3>in css file</h3>
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">red</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">orange</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">100px</span>; <br /> &#125; <br />
                <span className="cssTag">div</span>&#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">aqua</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">50%</span>; <br /> &#125; <br />
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">white</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">purple</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">10vw</span>; <br /> &#125; <br />
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="width__output">
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
          <p>
            As you can see, when we typed <b>10vw</b> it takes 10% of the whole
            web page. because the right width of our page is <b>100vw</b>.{" "}
            <br />
            and when we typed <b>50%</b> for the first div tag, it takes a half
            of the container.
          </p>
        </div>
        <div id="height">
          <h3>height</h3>
          <p>
            height is the same way as width, we can use the following units :
            <ol style={{ marginLeft: "50px" }}>
              <li>using px unit</li>
              <li>using % unit</li>
              <li>using vh unit</li>
            </ol>
          </p>
          <div className="height__code">
            <div readOnly className="height__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &lt;<span className="tag">div</span>&gt; this is div1 &lt;
                <span className="tag">/div</span>&gt; <br />
                &lt;<span className="tag">div</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">secondDiv</span>
                &gt; this is div2 &lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="css__code">
                <h3>in css file</h3>
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">red</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">orange</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">100px</span>; <br /> &#125; <br />
                <span className="cssTag">div</span>&#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">aqua</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">50%</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;height</span>:{" "}
                <span className="cssValue">100px</span>; <br />
                &#125; <br />
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">white</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">purple</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">10vw</span>; <br /> &#125; <br />
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="height__output">
              <h3
                style={{
                  color: "red",
                  backgroundColor: "orange",
                  width: "100px",
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
                }}
              >
                this is div2
              </div>
            </div>
          </div>
        </div>
        <div id="margin">
          <h3>margin</h3>
          <p>
            we can use margin to separate between elements iwth space. <br />
            we will apply margin on the same html elements above.
          </p>
          <div className="margin__code">
            <div readOnly className="margin__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &lt;<span className="tag">div</span>&gt; this is div1 &lt;
                <span className="tag">/div</span>&gt; <br />
                &lt;<span className="tag">div</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">secondDiv</span>
                &gt; this is div2 &lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="css__code">
                <h3>in css file</h3>
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
                &#125; <br />
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
                &#125; <br />
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
                &#125; <br />
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="margin__output">
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
          <p>
            As you can see, when we add margin property with 20px value to the
            first element, it creates some space between this element and the
            element arrond it. <br />
            and when we add margin-left with auto value to the second element,
            that makes the the item slides to the right side, cause when you add
            margin-(left or right or top or bottom), that makes the item slide
            to the opposite side. <br />
            <b>Note : </b> you can customize the margin format as following :{" "}
            <br />
            margin : 10px 20px 30px 40px; <br /> So that : <br />
            <ul style={{ marginLeft: "50px" }}>
              <li>10px represents margin-top</li>
              <li>20px represents margin-right</li>
              <li>30px represents margin-bottom</li>
              <li>40px represents margin-left</li>
            </ul>
            you can also write as the following : <br />
            margin : 10px 20px; <br /> So that : <br />
            <ul style={{ marginLeft: "50px" }}>
              <li>10px represents margin-top and margin-bottom</li>
              <li>20px represents margin-right and margin-left</li>
            </ul>
          </p>
        </div>
        <div id="padding">
          <h3>padding</h3>
          <p>
            padding property allows you to scale your element area, and you can
            write it the exact same as margin (padding-top,padding-right....)
          </p>
          <div className="padding__code">
            <div readOnly className="padding__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &lt;<span className="tag">div</span>&gt; this is div1 &lt;
                <span className="tag">/div</span>&gt; <br />
                &lt;<span className="tag">div</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">secondDiv</span>
                &gt; this is div2 &lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="css__code">
                <h3>in css file</h3>
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
                &#125; <br />
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
                &#125; <br />
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
                &#125; <br />
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="padding__output">
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
          <p>
            As you can see, padding is the same thing as margin, the only
            difference between them is that marging makes space arrond the
            element when padding scale the element's area.
          </p>
        </div>
        <div id="border">
          <h3>border</h3>
          <p>
            border property allows you to set a border of a particular element.
            you can also specify wich side you want to add border to
            (border-top,border-left,border-bottom,border-right)
          </p>
          <div className="border__code">
            <div readOnly className="border__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &lt;<span className="tag">div</span>&gt; this is div1 &lt;
                <span className="tag">/div</span>&gt; <br />
                &lt;<span className="tag">div</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">secondDiv</span>
                &gt; this is div2 &lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="css__code">
                <h3>in css file</h3>
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
                &#125; <br />
                <span className="cssTag">div</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">50%</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;border</span>:{" "}
                <span className="cssValue">5px solid purple</span>; <br />
                &#125; <br />
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">10vw</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;border-bottom
                </span>: <span className="cssValue">8px solid red</span>; <br />
                &#125; <br />
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="border__output">
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
          <p>
            the first value of border property (2px) refers to a border size,
            the second (solid) refers to a border style (you can also type
            (dotted,dashed,double...)), and the last one refers to a border
            color.
          </p>
        </div>
        <div id="comment">
          <h3>comment</h3>
          <p>
            As i mentioned before in HTML section, comments don't get executed.
          </p>
          <div className="comment__code">
            <div readOnly className="comment__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &lt;<span className="tag">div</span>&gt; this is div1 &lt;
                <span className="tag">/div</span>&gt; <br />
                &lt;<span className="tag">div</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">secondDiv</span>
                &gt; this is div2 &lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="css__code">
                <h3>in css file</h3>
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">10vw</span>; <br />
                /*<span className="cssProperty">&nbsp;&nbsp;border-bottom</span>
                : <span className="cssValue">8px solid red</span>;&nbsp;*/{" "}
                <br />
                &#125; <br />
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="comment__output">
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
          <p>
            As you can see, when we wrapped the last property in css with
            comment token (/* property */), it's no longer applied.
          </p>
        </div>
        <div id="textAlign">
          <h3>text-align</h3>
          <p>
            We can take controle of element's text position, through align-text
            property.
          </p>
          <div className="textAlign__code">
            <div readOnly className="textAlign__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &lt;<span className="tag">div</span>&gt; this is div1 &lt;
                <span className="tag">/div</span>&gt; <br />
                &lt;<span className="tag">div</span>{" "}
                <span className="classProperty">class</span>=
                <span className="classValue">secondDiv</span>
                &gt; this is div2 &lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="css__code">
                <h3>in css file</h3>
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
                &#125; <br /> <span className="cssTag">div</span>&#123; <br />{" "}
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
                &#125; <br />
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
                &#125; <br />
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="textAlign__output">
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
          <p>
            As you can see, when we add text-align:start nothing changes,
            because this is the default value of text-align.
          </p>
        </div>
        <div id="position">
          <h3>position</h3>
          <p>
            we can take controle of element's position using defferent ways.
            such as transform,position...etc. So, we won't explain that in this
            section, cause we need the entire web page, So, to learn it click{" "}
            <a onClick={refleshCurrentPage} href="#">
              Here
            </a>
          </p>
        </div>
        <div id="opacity">
          <h3>opacity</h3>
          <p>
            opacity property allows us to take controle of opacity/transparency
            of html element. opacity property can take value from 0 to 1
            (includes 0.1,0.2,...,0.9)
          </p>
          <div className="opacity__code">
            <div readOnly className="opacity__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &lt;<span className="tag">div</span>&gt; this is div &lt;
                <span className="tag">/div</span>&gt; <br />
                &lt;<span className="tag">img</span>{" "}
                <span className="classProperty">src</span>=
                <span className="classValue">
                  "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                </span>
                <span className="tag">/</span>&gt; <br />
              </div>
              <div className="css__code">
                <h3>in css file</h3>
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
                &#125; <br />
                <span className="cssTag">img</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;width</span>:{" "}
                <span className="cssValue">100px</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;height</span>:{" "}
                <span className="cssValue">100px</span>;&nbsp; <br />
                <span className="cssProperty">&nbsp;&nbsp;opacity</span>:{" "}
                <span className="cssValue">0.6</span>;&nbsp; <br />
                &#125; <br />
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="opacity__output">
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
          <p>
            As you can see, when we add <b>opacity : 0</b> to a div tag, it
            disapeared, actually it's existed but not visual.
          </p>
        </div>
        <div id="font">
          <h3>font</h3>
          <p>
            font means the element's text, we can add a bunch of effects to this
            font in addition to color.
          </p>
          <div className="font__code">
            <div readOnly className="font__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &lt;<span className="tag">div</span>&gt; this is div &lt;
                <span className="tag">/div</span>&gt; <br />
                &lt;<span className="tag">div</span>{" "}
                <span className="classProperty"> class=</span>
                <span className="classValue">"secondDiv"</span> &gt; this is
                div2 &lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="css__code">
                <h3>in css file</h3>
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;font-style</span>:{" "}
                <span className="cssValue">italic</span>; <br />
                &#125; <br />
                <span className="cssTag">div</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;font-size</span>:{" "}
                <span className="cssValue">40px</span>; <br />
                &#125; <br />
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">purple</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;font-weight
                </span>: <span className="cssValue">800</span>; <br />
                &#125;
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="font__output">
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
          <p>
            As you can see, <b>font-style : italic</b> makes the font diagonal,
            and <b>font-weight : 800</b> makes font bold (you can use 500 to
            800), and <b>font-size : 40px</b> makes font bigger. there is
            another useful one, it's <b>font-family</b> you can check out by
            typing <b>google fonts</b> in search bar.
          </p>
        </div>
        <div id="hover">
          <h3>hover</h3>
          <p>
            we use hover, when the mouses hover over an element, So that we can
            add an effect to the element.
          </p>
          <div className="font__code">
            <div readOnly className="font__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
              </div>
              <div className="css__code">
                <h3>in css file</h3>
                <span className="cssTag">h3</span>
                &#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp; background-color
                </span>
                : <span className="cssValue">red</span>; <br />
                &#125; <br />
                <span className="cssTag">h3</span>
                <span className="cssTag">:hover</span>&#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp; background-color
                </span>
                : <span className="cssValue">blue</span>; <br />
                &#125; <br />
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="font__output">
              <h3 className="h3Hover">this is h3</h3>
            </div>
          </div>
          <p>
            try hover over the element, then you will see that the element's
            background-color changes to blue.
          </p>
        </div>
        <div id="transition">
          <h3>transition</h3>
          <p>
            transition property related to hover, So that when we hover over an
            element, we can take controle of effect duration through transition
            property.
          </p>
          <div className="font__code">
            <div readOnly className="font__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
              </div>
              <div className="css__code">
                <h3>in css file</h3>
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
                &#125; <br />
                <span className="cssTag">h3</span>
                <span className="cssTag">:hover</span>&#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp; background-color
                </span>
                : <span className="cssValue">blue</span>; <br />
                &#125; <br />
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="font__output">
              <h3 className="h3Transition">this is h3</h3>
            </div>
          </div>
          <p>
            As you can see, when we hover over an element, it takes 1s to
            completely apply the effect (changing background-color). you can
            apply transition on every property inside hover event, you should
            only write the property name in front of transition property. <br />
            <b>Note : </b>you can make as much as you can of transitions, just
            add comma(,) between each transition. <br />
            for Example : <br />
            <b>
              element &#123; <br /> transition : color 2s , background-color 2s;
              <br /> &#125; <br />
              element:hover &#123; <br /> color : white; <br /> background-color
              : blue; <br /> &#125;
            </b>
          </p>
        </div>
        <br />
        <div id="flexbox">
          <h3>flexbox</h3>
          <p>
            flexbox is considered as the most useful and powerful concept in web
            development. it helps you a lot to make a responsive website
            (website fits all devices (desktop, mobile, tablet)). <br />
            So now we are going to be talking about the most useful properties
            in flexbox.
            <b>Note : </b> this properties applied on container tag. as the
            following.
          </p>
          <h4>display property</h4>
          <div className="flexbox__code">
            <div readOnly className="flexbox__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">div</span>
                <span className="classProperty"> class=</span>
                <span className="classValue">"container"</span>&gt; <br />
                <br />
                &lt;
                <span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &lt;<span className="tag">div</span>&gt; this is div &lt;
                <span className="tag">/div</span>&gt; <br />
                &lt;<span className="tag">div</span>{" "}
                <span className="classProperty"> class=</span>
                <span className="classValue">"secondDiv"</span> &gt; this is
                div2 &lt;
                <span className="tag">/div</span>&gt; <br />
                <br />
                &lt;<span className="tag">/div</span>&gt;
              </div>
              <div className="css__code">
                <h3>in css file</h3>
                <span className="cssTag">.container</span>&#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">gray</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;display</span>:{" "}
                <span className="cssValue">flex</span>; <br />
                &#125; <br />
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;font-style</span>:{" "}
                <span className="cssValue">italic</span>; <br />
                &#125; <br />
                <span className="cssTag">div</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br />
                &#125; <br />
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">purple</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;font-weight
                </span>: <span className="cssValue">800</span>; <br />
                &#125; <br />
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="flexbox__output">
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
          <p>
            when we set flex as a value of display property to a container, that
            concatenates all the elements inside this container in one line.{" "}
          </p>
          <h4>justify-content property</h4>
          <div className="flexbox__code">
            <div readOnly className="flexbox__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">div</span>
                <span className="classProperty"> class=</span>
                <span className="classValue">"container"</span>&gt; <br />
                <br />
                &lt;
                <span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &lt;<span className="tag">div</span>&gt; this is div &lt;
                <span className="tag">/div</span>&gt; <br />
                &lt;<span className="tag">div</span>{" "}
                <span className="classProperty"> class=</span>
                <span className="classValue">"secondDiv"</span> &gt; this is
                div2 &lt;
                <span className="tag">/div</span>&gt; <br />
                <br />
                &lt;<span className="tag">/div</span>&gt;
              </div>
              <div className="css__code">
                <h3>in css file</h3>
                <span className="cssTag">.container</span>&#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">gray</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;display</span>:{" "}
                <span className="cssValue">flex</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;justyfy-content</span>
                : <span className="cssValue">space-between</span>; <br />
                &#125; <br />
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;font-style</span>:{" "}
                <span className="cssValue">italic</span>; <br />
                &#125; <br />
                <span className="cssTag">div</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br />
                &#125; <br />
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">purple</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;font-weight
                </span>: <span className="cssValue">800</span>; <br />
                &#125; <br />
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="flexbox__output">
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
          <p>
            you can also set <b>space-around ans space-evenly and center</b>{" "}
            values. try it out to see the difference.{" "}
          </p>
          <h4>align-items property</h4>
          <div className="flexbox__code">
            <div readOnly className="flexbox__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">div</span>
                <span className="classProperty"> class=</span>
                <span className="classValue">"container"</span>&gt; <br />
                <br />
                &lt;
                <span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &lt;<span className="tag">div</span>&gt; this is div &lt;
                <span className="tag">/div</span>&gt; <br />
                &lt;<span className="tag">div</span>{" "}
                <span className="classProperty"> class=</span>
                <span className="classValue">"secondDiv"</span> &gt; this is
                div2 &lt;
                <span className="tag">/div</span>&gt; <br />
                <br />
                &lt;<span className="tag">/div</span>&gt;
              </div>
              <div className="css__code">
                <h3>in css file</h3>
                <span className="cssTag">.container</span>&#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">gray</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;display</span>:{" "}
                <span className="cssValue">flex</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;justyfy-content</span>
                : <span className="cssValue">space-between</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;align-items
                </span>: <span className="cssValue">center</span>; <br />
                &#125; <br />
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;font-style</span>:{" "}
                <span className="cssValue">italic</span>; <br />
                &#125; <br />
                <span className="cssTag">div</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">blue</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp;height</span>:{" "}
                <span className="cssValue">50px</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;background-color
                </span>
                : <span className="cssValue">red</span>; <br />
                &#125; <br />
                <span className="cssTag">.secondDiv</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;color</span>:{" "}
                <span className="cssValue">purple</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp;font-weight
                </span>: <span className="cssValue">800</span>; <br />
                &#125; <br />
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="flexbox__output">
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
                    height: "50px",
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
          <p>
            As you can see, when i add <b>align-items : center</b>, that
            centered all items inside, <br />
            you may not understand this, So try to set <b>start or end</b> as a
            value of align-items, then you will figure out the difference.
          </p>
          <h4>flex property</h4>
          <div className="flexbox__code">
            <div readOnly className="flexbox__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">div</span>
                <span className="classProperty"> class=</span>
                <span className="classValue">"container"</span>&gt; <br />
                <br />
                &lt;
                <span className="tag">h3</span>
                &gt; this is h3 &lt;
                <span className="tag">/h3</span>&gt; <br />
                &lt;<span className="tag">div</span>&gt; this is div &lt;
                <span className="tag">/div</span>&gt; <br />
                &lt;<span className="tag">div</span>{" "}
                <span className="classProperty"> class=</span>
                <span className="classValue">"secondDiv"</span> &gt; this is
                div2 &lt;
                <span className="tag">/div</span>&gt; <br />
                <br />
                &lt;<span className="tag">/div</span>&gt;
              </div>
              <div className="css__code">
                <h3>in css file</h3>
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
                &#125; <br />
                <span className="cssTag">h3</span>&#123; <br />{" "}
                <span className="cssProperty">&nbsp;&nbsp;flex</span>:{" "}
                <span className="cssValue">1</span>; <br />
                &#125; <br />
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="flexbox__output">
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
          <p>
            As you can see, when we add <b>flex : 1</b> to a particular element,
            the right side elements get pushed completely to the right
          </p>
        </div>
        <div id="grid">
          <h3>grid</h3>
          <p>
            Grid is very similar to flexbox, but it's more confused that's why
            we prefer to explain that in a video, to make things much clear for
            you. <br />
            So, click <a href="">here</a> and good luck.
          </p>
        </div>
        <div id="animation">
          <h3>animation</h3>
          <p>
            You, as a web designer you must be aware of animation in css,
            actually it makes your website looks beautiful. <br />
            So, when we talk about animation in css, we also talk about{" "}
            <b>keyframes</b> <br /> don't worry, everything will be easy for you
            in this example.
          </p>
          <div className="animation__code">
            <div readOnly className="animation__input" name="" id="">
              <div className="html__code">
                <h3>in html file</h3>
                &lt;<span className="tag">div</span>
                <span className="classProperty"> class=</span>
                <span className="classValue">"container" </span>
                &gt; <br /> <br />
                &lt;<span className="tag">div</span>
                <span className="classProperty"> class=</span>
                <span className="classValue">"child" </span>&gt; &lt;
                <span className="tag">/div</span>&gt; <br /> <br />
                &lt;
                <span className="tag">/div</span>&gt; <br />
              </div>
              <div className="css__code">
                <h3>in css file</h3>
                <span className="cssTag">.container</span>
                &#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp; background-color
                </span>
                : <span className="cssValue">red</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp; width</span>:{" "}
                <span className="cssValue">150px</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp; height</span>:{" "}
                <span className="cssValue">150px</span>; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp; animation
                </span>: <span className="cssValue">animate 4s infinite</span>;{" "}
                <br />
                &#125; <br />
                <span className="cssTag">.child</span>
                &#123; <br />{" "}
                <span className="cssProperty">
                  &nbsp;&nbsp; background-color
                </span>
                : <span className="cssValue">blue</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp; width</span>:{" "}
                <span className="cssValue">30px</span>; <br />
                <span className="cssProperty">&nbsp;&nbsp; height</span>:{" "}
                <span className="cssValue">30px</span>; <br />
                &#125; <br /> <br />
                <span className="keyframes">@keyframes </span>
                <span className="animation__name">animate </span> &#123; <br />
                <span className="keyframes__percent">25%</span>&#123; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp; transform
                </span>: <span className="cssValue">translate</span>(0,120px);{" "}
                <br />
                <span className="keyframes__percent">50%</span>&#123; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp; transform
                </span>: <span className="cssValue">translate</span>
                (120px,120px); <br />
                <span className="keyframes__percent">75% </span>&#123; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp; transform
                </span>: <span className="cssValue">translate</span>(120px,0);{" "}
                <br />
                <span className="keyframes__percent">100% </span>&#123; <br />
                <span className="cssProperty">
                  &nbsp;&nbsp; transform
                </span>: <span className="cssValue">translate</span>(0,0);{" "}
                <br />
              </div>
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="animation__output">
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
                  }}
                ></div>
              </div>
            </div>
          </div>
          <p>
            So, let's talk about what heppens inside keyframes : <br />
            So when our animation reach 25% ,at this moment translate(X,Y) get
            applied (X mention to horizontal line , Y mention to vertical line).
            So the same thing as 50% ,75% and 100%(the end of animation). <br />{" "}
            <br />
            add the following in child css :{" "}
            <span style={{ color: "blue" }}>
              animation : animate 4s infinite
            </span>{" "}
            So that : <br />
            <b>
              <span style={{ color: "red" }}>animation</span> represents
              property <br />
              <span style={{ color: "red" }}>animate</span> represents the
              animation name (in front of keyframes) <br />
              <span style={{ color: "red" }}>4s</span> represents the animation
              duration <br />
              <span style={{ color: "red" }}>infinite</span> makes our animation
              unstoppable <br />
            </b>
            if you didn't understand click <a href="">here</a>.
          </p>
        </div>
        <div id="mediaQuery">
          <h3>media Query</h3>
          <p>
            keep in mind, every website on the internet is responsive. <br />
            So, if you want to earn money from your website and get paid from
            google adsense, your website must be responsive. this is where{" "}
            <b>Media Query</b> comes in. So, we can't explain that here, you may
            get confused here. <br />
            this is why a made a video explains that. click <a href="">here</a>.
          </p>
        </div>
        <p>
          Don't be limited to these Exercises, try out more because{" "}
          <b>Practice makes perfect</b>.
        </p>
        <div id="cssExercises">
          <h3 style={{ textAlign: "start", width: "100%" }}>Exercises :</h3>
          <div className="css__exercise">
            <h1 style={{ color: "white", textAlign: "center", margin: "5px" }}>
              Login form{" "}
            </h1>
            <div style={{ color: "white", margin: "5px" }}>Email :</div>
            <input
              type="email"
              placeholder="Email..."
              style={{
                border: "none",
                outline: "none",
                padding: "5px",
                margin: "5px",
              }}
            />
            <div style={{ color: "white", margin: "5px" }}>Password :</div>
            <input
              type="text"
              placeholder="Password..."
              style={{
                border: "none",
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
          <div className="css__exercise">
            <h1 style={{ color: "white", textAlign: "center", margin: "5px" }}>
              Sign up
            </h1>
            <form action="">
              <table style={{ margin: "5px" }}>
                <tr>
                  <td style={{ padding: "5px 0" }} style={{ color: "white" }}>
                    First Name{" "}
                  </td>
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
                  <td style={{ padding: "5px 0" }} style={{ color: "white" }}>
                    Last Name{" "}
                  </td>
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
                  <td style={{ padding: "5px 0" }} style={{ color: "white" }}>
                    Email{" "}
                  </td>
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
                  <td style={{ padding: "5px 0" }} style={{ color: "white" }}>
                    password{" "}
                  </td>
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
                  <td style={{ padding: "5px 0" }} style={{ color: "white" }}>
                    Verify Password
                  </td>
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
                  <td style={{ padding: "5px 0" }} style={{ color: "white" }}>
                    Country{" "}
                  </td>
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
                  <td style={{ padding: "5px 0" }} style={{ color: "white" }}>
                    Gender{" "}
                  </td>
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
            </form>
          </div>
        </div>
        <div id="cssQuiz">
          <p>
            <b>Note : </b> Make sure that you have read the introduction of
            every Concept we discussed about above before you start this Quiz.
          </p>
          <p>
            So, when you complete all of these questions, click on{" "}
            <b>i'm Done</b> button to display the result immediately.
          </p>
          <div className="cssQuiz__content">
            <h5>Question 1</h5>
            <p>is Css a programming language ?</p>
            <input
              type="radio"
              name="firstQuestionName"
              className="csswrongOne"
            />
            <span className="cssWrongAnswerOne">yes</span>
            <br />
            <input
              type="radio"
              name="firstQuestionName"
              className="cssQuestionOne"
            />
            <span className="cssAnswerOne">no</span>

            <br />
            <hr />
            <h5>Question 2</h5>
            <p>why do we use Media Query ?</p>
            <input
              type="radio"
              name="secondQuestionName"
              className="csswrongTwo1"
            />
            <span className="cssWrongAnswerTwo1">
              to make a space between html elements.
            </span>
            <br />
            <input
              type="radio"
              name="secondQuestionName"
              className="cssQuestionTwo"
            />
            <span className="cssAnswerTwo">
              to make our website responsive{" "}
            </span>
            <br />
            <input
              type="radio"
              name="secondQuestionName"
              className="csswrongTwo2"
            />
            <span className="cssWrongAnswerTwo2">
              to add color to html element
            </span>
            <br />
            <hr />
            <h5>Question 3</h5>
            <p>why do we use Css ?</p>
            <input
              type="radio"
              name="thirdQuestionName"
              className="cssQuestionThree"
            />
            <span className="cssAnswerThree">
              to make our website looks beautiful
            </span>
            <br />
            <input
              type="radio"
              name="thirdQuestionName"
              className="csswrongThree1"
            />
            <span className="cssWrongAnswerThree1">
              to make our website more interractive
            </span>
            <br />
            <input
              type="radio"
              name="thirdQuestionName"
              className="csswrongThree2"
            />
            <span className="cssWrongAnswerThree2">
              to submit our html form
            </span>
            <br />
            <hr />
            <h5>Question 4</h5>
            <p>which of the following used to scale html element's area ?</p>
            <input
              type="radio"
              name="fourthQuestionName"
              className="csswrongFour1"
            />
            <span className="cssWrongAnswerFour1">margin</span>
            <br />
            <input
              type="radio"
              name="fourthQuestionName"
              className="csswrongFour2"
            />
            <span className="cssWrongAnswerFour2">text-align</span>
            <br />
            <input
              type="radio"
              name="fourthQuestionName"
              className="cssQuestionFour"
            />
            <span className="cssAnswerFour">padding</span>
            <br />
            <hr />
            <h5>Question 5</h5>
            <p>what is the right format for adding margin-bottom of 20px ?</p>
            <input
              type="radio"
              name="fifthQuestionName"
              className="cssQuestionFive"
            />
            <span className="cssAnswerFive">border: 10px 10px 20px 10px </span>
            <br />
            <input
              type="radio"
              name="fifthQuestionName"
              className="csswrongFive"
            />
            <span className="cssWrongAnswerFive">
              border: 10px 20px 10px 10px{" "}
            </span>
            <br />

            <hr />
            <h5>Question 6</h5>
            <p>why do we use classe and id ?</p>
            <input
              type="radio"
              name="sixthQuestionName"
              className="cssQuestionSix"
            />
            <span className="cssAnswerSix">to specify html elements</span>
            <br />
            <input
              type="radio"
              name="sixthQuestionName"
              className="csswrongSix"
            />
            <span className="cssWrongAnswerSix">
              to make our website responsive
            </span>
            <br />
            <hr />
            <h5>Question 7</h5>
            <p>what is the highest value the opacity can take ?</p>
            <input
              type="radio"
              name="seventhQuestionName"
              className="cssQuestionSeven"
            />
            <span className="cssAnswerSeven">1</span>
            <br />
            <input
              type="radio"
              name="seventhQuestionName"
              className="csswrongSeven1"
            />
            <span className="cssWrongAnswerSeven1">10</span>
            <br />
            <input
              type="radio"
              name="seventhQuestionName"
              className="csswrongSeven2"
            />
            <span className="cssWrongAnswerSeven2">100</span>
            <br />
            <hr />
            <h5>Question 8</h5>
            <p> do we use flexbox when we have html element as a container ?</p>
            <input
              type="radio"
              name="eightQuestionName"
              className="cssQuestionEight"
            />
            <span className="cssAnswerEight">yes </span>
            <br />
            <input
              type="radio"
              name="eightQuestionName"
              className="csswrongEight"
            />
            <span className="cssWrongAnswerEight">no </span>
            <br />
            <hr />
            <h5>Question 9</h5>
            <p>can i write css code inside html file ?</p>
            <input
              type="radio"
              name="ninthQuestionName"
              className="cssQuestionNine"
            />
            <span className="cssAnswerNine">yes </span>
            <br />
            <input
              type="radio"
              name="ninthQuestionName"
              className="csswrongNine"
            />
            <span className="cssWrongAnswerNine">no </span>
            <br />

            <hr />
            <h5>Question 10</h5>
            <p>
              can we add a multiple of classes to one particular html element ?
            </p>
            <input
              type="radio"
              name="tenthQuestionName"
              className="cssQuestionTen"
            />
            <span className="cssAnswerTen">yes </span>
            <br />
            <input
              type="radio"
              name="tenthQuestionName"
              className="csswrongTen"
            />
            <span className="cssWrongAnswerTen">no </span>
            <br />
            <button onClick={cssCompletedQuiz}>i'm Done</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Css;
