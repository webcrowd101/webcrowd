import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./JavaScript.css";
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
function JavaScript() {
  const [show, hide] = useState(false);
  let history = useHistory();

  //show and hide
  const ShowHide = () => {
    if (!show) {
      document.querySelector(".javascriptSidebar").style.width = "200px";
      document.querySelector(".javascriptSidebar ul").style.display = "block";
      document.querySelector(".javascriptContent").style.opacity = "0.5";
      hide(true);
    } else if (show) {
      document.querySelector(".javascriptSidebar").style.width = "60px";
      document.querySelector(".javascriptSidebar ul").style.display = "none";
      document.querySelector(".javascriptContent").style.opacity = "1";
      hide(false);
    } else {
    }
  };

  window.addEventListener("resize", function () {
    if (window.innerWidth > 871) {
      if (history.push(localStorage.getItem("current")) === "javascript5") {
        document.querySelector(".javascriptSidebar").style.width = "200px";
        document.querySelector(".javascriptSidebar ul").style.display = "block";
      }
      if (show) {
        try {
          document.querySelector(".javascriptSidebar").style.width = "200px";
          document.querySelector(".javascriptSidebar ul").style.display =
            "block";
        } catch (error) {}
      }
      if (show && window.innerWidth >= 871) {
        try {
          document.querySelector(".javascriptContent").style.opacity = "1";
          hide(false);
        } catch (error) {}
      }
    } else if (window.innerWidth <= 871) {
      if (history.push(localStorage.getItem("current")) === "javascript5") {
        document.querySelector(".javascriptSidebar").style.width = "60px";
        document.querySelector(".javascriptSidebar ul").style.display = "none";
      }
      if (show && window.innerWidth <= 871) {
        try {
          document.querySelector(".javascriptContent").style.opacity = "1";
          document.querySelector(".javascriptSidebar").style.width = "60px";
          document.querySelector(".javascriptSidebar ul").style.display =
            "none";
          hide(false);
        } catch (error) {}
      }
    } else {
    }
  });
  let javascriptQuizScore = 0;
  const javascriptCompletedQuiz = () => {
    if (document.querySelector(".javascriptQuestionOne").checked) {
      javascriptQuizScore++;
    }
    if (document.querySelector(".javascriptwrongOne1").checked) {
      document.querySelector(
        ".javascriptWrongAnswerOne1"
      ).style.backgroundColor = "red";
      document.querySelector(".javascriptAnswerOne").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".javascriptwrongOne2").checked) {
      document.querySelector(
        ".javascriptWrongAnswerOne2"
      ).style.backgroundColor = "red";
      document.querySelector(".javascriptAnswerTwo").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".javascriptQuestionTwo").checked) {
      javascriptQuizScore++;
    }
    if (document.querySelector(".javascriptwrongTwo1").checked) {
      document.querySelector(
        ".javascriptWrongAnswerTwo1"
      ).style.backgroundColor = "red";
      document.querySelector(".javascriptAnswerTwo").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".javascriptwrongTwo2").checked) {
      document.querySelector(
        ".javascriptWrongAnswerTwo2"
      ).style.backgroundColor = "red";
      document.querySelector(".javascriptAnswerTwo").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".javascriptQuestionThree").checked) {
      javascriptQuizScore++;
    }
    if (document.querySelector(".javascriptwrongThree1").checked) {
      document.querySelector(
        ".javascriptWrongAnswerThree1"
      ).style.backgroundColor = "red";
      document.querySelector(".javascriptAnswerThree").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".javascriptwrongThree2").checked) {
      document.querySelector(
        ".javascriptWrongAnswerThree2"
      ).style.backgroundColor = "red";
      document.querySelector(".javascriptAnswerThree").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".javascriptQuestionFour").checked) {
      javascriptQuizScore++;
    }
    if (document.querySelector(".javascriptwrongFour1").checked) {
      document.querySelector(
        ".javascriptWrongAnswerFour1"
      ).style.backgroundColor = "red";
      document.querySelector(".javascriptAnswerFour").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".javascriptwrongFour2").checked) {
      document.querySelector(
        ".javascriptWrongAnswerFour2"
      ).style.backgroundColor = "red";
      document.querySelector(".javascriptAnswerFour").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".javascriptQuestionFive").checked) {
      javascriptQuizScore++;
    }
    if (document.querySelector(".javascriptwrongFive").checked) {
      document.querySelector(
        ".javascriptWrongAnswerFive"
      ).style.backgroundColor = "red";
      document.querySelector(".javascriptAnswerFive").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".javascriptQuestionSix").checked) {
      javascriptQuizScore++;
    }
    if (document.querySelector(".javascriptwrongSix").checked) {
      document.querySelector(
        ".javascriptWrongAnswerSix"
      ).style.backgroundColor = "red";
      document.querySelector(".javascriptAnswerSix").style.backgroundColor =
        "green";
    }

    if (document.querySelector(".javascriptQuestionSeven").checked) {
      javascriptQuizScore++;
    }
    if (document.querySelector(".javascriptwrongSeven1").checked) {
      document.querySelector(
        ".javascriptWrongAnswerSeven1"
      ).style.backgroundColor = "red";
      document.querySelector(".javascriptAnswerSeven").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".javascriptwrongSeven2").checked) {
      document.querySelector(
        ".javascriptWrongAnswerSeven2"
      ).style.backgroundColor = "red";
      document.querySelector(".javascriptAnswerSeven").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".javascriptQuestionEight").checked) {
      javascriptQuizScore++;
    }
    if (document.querySelector(".javascriptwrongEight").checked) {
      document.querySelector(
        ".javascriptWrongAnswerEight"
      ).style.backgroundColor = "red";
      document.querySelector(".javascriptAnswerEight").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".javascriptQuestionNine").checked) {
      javascriptQuizScore++;
    }
    if (document.querySelector(".javascriptwrongNine1").checked) {
      document.querySelector(
        ".javascriptWrongAnswerNine1"
      ).style.backgroundColor = "red";
      document.querySelector(".javascriptAnswerNine").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".javascriptwrongNine2").checked) {
      document.querySelector(
        ".javascriptWrongAnswerNine2"
      ).style.backgroundColor = "red";
      document.querySelector(".javascriptAnswerNine").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".javascriptQuestionTen").checked) {
      javascriptQuizScore++;
    }
    if (document.querySelector(".javascriptwrongTen1").checked) {
      document.querySelector(
        ".javascriptWrongAnswerTen1"
      ).style.backgroundColor = "red";
      document.querySelector(".javascriptAnswerTen").style.backgroundColor =
        "green";
    }
    if (document.querySelector(".javascriptwrongTen2").checked) {
      document.querySelector(
        ".javascriptWrongAnswerTen2"
      ).style.backgroundColor = "red";
      document.querySelector(".javascriptAnswerTen").style.backgroundColor =
        "green";
    }
    $(".javascriptScore").text("your score is " + javascriptQuizScore);
    return $(".javascriptModal").show();
  };

  const hideModal = () => {
    $(".javascriptModal").hide();
    javascriptQuizScore = 0;
  };

  const refleshCurrentPage = () => {
    $(".second").addClass("active");
    if (show && window.innerWidth < 871) {
      document.querySelector(".javascriptSidebar").style.width = "60px";
      document.querySelector(".javascriptSidebar ul").style.display = "none";
      document.querySelector(".javascriptContent").style.opacity = "1";
      hide(false);
    }
  };

  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
  };
  useEffect(() => {
    history.push("JAVASCRIPT");
    $(".fourth").addClass("active");
    $(".first").removeClass("active");
    $(".third").removeClass("active");
    $(".second").removeClass("active");
  }, []);
  return (
    <div className="javascript">
      <div className="javascriptModal">
        <CloseIcon className="closeModal" onClick={hideModal} />
        <p className="javascriptScore"></p>
      </div>
      <div className="javascriptSidebar">
        <DehazeIcon onClick={ShowHide} className="showSideBar" />
        <ul>
          <a href="#introduction">
            <li>Introduction</li>
          </a>
          <a href="#variablesDeclaration">
            <li>Variables Declaration</li>
          </a>
          <a href="#jsComment">
            <li>Comment</li>
          </a>
          <a href="#dataTypes">
            <li>Data Types</li>
          </a>
          <a href="#typesConversion">
            <li>Types Conversion</li>
          </a>

          <a href="#ifElse">
            <li>if/else Statement</li>
          </a>
          <a href="#switch">
            <li>Switch</li>
          </a>
          <a href="#ternary">
            <li>Ternary</li>
          </a>
          <a href="#expressionsOperators">
            <li>Expressions & Operators</li>
          </a>
          <a href="#function">
            <li>Function</li>
          </a>
          <a href="#scope">
            <li>Scope</li>
          </a>
          <a href="#hoisting">
            <li>Hoisting</li>
          </a>
          <a href="#object">
            <li>Object</li>
          </a>
          <a href="#array">
            <li>Array</li>
          </a>
          <a href="#arrayFunctions">
            <li>Array Functions</li>
          </a>
          <a href="#stringMethods">
            <li>String Methods</li>
          </a>
          <a href="#loops">
            <li>Loops</li>
          </a>
          <a href="#dates">
            <li>Dates</li>
          </a>
          <a href="#dates">
            <li>Math</li>
          </a>
          <a href="#selectors">
            <li>Selectors</li>
          </a>
          <a href="#events">
            <li>Events</li>
          </a>
          <a href="#setTimeout">
            <li>SetTimeout</li>
          </a>
          <a href="#setIntervals">
            <li>SetIntervals</li>
          </a>

          <a href="#domManipulation">
            <li>DOM Manipulation</li>
          </a>

          <a href="#">
            <li>Exercises</li>
          </a>
          <a href="#">
            <li>Quiz</li>
          </a>
        </ul>
      </div>
      <div className="javascriptContent">
        <div id="introduction">
          <h3>Introduction</h3>
          <p>
            JavaScript is a Programming Language, and it's considered as one of
            the most popular programming languages worldwide. <br />
            Actually you can make an awesome website using only HTML and CSS,
            but in this case, the user can't make an action (he can only read),
            this is where Javascript comes in. <br />
            with JavaScript you can make your website more interractive by
            allowing users to makean action such as click, double click or
            something like that.
          </p>
          <p>
            <b>Note : </b> you can write JavaScript code in a separated file or
            within html file. <br />
            But it will be better if you create a separated JavaScript file.
            here is how to create a JavaScript file, and how to link it with
            html file <a href="">click here</a>
          </p>
        </div>
        <div id="variablesDeclaration">
          <h3>Variables Declaration</h3>
          <p>
            When we work with JavaScript, we usually work with data, that's why
            we use Variables. <br />
            we declare some variables to store data on, So we can use it later.{" "}
            <br />
            So, we can declare variables in three ways : <br />
            <ol style={{ marginLeft: "50px" }}>
              <li>var</li>
              <li>let</li>
              <li>const</li>
            </ol>
            you may be wondering, what is the defference between them ? <br />
            don't worry we will talk about this in{" "}
            <a href="#scopeHoisting">Scope & hoisting</a> section.
          </p>
          <p>
            <strong>Important : </strong> before you see the example bellow, you
            need to know how to work with the console. <br />
            if don't, <a href="">click here</a>
          </p>

          <b>Example : </b>
          <div className="javascript__code">
            <div className="javascript__input">
              <span className="declarationKey">var</span>
              <span className="variableName"> name = </span>
              <span>"mike"</span>;
              <div className="console">
                console.log(<span className="insideConsole">name</span>)
              </div>
              <br />
              <span className="declarationKey">let</span>
              <span className="variableName"> age = </span>
              <span>22</span>;
              <div className="console">
                console.log(<span className="insideConsole">age</span>)
              </div>
              <br />
              <span className="declarationKey">const</span>
              <span className="variableName"> country = </span>
              <span>"canada"</span>;
              <div className="console">
                console.log(<span className="insideConsole">country</span>)
              </div>
            </div>
            <div className="javascript__output">
              <div>mike</div>
              <div>22</div>
              <div>canada</div>
            </div>
          </div>
          <p>
            if you want to figure out the defferences between{" "}
            <b>var,let and const</b> <a href="">click here</a>
          </p>
        </div>
        <div id="jsComment">
          <h3>comment</h3>
          <p>
            As we mentioned before in we use comments to prevent code from
            execution. So, we set JavaScript code as a comment by adding two
            back slashes at the beginning of line.
          </p>

          <b>Example : </b>
          <div className="javascript__code">
            <div className="javascript__input">
              <span className="declarationKey">var</span>
              <span className="variableName"> name = </span>
              <span>"mike"</span>;
              <div className="console">
                <span style={{ color: "black" }}>//</span> console.log(
                <span className="insideConsole">name</span>)
              </div>
              <br />
              <span className="declarationKey">let</span>
              <span className="variableName"> age = </span>
              <span>22</span>;
              <div className="console">
                console.log(<span className="insideConsole">age</span>)
              </div>
              <br />
              <span className="declarationKey">const</span>
              <span className="variableName"> country = </span>
              <span>"canada"</span>;
              <div className="console">
                console.log(<span className="insideConsole">country</span>)
              </div>
            </div>
            <div className="javascript__output">
              <div>22</div>
              <div>canada</div>
            </div>
          </div>
          <p>
            As you can see, when we added // in front of console.log(name)
            thelast one didn't get executed.
          </p>
        </div>
        <div id="dataTypes">
          <h3>Data Types</h3>
          <p>
            there is a bunch of data types in javascript.
            <br />
            here is the list of them :
            <ul style={{ marginLeft: "50px" }}>
              <li>string</li>
              <li>number</li>
              <li>boolean</li>
              <li>undefined</li>
              <li>null</li>
              <li>object</li>
            </ul>
          </p>
          <p>
            <strong>Important : </strong> before you see the example bellow, you
            need to know how to work with the console. <br />
            if don't, <a href="">click here</a>
          </p>

          <b>Example : </b>
          <div className="javascript__code">
            <div className="javascript__input">
              <div>// string</div>
              <span className="declarationKey">var</span>
              <span className="variableName"> name = </span>
              <span>"mike"</span>;
              <div className="console">
                console.log(<span className="insideConsole">name</span>)
              </div>
              <br />
              <div>// number</div>
              <span className="declarationKey">let</span>
              <span className="variableName"> age = </span>
              <span>22</span>;
              <div className="console">
                console.log(<span className="insideConsole">age</span>)
              </div>
              <br />
              <div>// boolean</div>
              <span className="declarationKey">const</span>
              <span className="variableName"> isWorking = </span>
              <span>false</span>;
              <div className="console">
                console.log(<span className="insideConsole">isworking</span>)
              </div>
              <br />
              <div>// undefined</div>
              <span className="declarationKey">const</span>
              <span className="variableName"> country </span>;
              <div className="console">
                console.log(<span className="insideConsole">country</span>)
              </div>
              <br />
              <div>// null</div>
              <span className="declarationKey">const</span>
              <span className="variableName"> city =</span>
              <span>null</span>;
              <div className="console">
                console.log(<span className="insideConsole">city</span>)
              </div>
            </div>
            <div className="javascript__output">
              <div>mike</div>
              <div>22</div>
              <div>false</div>
              <div>undefined</div>
              <div>null</div>
            </div>
          </div>
        </div>
        <div id="typesConversion">
          <h3>Types Conversion</h3>
          <p>
            we can convert data from current type to another type using two
            types of conversion.
            <ol>
              <li>
                Implicit conversion :{" "}
                <span style={{ color: "purple" }}>
                  automatic type conversion
                </span>
              </li>
              <li>
                Explicit conversion :{" "}
                <span style={{ color: "purple" }}>manual type conversion</span>
              </li>
            </ol>
          </p>
          <b>Example : </b>
          <div className="javascript__code">
            <div className="javascript__input">
              <div>// Implicit conversion</div> <br />
              <span className="declarationKey">var</span>
              <span className="variableName"> number1 = </span>
              <span>2</span>; <br />
              <span className="declarationKey">var</span>
              <span className="variableName"> number2 = </span>
              <span>"3"</span>;
              <div className="console">
                console.log(
                <span className="insideConsole">number1 + number2</span>)
              </div>
              <br />
              <div>
                // Explicit conversion (convert from string to number){" "}
              </div>{" "}
              <br />
              <span className="declarationKey">let</span>
              <span className="variableName"> age = </span>
              <span>"20"</span>;
              <div className="console">
                console.log(
                <span className="insideConsole">
                  <span style={{ color: "purple" }}>Number</span>(age)
                </span>
                )
              </div>
              <br />
              <div>
                // Explicit conversion (convert from number to string)
              </div>{" "}
              <br />
              <span className="declarationKey">const</span>
              <span className="variableName"> languages = </span>
              <span>3</span>;
              <div className="console">
                console.log(
                <span className="insideConsole">
                  <span style={{ color: "purple" }}>String</span>(languages)
                </span>
                )
              </div>
            </div>
            <div className="javascript__output">
              <div>23 &nbsp; &nbsp;&nbsp; &nbsp; // "23"</div>
              <div>"20" &nbsp; &nbsp;&nbsp;// 20</div>
              <div>3 &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;// "3"</div>
            </div>
          </div>
          <p>
            <b>Note : </b> to check out the type of output variables type the
            folowing : <br />
            <div className="console">
              {" "}
              console.log( <span style={{ color: "purple" }}>typeof</span>
              <span style={{ color: "black" }}>(number1 + number2)</span> )
            </div>{" "}
            <div className="console">
              console.log(
              <span style={{ color: "purple" }}>typeof</span>(Number{" "}
              <span style={{ color: "black" }}>(age)</span> )
            </div>
            <div className="console">
              console.log(
              <span style={{ color: "purple" }}>typeof</span>(String{" "}
              <span style={{ color: "black" }}>(languages)</span> )
            </div>
          </p>
        </div>
        <div id="ifElse">
          <h3>if/else Statement</h3>
          <p>
            we use if/else statements when we have a condition.
            if(condition===true) then do some stuff.
          </p>

          <b>Example : </b>
          <div className="javascript__code">
            <div className="javascript__input">
              <span className="declarationKey">var</span>
              <span className="variableName"> name = </span>
              <span>"mike"</span>; <br /> <br />
              <span style={{ color: "blue" }}>if</span>( name{" "}
              <span style={{ color: "purple" }}>=== </span>"mike" ) &#123;{" "}
              <br />
              <div className="console">
                console.log(
                <span className="insideConsole">"his name is mike"</span>)
              </div>
              &#125;
              <br />
              <span style={{ color: "blue" }}>else</span> &#123; <br />
              <div className="console">
                console.log(
                <span className="insideConsole">"his is not mike"</span>)
              </div>
              &#125;
              <br />
            </div>
            <div className="javascript__output">
              <div>his name is mike</div>
            </div>
          </div>
          <p>
            we can also use <b>else if</b> between if and else statements, So if
            the first condition is not true then we will move on to the next
            condition (else if), if also is not true then we will move on to
            else statement.
          </p>
          <b>Example : </b>
          <div className="javascript__code">
            <div className="javascript__input">
              <span className="declarationKey">var</span>
              <span className="variableName"> name = </span>
              <span>"frank"</span>; <br /> <br />
              <span style={{ color: "blue" }}>if</span>( name{" "}
              <span style={{ color: "purple" }}>=== </span>"mike" ) &#123;{" "}
              <br />
              <div className="console">
                console.log(
                <span className="insideConsole">"his name is mike"</span>)
              </div>
              &#125;
              <br />
              <span style={{ color: "blue" }}>else if</span>( name{" "}
              <span style={{ color: "purple" }}>=== </span>"frank" ) &#123;{" "}
              <br />
              <div className="console">
                console.log(
                <span className="insideConsole">"his name is frank"</span>)
              </div>
              &#125;
              <br />
              <span style={{ color: "blue" }}>else</span> &#123; <br />
              <div className="console">
                console.log(
                <span className="insideConsole">"his is not mike"</span>)
              </div>
              &#125;
              <br />
            </div>
            <div className="javascript__output">
              <div>his name is frank</div>
            </div>
          </div>
          <p>
            we can use as much <b>else if</b> as we want.
          </p>
        </div>
        <div id="switch">
          <h3>switch Statement</h3>
          <p>
            switch is the same as <b>if/else</b>.
          </p>

          <b>Example : </b>
          <div className="javascript__code">
            <div className="javascript__input">
              <span className="declarationKey">var</span>
              <span className="variableName"> name = </span>
              <span>"frank"</span>; <br /> <br />
              <span style={{ color: "blue" }}>switch</span>( name ) &#123;{" "}
              <br />
              <div style={{ color: "red" }}>
                <span style={{ color: "black" }}>case</span> "mike" :
              </div>
              <div className="console">
                console.log(
                <span className="insideConsole">"his name is mike"</span>)
              </div>
              <span style={{ color: "green" }}>break</span>; <br /> &#125;
              <br />
              <div style={{ color: "red" }}>
                <span style={{ color: "black" }}>case</span> "frank" :
              </div>
              <div className="console">
                console.log(
                <span className="insideConsole">"his name is frank"</span>)
              </div>
              <span style={{ color: "green" }}>break</span>; <br /> &#125;
              <br />
              <div style={{ color: "red" }}>
                <span style={{ color: "black" }}>case</span> "sani" :
              </div>
              <div className="console">
                console.log(
                <span className="insideConsole">"his name is sani"</span>)
              </div>
              <span style={{ color: "green" }}>break</span>; <br /> &#125;
              <br />
              <div style={{ color: "red" }}>
                <span style={{ color: "black" }}>default</span> :
              </div>
              <div className="console">
                console.log(
                <span className="insideConsole">"his name is unknown"</span>)
              </div>
              <span style={{ color: "green" }}>break</span>; <br /> &#125;
              <br />
              &#125;
              <br />
            </div>
            <div className="javascript__output">
              <div>his name is frank</div>
            </div>
          </div>

          <p>
            <b>Note : </b>the defference between <b>if/else</b> and{" "}
            <b>switch</b> is that the first one can check a multiple of
            variables in the same time, while switch can't. if you didn't get
            it, <a href="">click here</a>
          </p>
        </div>
        <div id="ternary">
          <h3>ternary</h3>
          <p>
            we can assume that ternary is the alternative (or shorthand) of{" "}
            <b>if...else</b>. but it doesn't mean we should give up on the last
            one. because it still useful. <br />
          </p>

          <b>Example : </b>
          <div className="javascript__code">
            <div className="javascript__input">
              <span className="declarationKey">var</span>
              <span className="variableName"> name = </span>
              <span>"mike"</span>; <br /> <br />
              <span style={{ color: "red" }}>
                name<span style={{ color: "black" }}>===</span> "mike"{" "}
                <span style={{ color: "purple", fontSize: "22px" }}> ? </span>
              </span>
              <span className="console">
                console.log(
                <span className="insideConsole">"his name is mike"</span>)
              </span>
              <span style={{ color: "purple", fontSize: "22px" }}> : </span>
              <span className="console">
                console.log(
                <span className="insideConsole"> "his name is unknown"</span>)
              </span>
              <br />
            </div>
            <div className="javascript__output">
              <div>his name is mike</div>
            </div>
          </div>

          <p>
            So, we can consider that <b>?</b> reparates <b>if</b> and <b>:</b>{" "}
            reparates <b>else</b>. <br />
            we will dive deep into ternary in <a href="">
              Array Functions
            </a> and <a href="">String Methods</a>.
          </p>
        </div>
        <div id="expressionsOperators">
          <h3>Expressions & Operators</h3>
          <p>
            As a Programmer, you need to be aware of Operators. So here are the
            types of Operators in programming :
          </p>

          <b>Arithmetic Operators </b>
          <div className="javascript__code">
            <div className="javascript__input">
              <span style={{ color: "orange" }}>// Addition</span> <br />
              <span className="declarationKey">var</span>
              <span className="variableName"> num1 = </span>
              <span>2</span>; <br />
              <span className="declarationKey">var</span>
              <span className="variableName"> num2 = </span>
              <span>3</span>; <br />
              <span className="console">
                console.log(
                <span className="insideConsole">num1 + num2</span>)
              </span>{" "}
              <br />
              <br />
              <span style={{ color: "orange" }}>// Substraction</span> <br />
              <span className="declarationKey">var</span>
              <span className="variableName"> num3 = </span>
              <span>10</span>; <br />
              <span className="declarationKey">var</span>
              <span className="variableName"> num4 = </span>
              <span>4</span>; <br />
              <span className="console">
                console.log(
                <span className="insideConsole">num3 - num4</span>)
              </span>{" "}
              <br />
              <br />
              <span style={{ color: "orange" }}>// Multiplication</span> <br />
              <span className="declarationKey">var</span>
              <span className="variableName"> num5 = </span>
              <span>4</span>; <br />
              <span className="declarationKey">var</span>
              <span className="variableName"> num6 = </span>
              <span>3</span>; <br />
              <span className="console">
                console.log(
                <span className="insideConsole">num5 * num6</span>)
              </span>{" "}
              <br />
              <br />
              <span style={{ color: "orange" }}>// Division</span> <br />
              <span className="declarationKey">var</span>
              <span className="variableName"> num7 = </span>
              <span>21</span>; <br />
              <span className="declarationKey">var</span>
              <span className="variableName"> num8 = </span>
              <span>3</span>; <br />
              <span className="console">
                console.log(
                <span className="insideConsole">num7 / num8</span>)
              </span>{" "}
              <br />
              <br />
              <span style={{ color: "orange" }}>
                // Modulus (the rest of division oparation)
              </span>{" "}
              <br />
              <span className="declarationKey">var</span>
              <span className="variableName"> num9 = </span>
              <span>11</span>; <br />
              <span className="declarationKey">var</span>
              <span className="variableName"> num10 = </span>
              <span>4</span>; <br />
              <span className="console">
                console.log(
                <span className="insideConsole">num9 % num10</span>)
              </span>{" "}
              <br />
              <br />
              <span style={{ color: "orange" }}>// Increment</span> <br />
              <span className="declarationKey">var</span>
              <span className="variableName"> num11 = </span>
              <span>21</span>; <br />
              <span className="console">
                console.log(
                <span className="insideConsole">++num11</span>)
              </span>{" "}
              <br />
              <br />
              <span style={{ color: "orange" }}>// Decrement</span> <br />
              <span className="declarationKey">var</span>
              <span className="variableName"> num12 = </span>
              <span>14</span>; <br />
              <span className="console">
                console.log(
                <span className="insideConsole">--num12</span>)
              </span>{" "}
              <br />
              <br />
            </div>
            <div className="javascript__output">
              <div>5</div>
              <div>6</div>
              <div>12</div>
              <div>7</div>
              <div>3</div>
              <div>22</div>
              <div>13</div>
            </div>
          </div>
          <b>Assignment Operators</b>

          <p>
            We won't discuss about all Assignment Operators, but only the most
            useful ones. <br />
            So let's assume <b>a = 12</b> and <b>b = 4</b>, the following table
            will explain the Assignment Oparators :
            <table className="assignmentOperatorsExplanation">
              <tr>
                <th>operator</th>
                <th>Example</th>
                <th>Same as</th>
                <th>final value of a</th>
              </tr>
              <tr>
                <td>=</td>
                <td>a = b</td>
                <td>a = b</td>
                <td>a = 4</td>
              </tr>
              <tr>
                <td>+=</td>
                <td>a += b</td>
                <td>a = a + b</td>
                <td>a = 16</td>
              </tr>
              <tr>
                <td>-=</td>
                <td>a -= b</td>
                <td>a = a - b</td>
                <td>a = 8</td>
              </tr>
              <tr>
                <td>*=</td>
                <td>a *= b</td>
                <td>a = a * b</td>
                <td>a = 48</td>
              </tr>
              <tr>
                <td>/=</td>
                <td>a /= b</td>
                <td>a = a / b</td>
                <td>a = 3</td>
              </tr>
              <tr>
                <td>%=</td>
                <td>a %= b</td>
                <td>a = a % b</td>
                <td>a = 0</td>
              </tr>
            </table>
          </p>
        </div>
        <div id="function">
          <h3>function</h3>
          <p>
            functions help you to write less and do more. So, instead of writing
            the same code for many times, you can just write your code one time
            inside function. then call this function whenever you want and your
            code will get executed. <br />
            <b>Note : </b> ther are two types of functions. <br />
            <ol style={{ marginLeft: "50px" }}>
              <li>function without parameters</li>
              <li>function with parameters</li>
            </ol>
          </p>

          <b>function without parameters : </b>
          <div className="javascript__code">
            <div className="javascript__input">
              <span className="declarationKey">function</span>
              <span className="variableName"> ShowInConsole () </span>
              &#123;
              <br />
              <span className="console">
                console.log(
                <span className="insideConsole"> "hello" </span>)
              </span>{" "}
              <br />
              &#125;
              <br />
              <br />
              <span className="variableName"> ShowInConsole() </span>
              <br />
              <span className="variableName"> ShowInConsole() </span>
              <br />
              <span className="variableName"> ShowInConsole() </span>
              <br />
            </div>
            <div className="javascript__output">
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
            </div>
          </div>
          <p>
            As you can see, we don need to rewrite our code whenever we want to
            duplicate it, we can just write it inside a function and call this
            function whenever you want.
          </p>
          <b>function with parameters : </b>
          <p>
            So, let's assume you want to sum up whatever the numbers that user
            get entered. in this case we need to pass parameters to the function
            like the following :
          </p>
          <div className="javascript__code">
            <div className="javascript__input">
              <span className="declarationKey">function</span>
              <span className="variableName">
                {" "}
                ShowInConsole ( <span style={{ color: "red" }}>
                  number1
                </span>{" "}
                <b>,</b> <span style={{ color: "red" }}>number2</span>){" "}
              </span>
              &#123;
              <br />
              <span className="console">
                console.log(
                <span className="insideConsole"> number1 + number2</span>)
              </span>{" "}
              <br />
              &#125;
              <br />
              <br />
              <span className="variableName">
                {" "}
                ShowInConsole(<span style={{ color: "blue" }}>2 , 4</span>){" "}
              </span>
              <br />
              <span className="variableName">
                {" "}
                ShowInConsole(<span style={{ color: "blue" }}>
                  10 , 2
                </span>){" "}
              </span>
              <br />
              <span className="variableName">
                {" "}
                ShowInConsole(<span style={{ color: "blue" }}>
                  45 , 3
                </span>){" "}
              </span>
              <br />
            </div>
            <div className="javascript__output">
              <div>6</div>
              <div>12</div>
              <div>48</div>
            </div>
          </div>
          <p>
            you can pass as much parameters as you want, and handle them as you
            like. <a href="">click here</a> for more examples. <br />
            <b>Note : </b>there are three ways for declaring a function.{" "}
            <a href="">click here</a> to figure it out. <br />
          </p>
          <p>
            <b>Important! </b>: in the examples above we didn't use{" "}
            <b>return</b> key inside the function. this key is very important in
            function. <a href="">click here</a> to figure it out, and you will
            find a bunch of examples.
          </p>
        </div>
        <div id="scope">
          <h3>scope</h3>
          <p>
            there are three types of scope :
            <ol style={{ marginLeft: "50px" }}>
              <li>Global Scope</li>
              <li>Function Scope</li>
              <li>Block Scope</li>
            </ol>
          </p>

          <b>Global Scope :</b>
          <p>
            in global scope you can create a variables and get access them
            anywhere in your code. it's like a global varibale.
          </p>
          <div className="javascript__code">
            <div className="javascript__input">
              <span className="declarationKey">let</span>
              <span className="variableName"> age = </span>
              <span>22</span>; <br /> <br />
              <span style={{ color: "blue" }}>
                <span style={{ color: "purple" }}>function</span> showAge()
                &#123; <br /> <span style={{ color: "red" }}>return </span>age ;{" "}
                <br />
                &#125;
              </span>{" "}
              <br />
              <br />
              <div className="console">
                console.log(<span style={{ color: "blue" }}> showAge() </span>){" "}
                <br />
                <br />
              </div>
            </div>
            <div className="javascript__output">
              <div>22</div>
            </div>
          </div>

          <p>
            So, in this example we used <b>return</b> key, So this function
            returns 22, then we displayed the returned value (22) inside the
            console <b>(this is why we wrapped showAge() with console.log())</b>
            .
          </p>
          <b>Function Scope :</b>
          <p>
            in function scope you can create a variables inside a function and
            get access them only inside that function.
          </p>
          <div className="javascript__code">
            <div className="javascript__input">
              <span style={{ color: "blue" }}>
                <span style={{ color: "purple" }}>function</span> showAge()
                &#123; <br />
                <span className="declarationKey">let</span>
                <span className="variableName"> country = </span>
                <span className="variableValue"> "Morocco"; </span> <br />
                &#125;
              </span>{" "}
              <br />
              <br />
              <div className="console">
                console.log(<span style={{ color: "blue" }}> country </span>){" "}
                <br />
                <br />
              </div>
            </div>
          </div>
          <p>
            in this case you will get an Error message says that :{" "}
            <b>country</b> is not defined. <br />
            that's because we declared the variable (country) inside a function
            and tried to access it from outside the function. if that didn't
            make sense, <a href="">click here</a> to learn more about scope.
          </p>

          <b>Block Scope :</b>
          <p>
            block scope is like if/elese , switch , loop...,and it's very
            similar to function scope.
          </p>
          <div className="javascript__code">
            <div className="javascript__input">
              <span style={{ color: "blue" }}>
                <span style={{ color: "purple" }}>if </span>
                &#123; <br />
                <span className="declarationKey">let</span>
                <span className="variableName"> name = </span>
                <span className="variableValue"> "khalid"; </span> <br />
                &#125;
              </span>{" "}
              <br />
              <br />
              <div className="console">
                console.log(<span style={{ color: "blue" }}> name </span>){" "}
                <br />
                <br />
              </div>
            </div>
          </div>
          <p>
            {" "}
            in this case you will also get an Error message says that :{" "}
            <b>name</b> is not defined. <br />
            that's because we declared the variable (name) inside if statement
            and tried to access it from outside. <a href="">click here</a> to
            learn more about scope.
          </p>
        </div>
        <div id="hoisting">
          <h3>hoisting</h3>
          <p>
            {" "}
            the hoisting concept relates to variables and functions declaration.
            So, you may not understand this concept in this article, that's why
            we specified <a href="">this video</a> just to make it clear for
            you.
          </p>
        </div>
        <div id="object">
          <h3>object</h3>
          <p>
            objects as we mentioned previously in{" "}
            <a href="#dataTypes">data types</a> section is a data type. <br />
            inside objects we can store a multiple of data and data types (we
            can store string, numbers,undefined,null and even objects
            themselves...etc). <br />
            <b>Note : </b>we can create objects with two defferent ways
            (traditional way and modern way). but as we know the new ways are
            better, that's why we will ignore the traditional one. and focus on
            the new way.
          </p>

          <div className="javascript__code">
            <div className="javascript__input">
              <span className="declarationKey">const</span>
              <span className="variableName"> Person = </span>
              &#123;
              <br />
              <span className="objectProperty">name </span>:{" "}
              <span className="propertyValue">"khalid"</span> ,
              <br />
              <span className="objectProperty">age </span>:{" "}
              <span className="propertyValue">20</span> ,
              <br />
              <span className="objectProperty">isWorking </span>:{" "}
              <span className="propertyValue">false</span> ,
              <br />
              <span className="objectProperty">country </span>:{" "}
              <span className="propertyValue">"canada"</span> ,
              <br />
              &#125;
              <br />
              <br />
              <span className="console">
                {" "}
                console.log(<span className="insideConsole"> Person.name </span>
                ){" "}
              </span>
              <br />
              <span className="console">
                {" "}
                console.log(<span className="insideConsole">
                  {" "}
                  Person.age{" "}
                </span>){" "}
              </span>
              <br />
            </div>
            <div className="javascript__output">
              <div>khalid</div>
              <div>20</div>
            </div>
          </div>
          <p>
            As you can see, you can set any data types into an object, and get
            access them easily. <br />
            watch out <a href="">this video</a> for more examples.
          </p>
        </div>
        <div id="array">
          <h3>array</h3>
          <p>
            array is considered as the most important concept in programming,
            because it allows you to store a bunch of data from a defferent
            types. <br />
            Array can also include another array. like the following :
          </p>

          <div className="javascript__code">
            <div className="javascript__input">
              <span className="declarationKey">const</span>
              <span className="variableName"> arr = </span>[{" "}
              <span style={{ color: "purple" }}>
                "mike" <b>,</b> 22 <b>,</b> false <b>,</b> [ "frank" <b>,</b>{" "}
                true ]
              </span>{" "}
              ]
              <br />
              <br />
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  arr[<span style={{ color: "black" }}>0</span>]{" "}
                </span>
                ){" "}
              </span>
              <br />
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  arr[<span style={{ color: "black" }}>2</span>]{" "}
                </span>
                ){" "}
              </span>
              <br />
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  arr<span style={{ color: "black" }}>[3][0]</span>{" "}
                </span>
                ){" "}
              </span>
              <br />
            </div>
            <div className="javascript__output">
              <div>mike</div>
              <div>false</div>
              <div>frank</div>
            </div>
          </div>
          <p>
            for the last value, you may be wondering how did we get it. So when
            you write <b>arr[3]</b> inside console, you only will get the sub
            array, but if you want to display <b>frank</b> you must add another
            square brackets in put 0 inside like this : <b>arr[3][0]</b>. <br />
            for more examplesand exercises, <a href="">click here</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default JavaScript;
