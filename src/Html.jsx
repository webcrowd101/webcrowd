import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./Html.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
function Html() {
  const [show, hide] = useState(false);
  let history = useHistory();

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

      hide(false);
    } else {
    }
  };

  window.addEventListener("resize", function () {
    if (window.innerWidth > 871) {
      if (history.push(localStorage.getItem("current")) === "HTML5") {
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
      if (history.push(localStorage.getItem("current")) === "HTML5") {
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
  let htmlQuizScore = 0;
  const htmlCompletedQuiz = () => {
    if (document.querySelector(".htmlQuestionOne").checked) {
      htmlQuizScore++;
    }
    if (document.querySelector(".htmlwrongOne1").checked) {
      document.querySelector(".htmlWrongAnswerOne1").style.backgroundColor =
        "red";
      document.querySelector(".htmlAnswerOne").style.backgroundColor = "green";
    }
    if (document.querySelector(".htmlwrongOne2").checked) {
      document.querySelector(".htmlWrongAnswerOne2").style.backgroundColor =
        "red";
      document.querySelector(".htmlAnswerTwo").style.backgroundColor = "green";
    }
    if (document.querySelector(".htmlQuestionTwo").checked) {
      htmlQuizScore++;
    }
    if (document.querySelector(".htmlwrongTwo1").checked) {
      document.querySelector(".htmlWrongAnswerTwo1").style.backgroundColor =
        "red";
      document.querySelector(".htmlAnswerTwo").style.backgroundColor = "green";
    }
    if (document.querySelector(".htmlwrongTwo2").checked) {
      document.querySelector(".htmlWrongAnswerTwo2").style.backgroundColor =
        "red";
      document.querySelector(".htmlAnswerTwo").style.backgroundColor = "green";
    }
    if (document.querySelector(".htmlQuestionThree").checked) {
      htmlQuizScore++;
    }
    if (document.querySelector(".htmlwrongThree1").checked) {
      document.querySelector(".htmlWrongAnswerThree1").style.backgroundColor =
        "red";
      document.querySelector(".htmlAnswerThree").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".htmlwrongThree2").checked) {
      document.querySelector(".htmlWrongAnswerThree2").style.backgroundColor =
        "red";
      document.querySelector(".htmlAnswerThree").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".htmlQuestionFour").checked) {
      htmlQuizScore++;
    }
    if (document.querySelector(".htmlwrongFour1").checked) {
      document.querySelector(".htmlWrongAnswerFour1").style.backgroundColor =
        "red";
      document.querySelector(".htmlAnswerFour").style.backgroundColor = "green";
    }
    if (document.querySelector(".htmlwrongFour2").checked) {
      document.querySelector(".htmlWrongAnswerFour2").style.backgroundColor =
        "red";
      document.querySelector(".htmlAnswerFour").style.backgroundColor = "green";
    }
    if (document.querySelector(".htmlQuestionFive").checked) {
      htmlQuizScore++;
    }
    if (document.querySelector(".htmlwrongFive").checked) {
      document.querySelector(".htmlWrongAnswerFive").style.backgroundColor =
        "red";
      document.querySelector(".htmlAnswerFive").style.backgroundColor = "green";
    }
    if (document.querySelector(".htmlQuestionSix").checked) {
      htmlQuizScore++;
    }
    if (document.querySelector(".htmlwrongSix").checked) {
      document.querySelector(".htmlWrongAnswerSix").style.backgroundColor =
        "red";
      document.querySelector(".htmlAnswerSix").style.backgroundColor = "green";
    }

    if (document.querySelector(".htmlQuestionSeven").checked) {
      htmlQuizScore++;
    }
    if (document.querySelector(".htmlwrongSeven1").checked) {
      document.querySelector(".htmlWrongAnswerSeven1").style.backgroundColor =
        "red";
      document.querySelector(".htmlAnswerSeven").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".htmlwrongSeven2").checked) {
      document.querySelector(".htmlWrongAnswerSeven2").style.backgroundColor =
        "red";
      document.querySelector(".htmlAnswerSeven").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".htmlQuestionEight").checked) {
      htmlQuizScore++;
    }
    if (document.querySelector(".htmlwrongEight").checked) {
      document.querySelector(".htmlWrongAnswerEight").style.backgroundColor =
        "red";
      document.querySelector(".htmlAnswerEight").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".htmlQuestionNine").checked) {
      htmlQuizScore++;
    }
    if (document.querySelector(".htmlwrongNine1").checked) {
      document.querySelector(".htmlWrongAnswerNine1").style.backgroundColor =
        "red";
      document.querySelector(".htmlAnswerNine").style.backgroundColor = "green";
    }
    if (document.querySelector(".htmlwrongNine2").checked) {
      document.querySelector(".htmlWrongAnswerNine2").style.backgroundColor =
        "red";
      document.querySelector(".htmlAnswerNine").style.backgroundColor = "green";
    }
    if (document.querySelector(".htmlQuestionTen").checked) {
      htmlQuizScore++;
    }
    if (document.querySelector(".htmlwrongTen1").checked) {
      document.querySelector(".htmlWrongAnswerTen1").style.backgroundColor =
        "red";
      document.querySelector(".htmlAnswerTen").style.backgroundColor = "green";
    }
    if (document.querySelector(".htmlwrongTen2").checked) {
      document.querySelector(".htmlWrongAnswerTen2").style.backgroundColor =
        "red";
      document.querySelector(".htmlAnswerTen").style.backgroundColor = "green";
    }
    $(".htmlScore").text("your score is " + htmlQuizScore);
    $(".htmlQuiz__content input").prop("disabled", "false");
    return $(".Modal").show();
  };

  const hideModal = () => {
    $(".Modal").hide();
    htmlQuizScore = 0;
  };

  const refleshCurrentPage = () => {
    $(".second").addClass("active");
    if (show && window.innerWidth < 871) {
      document.querySelector(".Sidebar").style.width = "40px";
      document.querySelector(".Sidebar ul").style.display = "none";
      document.querySelector(".Content").style.opacity = "1";
      hide(false);
    }
  };

  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
  };
  useEffect(() => {
    history.push("HTML5");
    $(".second").addClass("active");
    $(".first").removeClass("active");
    $(".third").removeClass("active");
    $(".fourth").removeClass("active");
  }, []);

  return (
    <div className="html">
      <div className="Modal">
        <CloseIcon className="closeModal" onClick={hideModal} />
        <p className="htmlScore"></p>
      </div>
      <div className="Sidebar">
        {/* <DehazeIcon onClick={ShowHide} className="showSideBar" /> */}
        <DehazeIcon onClick={ShowHide} className="OpenSideBar" />
        <ul className="List">
          <a href="#introduction" onClick={refleshCurrentPage}>
            <li>Introduction</li>
          </a>
          <a href="#heading" onClick={refleshCurrentPage}>
            <li>Headings</li>
          </a>
          <a href="#formattingElements" onClick={refleshCurrentPage}>
            <li>Formatting Elements</li>
          </a>
          <a href="#comments" onClick={refleshCurrentPage}>
            <li>Comment</li>
          </a>
          <a href="#links" onClick={refleshCurrentPage}>
            <li>Links</li>
          </a>
          <a href="#images" onClick={refleshCurrentPage}>
            <li>Images</li>
          </a>
          <a href="#lists" onClick={refleshCurrentPage}>
            <li>Lists</li>
          </a>
          <a href="#inputs" onClick={refleshCurrentPage}>
            <li>Inputs</li>
          </a>
          <a href="#buttons" onClick={refleshCurrentPage}>
            <li>Button</li>
          </a>
          <a href="#selectOption" onClick={refleshCurrentPage}>
            <li>Select&Option</li>
          </a>
          <a href="#fieldsetLegend" onClick={refleshCurrentPage}>
            <li>Fieldset&Legend</li>
          </a>
          <a href="#tables" onClick={refleshCurrentPage}>
            <li>Tables</li>
          </a>
          <a href="#forms" onClick={refleshCurrentPage}>
            <li>Form</li>
          </a>
          <a href="#Exercises" onClick={refleshCurrentPage}>
            <li>Exercises</li>
          </a>
          <a href="#htmlQuiz" onClick={refleshCurrentPage}>
            <li>Quiz</li>
          </a>
        </ul>
      </div>
      <div className="Content">
        <div className="addPaddingToSection" id="introduction">
          <h3 className="sectionTittle">Introduction</h3>
          <p className="clickHere">
            HTML stands for <b>H</b>yper <b>T</b>ext <b>M</b>arkup <b>L</b>
            anguage, it's a Design Language NOT a Programming Language, and it's
            considered as the Door of your Website. You can create a Website
            only Using this Language. but you can't control the Elements Colors
            or Position. So, HTML consists of a list of Elements (Tags) which
            can build the Structure of your Entire Website. Scroll down to
            figure out the most of these Elements. <br />
            <span className="instruction">Instruction :</span> Here is how to
            create HTML file, and how to use <i>"live server exetension"</i>{" "}
            <a href="">click here</a>.
            <br />
            <span className="importants">Important : </span> Keep in mind that
            the whole HTML code should be written inside <b>body</b> Tag.
          </p>
        </div>
        <div className="addPaddingToSection" id="heading">
          <h3 className="sectionTittle">Heading</h3>
          <p className="clickHere">
            when we talk about Heading, we talk about the{" "}
            <b>
              &lt;h1&gt;,&lt;h2&gt;,&lt;h3&gt;,&lt;h4&gt;,&lt;h5&gt;,&lt;h6&gt;,
            </b>{" "}
            tags:
          </p>
          <div className="heading__code">
            <div readOnly className="heading__input" name="" id="">
              &lt;<span className="tag">h1</span>&gt; welcome to web crowd &lt;
              <span className="tag">/h1</span>&gt; <br />
              &lt;
              <span className="tag">h2</span>&gt; welcome to web crowd &lt;
              <span className="tag">/h2</span>&gt; <br />
              &lt;
              <span className="tag">h3</span>&gt; welcome to web crowd &lt;
              <span className="tag">/h3</span>&gt; <br />
              &lt;
              <span className="tag">h4</span>&gt; welcome to web crowd &lt;
              <span className="tag">/h4</span>&gt; <br />
              &lt;
              <span className="tag">h5</span>&gt; welcome to web crowd &lt;
              <span className="tag">/h5</span>&gt; <br />
              &lt;
              <span className="tag">h6</span>&gt; welcome to web crowd &lt;
              <span className="tag">/h6</span>&gt; <br />
            </div>
            <div>
              <ArrowRightAltIcon className="arrow" />
            </div>
            <div className="heading__output">
              <h1>welcome to web crowd</h1>
              <h2>welcome to web crowd</h2>
              <h3>welcome to web crowd</h3>
              <h4>welcome to web crowd</h4>
              <h5>welcome to web crowd</h5>
              <h6>welcome to web crowd</h6>
            </div>
          </div>
          <p className="clickHere">
            As you see, h1 bigger than h2 bigger than h3.....bigger than h6.
            <br />
            <b className="note">Note</b> : You can use other useful tags like
            (div, span,p....).
          </p>
        </div>
        <div className="addPaddingToSection" id="formattingElements">
          <h3 className="sectionTittle">Formatting Elements</h3>
          <p className="clickHere">
            you can change the format of any element using the followinhg tags :
          </p>
          <div className="formatting__code">
            <div readOnly className="formatting__input">
              &lt;<span className="tag">b</span>&gt; this is bold &lt;
              <span className="tag">/b</span>&gt; <br /> &lt;
              <span className="tag">i</span>&gt; this is btalic &lt;
              <span className="tag">/i</span>&gt; <br />
              &lt;
              <span className="tag">sub</span>&gt; this is sub &lt;
              <span className="tag">/sub</span>&gt; <br />
              &lt;
              <span className="tag">strong</span>&gt; this is strong &lt;
              <span className="tag">/strong</span>&gt; <br /> &lt;
              <span className="tag">sup</span>&gt; this is sup &lt;
              <span className="tag">/sup</span>&gt; <br />
            </div>
            <div>
              <ArrowRightAltIcon className="arrow" />
            </div>
            <div className="formatting__output">
              this is <b>bold</b>
              <br />
              this is <i>italic</i>
              <br />
              this is <sub>sub</sub>
              <br />
              this is <strong>strong</strong>
              <br />
              this is <sup>sup</sup>
            </div>
          </div>
          <p className="clickHere">
            <b>Note :</b> if you write the code above, the result will showed up
            in one line, i used &lt;<span className="tag">br /</span>&gt; tag
            after every single tag just to split that line into many lines. to
            be able understand the difference between those tag.
          </p>
        </div>
        <div className="addPaddingToSection" id="comments">
          <h3 className="sectionTittle">Comments</h3>
          <p className="clickHere">
            Everything you write inside Comments token (&lt;!-- Code Or text
            --&gt;) will not be executed.
          </p>
          <div className="comments__code">
            <div readOnly className="comments__input">
              &lt;<span className="tag">div</span>&gt; First Line &lt;
              <span className="tag">/div</span>&gt; <br />
              &lt;<span className="comment__tag">!-- </span>
              &lt;
              <span className="tag">div</span>&gt; Second Line &lt;
              <span className="tag">/div</span>&gt;
              <span className="comment__tag"> --</span>&gt;
              <br />
              &lt;
              <span className="tag">div</span>&gt; Third line &lt;
              <span className="tag">/div</span>&gt; <br />
              &lt;
              <span className="tag">div</span>&gt; Fourth line &lt;
              <span className="tag">/div</span>&gt; <br />
            </div>
            <div>
              <ArrowRightAltIcon className="arrow" />
            </div>
            <div className="comments__output">
              <div>First line</div>
              <div>Third line</div>
              <div>strong</div>
            </div>
          </div>
          <p className="clickHere">
            As you see, the <b>Second line</b> didn't Showed in the right side.
            Because we wrapped it with Comment token. <br />
            So the bottom line is that everything you write inside the comment
            token will not be executed.
          </p>
        </div>
        <div className="addPaddingToSection" id="links">
          <h3 className="sectionTittle">Links</h3>
          <p className="clickHere">
            when we talk about link we talk about <b>&lt;a&gt;</b> tag. So we
            use <b>a</b> tag to visit one particular website. inside <b>a</b>{" "}
            tag we write <b>href</b> property, to put the particular link into.
          </p>
          <div className="links__code">
            <div readOnly className="links__input">
              &lt;
              <span className="tag">
                a <span className="hrefColor">href=</span>{" "}
                <span className="linkColor">"https://www.youtube.com/"</span>
              </span>
              &gt; Go to youtube &lt;
              <span className="tag">/a</span>&gt;
              <br />
              &lt;
              <span className="tag">
                a <span className="hrefColor">href=</span>{" "}
                <span className="linkColor">"https://www.amazon.com/"</span>
              </span>
              &gt; Go to Amazon &lt;
              <span className="tag">/a</span>&gt;
              <br />
              &lt;
              <span className="tag">
                a <span className="hrefColor">href=</span>{" "}
                <span className="linkColor">"https://www.instagram.com/"</span>
              </span>
              &gt; Go to Instagram &lt;
              <span className="tag">/a</span>&gt;
              <br />
            </div>
            <div>
              <ArrowRightAltIcon className="arrow" />
            </div>
            <div className="links__output">
              <a href="https://www.youtube.com/">Go to YouTube</a> <br />
              <a href="https://www.amazon.com/" target="_blank">
                Go to Amazon
              </a>{" "}
              <br />
              <a href="https://www.instagram.com/">Go to Instagram</a> <br />
            </div>
          </div>
          <p className="clickHere">
            As you can see, when you click on any particular link, that will
            lead you to the specific website, but in the <b>Same tab</b>. <br />
            So, if you want to open the link in a <b>new tab</b>, you must add
            <b> target="_blank"</b> after href. <br /> Example:{" "}
            <b>
              &lt;a href="https://www.amazon.com/" target="_blank"&gt;Go to
              Amazon&lt;/a&gt;
            </b>
          </p>
          <p className="clickHere">
            <b className="note">Note : </b> we can also exploit <b>a</b> tag to
            scroll among our current page using <b>id</b> property.
          </p>
        </div>
        <div className="addPaddingToSection" id="images">
          <h3 className="sectionTittle">Images</h3>
          <p className="clickHere">
            We use <b>&lt;img&gt;</b> tag to display the images inside our
            websites.
          </p>
          <div className="images__code">
            <div readOnly className="images__input">
              &lt;<span className="tag">h2</span>&gt; the picture will display
              bellow &lt;
              <span className="tag">/h2</span>&gt; <br />
              &lt;
              <span className="tag">
                img <span className="property">src="</span>
                <span className="propertyValue">image adress</span>"
              </span>
              <span className="tag"> /</span>&gt;
              <br />
            </div>
            <div>
              <ArrowRightAltIcon className="arrow" />
            </div>
            <div className="images__output">
              <h2>the picture will display bellow</h2>
              <img
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
          </div>
          <p className="clickHere">
            <b className="note">Note : </b> You can also save image inside your
            desktop then instead of typing <b>image adress</b> you can type{" "}
            <b>the name of image and its extension </b> like the following :{" "}
            <b>&lt;img src="imageName.extension</b> (the extensions like jpg,
            png, etc..), makes sure that the image is in the same folder that
            has html file (html file and the image must have the same path
            inside your desktop)
            <br />
          </p>
        </div>
        <div className="addPaddingToSection" id="lists">
          <h3 className="sectionTittle">Lists</h3>
          <p className="clickHere">
            we use Lists &lt;ul&gt; & &lt;ol&gt; to display a list of items, it
            usually used in the Header (the top part of your page). ans the
            Sidebar (the left or right side of your page).
          </p>
          <div className="lists__code">
            <div readOnly className="lists__input">
              &lt;
              <span className="tag">h4</span>&gt; the First type of Lists &lt;
              <span className="tag">/h4</span>&gt; <br />
              &lt;<span className="tag">ul</span>&gt;
              <br />
              &lt;
              <span className="tag">li</span>&gt; item 1 &lt;
              <span className="tag">/li</span>&gt; <br />
              &lt;
              <span className="tag">li</span>&gt; item 2 &lt;
              <span className="tag">/li</span>&gt; <br />
              &lt;
              <span className="tag">li</span>&gt; item 3 &lt;
              <span className="tag">/li</span>&gt; <br />
              &lt;
              <span className="tag">li</span>&gt; item 4 &lt;
              <span className="tag">/li</span>&gt; <br />
              &lt;
              <span className="tag">/ul</span>&gt; <br />
              &lt;
              <span className="tag">h4</span>&gt; the Second type of Lists &lt;
              <span className="tag">/h4</span>&gt; <br />
              &lt;<span className="tag">ol</span>&gt;
              <br />
              &lt;
              <span className="tag">li</span>&gt; item 1 &lt;
              <span className="tag">/li</span>&gt; <br />
              &lt;
              <span className="tag">li</span>&gt; item 2 &lt;
              <span className="tag">/li</span>&gt; <br />
              &lt;
              <span className="tag">li</span>&gt; item 3 &lt;
              <span className="tag">/li</span>&gt; <br />
              &lt;
              <span className="tag">li</span>&gt; item 4 &lt;
              <span className="tag">/li</span>&gt; <br />
              &lt;
              <span className="tag">/ol</span>&gt; <br />
            </div>
            <div>
              <ArrowRightAltIcon className="arrow" />
            </div>
            <div className="lists__output">
              <h4>the First type of Lists</h4>
              <ul style={{ marginLeft: "50px" }}>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
              </ul>
              <h4>the Second type of Lists</h4>
              <ol style={{ marginLeft: "50px" }}>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="addPaddingToSection" id="inputs">
          <h3 className="sectionTittle">Inputs</h3>
          <p className="clickHere">
            we often use &lt;input&gt; tag for registration purposes, because
            this tag is where we put out information such Full name,Email and
            Password...etc. we can integrat multiple attributes to this tag, but
            the most popular are <b>type & placeholder</b>
          </p>
          <div className="inputs__code">
            <div readOnly className="inputs__input">
              &lt;<span className="tag">h4</span>&gt; Enter your full name&lt;
              <span className="tag">/h4</span>&gt; <br />
              &lt;
              <span className="tag">
                input <span className="property">type="</span>
                <span className="propertyValue">text</span>"
                <span className="property"> placeholder="</span>
                <span className="propertyValue">Enter your full name</span>"
              </span>
              <span className="tag"> /</span>&gt;
              <br />
              &lt;<span className="tag">h4</span>&gt; Enter your Email&lt;
              <span className="tag">/h4</span>&gt; <br />
              &lt;
              <span className="tag">
                input <span className="property">type="</span>
                <span className="propertyValue">email</span>"
                <span className="property"> placeholder="</span>
                <span className="propertyValue">Enter your Email</span>"
              </span>
              <span className="tag"> /</span>&gt;
              <br />
              &lt;<span className="tag">h4</span>&gt; Enter your Password&lt;
              <span className="tag">/h4</span>&gt; <br />
              &lt;
              <span className="tag">
                input <span className="property">type="</span>
                <span className="propertyValue">password</span>"
                <span className="property"> placeholder="</span>
                <span className="propertyValue">Enter your Password</span>"
              </span>
              <span className="tag"> /</span>&gt;
              <br />
            </div>
            <div>
              <ArrowRightAltIcon className="arrow" />
            </div>
            <div className="inputs__output">
              <h4>Enter your full name</h4>
              <input type="text" placeholder="Enter your full name" />
              <h4>Enter your Email</h4>
              <input type="email" placeholder="Enter your Email" />
              <h4>Enter your Password</h4>
              <input type="password" placeholder="Enter your Password" />
            </div>
          </div>
          <p className="clickHere">
            <b className="note">Note : </b> When it comes to Email, you are
            allowed to enter Name, not only Eamil. that's because we didn't
            surround all those tags with <b>form tag</b>. <br />
            there are many others of input types like{" "}
            <b>number,radio,checkbox,button,range...etc.</b>
          </p>
        </div>
        <div className="addPaddingToSection" id="buttons">
          <h3 className="sectionTittle">Buttons</h3>
          <p className="clickHere">
            we often use <b>&lt;button&gt;</b> tag in Registration. So, when you
            type your information inside input tag, you will need to confirm
            those information, so that's when button comes in, you click on that
            button to confirm that information. and get into that particular
            website. <br />
            <b>imortant! </b> to make this button works, we need to add{" "}
            <i>onclick</i> event as a property as the following : <br />
            <b>
              &lt;button onclick="alert('the button is clicked')"&gt;click
              here&lt;/button&gt;
            </b>{" "}
            <br />
            in this example we will pop up an alert with{" "}
            <i>the button is clicked</i> message.
          </p>
          <div className="formatting__code">
            <div readOnly className="formatting__input">
              &lt;<span className="tag">b</span>&gt; click on this button to pop
              up a message &lt;
              <span className="tag">/b</span>&gt; <br /> &lt;
              <span className="tag">
                button <span className="property">onclick=</span>{" "}
                <span className="propertyValue">
                  alert('the button is clicked')
                </span>
              </span>
              &gt; click here &lt;
              <span className="tag">/button</span>&gt; <br />
            </div>
            <div>
              <ArrowRightAltIcon className="arrow" />
            </div>
            <div className="formatting__output">
              <b>click on this button to pop up a message</b>
              <br />
              <button onClick={() => alert("the button is clicked")}>
                click here
              </button>
            </div>
          </div>
          <p className="clickHere">
            <b className="note">Note : </b> in JavaScript we will find out more
            about button, So don't focus on it now
          </p>
        </div>
        <div className="addPaddingToSection" id="selectOption">
          <h3 className="sectionTittle">Select&Option</h3>
          <p className="clickHere">
            we often use <b>&lt;select&gt; & &lt;option&gt;</b> tag to filter
            the results in our website.
          </p>
          <div className="selectOption__code">
            <div readOnly className="selectOption__input">
              &lt;
              <span className="tag">h4</span>&gt; select your country : &lt;
              <span className="tag">/h4</span>&gt; <br />
              &lt;<span className="tag">select</span>&gt;
              <br />
              &lt;
              <span className="tag">option</span>&gt; Morocco &lt;
              <span className="tag">/option</span>&gt; <br />
              &lt;
              <span className="tag">option</span>&gt; United States &lt;
              <span className="tag">/option</span>&gt; <br />
              &lt;
              <span className="tag">option</span>&gt; Qatar &lt;
              <span className="tag">/option</span>&gt; <br />
              &lt;
              <span className="tag">option</span>&gt; Canada &lt;
              <span className="tag">/option</span>&gt; <br />
              &lt;
              <span className="tag">/select</span>&gt; <br />
            </div>
            <div>
              <ArrowRightAltIcon className="arrow" />
            </div>
            <div className="selectOption__output">
              <h4>select your country :</h4>
              <select>
                <option>Morocco</option>
                <option>United States</option>
                <option>Qatar</option>
                <option>Canada</option>
              </select>
            </div>
          </div>
        </div>
        <div className="addPaddingToSection" id="fieldsetLegend">
          <h3 className="sectionTittle">Fieldset&Legend</h3>
          <p className="clickHere">
            we usually use <b>&lt;fieldset&gt; & &lt;legend&gt;</b> tag to group
            related elements in a form.
          </p>
          <div className="fieldsetLegend__code">
            <div readOnly className="fieldsetLegend__input">
              &lt;
              <span className="tag">fieldset</span>&gt; <br />
              &lt;
              <span className="tag">legend</span>&gt; My Skills &lt;
              <span className="tag">/legend</span>&gt; <br />
              &lt;
              <span className="tag">ul</span>&gt; <br /> &lt;
              <span className="tag">li</span>&gt; HTML5 &lt;
              <span className="tag">/li</span>&gt; <br />
              &lt;
              <span className="tag">li</span>&gt; CSS3 &lt;
              <span className="tag">/li</span>&gt; <br />
              &lt;
              <span className="tag">li</span>&gt; JAVASCRIPT &lt;
              <span className="tag">/li</span>&gt; <br />
              &lt;
              <span className="tag">li</span>&gt; JQUERY &lt;
              <span className="tag">/li</span>&gt; <br />
              &lt;
              <span className="tag">/ul</span>&gt; <br />
              &lt;
              <span className="tag">/fieldset</span>&gt; <br />
            </div>
            <div>
              <ArrowRightAltIcon className="arrow" />
            </div>
            <div className="fieldsetLegend__output">
              <fieldset>
                <legend> Web development Languages</legend>
                <ul>
                  <li> HTML5 </li>
                  <li> CSS3 </li>
                  <li> JAVASCRIPT </li>
                  <li> JQUERY </li>
                </ul>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="addPaddingToSection" id="tables">
          <h3 className="sectionTittle">Tables</h3>
          <p className="clickHere">
            actually <b>&lt;table&gt;</b> became useless in the current time.
            but that's not mean you shouldn't take a look on it. So you can use
            tables in registration form. just to keep your code more organized.
            and when you want to display a list of Customers and their
            information.
          </p>
          <div className="tables__code">
            <div readOnly className="tables__input">
              &lt;
              <span className="tag">h4</span>&gt; this is the list of Customers
              : &lt;
              <span className="tag">/h4</span>&gt; <br />
              &lt;<span className="tag">table</span>&gt;
              <br />
              &lt;
              <span className="tag">tr</span>&gt; <br />
              &lt;
              <span className="tag">th</span>&gt; Name &lt;
              <span className="tag">/th</span>&gt; <br />
              &lt;
              <span className="tag">th</span>&gt; Age &lt;
              <span className="tag">/th</span>&gt; <br /> &lt;
              <span className="tag">th</span>&gt; Country &lt;
              <span className="tag">/th</span>&gt; <br /> &lt;
              <span className="tag">/tr</span>&gt; <br />
              &lt;
              <span className="tag">tr</span>&gt; <br />
              &lt;
              <span className="tag">td</span>&gt; Mike &lt;
              <span className="tag">/td</span>&gt; <br />
              &lt;
              <span className="tag">td</span>&gt; 22 &lt;
              <span className="tag">/td</span>&gt; <br /> &lt;
              <span className="tag">td</span>&gt; Canada &lt;
              <span className="tag">/td</span>&gt; <br /> &lt;
              <span className="tag">/tr</span>&gt; <br />
              &lt;
              <span className="tag">tr</span>&gt; <br />
              &lt;
              <span className="tag">td</span>&gt; Frank &lt;
              <span className="tag">/td</span>&gt; <br />
              &lt;
              <span className="tag">td</span>&gt; 34 &lt;
              <span className="tag">/td</span>&gt; <br /> &lt;
              <span className="tag">td</span>&gt; Belgium &lt;
              <span className="tag">/td</span>&gt; <br /> &lt;
              <span className="tag">/tr</span>&gt; <br />
              &lt;
              <span className="tag">tr</span>&gt; <br />
              &lt;
              <span className="tag">th</span>&gt; Lucy &lt;
              <span className="tag">/th</span>&gt; <br />
              &lt;
              <span className="tag">th</span>&gt; 20 &lt;
              <span className="tag">/th</span>&gt; <br /> &lt;
              <span className="tag">th</span>&gt; Russian &lt;
              <span className="tag">/th</span>&gt; <br /> &lt;
              <span className="tag">/tr</span>&gt; <br />
              &lt;<span className="tag">/table</span>&gt;
            </div>
            <div>
              <ArrowRightAltIcon className="arrow" />
            </div>
            <div className="tables__output">
              <h4>this is the list of Customers :</h4>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Country</th>
                </tr>
                <tr>
                  <td>Mike</td>
                  <td>22</td>
                  <td>Canada</td>
                </tr>
                <tr>
                  <td>Frank</td>
                  <td>34</td>
                  <td>Belgium</td>
                </tr>
                <tr>
                  <td>Lucy</td>
                  <td>20</td>
                  <td>Russian</td>
                </tr>
              </table>
            </div>
          </div>
          <p className="clickHere">
            As you can see, <b>&lt;th&gt;</b> seems bold comparing to{" "}
            <b>&lt;td&gt;</b> <br />
            <b>Reminder :</b> don't forget to write{" "}
            <b>&lt;table&gt;&lt;/table&gt;</b>
          </p>
        </div>
        <div className="addPaddingToSection" id="forms">
          <h3 className="sectionTittle">Forms</h3>
          <p className="clickHere">
            we use <b>&lt;form&gt;</b> tag in Registration, through this tag we
            can send the users's information to the Server once Click on Sign up
            button.
          </p>
          <div className="forms__code">
            <div readOnly className="forms__input">
              <span className="tag">h4</span>&gt; Sign up to Facebook : &lt;
              <span className="tag">/h4</span>&gt; <br />
              &lt;<span className="tag">form</span>&gt; <br />
              &lt;<span className="tag">table</span>&gt;
              <br />
              &lt;
              <span className="tag">tr</span>&gt; <br />
              &lt;
              <span className="tag">td</span>&gt; Full Name : &lt;
              <span className="tag">/td</span>&gt; <br />
              &lt;
              <span className="tag">td</span>&gt; &lt;
              <span className="tag">input</span>
              <span className="property"> type="</span>
              <span className="propertyValue">text"</span>
              <span className="property"> name="</span>
              <span className="propertyValue">FullName"</span>
              <span className="property"> placeholder="</span>
              <span className="propertyValue">Full Name"</span>
              <span className="tag">/</span>&gt; &lt;
              <span className="tag">/td</span>&gt; <br /> &lt;
              <span className="tag">/tr</span>&gt; <br />
              &lt;
              <span className="tag">tr</span>&gt; <br />
              &lt;
              <span className="tag">td</span>&gt; Email : &lt;
              <span className="tag">/td</span>&gt; <br />
              &lt;
              <span className="tag">td</span>&gt; &lt;
              <span className="tag">input</span>
              <span className="property"> type="</span>
              <span className="propertyValue">email"</span>
              <span className="property"> name="</span>
              <span className="propertyValue">Email"</span>
              <span className="property"> placeholder="</span>
              <span className="propertyValue">Email"</span>
              <span className="tag">/</span>&gt; &lt;
              <span className="tag">/td</span>&gt; <br /> &lt;
              <span className="tag">/tr</span>&gt; <br />
              &lt;
              <span className="tag">tr</span>&gt; <br />
              &lt;
              <span className="tag">td</span>&gt; Password : &lt;
              <span className="tag">/td</span>&gt; <br />
              &lt;
              <span className="tag">td</span>&gt; &lt;
              <span className="tag">input</span>
              <span className="property"> type="</span>
              <span className="propertyValue">Password"</span>
              <span className="property"> name="</span>
              <span className="propertyValue">Password"</span>
              <span className="property"> placeholder="</span>
              <span className="propertyValue">Password"</span>
              <span className="tag">/</span>&gt; &lt;
              <span className="tag">/td</span>&gt; <br /> &lt;
              <span className="tag">/tr</span>&gt; <br />
              &lt;
              <span className="tag">tr</span>&gt; <br />
              &lt;
              <span className="tag">td</span>&gt; Verify Password : &lt;
              <span className="tag">/td</span>&gt; <br />
              &lt;
              <span className="tag">td</span>&gt; &lt;
              <span className="tag">input</span>
              <span className="property"> type="</span>
              <span className="propertyValue">password"</span>
              <span className="property"> name="</span>
              <span className="propertyValue">VerifyPassword"</span>
              <span className="property"> placeholder="</span>
              <span className="propertyValue">Verify Password"</span>
              <span className="tag">/</span>&gt; &lt;
              <span className="tag">/td</span>&gt; <br /> &lt;
              <span className="tag">/tr</span>&gt; <br />
              &lt;
              <span className="tag">/table</span>&gt; <br />
              &lt;
              <span className="tag">button</span>
              <span className="property"> type="</span>
              <span className="propertyValue">submit"</span>&gt;Sign up&lt;
              <span className="tag">/button</span>&gt; <br />
              &lt;
              <span className="tag">/form</span>&gt; <br />
            </div>
            <div>
              <ArrowRightAltIcon className="arrow" />
            </div>
            <div className="forms__output">
              <h4>Sign up to Facebook :</h4>
              <form>
                <table>
                  <tr>
                    <td>Full Name : </td>
                    <td>
                      <input
                        type="text"
                        name="FullName"
                        placeholder="Full Name"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Email : </td>
                    <td>
                      <input type="email" name="Email" placeholder="Email" />
                    </td>
                  </tr>
                  <tr>
                    <td>Password : </td>
                    <td>
                      <input
                        type="password"
                        name="Password"
                        placeholder="Password"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Verify Password : </td>
                    <td>
                      <input
                        type="password"
                        name="VerifyPassword"
                        placeholder="Verify Password"
                      />
                    </td>
                  </tr>
                </table>
                <button type="submit">Sign up</button>
              </form>
            </div>
          </div>
          <p className="clickHere">
            So, when you click on Sign up button, all of the information you
            wrote displayed in the URL. that's because we add <b>name</b>{" "}
            property to each input, So the value of this property Equals the
            value you Enter.
          </p>
        </div>

        <div className="addPaddingToSection" id="Exercises">
          <div style={{ width: "100%" }}>
            <h3 className="sectionTittle">Exercises</h3>
            <p className="clickHere">
              before you start the following exercises, try figure out the other
              types of input such <b>radio,range,checkbox,number</b>. Don't be
              limited to these Exercises, try out more because{" "}
              <b>Practice makes perfect</b>.
            </p>
          </div>
          <div className="exercisesContainer">
            <div className="exercise">
              <h3>My Portfolio : </h3>
              <div style={{ flex: "1" }}>
                <p>
                  Hello, My name is <i>Mike</i>, i'm 22 years old, and i'm a{" "}
                  <b>Web Developer</b>. <br />
                  So, these are the Languages i've learned.
                </p>
                <ul style={{ marginLeft: "50px" }}>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JAVASCRIPT</li>
                </ul>
                <p>Hope you like it.</p>
              </div>
              <a
                href=""
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
              <h3>List of Customers : </h3>
              <div style={{ flex: "1" }}>
                <table className="listofcustomers">
                  <tr>
                    <th>Full Name</th>
                    <th>Age</th>
                    <th>Country</th>
                  </tr>
                  <tr>
                    <td>Mike Frank</td>
                    <td>21</td>
                    <td>United States</td>
                  </tr>
                  <tr>
                    <td>Lucy Gomez</td>
                    <td>20</td>
                    <td>Canada</td>
                  </tr>
                  <tr>
                    <td>Qazi Alves</td>
                    <td>34</td>
                    <td>Belgium</td>
                  </tr>
                </table>
              </div>
              <a
                href=""
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
              <h3>Login form : </h3>
              <div style={{ flex: "1" }}>
                <form>
                  <table>
                    <tr>
                      <td>Email :</td>
                      <td>
                        <input type="email" placeholder="Email" />
                      </td>
                    </tr>
                    <tr>
                      <td>Password :</td>
                      <td>
                        <input type="password" placeholder="Password" />
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>forgot Password?</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <button>Log in</button>
                      </td>
                    </tr>
                  </table>
                </form>
              </div>
              <a
                href=""
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
              <h3>Sign up form : </h3>
              <div style={{ flex: "1" }}>
                <form>
                  <table>
                    <tr>
                      <td>First Name :</td>
                      <td>
                        <input type="text" placeholder="First Name" />
                      </td>
                    </tr>
                    <tr>
                      <td>Last Name :</td>
                      <td>
                        <input type="text" placeholder="Last Name" />
                      </td>
                    </tr>
                    <tr>
                      <td>Email :</td>
                      <td>
                        <input type="email" placeholder="Email" />
                      </td>
                    </tr>
                    <tr>
                      <td>Password :</td>
                      <td>
                        <input type="password" placeholder="Password" />
                      </td>
                    </tr>
                    <tr>
                      <td>Verfiy Password :</td>
                      <td>
                        <input type="password" placeholder="Verify Password" />
                      </td>
                    </tr>
                    <tr>
                      <td>Country :</td>
                      <td>
                        <select name="" id="">
                          <option value="">Select Country</option>
                          <option value="">United States</option>
                          <option value="">Canada</option>
                          <option value="">Morocco</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>Gender :</td>
                      <td>
                        <input type="radio" name="firstQuestionName" />{" "}
                        <span>Man</span>{" "}
                        <input type="radio" name="firstQuestionName" />{" "}
                        <span>Woman</span>
                      </td>
                    </tr>

                    <tr>
                      <td></td>
                      <td>
                        <button>Sign up</button>
                      </td>
                    </tr>
                  </table>
                </form>
              </div>
              <a
                href=""
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
        </div>
        <div className="addPaddingToSection" id="htmlQuiz">
          <h3 className="sectionTittle">Quiz</h3>
          <p className="clickHere">
            <b className="note">Note : </b> Make sure that you have read the
            introduction of every Concept we discussed about above before you
            start this Quiz. So, when you complete all of these questions, click
            on <b className="note">i'm Done</b> button to display the result
            immediately.
          </p>

          <div className="htmlQuiz__content">
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 1
            </h5>
            <p className="clickHere">where do we write all of html code ?</p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="firstQuestionName"
              className="htmlwrongOne1"
            />
            <span className="htmlWrongAnswerOne1">inside head tag</span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="firstQuestionName"
              className="htmlQuestionOne"
            />
            <span className="htmlAnswerOne">inside body tag</span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="firstQuestionName"
              className="htmlwrongOne2"
            />
            <span className="htmlWrongAnswerOne2">
              between head and body tags
            </span>
            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 2
            </h5>
            <p className="clickHere">which purpose we use &lt;a&gt; for ?</p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="secondQuestionName"
              className="htmlwrongTwo1"
            />
            <span className="htmlWrongAnswerTwo1">
              to display an image in the web page
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="secondQuestionName"
              className="htmlQuestionTwo"
            />
            <span className="htmlAnswerTwo">to visit one particular link</span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="secondQuestionName"
              className="htmlwrongTwo2"
            />
            <span className="htmlWrongAnswerTwo2">to submit the form</span>
            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 3
            </h5>
            <p className="clickHere">which one of those is a heading tag ?</p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="thirdQuestionName"
              className="htmlQuestionThree"
            />
            <span className="htmlAnswerThree">h3</span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="thirdQuestionName"
              className="htmlwrongThree1"
            />
            <span className="htmlWrongAnswerThree1">li</span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="thirdQuestionName"
              className="htmlwrongThree2"
            />
            <span className="htmlWrongAnswerThree2">td</span>
            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 4
            </h5>
            <p className="clickHere">
              which property related to &lt;img&gt; tag ?
            </p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="fourthQuestionName"
              className="htmlwrongFour1"
            />
            <span className="htmlWrongAnswerFour1">href</span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="fourthQuestionName"
              className="htmlwrongFour2"
            />
            <span className="htmlWrongAnswerFour2">placeholder</span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="fourthQuestionName"
              className="htmlQuestionFour"
            />
            <span className="htmlAnswerFour">src</span>
            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 5
            </h5>
            <p className="clickHere">
              can i visit the particular link in a new Tab ?
            </p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="fifthQuestionName"
              className="htmlQuestionFive"
            />
            <span className="htmlAnswerFive">yes</span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="fifthQuestionName"
              className="htmlwrongFive"
            />
            <span className="htmlWrongAnswerFive">no</span>
            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 6
            </h5>
            <p className="clickHere">
              can i write html tags inside each others ?
            </p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="sixthQuestionName"
              className="htmlQuestionSix"
            />
            <span className="htmlAnswerSix">yes</span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="sixthQuestionName"
              className="htmlwrongSix"
            />
            <span className="htmlWrongAnswerSix">no</span>
            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 7
            </h5>
            <p className="clickHere">
              which property is related to &lt;a&gt; tag ?
            </p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="seventhQuestionName"
              className="htmlQuestionSeven"
            />
            <span className="htmlAnswerSeven">href</span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="seventhQuestionName"
              className="htmlwrongSeven1"
            />
            <span className="htmlWrongAnswerSeven1">placeholder</span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="seventhQuestionName"
              className="htmlwrongSeven2"
            />
            <span className="htmlWrongAnswerSeven2">type</span>
            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 8
            </h5>
            <p className="clickHere">is html a Programming Language ?</p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="eightQuestionName"
              className="htmlwrongEight"
            />
            <span className="htmlAnswerEight">yes</span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="eightQuestionName"
              className="htmlQuestionEight"
            />
            <span className="htmlWrongAnswerEight">no</span>
            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 9
            </h5>
            <p className="clickHere">why do we use &lt;comments&gt; ?</p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="ninthQuestionName"
              className="htmlQuestionNine"
            />
            <span className="htmlAnswerNine">
              to prevent html code from executing{" "}
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="ninthQuestionName"
              className="htmlwrongNine1"
            />
            <span className="htmlWrongAnswerNine1">to remove html code </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="ninthQuestionName"
              className="htmlwrongNine2"
            />
            <span className="htmlWrongAnswerNine2">
              to duplicate html code{" "}
            </span>
            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 10
            </h5>
            <p className="clickHere">
              in which html tag we use placeholder property ?
            </p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="tenthQuestionName"
              className="htmlwrongTen1"
            />
            <span className="htmlWrongAnswerTen1">img </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="tenthQuestionName"
              className="htmlQuestionTen"
            />
            <span className="htmlAnswerTen">input </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="tenthQuestionName"
              className="htmlwrongTen2"
            />
            <span className="htmlWrongAnswerTen2">a </span>
            <br />
            <button
              style={{
                padding: "5px 10px",
                margin: " 10px 25px",
                color: "white",
                backgroundColor: "blue",
                borderRadius: "5px",
                cursor: "pointer",
                border: "none",
                outline: "none",
              }}
              onClick={htmlCompletedQuiz}
            >
              i'm Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Html;
