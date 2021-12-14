import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./Html.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
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
      document.querySelector(".htmlSidebar").style.width = "200px";
      document.querySelector(".htmlSidebar ul").style.display = "block";

      document.querySelector(".htmlSidebar").style.position = "absolute";
      $(".htmlSidebar").css("z-index", "1");
      document.querySelector(".htmlContent").style.opacity = "0.5";
      hide(true);
    } else if (show) {
      document.querySelector(".htmlSidebar").style.width = "60px";
      document.querySelector(".htmlSidebar ul").style.display = "none";
      document.querySelector(".htmlSidebar").style.position = "absolute";
      document.querySelector(".htmlContent").style.opacity = "1";
      hide(false);
    } else {
    }
  };

  window.addEventListener("resize", function () {
    if (window.innerWidth > 871) {
      if (history.push(localStorage.getItem("current")) === "HTML5") {
        document.querySelector(".htmlSidebar").style.width = "200px";
        document.querySelector(".htmlSidebar ul").style.display = "block";
      }
      if (show) {
        try {
          document.querySelector(".htmlSidebar").style.width = "200px";
          document.querySelector(".htmlSidebar ul").style.display = "block";
        } catch (error) {}
      }
    } else if (window.innerWidth <= 871) {
      if (history.push(localStorage.getItem("current")) === "HTML5") {
        document.querySelector(".htmlSidebar").style.width = "60px";
        document.querySelector(".htmlSidebar ul").style.display = "none";
      }
      if (show && window.innerWidth <= 871) {
        try {
          document.querySelector(".htmlContent").style.opacity = "1";
          document.querySelector(".htmlSidebar").style.width = "60px";
          document.querySelector(".htmlSidebar ul").style.display = "none";
          hide(false);
        } catch (error) {}
      }
    } else {
    }
  });

  return (
    <div className="html">
      <div className="htmlSidebar">
        <DehazeIcon onClick={ShowHide} className="showSideBar" />
        <ul>
          <a href="">
            <li>Introduction</li>
          </a>
          <a href="">
            <li>Headings</li>
          </a>
          <a href="">
            <li>Formatting Elements</li>
          </a>
          <a href="">
            <li>Comment</li>
          </a>
          <a href="">
            <li>Links</li>
          </a>
          <a href="">
            <li>Images</li>
          </a>
          <a href="">
            <li>Lists</li>
          </a>
          <a href="">
            <li>Inputs</li>
          </a>
          <a href="">
            <li>Button</li>
          </a>
          <a href="">
            <li>Select&Option</li>
          </a>
          <a href="">
            <li>Fieldset&Legend</li>
          </a>
          <a href="">
            <li>Tables</li>
          </a>
          <a href="">
            <li>Blockquote</li>
          </a>
          <a href="">
            <li>Form</li>
          </a>
          <a href="">
            <li>Audio</li>
          </a>
          <a href="">
            <li>Video</li>
          </a>
          <a href="">
            <li>Fieldset&Legend</li>
          </a>
          <a href="">
            <li>Form</li>
          </a>
          <a href="">
            <li>Exercises</li>
          </a>
          <a href="">
            <li>Quiz</li>
          </a>
        </ul>
      </div>
      <div className="htmlContent">
        <div className="introduction">
          <h3>Introduction</h3>
          <p>
            HTML stands for <b>H</b>yper <b>T</b>ext <b>M</b>arkup <b>L</b>
            anguage, it's a Design Language NOT a Programming Language, and it's
            considered as the Door of your Website, <br /> You can create a
            Website only Using this Language. <br /> but you can't control the
            Elements Colors or Position. <br /> So, HTML consists of a list of
            Elements (Tags) which can build the Structure of your Entire
            Website. Scroll down to figure out the most of these Elements.
          </p>
          <span>
            <b>Important : </b>
            <p>
              Keep in mind that the whole HTML code should be written inside{" "}
              <b>body</b> Tag
            </p>
          </span>
        </div>

        <div id="heading" className="heading">
          <h3>Heading</h3>
          <p>
            when we talk about Heading, we talk about the{" "}
            <b>h1,h2,h3,h4,h5,h6</b> tags:
          </p>
          <div className="heading__code">
            <div readOnly className="heading__input" name="" id="">
              &lt;<span className="tag">h1</span>&gt; this is h1 &lt;
              <span className="tag">/h1</span>&gt; <br /> &lt;
              <span className="tag">h2</span>&gt; this is h2 &lt;
              <span className="tag">/h2</span>&gt; <br />
              &lt;
              <span className="tag">h3</span>&gt; this is h3 &lt;
              <span className="tag">/h3</span>&gt; <br /> &lt;
              <span className="tag">h4</span>&gt; this is h4 &lt;
              <span className="tag">/h4</span>&gt; <br />
              &lt;
              <span className="tag">h5</span>&gt; this is h5 &lt;
              <span className="tag">/h5</span>&gt; <br />
              &lt;
              <span className="tag">h6</span>&gt; this is h6 &lt;
              <span className="tag">/h6</span>&gt; <br />
            </div>
            <div>Result &gt;&gt;&gt;</div>
            <div className="heading__output">
              <h1>this is h1</h1>
              <h2>this is h2</h2>
              <h3>this is h3</h3>
              <h4>this is h4</h4>
              <h5>this is h5</h5>
              <h6>this is h6</h6>
            </div>
          </div>
          <p>
            As you see, h1 bigger than h2 bigger than h3.....bigger than h6.
          </p>
          <div>
            <b>Note:</b> You can use other useful tags like (div, span,p....)
          </div>
        </div>
        <div className="formattingElements">
          <h3>Formatting Elements</h3>
          <p>
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
            <div>result &gt;&gt;&gt;</div>
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
              <br />
            </div>
          </div>
          <p>
            <b>Note :</b> if you write the code above, the result will showed up
            in one line, i used &lt;<span className="tag">br /</span>&gt; tag
            after every single tag just to split that line into many lines. to
            be able understand the difference between those tag.
          </p>
        </div>
        <div className="comments">
          <h3>Comments</h3>
          <p>
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
            <div>result &gt;&gt;&gt;</div>
            <div className="comments__output">
              <div>First line</div>
              <div>Third line</div>
              <div>strong</div>
            </div>
          </div>
          <p>
            As you see, the <b>Second line</b> didn't Showed in the right side.
            Because we wrapped it with Comment token. <br />
            So the bottom line is that everything you write inside the comment
            token will not be executed.
          </p>
        </div>
        <div className="links">
          <h3>Links</h3>
          <p>
            when we talk about link we talk about <b>a</b> tag. So we use{" "}
            <b>a</b> tag to visit one particular website. <br />
            inside <b>a</b> tag we write <b>href</b> property, to put the
            particular link into.
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
            <div>result &gt;&gt;&gt;</div>
            <div className="links__output">
              <a href="https://www.youtube.com/">Go to YouTube</a> <br />
              <a href="https://www.amazon.com/" target="_blank">
                Go to Amazon
              </a>{" "}
              <br />
              <a href="https://www.instagram.com/">Go to Instagram</a> <br />
            </div>
          </div>
          <p>
            As you can see, when you click on any particular link, that will
            lead you to the specific website, but in the <b>Same tab</b>. <br />
            So, if you want to open the link in a <b>new tab</b>, you must add
            <b> target="_blank"</b> after href. <br /> Example:{" "}
            <b>
              &lt;a href="https://www.amazon.com/" target="_blank"&gt;Go to
              Amazon&lt;/a&gt;
            </b>
          </p>
          <p>
            <b>Note : </b> we can also exploit <b>a</b> tag to scroll among our
            current page using <b>id</b> property.
          </p>
        </div>
        <div className="images">
          <h3>Images</h3>
          <p>
            We use <b>img</b> tag to display the images inside our websites.
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
            <div>result &gt;&gt;&gt;</div>
            <div className="images__output">
              <h2>the picture will display bellow</h2>
              <img
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
          </div>
          <p>
            <b>Note : </b> You can also save image inside your desktop then
            instead of typing <b>image adress</b> you can type{" "}
            <b>the name of image and its extension </b> like the following :{" "}
            <b>&lt;img src="imageName.extension</b> (the extensions like jpg,
            png, etc..), makes sure that the image is in the same folder that
            has html file (html file and the image must have the same path
            inside your desktop)
            <br />
          </p>
        </div>
        <div className="lists">
          <h3>Lists</h3>
          <p>
            we use Lists (ul,ol) to display a list of items, it usually used in
            the Header (the top part of your page). ans the Sidebar (the left or
            right side of your page).
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
            <div>result &gt;&gt;&gt;</div>
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
        <div className="inputs">
          <h3>Inputs</h3>
          <p>
            we often use input tag for registration purposes, because this tag
            is where we put out information such Full name,Email and
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
            <div>result &gt;&gt;&gt;</div>
            <div className="inputs__output">
              <h4>Enter your full name</h4>
              <input type="text" placeholder="Enter your full name" />
              <h4>Enter your Email</h4>
              <input type="email" placeholder="Enter your Email" />
              <h4>Enter your Password</h4>
              <input type="password" placeholder="Enter your Password" />
            </div>
          </div>
          <p>
            <b>Note : </b> When it comes to Email, you are allowed to enter
            Name, not only Eamil. that's because we didn't surround all those
            tags with <b>form tag</b>. <br />
            there are many others of input types like{" "}
            <b>number,radio,checkbox,button,range...etc.</b>
          </p>
        </div>
        <div className="buttons">
          <h3>Buttons</h3>
          <p>
            we often use <b>button tag</b> in Registration. So, when you type
            your information inside input tag, you will need to confirm those
            information, so that's when button comes in, you click on that
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
            <div>result &gt;&gt;&gt;</div>
            <div className="formatting__output">
              <b>click on this button to pop up a message</b>
              <br />
              <button onClick={() =>alert("the button is clicked")}>
                click here
              </button>
            </div>
          </div>
          <p>
           <b>Note : </b> in JavaScript we will find out more about button, So don't focus on it now
          </p>
        </div>
      </div>
    </div>
  );
}

export default Html;
