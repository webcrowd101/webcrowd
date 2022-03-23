import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./JavaScript.css";
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
function JavaScript() {
  const [show, hide] = useState(false);
  let history = useHistory();

   useEffect(() => {
     document.title = "Web Crowd - JAVASCRIPT";
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
  const unclickAble = () => {
    $(".unclickAble").off("click", "li");
  };

  window.addEventListener("resize", function () {
    if (window.innerWidth > 871) {
      if (history.push(localStorage.getItem("current")) === "JAVASCRIPT") {
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
      if (history.push(localStorage.getItem("current")) === "javascript5") {
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
    $(".javascriptQuiz__content input").prop("disabled", "false");
    return $(".Modal").show();
  };

  const hideModal = () => {
    $(".Modal").hide();
    javascriptQuizScore = 0;
  };

  const refleshCurrentPage = (e) => {
    $(".fourth").addClass("active");
    if (show && window.innerWidth < 871) {
      document.querySelector(".Sidebar").style.width = "40px";
      document.querySelector(".Sidebar ul").style.display = "none";
      document.querySelector(".Content").style.display = "block";
      document.querySelector(".OpenSideBar").style.margin = "0px";
      document.querySelector(".Content").style.opacity = "1";
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
    history.push("JAVASCRIPT");
    $(".fourth").addClass("active");
    $(".first").removeClass("active");
    $(".third").removeClass("active");
    $(".second").removeClass("active");
  }, []);

  //change web crowd color

  const changeColor = () => {
    let webCrowdTest = document.querySelector(".webCrowdTest");
    webCrowdTest.style.color = "red";
  };

 
  const addItemsToUl = () => {
    let input = document.querySelector(".itemsInput");
    let liContainer = document.querySelector(".liContainer");
    let createdLi = document.createElement("li");
    createdLi.style.color = "blue";
    createdLi.textContent = input.value;
    liContainer.append(createdLi);
    input.value = "";
  };

  //Calculator
  const calculator = () => {
    let firstNumber = document.querySelector(".firstNumber");
    let secondNumber = document.querySelector(".secondNumber");
    let operation = document.querySelector(".operation");
    let result = document.querySelector(".result");

    switch (firstNumber.value) {
      case "":
        firstNumber.value = 0;
        break;

      default:
        break;
    }
    switch (secondNumber.value) {
      case "":
        secondNumber.value = 0;
        break;

      default:
        break;
    }
    switch (operation.value) {
      case "addition":
        result.value = Number(firstNumber.value) + Number(secondNumber.value);
        break;
      case "subtraction":
        result.value = Number(firstNumber.value) - Number(secondNumber.value);
        break;

      case "multiplication":
        result.value = Number(firstNumber.value) * Number(secondNumber.value);
        break;
      case "division":
        result.value = Number(firstNumber.value) / Number(secondNumber.value);
        break;
      case "selectOperation":
        result.value = "";

        break;

      default:
        break;
    }
  };
  const resetInputs = () => {
    document.querySelector(".firstNumber").value = "";
    document.querySelector(".secondNumber").value = "";
    document.querySelector(".operation").value = "selectOperation";
    document.querySelector(".result").value = "";
  };

  //addItems
  const addItems = () => {
    let newItemsContainer = document.querySelector(".newItemsContainer");
    let newItemsInput = document.querySelector(".newItemsInput");
    if (newItemsInput.value !== "") {
      let createdItem = document.createElement("li");
      createdItem.style.padding = "10px";
      createdItem.style.margin = "5px 0";
      createdItem.style.listStyle = "none";
      createdItem.style.backgroundColor = "rgb(189, 188, 188)";
      createdItem.textContent = newItemsInput.value;
      newItemsContainer.append(createdItem);
      newItemsInput.value = "";
    } else {
    }
  };

  //timer
  let myTimer;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  const timer = () => {
    let timeContainer = document.querySelector(".timeContainer");
    let startTimerBtn = document.querySelector(".startTimerBtn");
    if (startTimerBtn.textContent === "Start") {
      hours = 0;
      minutes = 0;
      seconds = 0;

      myTimer = setInterval(() => {
        timeContainer.textContent = `${hours} : ${minutes} : ${seconds}`;
        ++seconds;
        startTimerBtn.textContent = "Stop";
        if (seconds === 59) {
          ++minutes;
          seconds = 0;
        }
        if (minutes === 59 && seconds === 59) {
          ++hours;
          minutes = 0;
          seconds = 0;
        }
      }, 1000);
    } else {
      clearInterval(myTimer);
      startTimerBtn.textContent = "Start";
    }
  };
  //reset timer
  const resetTimer = () => {
    let timeContainer = document.querySelector(".timeContainer");
    let startTimerBtn = document.querySelector(".startTimerBtn");
    startTimerBtn.textContent = "Start";
    timeContainer.textContent = "--:--:--";
    clearInterval(myTimer);
  };

  //generateNumbers
  const generateNumbers = () => {
    let numbersContainer = document.querySelector(".numbersContainer");
    numbersContainer.textContent = Math.floor(Math.random() * 100);
  };

  //jsQuiz
  let javaScriptQuizScore;
  const javaScriptCompletedQuiz = () => {
    javaScriptQuizScore = 0;
    if (document.querySelector(".javaScriptQuestionOne").checked) {
      javaScriptQuizScore++;
    }

    if (document.querySelector(".javaScriptQuestionTwo").checked) {
      javaScriptQuizScore++;
    }

    if (document.querySelector(".javaScriptQuestionThree").checked) {
      javaScriptQuizScore++;
    }

    if (document.querySelector(".javaScriptQuestionFour").checked) {
      javaScriptQuizScore++;
    }

    if (document.querySelector(".javaScriptQuestionFive").checked) {
      javaScriptQuizScore++;
    }

    if (document.querySelector(".javaScriptQuestionSix").checked) {
      javaScriptQuizScore++;
    }

    if (document.querySelector(".javaScriptQuestionSeven").checked) {
      javaScriptQuizScore++;
    }

    if (document.querySelector(".javaScriptQuestionEight").checked) {
      javaScriptQuizScore++;
    }

    if (document.querySelector(".javaScriptQuestionNine").checked) {
      javaScriptQuizScore++;
    }

    if (document.querySelector(".javaScriptQuestionTen").checked) {
      javaScriptQuizScore++;
    }

    document.querySelectorAll(".cancelIcon").forEach((rightCancel) => {
      rightCancel.style.setProperty("display", "inline", "important");
    });

    document.querySelectorAll(".doneIcon").forEach((rightCancel) => {
      rightCancel.style.setProperty("display", "inline", "important");
    });

    $(".javaScriptScore").text("your score is " + javaScriptQuizScore);
    return $(".Modal").show();
  };

  const JavaScriptHideModal = () => {
    $(".Modal").hide();
    javaScriptQuizScore = 0;
  };

  return (
    <div className="javascript">
      <div className="Modal">
        <CloseIcon className="closeModal" onClick={JavaScriptHideModal} />
        <p className="javaScriptScore"></p>
      </div>
      <div className="Sidebar">
        {/* <DehazeIcon onClick={ShowHide} className="showSideBar" /> */}
        <DehazeIcon onClick={ShowHide} className="OpenSideBar" />
        <ul className="List">
          <a onClick={refleshCurrentPage} href="#introduction">
            <li>Introduction</li>
          </a>
          <a onClick={refleshCurrentPage} href="#variables">
            <li>Variables</li>
          </a>
          <a onClick={refleshCurrentPage} href="#jsComment">
            <li>Comment</li>
          </a>
          <a onClick={refleshCurrentPage} href="#dataTypes">
            <li>Data Types</li>
          </a>
          <a onClick={refleshCurrentPage} href="#typesConversion">
            <li>Types Conversion</li>
          </a>

          <a onClick={refleshCurrentPage} href="#ifElse">
            <li>if/else Statement</li>
          </a>
          <a onClick={refleshCurrentPage} href="#switch">
            <li>Switch</li>
          </a>
          <a onClick={refleshCurrentPage} href="#ternary">
            <li>Ternary</li>
          </a>
          <a onClick={refleshCurrentPage} href="#loops">
            <li>Loops</li>
          </a>
          <a onClick={refleshCurrentPage} href="#Operators">
            <li>Operators</li>
          </a>
          <a onClick={refleshCurrentPage} href="#function">
            <li>Function</li>
          </a>
          <a onClick={refleshCurrentPage} href="#scope">
            <li>Scope</li>
          </a>

          <a onClick={refleshCurrentPage} href="#object">
            <li>Object</li>
          </a>
          <a onClick={refleshCurrentPage} href="#array">
            <li>Array</li>
          </a>
          <a onClick={refleshCurrentPage} href="#arrayFunctions">
            <li>Array Functions</li>
          </a>
          <a onClick={refleshCurrentPage} href="#stringMethods">
            <li>String Methods</li>
          </a>

          <a onClick={refleshCurrentPage} href="#date">
            <li>Dates</li>
          </a>
          <a onClick={refleshCurrentPage} href="#math">
            <li>Math</li>
          </a>
          <a onClick={refleshCurrentPage} href="#setTimeout">
            <li>setTimeout</li>
          </a>
          <a onClick={refleshCurrentPage} href="#setInterval">
            <li>setIntervals</li>
          </a>
          <a onClick={refleshCurrentPage} href="#domManipulation">
            <li>DOM Manipulation</li>
          </a>

          <a onClick={refleshCurrentPage} href="#Exercises">
            <li>Exercises</li>
          </a>
          <a onClick={refleshCurrentPage} href="#javascriptQuiz">
            <li>Quiz</li>
          </a>
        </ul>
      </div>
      <div className="Content">
        <div className="addPaddingToSection" id="introduction">
          <h3 className="sectionTittle">Introduction</h3>
          <p className="clickHere">
            JavaScript is a Programming Language, and it's considered as one of
            the most popular programming languages worldwide. <br />
            Actually you can make an awesome website using only HTML and CSS,
            but in this case, the user can't make an action (he can only read),
            this is when Javascript comes in. <br />
            with JavaScript you can make your website more interactive by
            allowing users to make an action such as click, double click or
            something like that. <br />
            <b className="note">Note : </b> you can write JavaScript code in a
            separated file or within html file. But it will be better if you
            create a separated JavaScript file. here is how to create a
            JavaScript file, and how to link it with html file{" "}
            <a
              href="https://www.youtube.com/watch?v=N8SZLRqkhm4&list=PLBRc8och4vXULbcJY-o1LMBLS5s2gMmom&index=8"
              target="_blank"
            >
              click here
            </a>
            .
          </p>
        </div>
        <div className="addPaddingToSection" id="variables">
          <h3 className="sectionTittle">Variables</h3>
          <p className="clickHere">
            When we work with JavaScript, we usually work with data, that's why
            we use Variables. we declare some variables to store data on, So we
            can use it later. <br /> We can declare variables using three
            keyWords : <b>var</b> , <b>let</b> and <b>const</b>. <br />
            <ul style={{ marginLeft: "50px", pointerEvents: "none" }}>
              <li>
                Use <b>let</b> keyWord when you realize that the value of
                variable will change.
              </li>
              <li>
                Use <b>const</b> for every other variable.
              </li>
              <li>
                Don't use <b>var</b>.
              </li>
            </ul>
            <b className="importants">Important : </b> before you see the
            example bellow, you need to know how to work with the console, if
            don't,{" "}
            <a
              href="https://www.youtube.com/watch?v=kl61pSQNf3I&list=PLBRc8och4vXULbcJY-o1LMBLS5s2gMmom&index=9"
              target="_blank"
            >
              click here
            </a>
            .
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">let</span>
              <span className="variableName"> name = </span>
              <span>"mike"</span>;
              <div className="console">
                console.log(<span className="insideConsole">name</span>)
              </div>
              <span className="declarationKey">let</span>
              <span className="variableName"> age = </span>
              <span>22</span>;
              <div className="console">
                console.log(<span className="insideConsole">age</span>)
              </div>
              <span className="declarationKey">const</span>
              <span className="variableName"> country = </span>
              <span>"canada"</span>;
              <div className="console">
                console.log(<span className="insideConsole">country</span>)
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>mike</div>
              <div>22</div>
              <div>canada</div>
            </div>
          </div>
        </div>
        <div className="addPaddingToSection" id="jsComment">
          <h3 className="sectionTittle">comment</h3>
          <p className="clickHere">
            As we mentioned before, we use comments to prevent code from
            execution. So, we set JavaScript code as a comment by adding two
            back slashes at the beginning of line.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">let</span>
              <span className="variableName"> name = </span>
              <span>"mike"</span>;
              <div className="console">
                <span style={{ color: "black" }}>//</span> console.log(
                <span className="insideConsole">name</span>)
              </div>
              <span className="declarationKey">let</span>
              <span className="variableName"> age = </span>
              <span>22</span>;
              <div className="console">
                console.log(<span className="insideConsole">age</span>)
              </div>
              <span className="declarationKey">const</span>
              <span className="variableName"> country = </span>
              <span>"canada"</span>;
              <div className="console">
                console.log(<span className="insideConsole">country</span>)
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>22</div>
              <div>canada</div>
            </div>
          </div>
          <p className="clickHere">
            As you can see, when we added <b>//</b> in front of{" "}
            <b>console.log(name)</b>, this line didn't get executed.
          </p>
        </div>
        <div className="addPaddingToSection" id="dataTypes">
          <h3 className="sectionTittle">Data Types</h3>
          <p className="clickHere">
            there is a bunch of data types in javascript. here is the list of
            them :
            <ul style={{ marginLeft: "50px", pointerEvents: "none" }}>
              <li>string</li>
              <li>number</li>
              <li>boolean</li>
              <li>undefined</li>
              <li>null</li>
              <li>object</li>
            </ul>
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <div style={{ color: "gray" }}>// string</div>
              <span className="declarationKey">let</span>
              <span className="variableName"> name = </span>
              <span>"mike"</span>;
              <div className="console">
                console.log(<span className="insideConsole">name</span>)
              </div>
              <div style={{ color: "gray" }}>// number</div>
              <span className="declarationKey">let</span>
              <span className="variableName"> age = </span>
              <span>22</span>;
              <div className="console">
                console.log(<span className="insideConsole">age</span>)
              </div>
              <div style={{ color: "gray" }}>// boolean</div>
              <span className="declarationKey">const</span>
              <span className="variableName"> isWorking = </span>
              <span>false</span>;
              <div className="console">
                console.log(<span className="insideConsole">isworking</span>)
              </div>
              <div style={{ color: "gray" }}>// undefined</div>
              <span className="declarationKey">const</span>
              <span className="variableName"> country </span>;
              <div className="console">
                console.log(<span className="insideConsole">country</span>)
              </div>
              <div style={{ color: "gray" }}>// null</div>
              <span className="declarationKey">const</span>
              <span className="variableName"> city =</span>
              <span>null</span>;
              <div className="console">
                console.log(<span className="insideConsole">city</span>)
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>mike</div>
              <div>22</div>
              <div>false</div>
              <div>undefined</div>
              <div>null</div>
            </div>
          </div>
        </div>
        <div className="addPaddingToSection" id="typesConversion">
          <h3 className="sectionTittle">Types Conversion</h3>
          <p className="clickHere">
            we can convert data from current type to another type using two
            types of conversion.
            <ol style={{ marginLeft: "50px", pointerEvents: "none" }}>
              <li>
                Implicit conversion :{" "}
                <span style={{ color: "purple" }}>
                  automatic type conversion.
                </span>
              </li>
              <li>
                Explicit conversion :{" "}
                <span style={{ color: "purple" }}>manual type conversion.</span>
              </li>
            </ol>
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <div style={{ color: "gray" }}>// Implicit conversion</div>
              <span className="declarationKey">let</span>
              <span className="variableName"> number1 = </span>
              <span>2</span>; <br />
              <span className="declarationKey">let</span>
              <span className="variableName"> number2 = </span>
              <span>"3"</span>;
              <div className="console">
                console.log(
                <span className="insideConsole">number1 + number2</span>)
              </div>
              <div style={{ color: "gray" }}>
                // Explicit conversion (convert from string to number){" "}
              </div>{" "}
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
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>23 &nbsp; &nbsp;&nbsp; &nbsp; (string)</div>
              <div>20 &nbsp; &nbsp;&nbsp;(number)</div>
              <div>3 &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;(string)</div>
            </div>
          </div>
          <p className="clickHere">
            <b className="note">Note : </b> to check out the type of output
            variables type the following : <br />
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
        <div className="addPaddingToSection" id="ifElse">
          <h3 className="sectionTittle">if/else Statement</h3>
          <p className="clickHere">
            we use <b>if/else</b> statements when we have a condition.{" "}
            <b>if(condition === true)</b> then do some stuff.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">let</span>
              <span className="variableName"> name = </span>
              <span>"mike"</span>; <br />
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
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>his name is mike</div>
            </div>
          </div>
          <p className="clickHere">
            we can also use <b>else if</b> between if and else statements, So if
            the first condition is not true then we will move on to the next
            condition (else if), if also is not true then we will move on to
            else statement.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">let</span>
              <span className="variableName"> name = </span>
              <span>"frank"</span>; <br />
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
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>his name is frank</div>
            </div>
          </div>
          <p className="clickHere">
            we can use as much <b>else if</b> as we want.
          </p>
        </div>
        <div className="addPaddingToSection" id="switch">
          <h3 className="sectionTittle">switch Statement</h3>
          <p className="clickHere">
            switch is the same as <b>if/else</b>.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">let</span>
              <span className="variableName"> name = </span>
              <span>"frank"</span>; <br />
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
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>his name is frank</div>
            </div>
          </div>
        </div>
        <div className="addPaddingToSection" id="ternary">
          <h3 className="sectionTittle">ternary</h3>
          <p className="clickHere">
            we can assume that ternary is the alternative (or shorthand) of{" "}
            <b>if/else</b>. but it doesn't mean we should give up on the last
            one. because it's still useful. <br />
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">let</span>
              <span className="variableName"> name = </span>
              <span>"mike"</span>; <br />
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
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>his name is mike</div>
            </div>
          </div>

          <p className="clickHere">
            So, we can consider that <b>?</b> represents <b>if</b> and <b>:</b>{" "}
            represents <b>else</b>.
          </p>
        </div>
        <div className="addPaddingToSection" id="loops">
          <h3 className="sectionTittle">loops</h3>
          <p className="clickHere">
            loops are very important in programming, through loops you can
            rewrite your code as many times as you need in one line. there are
            two types of loops, <b>for</b> loop and <b>while</b> loop. but it
            will be better if you use the first one.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">let</span>
              <span className="variableName"> str = </span>
              <span>" web crowd "</span>; <br />
              <span style={{ color: "purple" }}>
                for(
                <span className="declarationKey">let </span>
                <span style={{ color: "blue" }}>i = 0 </span>;{" "}
                <span style={{ color: "blue" }}>i &lt; 5 </span>;{" "}
                <span style={{ color: "blue" }}>i++ </span>)
              </span>{" "}
              &#123; <br />
              <span className="console">
                console.log(
                <span className="insideConsole"> str </span>)
              </span>
              <br /> &#125;
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>web crowd</div>
              <div>web crowd</div>
              <div>web crowd</div>
              <div>web crowd</div>
              <div>web crowd</div>
            </div>
          </div>

          <p className="clickHere">
            So here are the steps of how <b>for</b> loop works : <br />
            <ol style={{ marginLeft: "50px", pointerEvents: "none" }}>
              <li>
                check if <b>i &lt; 5</b>
              </li>
              <li>
                if yes, <b>console.log( str )</b> will get executed, if not...
                the loop will stop.
              </li>
              <li>
                if <b>console.log( str )</b> get executed, then loop will do the
                same process.
              </li>
            </ol>
          </p>
        </div>
        <div className="addPaddingToSection" id="Operators">
          <h3 className="sectionTittle">Operators</h3>
          <p className="clickHere">
            As a Programmer, you need to be aware of Operators. So here are the
            types of Operators in programming :
          </p>

          <h4 className="subTittles">Arithmetic Operators </h4>
          <p className="clickHere">
            When we talk about Arithmetic Operators we talk about the most
            popular operations such as addition, subtraction, multiplication and
            division. in addition to Modulus.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span style={{ color: "gray" }}>// Addition</span> <br />
              <span className="declarationKey">let</span>
              <span className="variableName"> num1 = </span>
              <span>2</span>; <br />
              <span className="declarationKey">let</span>
              <span className="variableName"> num2 = </span>
              <span>3</span>; <br />
              <span className="console">
                console.log(
                <span className="insideConsole">num1 + num2</span>)
              </span>{" "}
              <br />
              <span style={{ color: "gray" }}>// Subtraction</span> <br />
              <span className="declarationKey">let</span>
              <span className="variableName"> num3 = </span>
              <span>10</span>; <br />
              <span className="declarationKey">let</span>
              <span className="variableName"> num4 = </span>
              <span>4</span>; <br />
              <span className="console">
                console.log(
                <span className="insideConsole">num3 - num4</span>)
              </span>{" "}
              <br />
              <span style={{ color: "gray" }}>// Multiplication</span> <br />
              <span className="declarationKey">let</span>
              <span className="variableName"> num5 = </span>
              <span>4</span>; <br />
              <span className="declarationKey">let</span>
              <span className="variableName"> num6 = </span>
              <span>3</span>; <br />
              <span className="console">
                console.log(
                <span className="insideConsole">num5 * num6</span>)
              </span>{" "}
              <br />
              <span style={{ color: "gray" }}>// Division</span> <br />
              <span className="declarationKey">let</span>
              <span className="variableName"> num7 = </span>
              <span>21</span>; <br />
              <span className="declarationKey">let</span>
              <span className="variableName"> num8 = </span>
              <span>3</span>; <br />
              <span className="console">
                console.log(
                <span className="insideConsole">num7 / num8</span>)
              </span>{" "}
              <br />
              <span style={{ color: "gray" }}>
                // Modulus (the rest of division operation)
              </span>{" "}
              <br />
              <span className="declarationKey">let</span>
              <span className="variableName"> num9 = </span>
              <span>11</span>; <br />
              <span className="declarationKey">let</span>
              <span className="variableName"> num10 = </span>
              <span>4</span>; <br />
              <span className="console">
                console.log(
                <span className="insideConsole">num9 % num10</span>)
              </span>{" "}
              <br />
              <span style={{ color: "gray" }}>// Increment</span> <br />
              <span className="declarationKey">let</span>
              <span className="variableName"> num11 = </span>
              <span>21</span>; <br />
              <span className="console">
                console.log(
                <span className="insideConsole">++num11</span>)
              </span>{" "}
              <br />
              <span style={{ color: "gray" }}>// Decrement</span> <br />
              <span className="declarationKey">let</span>
              <span className="variableName"> num12 = </span>
              <span>14</span>; <br />
              <span className="console">
                console.log(
                <span className="insideConsole">--num12</span>)
              </span>{" "}
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>5</div>
              <div>6</div>
              <div>12</div>
              <div>7</div>
              <div>3</div>
              <div>22</div>
              <div>13</div>
            </div>
          </div>
          <h4 className="subTittles">Assignment Operators</h4>

          <p className="clickHere">
            We won't discuss about all Assignment Operators, but only the most
            useful ones. <br />
            So let's assume <b>a = 12</b> and <b>b = 4</b>, the following table
            will explain the Assignment Operators :
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
        <div className="addPaddingToSection" id="function">
          <h3 className="sectionTittle">function</h3>
          <p className="clickHere">
            functions help you to write less and do more. So, instead of writing
            the same code for many times, you can just write your code once
            inside function. then call this function whenever you want and your
            code will get executed. <br />
            <b className="note">Note : </b> there are two types of functions.{" "}
            <br />
            <ol style={{ marginLeft: "50px", pointerEvents: "none" }}>
              <li>function without parameters</li>
              <li>function with parameters</li>
            </ol>
          </p>

          <h4 className="subTittles">function without parameters : </h4>
          <div className="codeSection">
            <div className="inputSection">
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
              <span className="variableName"> ShowInConsole() </span>
              <br />
              <span className="variableName"> ShowInConsole() </span>
              <br />
              <span className="variableName"> ShowInConsole() </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
            </div>
          </div>
          <p className="clickHere">
            As you can see, we don need to rewrite our code whenever we want to
            duplicate it, we can just write it inside a function and call this
            function whenever you want.
          </p>
          <h4 className="subTittles">function with parameters : </h4>
          <p className="clickHere">
            So, let's assume you want to sum up whatever the numbers that user
            get entered. in this case we need to pass parameters to the function
            like the following :
          </p>
          <div className="codeSection">
            <div className="inputSection">
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
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>6</div>
              <div>12</div>
              <div>48</div>
            </div>
          </div>
          <p className="clickHere">
            you can pass as much parameters as you want, and handle them as you
            like. <br />
            <b className="note">Note : </b>there are three ways of declaring a
            function.{" "}
            <a
              style={{ color: "blue" }}
              href="https://www.youtube.com/watch?v=eWfGqhQg8rw&list=PLBRc8och4vXULbcJY-o1LMBLS5s2gMmom&index=10"
              target="_blank"
            >
              click here
            </a>{" "}
            to figure it out. <br />
          </p>
        </div>
        <div className="addPaddingToSection" id="scope">
          <h3 className="sectionTittle">scope</h3>
          <p className="clickHere">
            there are three types of scope :
            <ol style={{ marginLeft: "50px", pointerEvents: "none" }}>
              <li
                className="unclickAble"
                style={{
                  pointerEvents: "none",
                  color: "#002c66",
                  fontWeight: "600",
                }}
              >
                Global Scope
              </li>

              <li
                style={{
                  pointerEvents: "none",
                  color: "#002c66",
                  fontWeight: "600",
                }}
              >
                Function Scope
              </li>

              <li
                style={{
                  pointerEvents: "none",
                  color: "#002c66",
                  fontWeight: "600",
                }}
              >
                Block Scope
              </li>
            </ol>
          </p>

          <h4 className="subTittles">Global Scope :</h4>
          <p className="clickHere">
            in global scope you can create a variables and access them anywhere
            in your code. it's like a global variable.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">let</span>
              <span className="variableName"> age = </span>
              <span>22</span>; <br />
              <span style={{ color: "blue" }}>
                <span style={{ color: "purple" }}>function</span> showAge()
                &#123; <br /> <span style={{ color: "red" }}>return </span>age ;{" "}
                <br />
                &#125;
              </span>{" "}
              <br />
              <div className="console">
                console.log(<span style={{ color: "blue" }}> showAge() </span>){" "}
                <br />
              </div>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>22</div>
            </div>
          </div>

          <p className="clickHere">
            So, in this example we used <b>return</b> key, So this function
            returns 22, then we displayed the returned value (22) inside the
            console <b>(this is why we wrapped showAge() with console.log())</b>
            .
          </p>
          <h4 className="subTittles">Function Scope :</h4>
          <p className="clickHere">
            in function scope you can create variables inside a function and
            access them only inside that function.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span style={{ color: "blue" }}>
                <span style={{ color: "purple" }}>function</span> showAge()
                &#123; <br />
                <span className="declarationKey">let</span>
                <span className="variableName"> country = </span>
                <span className="variableValue"> "Morocco"; </span> <br />
                &#125;
              </span>{" "}
              <br />
              <div className="console">
                console.log(<span style={{ color: "blue" }}> country </span>){" "}
                <br />
                <br />
              </div>
            </div>
          </div>
          <p className="clickHere">
            in this case you will get an Error message says that :{" "}
            <b>country</b> is not defined. that's because we declared the
            variable (country) inside a function and tried to access it from
            outside the function (check out the console).
          </p>

          <h4 className="subTittles">Block Scope :</h4>
          <p className="clickHere">
            block scope is like <b>if/else</b> , <b>switch</b> , <b>loop</b>
            ...etc, and it's very similar to a function scope.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span style={{ color: "blue" }}>
                <span style={{ color: "purple" }}>if </span>
                &#123; <br />
                <span className="declarationKey">let</span>
                <span className="variableName"> name = </span>
                <span className="variableValue"> "khalid"; </span> <br />
                &#125;
              </span>{" "}
              <br />
              <div className="console">
                console.log(<span style={{ color: "blue" }}> name </span>){" "}
                <br />
                <br />
              </div>
            </div>
          </div>
          <p className="clickHere">
            {" "}
            in this case you will also get an Error message says that :{" "}
            <b>name</b> is not defined. that's because we declared the variable
            (name) inside <b>if statement</b> and tried access it from outside.{" "}
            if you wanna display the name in console, type{" "}
            <b>console.log( name )</b> bellow <b>let name = "khalid"</b>
          </p>
        </div>

        <div className="addPaddingToSection" id="object">
          <h3 className="sectionTittle">object</h3>
          <p className="clickHere">
            objects as we mentioned previously in{" "}
            <a href="#dataTypes">data types</a> section is a data type. inside
            objects we can store a multiple of data and data types (we can store
            string, numbers,undefined,null or even objects themselves...etc).{" "}
            <br />
            <b className="note">Note : </b>we can create objects with two
            different ways (traditional way and modern way). but as we know the
            new ways are better, that's why we will ignore the traditional one.
            and focus on the new way.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> Person = </span>
              &#123;
              <br />
              <span className="objectProperty">name </span>:{" "}
              <span style={{ color: "blue" }}>"khalid"</span> ,
              <br />
              <span className="objectProperty">age </span>:{" "}
              <span style={{ color: "blue" }}>20</span> ,
              <br />
              <span className="objectProperty">isWorking </span>:{" "}
              <span style={{ color: "blue" }}>false</span> ,
              <br />
              <span className="objectProperty">country </span>:{" "}
              <span style={{ color: "blue" }}>"canada"</span> ,
              <br />
              &#125;
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
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>khalid</div>
              <div>20</div>
            </div>
          </div>
          <p className="clickHere">
            As you can see, you can set any data types into an object, and
            access them easily.
          </p>
        </div>
        <div className="addPaddingToSection" id="array">
          <h3 className="sectionTittle">array</h3>
          <p className="clickHere">
            array is considered as the most important concept in programming,
            because it allows you to store a bunch of data from a different
            types. <br />
            Array can also include another array. like the following :
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> arr = </span>[{" "}
              <span style={{ color: "purple" }}>
                "mike" <b>,</b> 22 <b>,</b> false <b>,</b> [ "frank" <b>,</b>{" "}
                true ]
              </span>{" "}
              ]
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
                  arr[<span style={{ color: "black" }}>2</span>]
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
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>mike</div>
              <div>false</div>
              <div>frank</div>
            </div>
          </div>
          <p className="clickHere">
            <b className="note">Note : </b>if you want to display the first item
            of array you can just type : <b>arr[0]</b>. <br />
            for the last value, you may be wondering how did we get it. So when
            you write <b>arr[3]</b> inside console, you will only get the sub
            array, but if you want to display <b>frank</b> you must add another
            square brackets and put 0 inside like this : <b>arr[3][0]</b>.{" "}
            <br />
          </p>
        </div>
        <div className="addPaddingToSection" id="arrayFunctions">
          <h3 className="sectionTittle">array functions</h3>
          <p className="clickHere">
            array functions help you to write less and do more, it's actually
            amazing. you can handle arrays values easily with this functions,
            before we dive into this functions, we want to mention to a useful
            array property which is <b>length</b>. this property gives you the
            number of elements inside an array.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> arr = </span>[{" "}
              <span style={{ color: "purple" }}>
                "mike" <b>,</b> 22 <b>,</b> false
              </span>{" "}
              ]
              <br />
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  arr.<span style={{ color: "blue" }}>length</span>{" "}
                </span>
                ){" "}
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>3</div>
            </div>
          </div>
          <p className="clickHere">
            So now, let's talk about array functions. here is a list of the most
            popular ones :
          </p>
          <h4 className="subTittles">push()</h4>
          <p className="clickHere">
            adds a new element to the end of the array.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> arr = </span>[{" "}
              <span style={{ color: "purple" }}>
                "mike" <b>,</b> 22 <b>,</b> false
              </span>{" "}
              ]
              <br />
              arr.<span style={{ color: "blue" }}>push( "frank" )</span> <br />
              <span className="console">
                console.log( <span style={{ color: "purple" }}>arr</span> )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>[ "mike" , 22 , false , "frank" ]</div>
            </div>
          </div>
          <h4 className="subTittles">pop()</h4>
          <p className="clickHere">removes the last element of the array.</p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> arr = </span>[{" "}
              <span style={{ color: "purple" }}>
                "mike" <b>,</b> 22 <b>,</b> false
              </span>{" "}
              ]
              <br />
              arr.<span style={{ color: "blue" }}>pop()</span> <br />
              <span className="console">
                console.log( <span style={{ color: "purple" }}> arr</span> )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>[ "mike" , 22 ]</div>
            </div>
          </div>
          <h4 className="subTittles">unshift()</h4>
          <p className="clickHere">
            adds a new element at the beginning of the array.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> arr = </span>[{" "}
              <span style={{ color: "purple" }}>
                "mike" <b>,</b> 22 <b>,</b> false
              </span>{" "}
              ]
              <br />
              arr.<span style={{ color: "blue" }}>unshift( "frank"</span> ){" "}
              <br />
              <span className="console">
                console.log( <span style={{ color: "purple" }}> arr</span> )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>[ "frank" , "mike" , 22 , false ]</div>
            </div>
          </div>
          <h4 className="subTittles">shift()</h4>
          <p className="clickHere">removes the first element of the array.</p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> arr = </span>[{" "}
              <span style={{ color: "purple" }}>
                "mike" <b>,</b> 22 <b>,</b> false
              </span>{" "}
              ]
              <br />
              arr.<span style={{ color: "blue" }}>shift()</span>
              <br />
              <span className="console">
                console.log( <span style={{ color: "purple" }}>arr</span> )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>[ 22 , false ]</div>
            </div>
          </div>
          <h4 className="subTittles">reverse()</h4>
          <p className="clickHere">reverses the elements of the array.</p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> arr = </span>[{" "}
              <span style={{ color: "purple" }}>
                "mike" <b>,</b> 22 <b>,</b> false
              </span>{" "}
              ]
              <br />
              arr.<span style={{ color: "blue" }}>reverse()</span>
              <br />
              <span className="console">
                console.log( <span style={{ color: "purple" }}>arr</span> )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>[ false , 22 , "mike" ]</div>
            </div>
          </div>
          <h4 className="subTittles">concat()</h4>
          <p className="clickHere">
            combines two arrays or more in one new array ( you can also combine
            arrays with string, or string with another string ).
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> arr1 = </span>[{" "}
              <span style={{ color: "purple" }}>
                "mike" <b>,</b> 20 <b>,</b> false
              </span>{" "}
              ]
              <br />
              <span className="declarationKey">const</span>
              <span className="variableName"> arr2 = </span>[{" "}
              <span style={{ color: "purple" }}>
                1 <b>,</b> 2 <b>,</b> 3
              </span>{" "}
              ]
              <br />
              <span className="console">
                console.log({" "}
                <span style={{ color: "blue" }}>
                  {" "}
                  arr1.<span style={{ color: "purple" }}>concat</span>( arr2 ){" "}
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>[ false , 22 , "mike" , 1 , 2 , 3 ]</div>
            </div>
          </div>
          <p className="clickHere">
            you can assign the result to a new array like the following :
            <b> let newArray = arr1.concat(arr2) </b>
            and display <b>newArray</b> in console ({" "}
            <b>console.log( newArray )</b> ).
          </p>
          <h4 className="subTittles">Set()</h4>
          <p className="clickHere">
            allows you to delete the duplicated elements.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> numbers = </span>[{" "}
              <span style={{ color: "purple" }}>1 , 2 , 3 , 4 , 2 , 1 , 5</span>{" "}
              ]
              <br />
              <span className="console">
                console.log({" "}
                <span style={{ color: "blue" }}>
                  {" "}
                  new <span style={{ color: "purple" }}>Set</span>( numbers ){" "}
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>[ 1 , 2 , 3 , 4 , 5 ]</div>
            </div>
          </div>
          <h4 className="subTittles">filter()</h4>
          <p className="clickHere">
            allows you to filter elements from an array according to a
            condition.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> numbers = </span>[{" "}
              <span style={{ color: "purple" }}>
                1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10
              </span>{" "}
              ]
              <br />
              <span className="console">
                console.log({" "}
                <span style={{ color: "blue" }}>
                  {" "}
                  numbers.<span style={{ color: "purple" }}>filter</span>( num
                  =&gt; num &gt; 5 ){" "}
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>[ 6 , 7 , 8 , 9 , 10 ]</div>
            </div>
          </div>
          <p className="clickHere">
            if you didn't get it, don't worry, this is arrow function, we talked
            about it at the end of <a href="#function">function</a> section.
          </p>
          <h4 className="subTittles">reduce()</h4>
          <p className="clickHere">
            if you have an array of numbers , So <b>reduce()</b> returns the sum
            of those numbers.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> numbers = </span>[{" "}
              <span style={{ color: "purple" }}>
                1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10
              </span>{" "}
              ]
              <br />
              <span className="console">
                console.log({' "the sum is : "'}
                <span style={{ color: "blue" }}>
                  {" "}
                  + numbers.<span style={{ color: "purple" }}>reduce</span>( (a
                  , b) =&gt; a + b )
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>the sum is : 55</div>
            </div>
          </div>
          <h4 className="subTittles">sort()</h4>
          <p className="clickHere">
            this function allows you to sort array's elements in ascending or
            descending order. <br />
            <b className="note">Note : </b>sorting numbers is a bit different
            than sorting strings or alphabet.
          </p>
          <h4 style={{ margin: "10px 30px", color: "#0b0453" }}>
            Sorting Numbers :
          </h4>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> numbers = </span>[{" "}
              <span style={{ color: "purple" }}>
                78 , 12 , 3 , 56 , 5 , 60 , 17
              </span>{" "}
              ]
              <br />
              <span className="console">
                console.log(
                <span style={{ color: "blue" }}>
                  {" "}
                  numbers.<span style={{ color: "purple" }}>sort</span>( (a , b)
                  =&gt; a - b
                </span>{" "}
                ) )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div> [ 3 , 5 , 12 , 17 , 56 , 60 , 78 ]</div>
            </div>
          </div>
          <h4 style={{ margin: "10px 30px", color: "#0b0453" }}>
            Sorting Strings and Alphabet :
          </h4>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> strings = </span>[{" "}
              <span style={{ color: "purple" }}>
                "mike" , "b" , "frank" , "d" , "john"
              </span>{" "}
              ]
              <br />
              <span className="console">
                console.log(
                <span style={{ color: "blue" }}>
                  {" "}
                  strings.<span style={{ color: "purple" }}>sort</span>()
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div> [ "b" , "d" , "frank" , "john" , "mike" ]</div>
            </div>
          </div>
          <h4 className="subTittles">map()</h4>
          <p className="clickHere">
            allows you to loop through every element of the array. and do
            whatever you want with those elements. <br />
            So, in this example we will loop through the elements and take every
            element and double it. <br />
            <b className="note">Note : </b> map() returns a new array.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> numbers = </span>[{" "}
              <span style={{ color: "purple" }}>1 , 2 , 3 , 4 , 5</span> ]
              <br />
              <span className="console">
                console.log(
                <span style={{ color: "blue" }}>
                  {" "}
                  numbers.<span style={{ color: "purple" }}>map</span>( a =&gt;
                  a * 2 )
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>[2 , 4 , 6 , 8 , 10 ]</div>
            </div>
          </div>
          <h4 className="subTittles">forEach()</h4>
          <p className="clickHere">
            forEach() is actually like map() , the differences between them is
            that : <br />
            <ul style={{ marginLeft: "50px", pointerEvents: "none" }}>
              <li style={{ pointerEvents: "none" }}>
                map() returns a new array.{" "}
              </li>
              <li style={{ pointerEvents: "none" }}>
                forEach() returns each element of the array separately.
              </li>
              <li style={{ pointerEvents: "none" }}>
                map() can be followed by other array functions while forEach
                can't.
              </li>
            </ul>
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> numbers = </span>[{" "}
              <span style={{ color: "purple" }}>1 , 2 , 3 , 4 , 5</span> ]
              <br />
              <span className="console">
                console.log({" "}
                <span style={{ color: "blue" }}>
                  {" "}
                  numbers.<span style={{ color: "purple" }}>forEach</span>( a
                  =&gt; <span className="console">console.log</span>( a * 3 ) )
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>
                {" "}
                2 <br /> 4 <br /> 6 <br /> 8 <br /> 10{" "}
              </div>
            </div>
          </div>{" "}
          <p className="clickHere">
            you might see the undefined or NaN at the end of console, in this
            case i want to recommend to use <b>map()</b> instead.
          </p>
          <h4 className="subTittles">every()</h4>
          <p className="clickHere">
            checks whether all of the elements in the array accept the condition
            or not. if so, it will return <b>true</b> if not it will return{" "}
            <b>false</b>.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> numbers = </span>[{" "}
              <span style={{ color: "purple" }}>1 , 2 , 3 , 4 , 5</span> ]
              <br />
              <span className="console">
                console.log({" "}
                <span style={{ color: "blue" }}>
                  {" "}
                  numbers.<span style={{ color: "purple" }}>every</span>( a
                  =&gt; a &gt; 3 )
                </span>{" "}
                )
              </span>
              <br />
              <span className="console">
                console.log({" "}
                <span style={{ color: "blue" }}>
                  {" "}
                  numbers.<span style={{ color: "purple" }}>every</span>( a
                  =&gt; a &lt; 8 )
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>false</div>
              <div>true</div>
            </div>
          </div>
          <h4 className="subTittles">fill()</h4>
          <p className="clickHere">
            loops through each element of the array and changes all of them to a
            provided value.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> numbers = </span>[{" "}
              <span style={{ color: "purple" }}>1 , 2 , 3 , 4 , 5</span> ]
              <br />
              <span className="console">
                console.log(
                <span style={{ color: "blue" }}>
                  {" "}
                  numbers.<span style={{ color: "purple" }}>fill</span>( 0 )
                </span>{" "}
                )
              </span>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>[ 0 , 0 , 0 , 0 , 0 ]</div>
            </div>
          </div>
          <h4 className="subTittles">includes()</h4>
          <p className="clickHere">
            checks whether the array contains a particular value. it returns{" "}
            <b>true</b> if the given value is existed or <b>false</b> if not, or
            you can return any message.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> arr = </span>[{" "}
              <span style={{ color: "purple" }}>
                "mike" , 22 , "canada" , false , 5
              </span>{" "}
              ]
              <br />
              <span className="console">
                console.log(
                <span style={{ color: "blue" }}>
                  {" "}
                  arr.<span style={{ color: "purple" }}>includes</span>(
                  "canada" )
                </span>{" "}
                )
              </span>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>true</div>
            </div>
          </div>
          <h4 className="subTittles">findIndex()</h4>
          <p className="clickHere">
            returns the index of a given value if it exists, otherwise returns
            -1.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> arr = </span>[{" "}
              <span style={{ color: "purple" }}>
                "mike" , 22 , "canada" , false , 5
              </span>{" "}
              ]
              <br />
              <span className="console">
                console.log(
                <span style={{ color: "blue" }}>
                  {" "}
                  arr.<span style={{ color: "purple" }}>findIndex</span>( item
                  =&gt; item === "canada" )
                </span>{" "}
                )
              </span>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>2</div>
            </div>
          </div>
          <h4 className="subTittles">indexOf()</h4>
          <p className="clickHere">
            it is the same as <b>findIndex()</b> but it's much easier.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> arr = </span>[{" "}
              <span style={{ color: "purple" }}>
                "mike" , 22 , "canada" , false , 5
              </span>{" "}
              ]
              <br />
              <span className="console">
                console.log(
                <span style={{ color: "blue" }}>
                  {" "}
                  arr.<span style={{ color: "purple" }}>indexOf</span>( "canada"
                  )
                </span>{" "}
                )
              </span>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>2</div>
            </div>
          </div>
          <h4 className="subTittles">lastIndexOf()</h4>
          <p className="clickHere">
            returns the index of the last duplicated item according to the given
            value.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> arr = </span>[{" "}
              <span style={{ color: "purple" }}>
                "mike" , 2 , false , "mike" , 5 , 7 , 2
              </span>{" "}
              ]
              <br />
              <span className="console">
                console.log(
                <span style={{ color: "blue" }}>
                  {" "}
                  arr.<span style={{ color: "purple" }}>lastIndexOf</span>(
                  "mike" )
                </span>{" "}
                )
              </span>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>3</div>
            </div>
          </div>
          <h4 className="subTittles">some()</h4>
          <p className="clickHere">
            checks weather the given value is existed or no, if exists then
            return <b>true</b> , if not then return <b>false</b>.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> languages = </span>[{" "}
              <span style={{ color: "purple" }}>
                "c++" , "python" , "javascript" , "c#"
              </span>{" "}
              ]
              <br />
              <span className="console">
                console.log(
                <span style={{ color: "blue" }}>
                  {" "}
                  languages.<span style={{ color: "purple" }}>some</span>( lang
                  =&gt; lang === "javascript" )
                </span>{" "}
                )
              </span>
              <br />
              <span className="console">
                console.log(
                <span style={{ color: "blue" }}>
                  {" "}
                  languages.<span style={{ color: "purple" }}>some</span>( lang
                  =&gt; lang === "swift" )
                </span>{" "}
                )
              </span>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>true</div>
              <div>false</div>
            </div>
          </div>
          <h4 className="subTittles" id="sliceInArray">
            slice()
          </h4>
          <p className="clickHere">
            allows you to display a part of an array according to arguments you
            passed.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> numbers = </span>[{" "}
              <span style={{ color: "purple" }}>
                1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10
              </span>{" "}
              ]
              <br />
              <span className="console">
                console.log(
                <span style={{ color: "blue" }}>
                  {" "}
                  numbers.<span style={{ color: "purple" }}>slice</span>( 4 )
                </span>{" "}
                )
              </span>
              <br />
              <span className="console">
                console.log(
                <span style={{ color: "blue" }}>
                  {" "}
                  numbers.<span style={{ color: "purple" }}>slice</span>( 1 , 4
                  )
                </span>{" "}
                )
              </span>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div> [ 5 , 6 , 7 , 8 , 9 , 10 ]</div>
              <div> [ 2 , 3 , 4 ]</div>
            </div>
          </div>
          <p className="clickHere">
            So, when we passed one value inside slice(), this value represents
            the number of the item you wanna slice till, so in this case the the
            numbers 1,2,3,4 will get removed. <br />
            when we passed two values inside slice(), we specify the items we
            want to remove, so that first value is the index of the beginning
            item you will remove , and the second value is the position of last
            item you want to remove. <br />
            <b className="note">Note : </b> slice doesn't effect on the array.
            the array won't get changed. it creates a <b>new array</b>.
          </p>
          <h4 className="subTittles">splice()</h4>
          <p className="clickHere">
            allows you to remove items from an array or you can change them.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> numbers = </span>[{" "}
              <span style={{ color: "purple" }}>
                1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10
              </span>{" "}
              ]
              <br />
              <span className="console">
                console.log(
                <span style={{ color: "blue" }}>
                  {" "}
                  numbers.<span style={{ color: "purple" }}>splice</span>( 2 , 5
                  )
                </span>{" "}
                )
              </span>
              <br />
              <span className="console">
                console.log(
                <span style={{ color: "blue" }}> numbers</span> )
              </span>
              <br />
              <span className="console">
                console.log(
                <span style={{ color: "blue" }}>
                  {" "}
                  numbers.<span style={{ color: "purple" }}>splice</span>( 0 , 2
                  , 6 , 7 )
                </span>{" "}
                )
              </span>
              <br />
              <span className="console">
                console.log(
                <span style={{ color: "blue" }}> numbers</span> )
              </span>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>[ 3 , 4 , 5 , 6 , 7 ]</div>
              <div>[ 1, 2 , 8 , 9 , 10 ]</div>
              <div>[ 1 , 2 ]</div>
              <div>[ 6 , 7 , 8 , 9 , 10 ]</div>
            </div>
          </div>
          <p className="clickHere">
            in the first console, we only removed 5 items ( from index 2 to
            index 6 ). <br />
            in the third console, we changed the first and second items with 6
            and 7 digits. <br />
            <b className="note">Note : </b> this function returns a new array
            includes the removed items.
          </p>
          <h4 className="subTittles">join()</h4>
          <p className="clickHere">
            returns a new string by concatenating array's elements. we can join
            according the given value.
          </p>
          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> arr = </span>[{" "}
              <span style={{ color: "purple" }}>
                "a" , "b" , "c" , "d" , "e"
              </span>{" "}
              ]
              <br />
              <span className="console">
                console.log(
                <span style={{ color: "blue" }}>
                  {" "}
                  arr.<span style={{ color: "purple" }}>join</span>( "" )
                </span>{" "}
                )
              </span>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>abcde</div>
            </div>
          </div>
          <p className="clickHere">
            in this example we joined all array items through empty space (""),
            you can do it according to any item in array, you can join them by
            "c" or "b" or anything exists in array.
          </p>
        </div>
        <div className="addPaddingToSection" id="stringMethods">
          <h3 className="sectionTittle">string methods</h3>
          <p className="clickHere">
            we can handle strings with a bunch of methods, there are many common
            methods among array and string we will discuss about in this
            section, <b>but keep in mind that spaces are counted in string.</b>{" "}
            <br />
            We can add <b>length</b> property to string as long as array.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> str = </span>{" "}
              <span style={{ color: "purple" }}>"welcome to web crowd" ;</span>{" "}
              <br />
              <span className="console">
                {" "}
                console.log( {'" the length is : "'}
                <span style={{ color: "purple" }}>
                  {" "}
                  + str.<span style={{ color: "blue" }}>length</span>{" "}
                </span>
                ){" "}
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>the length is : 20</div>
            </div>
          </div>
          <p className="clickHere">spaces also get counted as alphabet.</p>

          <h4 className="subTittles">slice()</h4>
          <p className="clickHere">
            you can also use <b>slice()</b> in string as long as arrays.{" "}
            <a href="#sliceInArray">click here</a> to figure out how it works.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> str = </span>{" "}
              <span style={{ color: "purple" }}>"web crowd" ;</span> <br />
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  str.<span style={{ color: "blue" }}>slice</span>({" "}
                  <span style={{ color: "purple" }}>5 </span>)
                </span>
                ){" "}
              </span>
              <br />
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  str.<span style={{ color: "blue" }}>slice</span>({" "}
                  <span style={{ color: "purple" }}>2 , 6 </span>)
                </span>
                ){" "}
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>rowd</div>
              <div>b cr</div>
            </div>
          </div>
          <p className="clickHere">spaces also get counted as alphabet.</p>

          <h4 className="subTittles">charAt()</h4>
          <p className="clickHere">returns the character at the given index.</p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> str = </span>{" "}
              <span style={{ color: "purple" }}>"web crowd" ;</span> <br />
              <span className="console">
                {" "}
                console.log( {'" the char at index 5 is : "'}
                <span style={{ color: "purple" }}>
                  {" "}
                  + str.<span style={{ color: "blue" }}>charAt</span>({" "}
                  <span style={{ color: "purple" }}>5</span>)
                </span>
                ){" "}
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div> the char at index 5 is : r</div>
            </div>
          </div>

          <h4 className="subTittles">endsWith()</h4>
          <p className="clickHere">
            returns <b>true</b> if the string ends with the given value, and
            returns <b>false</b> if not.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> str = </span>{" "}
              <span style={{ color: "purple" }}>"web crowd" ;</span> <br />
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  str.<span style={{ color: "blue" }}>endsWith</span>({" "}
                  <span style={{ color: "purple" }}>"wd"</span> )
                </span>{" "}
                )
              </span>
              <br />
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  str.<span style={{ color: "blue" }}>endsWith</span>({" "}
                  <span style={{ color: "purple" }}> "crowd" </span> )
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div> false</div>
              <div> true</div>
            </div>
          </div>

          <h4 className="subTittles">replace()</h4>
          <p className="clickHere">
            allows you to replace string or character with another one. but the
            original string will stay as it is.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> str = </span>{" "}
              <span style={{ color: "purple" }}>"web crowd" ;</span> <br />
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  str.<span style={{ color: "blue" }}>replace</span>({" "}
                  <span style={{ color: "purple" }}>
                    "crowd" , "development"
                  </span>{" "}
                  )
                </span>{" "}
                )
              </span>
              <br />
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}> str</span> )
              </span>
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div> web development</div>
              <div> web crowd</div>
            </div>
          </div>

          <h4 className="subTittles">includes()</h4>
          <p className="clickHere">
            it is the same as includes() in array, it checks if the string
            includes the given value.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> str = </span>{" "}
              <span style={{ color: "purple" }}>"web crowd" ;</span> <br />
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  str.<span style={{ color: "blue" }}>includes</span>({" "}
                  <span style={{ color: "purple" }}>"b"</span> )
                </span>{" "}
                )
              </span>
              <br />
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  str.<span style={{ color: "blue" }}>includes</span>({" "}
                  <span style={{ color: "purple" }}>"website"</span> )
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div> true</div>
              <div> false</div>
            </div>
          </div>

          <h4 className="subTittles">indexOf()</h4>
          <p className="clickHere">
            it is also the same as indexOf() in array, it returns the index of a
            given value.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> str = </span>{" "}
              <span style={{ color: "purple" }}>"web crowd" ;</span> <br />
              <span className="console">
                {" "}
                console.log({'" index of b is : "'}
                <span style={{ color: "purple" }}>
                  {" "}
                  + str.<span style={{ color: "blue" }}>indexOf</span>({" "}
                  <span style={{ color: "purple" }}>"b"</span> )
                </span>{" "}
                )
              </span>
              <br />
              <span className="console">
                {" "}
                console.log({'" index of crowd is : "'}
                <span style={{ color: "purple" }}>
                  {" "}
                  + str.<span style={{ color: "blue" }}>indexOf</span>({" "}
                  <span style={{ color: "purple" }}>"crowd"</span> )
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div> index of b is : 2</div>
              <div> index of crowd is : 4</div>
            </div>
          </div>

          <h4 className="subTittles">lastIndexOf()</h4>
          <p className="clickHere">
            it is also the same as lastIndexOf() in array, it returns the last
            index of a given value ( if the string includes the same word two
            times, it returns the index of the last duplicated word).
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> str = </span>{" "}
              <span style={{ color: "purple" }}>"web crowd" ;</span> <br />
              <span className="console">
                {" "}
                console.log({'"last index of w is : "'}
                <span style={{ color: "purple" }}>
                  {" "}
                  + str.<span style={{ color: "blue" }}>lastIndexOf</span>({" "}
                  <span style={{ color: "purple" }}>"w"</span> )
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>last index of w is : 7</div>
            </div>
          </div>

          <h4 className="subTittles">toUpperCase()</h4>
          <p className="clickHere">
            capitalizes all the alphabetic characters of your string (a ==&gt;
            A).
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> str = </span>{" "}
              <span style={{ color: "purple" }}>"web crowd" ;</span> <br />
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  str.<span style={{ color: "blue" }}>toUpperCase</span>()
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>WEB CROWD</div>
            </div>
          </div>

          <h4 className="subTittles">toLowerCase()</h4>
          <p className="clickHere">
            it is the opposite of toUpperCase() it lowers your string (A ==&gt;
            a).
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> str = </span>{" "}
              <span style={{ color: "purple" }}>"Web Crowd" ;</span> <br />
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  str.<span style={{ color: "blue" }}>toLowerCase</span>()
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>web crowd</div>
            </div>
          </div>

          <h4 className="subTittles">repeat()</h4>
          <p className="clickHere">
            allows you to repeat your string as many times as you need by a
            given value.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> str = </span>{" "}
              <span style={{ color: "purple" }}>" Web Crowd " ;</span> <br />
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  str.<span style={{ color: "blue" }}>repeat</span>(5)
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>Web Crowd Web Crowd Web Crowd Web Crowd Web Crowd</div>
            </div>
          </div>

          <h4 className="subTittles">split()</h4>
          <p className="clickHere">
            converts your string into an array by a given value. that value can
            be an empty string or an includes string or even character.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> str = </span>{" "}
              <span style={{ color: "purple" }}>"web crowd" ;</span> <br />
              <div style={{ color: "gray" }}>// split by empty string</div>
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  str.<span style={{ color: "blue" }}>split</span>("")
                </span>{" "}
                )
              </span>
              <br />
              <div style={{ color: "gray" }}>// split by string</div>
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  str.<span style={{ color: "blue" }}>split</span>("eb")
                </span>{" "}
                )
              </span>
              <br />
              <div style={{ color: "gray" }}>// split by character</div>
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  str.<span style={{ color: "blue" }}>split</span>("c")
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>[ 'w' , 'e' , 'b' , ' ' , 'c' , 'r' , 'o' , 'w' , 'd' ]</div>
              <div>[ 'w' , ' crowd' ]</div>
              <div>[ 'web ' , 'rowd' ]</div>
            </div>
          </div>
          <p className="clickHere"> spaces also counted.</p>

          <h4 className="subTittles">concat()</h4>
          <p className="clickHere">
            it is the same as concat() in array, it concatenates two strings or
            more.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> str1 = </span>{" "}
              <span style={{ color: "purple" }}>" web " ;</span> <br />
              <span className="declarationKey">const</span>
              <span className="variableName"> str2 = </span>{" "}
              <span style={{ color: "purple" }}>"crowd " ;</span> <br />
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  str1.<span style={{ color: "blue" }}>concat</span>( str2 )
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>web crowd</div>
            </div>
          </div>

          <h4 className="subTittles">trim()</h4>
          <p className="clickHere">
            removes the spaces at the beginning and the end of your string.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> str = </span>{" "}
              <span style={{ color: "purple" }}>
                " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; web crowd
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" ;
              </span>{" "}
              <br />
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  str.<span style={{ color: "blue" }}>trim</span>()
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>web crowd</div>
            </div>
          </div>
        </div>
        <div className="addPaddingToSection" id="date">
          <h3 className="sectionTittle">date</h3>
          <p className="clickHere">
            we have a quick look on dates, you will figure out how to display
            the current date on console, and when you learn{" "}
            <a href="#domManipulation">Dom Manipulation</a> you will be able to
            display it inside your website.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> date = </span>{" "}
              <span style={{ color: "purple" }}>
                new <span style={{ color: "blue" }}>Date()</span> ;
              </span>{" "}
              <br />
              <span className="console">
                {" "}
                console.log({" "}
                <span style={{ color: "purple" }}>
                  {" "}
                  date.<span style={{ color: "blue" }}>getHours() </span> + "h "
                  + date.
                  <span style={{ color: "blue" }}>getMinutes() </span> + "m " +
                  date.<span style={{ color: "blue" }}>getSeconds() </span> +
                  "s"
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div> ( take a look on console )</div>
            </div>
          </div>

          <p className="clickHere">
            {" "}
            there is a bunch of methods like
            <b>getMonth() , getFullYear() , getDate()</b>...etc.
          </p>
        </div>
        <div className="addPaddingToSection" id="math">
          <h3 className="sectionTittle">Math</h3>
          <p className="clickHere">
            Math in an object that uses a bunch of methods to do mathematical
            operations, here is the list of most of those methods.
          </p>
          <h4 className="subTittles">Math.abs()</h4>
          <p className="clickHere">
            this method adds the absolute value to a variable inside.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> number = </span>{" "}
              <span style={{ color: "purple" }}>
                <span style={{ color: "blue" }}>-6</span> ;
              </span>{" "}
              <br />
              <span className="console">
                {" "}
                console.log({" "}
                <span style={{ color: "purple" }}>
                  {" "}
                  Math.<span style={{ color: "blue" }}>abs( number ) </span>
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div> 6</div>
            </div>
          </div>

          <h4 className="subTittles">Math.max()</h4>
          <p className="clickHere">
            this method returns the biggest value of two numbers.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="console">
                {" "}
                console.log({" "}
                <span style={{ color: "purple" }}>
                  {" "}
                  Math.<span style={{ color: "blue" }}>max( 3 , 5 ) </span>
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div> 5</div>
            </div>
          </div>
          <h4 className="subTittles">Math.min()</h4>
          <p className="clickHere">
            this method returns the smallest value of two numbers.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="console">
                {" "}
                console.log({" "}
                <span style={{ color: "purple" }}>
                  {" "}
                  Math.<span style={{ color: "blue" }}>min( 33 , 65 ) </span>
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>33</div>
            </div>
          </div>
          <h4 className="subTittles">Math.pow()</h4>
          <p className="clickHere">
            this method accepts two values, it power the first value as many as
            the second value. .
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">let </span>
              <span className="variableName">num1 = </span>
              <span style={{ color: "purple" }}>5 </span>; <br />
              <span className="declarationKey">let </span>
              <span className="variableName">num2 = </span>
              <span style={{ color: "purple" }}>3 </span>; <br />
              <span className="console">
                {" "}
                console.log({" "}
                <span style={{ color: "purple" }}>
                  {" "}
                  Math.
                  <span style={{ color: "blue" }}>pow( num1 , num2 ) </span>
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div style={{ color: "gray" }}>// 5 * 5 * 5</div>
              <div> 125</div>
            </div>
          </div>

          <h4 className="subTittles">Math.sqrt()</h4>
          <p className="clickHere">
            this method returns the square root of a given number .
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="declarationKey">let </span>
              <span className="variableName">num1 = </span>
              <span style={{ color: "purple" }}>25 </span>; <br />
              <span className="declarationKey">let </span>
              <span className="variableName">num2 = </span>
              <span style={{ color: "purple" }}>81 </span>; <br />
              <span className="console">
                {" "}
                console.log({'" the square of 25 is : "'}{" "}
                <span style={{ color: "purple" }}>
                  {" "}
                  + Math.
                  <span style={{ color: "blue" }}>sqrt( num1 ) </span>
                </span>{" "}
                )
              </span>
              <br />
              <span className="console">
                {" "}
                console.log({'" the square of 81 is : "'}
                <span style={{ color: "purple" }}>
                  {" "}
                  + Math.
                  <span style={{ color: "blue" }}>sqrt( num2 ) </span>
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div> the square of 25 is : 5</div>
              <div> the square of 81 is : 9</div>
            </div>
          </div>

          <h4 className="subTittles">Math.random()</h4>
          <p className="clickHere">
            this method gives you a new random number whenever you reflesh you
            page. by default it gives you numbers between 0 and 1.
          </p>

          <div className="codeSection">
            <div className="inputSection">
              <span className="console">
                {" "}
                console.log({" "}
                <span style={{ color: "purple" }}>
                  {" "}
                  Math.
                  <span style={{ color: "blue" }}>random() </span>
                </span>{" "}
                )
              </span>
              <br />
              <span className="console">
                {" "}
                console.log(
                <span style={{ color: "purple" }}>
                  {" "}
                  Math.
                  <span style={{ color: "blue" }}>random() * 10 </span>
                </span>{" "}
                )
              </span>
              <br />
            </div>
            <ArrowRightAltIcon className="arrow" />
            <div className="outputSection">
              <div>( check out the console )</div>
            </div>
          </div>
          <p className="clickHere">
            as you can see, when you reflesh the page, the first value takes the
            values between <b>0</b> and <b>1</b>, but the second one could take
            the values between <b>0</b> and <b>10</b> . that's because we added
            the Max value which is <b>10</b>.
          </p>
        </div>
        <div className="addPaddingToSection" id="setTimeout">
          <h3 className="sectionTittle">setTimeout()</h3>
          <p className="clickHere">
            setTimeout() is a function that accepts two parameters(function and
            number of MiliSeconds), so the second function get executed after
            this amount of time. we know this seems little confused. but don't
            worry,{" "}
            <a
              href="https://www.youtube.com/watch?v=thrjQJkyOu4&list=PLBRc8och4vXULbcJY-o1LMBLS5s2gMmom&index=11"
              target="_blank"
            >
              this video
            </a>{" "}
            will explain that.{" "}
          </p>
        </div>
        <div className="addPaddingToSection" id="setInterval">
          <h3 className="sectionTittle">setInterval()</h3>
          <p className="clickHere">
            setInterval() is the same as setTimeout(), but the difference
            between them is the following : <br />
            <ul style={{ marginLeft: "50px", pointerEvents: "none" }}>
              <li>
                setTimeout() : the callback function get executed once we reach
                the given time (number of MiliSeconds).{" "}
              </li>
              <li>
                setInterval() : the callback function get executed repeatedly
                after we reach the given time.{" "}
                <a
                  href="https://www.youtube.com/watch?v=iQQoLUgFOTs&list=PLBRc8och4vXULbcJY-o1LMBLS5s2gMmom&index=12"
                  target="_blank"
                >
                  click here
                </a>{" "}
                to see an example.
              </li>
            </ul>
          </p>
        </div>
        <div className="addPaddingToSection" id="domManipulation">
          <h3 className="sectionTittle">DOM Manipulation</h3>
          <p className="clickHere">
            DOM stands for <b>D</b>ocument <b>O</b>bject <b>M</b>odel, it
            basically means everything you see in front of you once you get in
            any particular website, it's HTML content. it's created by the
            browser once the page gets loaded. <br />
            programmatically, we can use JavaScript to read, add ,remove or
            update DOM elements using a bunch of methods. <br />
            the first thing you must be aware of is how to select and get html
            elements using JavaScript. in this case we use <b>selectors</b>.
          </p>
          <h2 className=" subTittles">selectors :</h2>

          <p className="clickHere">
            you can select html elements using a bunch of methods
            (getElementById() , getElementByClassName() , getElementByTagName()
            , querySelector()...etc), but the best of them is{" "}
            <b>querySelector()</b>, So we will focus only on this method.
          </p>
          <h2 className=" subTittles">Add styling to html elements :</h2>

          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            className="html__css"
          >
            <h4 className="inhtmlcssjsbroSections beforeMedia">HTML FILE</h4>
            <h4 className="inhtmlcssjsbroSections beforeMedia">CSS FILE</h4>
          </div>
          <div className="codeSection">
            <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
            <div className="inputSection">
              &lt;<span className="tag">h2</span>&gt; web crowd &lt;
              <span className="tag">/h2</span>&gt; <br />
              &lt;
              <span className="tag">div</span>{" "}
              <span className="classProperty">class= </span>
              <span className="classValue">"welcome" </span>
              &gt; welcome to web crowd &lt;
              <span className="tag">/div</span>&gt;
            </div>
            <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
            <div className="inputSection">
              <span className="cssTag">h2 </span>
              &#123; <br />{" "}
              <span className="cssProperty">&nbsp;&nbsp; font-size</span> :{" "}
              <span className="cssValue">34px</span>; <br />
              &#125;
              <br />
              <span className="cssTag">.welcome </span>
              &#123; <br />{" "}
              <span className="cssProperty">&nbsp;&nbsp; padding</span> :{" "}
              <span className="cssValue">10px</span>; <br />
              &#125;
            </div>
          </div>
          <br />
          <br />
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            className="html__css"
          >
            <h4 className="inhtmlcssjsbroSections beforeMedia">JS FILE</h4>
            <h4 className="inhtmlcssjsbroSections beforeMedia">BROWSER</h4>
          </div>
          <div className="codeSection">
            <h4 className="inhtmlcssjsbroSections afterMedia">JS FILE</h4>
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> h2Variable = </span>{" "}
              <span style={{ color: "purple" }}>
                <span style={{ color: "blue" }}>document.</span>
                <span style={{ color: "purple" }}>querySelector</span>(
                <span style={{ color: "blue" }}> "h2" </span>) ;
              </span>{" "}
              <br />
              <span className="variableName"> h2Variable.</span>
              <span style={{ color: "blue" }}>style.</span>
              <span style={{ color: "purple" }}>color</span> =
              <span style={{ color: "blue" }}> "red"</span> ;
              <br />
              <span className="declarationKey">const</span>
              <span className="variableName"> divVariable = </span>{" "}
              <span style={{ color: "purple" }}>
                <span style={{ color: "blue" }}>document.</span>
                <span style={{ color: "purple" }}>querySelector</span>(
                <span style={{ color: "blue" }}> ".welcome" </span>) ;
              </span>{" "}
              <br />
              <span className="variableName"> divVariable.</span>
              <span style={{ color: "blue" }}>style.</span>
              <span style={{ color: "purple" }}>backgroundColor</span> =
              <span style={{ color: "blue" }}> "blue"</span> ;
              <br />
              <span className="variableName"> divVariable.</span>
              <span style={{ color: "blue" }}>style.</span>
              <span style={{ color: "purple" }}>color</span> =
              <span style={{ color: "blue" }}> "white"</span> ;
            </div>
            <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
            <div className="inputSection">
              <h2 style={{ color: "red", fontSize: "34px" }}>web crowd</h2>
              <div
                style={{
                  color: "white",
                  backgroundColor: "blue",
                  padding: "10px",
                }}
              >
                welcome to web crowd
              </div>
            </div>
          </div>
          <p className="clickHere">
            as you can see, we selected h2,div elements from HTML, then assigned
            them to <b>h2Variable,divVariable</b>, then added styling to those
            elements. <br />
          </p>

          <h2 className=" subTittles">change element's text :</h2>

          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            className="html__css"
          >
            <h4 className="inhtmlcssjsbroSections beforeMedia">HTML FILE</h4>
            <h4 className="inhtmlcssjsbroSections beforeMedia">CSS FILE</h4>
          </div>
          <div className="codeSection">
            <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
            <div className="inputSection">
              &lt;<span className="tag">h2</span>&gt; web crowd &lt;
              <span className="tag">/h2</span>&gt; <br />
              &lt;
              <span className="tag">div</span>{" "}
              <span className="classProperty">class= </span>
              <span className="classValue">"welcome" </span>
              &gt; welcome to web crowd &lt;
              <span className="tag">/div</span>&gt;
            </div>
            <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
            <div className="inputSection">
              <span className="cssTag">h2 </span>
              &#123; <br />{" "}
              <span className="cssProperty">&nbsp;&nbsp; font-size</span> :{" "}
              <span className="cssValue">34px</span>; <br />
              &#125;
              <br />
            </div>
          </div>
          <br />
          <br />
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            className="html__css"
          >
            <h4 className="inhtmlcssjsbroSections beforeMedia">JS FILE</h4>
            <h4 className="inhtmlcssjsbroSections beforeMedia">BROWSER</h4>
          </div>
          <div className="codeSection">
            <h4 className="inhtmlcssjsbroSections afterMedia">JS FILE</h4>
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> h2Variable = </span>{" "}
              <span style={{ color: "purple" }}>
                <span style={{ color: "blue" }}>document.</span>
                <span style={{ color: "purple" }}>querySelector</span>(
                <span style={{ color: "blue" }}> "h2" </span>) ;
              </span>{" "}
              <br />
              <span className="variableName"> h2Variable.</span>
              <span style={{ color: "blue" }}>style.</span>
              <span style={{ color: "purple" }}>color</span> =
              <span style={{ color: "blue" }}> "red"</span> ;
              <br />
              <span className="variableName"> h2Variable.</span>
              <span style={{ color: "blue" }}>textContent </span>=
              <span style={{ color: "purple" }}>
                "this is a new text of h2"
              </span>{" "}
              ;
              <br />
              <span className="declarationKey">const</span>
              <span className="variableName"> divVariable = </span>{" "}
              <span style={{ color: "purple" }}>
                <span style={{ color: "blue" }}>document.</span>
                <span style={{ color: "purple" }}>querySelector</span>(
                <span style={{ color: "blue" }}> ".welcome" </span>) ;
              </span>{" "}
              <br />
              <span className="variableName"> divVariable.</span>
              <span style={{ color: "blue" }}>textContent </span>=
              <span style={{ color: "purple" }}>
                "this is a new text of div"
              </span>{" "}
              ;
              <br />
              <span className="variableName"> divVariable.</span>
              <span style={{ color: "blue" }}>style.</span>
              <span style={{ color: "purple" }}>color</span> =
              <span style={{ color: "blue" }}> "blue"</span> ;
            </div>
            <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
            <div className="inputSection">
              <h2 style={{ color: "red", fontSize: "34px" }}>
                this is a new text of h2
              </h2>
              <div
                style={{
                  color: "blue",
                }}
              >
                this is a new text of div
              </div>
            </div>
          </div>
          <p className="clickHere">
            as you can see, we changed <b>h2</b> and <b>div</b>'s text using{" "}
            <b>textContent</b> property in JavaScript. in addition that, css
            file applied also.
          </p>

          <p className="clickHere">
            <b className="importants">Important!</b> you can override css style
            using JavaScript. <br /> let's assume we added <b>color</b> to html
            element and we also set <b>color</b> in JavaScript file to the same
            element, So in this case, the color in css will get{" "}
            <b>overridden</b>. then the JavaScript one will get <b>applied</b>.{" "}
            <br />
          </p>

          <h2 className=" subTittles">add elements :</h2>

          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            className="html__css"
          >
            <h4 className="inhtmlcssjsbroSections beforeMedia">HTML FILE</h4>
            <h4 className="inhtmlcssjsbroSections beforeMedia">CSS FILE</h4>
          </div>
          <div className="codeSection">
            <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
            <div className="inputSection">
              &lt;<span className="tag">h2</span>&gt; web crowd &lt;
              <span className="tag">/h2</span>&gt; <br />
            </div>
            <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
            <div className="inputSection">
              <span className="cssTag">h2 </span>
              &#123; <br />{" "}
              <span className="cssProperty">&nbsp;&nbsp; color</span> :{" "}
              <span className="cssValue">blue</span>; <br />
              &#125;
              <br />
            </div>
          </div>
          <br />
          <br />
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            className="html__css"
          >
            <h4 className="inhtmlcssjsbroSections beforeMedia">JS FILE</h4>
            <h4 className="inhtmlcssjsbroSections beforeMedia">BROWSER</h4>
          </div>
          <div className="codeSection">
            <h4 className="inhtmlcssjsbroSections afterMedia">JS FILE</h4>
            <div className="inputSection">
              <span style={{ color: "gray" }}>// 1 create a new element</span>
              <br />
              <span className="declarationKey">const</span>
              <span className="variableName"> newElement = </span>{" "}
              <span style={{ color: "purple" }}>
                <span style={{ color: "blue" }}>document.</span>
                <span style={{ color: "purple" }}>createElement</span>(
                <span style={{ color: "blue" }}> "h2" </span>) ;
              </span>{" "}
              <br />
              <span style={{ color: "gray" }}>
                // 2 add text to the new element
              </span>
              <br />
              <span className="variableName"> newElement.</span>
              <span style={{ color: "blue" }}>textContent</span> =
              <span style={{ color: "purple" }}>
                "this is a new h2 element"
              </span>{" "}
              ;
              <br />
              <span style={{ color: "gray" }}>
                // 3 add the new element to web page
              </span>
              <br />
              <span style={{ color: "blue" }}> body.</span>
              <span style={{ color: "purple" }}>
                <span style={{ color: "purple" }}>append.</span>(
                <span style={{ color: "blue" }}> newElement </span>) ;
              </span>{" "}
            </div>
            <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
            <div className="inputSection">
              <h2 style={{ color: "blue" }}>web crowd</h2>
              <h2>this is a new h2 element</h2>
            </div>
          </div>
          <p className="clickHere">don't miss any step.</p>

          <p className="clickHere">
            <b className="importants">Important!</b> : in this exercise, we
            added the new paragraph in our body. you can also add any html
            element wherever you want, s let's make another example, in this
            example we will add new <b>li</b> to our <b>ul</b>.
          </p>
          <h4 className="subTittles">Add li to ul :</h4>
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            className="html__css"
          >
            <h4 className="inhtmlcssjsbroSections beforeMedia">HTML FILE</h4>
            <h4 className="inhtmlcssjsbroSections beforeMedia">CSS FILE</h4>
          </div>
          <div className="codeSection">
            <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
            <div className="inputSection">
              &lt;<span className="tag">ul</span>&gt; <br />
              &lt;<span className="tag">li</span>&gt; html5 &lt;
              <span className="tag">/li</span>&gt; <br />
              &lt;<span className="tag">li</span>&gt; css3 &lt;
              <span className="tag">/li</span>&gt; <br />
              &lt;
              <span className="tag">/ul</span>&gt; <br />
            </div>
            <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
            <div className="inputSection">
              <span className="cssTag">li </span>
              &#123; <br />{" "}
              <span className="cssProperty">&nbsp;&nbsp; color</span> :{" "}
              <span className="cssValue">blue</span>; <br />
              &#125;
              <br />
            </div>
          </div>
          <br />
          <br />
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            className="html__css"
          >
            <h4 className="inhtmlcssjsbroSections beforeMedia">JS FILE</h4>
            <h4 className="inhtmlcssjsbroSections beforeMedia">BROWSER</h4>
          </div>
          <div className="codeSection">
            <h4 className="inhtmlcssjsbroSections afterMedia">JS FILE</h4>
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> ul = </span>{" "}
              <span style={{ color: "purple" }}>
                <span style={{ color: "blue" }}>document.</span>
                <span style={{ color: "purple" }}>querySelector</span>(
                <span style={{ color: "blue" }}> "ul" </span>) ;
              </span>{" "}
              <br />
              <span style={{ color: "gray" }}>// 1 create a new li</span>
              <br />
              <span className="declarationKey">const</span>
              <span className="variableName"> newLi = </span>{" "}
              <span style={{ color: "purple" }}>
                <span style={{ color: "blue" }}>document.</span>
                <span style={{ color: "purple" }}>createElement</span>(
                <span style={{ color: "blue" }}> "li" </span>) ;
              </span>{" "}
              <br />
              <span style={{ color: "gray" }}>// 2 add text to the new li</span>
              <br />
              <span className="variableName"> newLi.</span>
              <span style={{ color: "blue" }}>textContent</span> =
              <span style={{ color: "purple" }}>"javascript"</span> ;
              <br />
              <span style={{ color: "gray" }}>// 3 add the new li to ul</span>
              <br />
              <span className="variableName"> ul.</span>
              <span style={{ color: "purple" }}>
                <span style={{ color: "blue" }}>append</span>(
                <span style={{ color: "purple" }}> newLi </span>) ;
              </span>{" "}
            </div>
            <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
            <div className="inputSection">
              <ul style={{ marginLeft: "50px", pointerEvents: "none" }}>
                <li style={{ color: "blue" }}>html5</li>
                <li style={{ color: "blue" }}>css3</li>
                <li style={{ color: "blue" }}>javascript</li>
              </ul>
            </div>
          </div>

          <h4 className="subTittles">Add items using input value :</h4>
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            className="html__css"
          >
            <h4 className="inhtmlcssjsbroSections beforeMedia">HTML FILE</h4>
            <h4 className="inhtmlcssjsbroSections beforeMedia">CSS FILE</h4>
          </div>
          <div className="codeSection">
            <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
            <div className="inputSection">
              &lt;<span className="tag">input</span>{" "}
              <span style={{ color: "blue" }}>placeholder=</span>
              <span style={{ color: "purple" }}> "type a new item..."</span>
              /&gt; &lt;<span className="tag">button</span>&gt; add item &lt;
              <span className="tag">/button</span>&gt; <br />
              &lt;<span className="tag">ul</span>&gt; &lt;
              <span className="tag">/ul</span>&gt;
              <br />
            </div>
            <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
            <div className="inputSection">
              <span className="cssTag">li </span>
              &#123; <br />{" "}
              <span className="cssProperty">&nbsp;&nbsp; color</span> :{" "}
              <span className="cssValue">blue</span>; <br />
              &#125; <br />
              <span className="cssTag">input </span>
              &#123; <br />{" "}
              <span className="cssProperty">&nbsp;&nbsp; padding</span> :{" "}
              <span className="cssValue">10px 15px</span>; <br />
              <span className="cssProperty">&nbsp;&nbsp; border</span> :{" "}
              <span className="cssValue">none</span>; <br />
              <span className="cssProperty">&nbsp;&nbsp; outline</span> :{" "}
              <span className="cssValue">none</span>; <br />
              &#125;
              <br />
              <span className="cssTag">button </span>
              &#123; <br />{" "}
              <span className="cssProperty">&nbsp;&nbsp; color</span> :{" "}
              <span className="cssValue">white</span>; <br />
              <span className="cssProperty">
                &nbsp;&nbsp; background-color
              </span>{" "}
              : <span className="cssValue">blue</span>; <br />
              <span className="cssProperty">&nbsp;&nbsp; padding</span> :{" "}
              <span className="cssValue">10px 15px</span>; <br />
              <span className="cssProperty">&nbsp;&nbsp; border</span> :{" "}
              <span className="cssValue">none</span>; <br />
              <span className="cssProperty">&nbsp;&nbsp; cursor</span> :{" "}
              <span className="cssValue">pointer</span>; <br />
              &#125;
              <br />
            </div>
          </div>
          <br />
          <br />
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            className="html__css"
          >
            <h4 className="inhtmlcssjsbroSections beforeMedia">JS FILE</h4>
            <h4 className="inhtmlcssjsbroSections beforeMedia">BROWSER</h4>
          </div>
          <div className="codeSection">
            <h4 className="inhtmlcssjsbroSections afterMedia">JS FILE</h4>
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> input = </span>{" "}
              <span style={{ color: "blue" }}>document.</span>
              <span style={{ color: "purple" }}>querySelector</span>(
              <span style={{ color: "blue" }}> "input" </span>) ; <br />
              <span className="declarationKey">const</span>
              <span className="variableName"> ul = </span>{" "}
              <span style={{ color: "purple" }}>
                <span style={{ color: "blue" }}>document.</span>
                <span style={{ color: "purple" }}>querySelector</span>(
                <span style={{ color: "blue" }}> "ul" </span>) ;
              </span>{" "}
              <br />
              <span className="declarationKey">const</span>
              <span className="variableName"> addItem = </span>{" "}
              <span style={{ color: "purple" }}>
                <span style={{ color: "blue" }}>document.</span>
                <span style={{ color: "purple" }}>querySelector</span>(
                <span style={{ color: "blue" }}> "button" </span>) ;
              </span>{" "}
              <br />
              <span className="variableName"> addItem.</span>
              <span style={{ color: "blue" }}>addEventListener</span>(
              <span style={{ color: "purple" }}> "click" </span>,{" "}
              <span>function()</span> &#123; <br />
              <span style={{ color: "gray" }}>// create a new li</span>
              <br />
              <span className="declarationKey">const</span>
              <span className="variableName"> newLi = </span>{" "}
              <span style={{ color: "purple" }}>
                <span style={{ color: "blue" }}>document.</span>
                <span style={{ color: "purple" }}>createElement</span>(
                <span style={{ color: "blue" }}> "li" </span>) ;
              </span>{" "}
              <br />
              <span style={{ color: "gray" }}>// add text to the new li</span>
              <br />
              <span className="variableName"> newLi.</span>
              <span style={{ color: "blue" }}>textContent</span> =
              <span style={{ color: "purple" }}>input.</span>
              <span>value</span> ;
              <br />
              <span style={{ color: "gray" }}>// add the new li to ul</span>
              <br />
              <span className="variableName"> ul.</span>
              <span style={{ color: "purple" }}>
                <span style={{ color: "blue" }}>append</span>(
                <span style={{ color: "purple" }}> newLi </span>) ;
              </span>{" "}
              <br />
              <span className="variableName"> input.</span>
              <span style={{ color: "purple" }}>
                <span style={{ color: "blue" }}>value =</span>
                <span style={{ color: "purple" }}> "" </span> ;
              </span>{" "}
              <br />
              &#125; )
            </div>
            <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
            <div className="inputSection">
              <input
                style={{
                  padding: "10px 15px",
                  border: "none",
                  outline: "none",
                }}
                className="itemsInput"
                type="text"
                placeholder="type a new item..."
              />
              <button
                onClick={addItemsToUl}
                style={{
                  color: "white",
                  padding: "10px 15px",
                  backgroundColor: "blue",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                add item
              </button>
              <ul style={{ marginLeft: "50px" }} className="liContainer"></ul>
            </div>
          </div>

          <p className="clickHere">
            As you can see, when we added a new <b>item</b>, the input value
            became an empty string, that happened because of the{" "}
            <b>last line </b>in javascript file.
          </p>

          <h4 className="subTittles">remove items :</h4>
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            className="html__css"
          >
            <h4 className="inhtmlcssjsbroSections beforeMedia">HTML FILE</h4>
            <h4 className="inhtmlcssjsbroSections beforeMedia">CSS FILE</h4>
          </div>
          <div className="codeSection">
            <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
            <div className="inputSection">
              &lt;<span className="tag">ul</span>&gt; <br />
              &lt;<span className="tag">li</span>&gt; html5 &lt;
              <span className="tag">/li</span>&gt; <br />
              &lt;<span className="tag">li</span>{" "}
              <span className="idProperty">id</span> ={" "}
              <span className="idValue">"cssLi" </span>&gt; css3 &lt;
              <span className="tag">/li</span>&gt; <br />
              &lt;<span className="tag">li</span>&gt; javascript &lt;
              <span className="tag">/li</span>&gt; <br />
              &lt;
              <span className="tag">/ul</span>&gt; <br />
            </div>
            <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
            <div className="inputSection">
              <span className="cssTag">li </span>
              &#123; <br />{" "}
              <span className="cssProperty">&nbsp;&nbsp; color</span> :{" "}
              <span className="cssValue">blue</span>; <br />
              &#125;
              <br />
            </div>
          </div>
          <br />
          <br />
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            className="html__css"
          >
            <h4 className="inhtmlcssjsbroSections beforeMedia">JS FILE</h4>
            <h4 className="inhtmlcssjsbroSections beforeMedia">BROWSER</h4>
          </div>
          <div className="codeSection">
            <h4 className="inhtmlcssjsbroSections afterMedia">JS FILE</h4>
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> cssLi = </span>{" "}
              <span style={{ color: "purple" }}>
                <span style={{ color: "blue" }}>document.</span>
                <span style={{ color: "purple" }}>querySelector</span>(
                <span style={{ color: "blue" }}> "#cssLi" </span>) ;
              </span>{" "}
              <br />
              <span style={{ color: "gray" }}>// remove cssLi</span>
              <br />
              <span className="variableName"> cssLi.</span>
              <span style={{ color: "purple" }}>
                <span style={{ color: "blue" }}>remove</span>() ;
              </span>{" "}
            </div>
            <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
            <div className="inputSection">
              <ul style={{ marginLeft: "50px", pointerEvents: "none" }}>
                <li style={{ color: "blue" }}>html5</li>
                <li style={{ color: "blue" }}>javascript</li>
              </ul>
            </div>
          </div>

          <h4 className="subTittles">JavaScript Events :</h4>
          <p className="clickHere">
            we often use JavaScript events when we want to jump to another page,
            there are a bunch of JavaScript Events, but the most famous is{" "}
            <b>click event</b>, So in this section we will only have an example
            of <b>click</b> event. <br />
            <b className="note">Note : </b> you can also use <b>dblclick</b> ,{" "}
            <b>mouseover</b> , <b>mouseleave</b>...etc.
          </p>
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            className="html__css"
          >
            <h4 className="inhtmlcssjsbroSections beforeMedia">HTML FILE</h4>
            <h4 className="inhtmlcssjsbroSections beforeMedia">CSS FILE</h4>
          </div>
          <div className="codeSection">
            <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
            <div className="inputSection">
              &lt;<span className="tag">h2</span>&gt; web crowd &lt;
              <span className="tag">/h2</span>&gt; <br />
              &lt;<span className="tag">button</span>&gt; click here &lt;
              <span className="tag">/button</span>&gt; <br />
            </div>
            <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
            <div className="inputSection">
              <span className="cssTag">button </span>
              &#123; <br />{" "}
              <span className="cssProperty">&nbsp;&nbsp; color</span> :{" "}
              <span className="cssValue">white</span>; <br />
              <span className="cssProperty">&nbsp;&nbsp; padding</span> :{" "}
              <span className="cssValue">10px 15px</span>; <br />
              <span className="cssProperty">&nbsp;&nbsp; border</span> :{" "}
              <span className="cssValue">none</span>; <br />
              <span className="cssProperty">
                &nbsp;&nbsp; background-color
              </span>{" "}
              : <span className="cssValue">blue</span>; <br />
              &#125;
              <br />
            </div>
          </div>
          <br />
          <br />
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            className="html__css"
          >
            <h4 className="inhtmlcssjsbroSections beforeMedia">JS FILE</h4>
            <h4 className="inhtmlcssjsbroSections beforeMedia">BROWSER</h4>
          </div>
          <div className="codeSection">
            <h4 className="inhtmlcssjsbroSections afterMedia">JS FILE</h4>
            <div className="inputSection">
              <span className="declarationKey">const</span>
              <span className="variableName"> btn = </span>{" "}
              <span style={{ color: "purple" }}>
                <span style={{ color: "blue" }}>document.</span>
                <span style={{ color: "purple" }}>querySelector</span>(
                <span style={{ color: "blue" }}> "button" </span>) ;
              </span>{" "}
              <br />
              <span className="declarationKey">const</span>
              <span className="variableName"> h2 = </span>{" "}
              <span style={{ color: "purple" }}>
                <span style={{ color: "blue" }}>document.</span>
                <span style={{ color: "purple" }}>querySelector</span>(
                <span style={{ color: "blue" }}> "h2" </span>) ;
              </span>{" "}
              <br />
              <br />
              <span className="variableName"> btn.</span>
              <span style={{ color: "purple" }}>
                <span style={{ color: "blue" }}>addEventListener</span>(
                <span style={{ color: "purple" }}> "click" </span>,{" "}
                <span>function()</span> &#123; <br />
                <span style={{ color: "purple" }}>h2.</span>
                <span style={{ color: "blue" }}>style</span>
                <span style={{ color: "black" }}>.color = </span>
                <span style={{ color: "purple" }}>"red"</span> <br /> &#125; ) ;
              </span>{" "}
            </div>
            <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
            <div className="inputSection">
              <h2 className="webCrowdTest">web crowd</h2>
              <button
                style={{
                  color: "white",
                  padding: "10px 15px",
                  border: "none",
                  backgroundColor: "blue",
                }}
                onClick={changeColor}
              >
                click here
              </button>
            </div>
          </div>
          <p className="clickHere">
            As you can see, when you click on the button you will see that the
            color of h2 will change.
          </p>
        </div>
        <div className="addPaddingToSection" id="Exercises">
          <div style={{ width: "100%" }}>
            <h3 className="sectionTittle">Exercises</h3>
          </div>
          <div className="exercise">
            <h3
              style={{
                textAlign: "center",
                padding: "10px",
                fontSize: "30px",
                color: "blue",
              }}
            >
              Calculator
            </h3>
            <table style={{ margin: "auto" }}>
              <tr>
                <td>
                  {" "}
                  <span style={{ margin: "5px" }}>First number</span>
                </td>

                <td>
                  :
                  <input
                    style={{
                      padding: "5px",
                      border: "none",
                      outline: "none",
                      margin: "5px 8px",
                      width: "150px",
                    }}
                    type="number"
                    placeholder="First number..."
                    className="firstNumber"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <span style={{ margin: "5px" }}>Second number</span>
                </td>

                <td>
                  :
                  <input
                    style={{
                      padding: "5px",
                      border: "none",
                      outline: "none",
                      margin: "5px 8px",
                      width: "150px",
                    }}
                    type="number"
                    placeholder="Second number..."
                    className="secondNumber"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <span style={{ margin: "5px" }}>Operation</span>
                </td>

                <td>
                  :
                  <select
                    name=""
                    id=""
                    style={{
                      padding: "5px",
                      border: "none",
                      outline: "none",
                      margin: "5px 8px",
                      width: "160px",
                    }}
                    className="operation"
                  >
                    <option value="selectOperation">Select Operation</option>
                    <option value="addition">Addition (+)</option>
                    <option value="subtraction">Subtraction (-)</option>
                    <option value="multiplication">Multiplication (*)</option>
                    <option value="division">Division (/)</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <span style={{ margin: "5px" }}>Result</span>
                </td>

                <td>
                  :
                  <input
                    style={{
                      padding: "5px",
                      border: "none",
                      outline: "none",
                      margin: "5px 8px",
                      width: "150px",
                    }}
                    type="text"
                    placeholder="Result"
                    className="result"
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td> </td>

                <td>
                  <button
                    style={{
                      color: "white",
                      padding: "10px",
                      margin: "5px",
                      border: "none",
                      outline: "none",
                      cursor: "pointer",
                      borderRadius: "5px",
                      backgroundColor: "green",
                    }}
                    onClick={calculator}
                  >
                    Calculate
                  </button>
                  <button
                    style={{
                      color: "white",
                      padding: "10px",
                      margin: "5px",
                      border: "none",
                      outline: "none",
                      cursor: "pointer",
                      borderRadius: "5px",
                      backgroundColor: "black",
                    }}
                    onClick={resetInputs}
                  >
                    Reset
                  </button>
                </td>
              </tr>
            </table>
            <a
              href="https://www.youtube.com/watch?v=HQsZzPFNvKI&list=PLBRc8och4vXULbcJY-o1LMBLS5s2gMmom&index=21"
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
            <div style={{ textAlign: "center", flex: "1" }}>
              <h3 style={{ padding: "10px", fontSize: "30px", color: "blue" }}>
                Todo-List
              </h3>
              <input
                type="text"
                placeholder="Type a task..."
                style={{
                  padding: "10px 15px",
                  marginLeft: "20px",
                  border: "none",
                  outline: "none",
                }}
                className="newItemsInput"
              />
              <button
                style={{
                  padding: "10px 15px",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: "rgb(189, 188, 188)",
                }}
                onClick={addItems}
              >
                Add to List
              </button>
              <ul
                className="newItemsContainer"
                style={{
                  width: "400px",
                  textAlign: "start",
                  margin: "auto",
                  marginTop: "20px",
                }}
              ></ul>
            </div>
            <a
              href="https://www.youtube.com/watch?v=tV2UnmCD0PE&list=PLBRc8och4vXULbcJY-o1LMBLS5s2gMmom&index=22"
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
            <div style={{ textAlign: "center", flex: "1" }}>
              <h3 style={{ padding: "10px", fontSize: "30px", color: "blue" }}>
                Timer
              </h3>
              <div
                className="timeContainer"
                style={{ padding: "10px", margin: "10px", fontSize: "40px" }}
              >
                --:--:--
              </div>
              <button
                onClick={timer}
                className="startTimerBtn"
                style={{
                  padding: "10px 15px",
                  margin: "5px",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  borderRadius: "3px",
                  backgroundColor: "blue",
                  color: "white",
                }}
              >
                Start
              </button>
              <button
                style={{
                  padding: "10px 15px",
                  margin: "5px",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  borderRadius: "3px",
                  backgroundColor: "black",
                  color: "white",
                }}
                onClick={resetTimer}
              >
                Reset
              </button>
            </div>
            <a
              href="https://www.youtube.com/watch?v=r2vCpGeLHYg&list=PLBRc8och4vXULbcJY-o1LMBLS5s2gMmom&index=23"
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
            <div style={{ textAlign: "center", flex: "1" }}>
              <h3
                style={{
                  padding: "10px",
                  fontSize: "30px",
                  color: "blue",
                  marginBottom: "30px",
                }}
              >
                Numbers Generator
              </h3>
              <span
                style={{
                  color: "purple",
                  fontSize: "30px",
                  margin: "30px 10px",
                }}
              >
                Result :{" "}
              </span>
              <span
                className="numbersContainer"
                style={{
                  textAlign: "center",
                  margin: "30px 10px",
                  fontSize: "30px",
                  color: "blue",
                }}
              >
                0
              </span>
              <br />

              <button
                style={{
                  padding: "10px 15px",
                  margin: "5px",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  borderRadius: "3px",
                  backgroundColor: "blue",
                  color: "white",
                }}
                onClick={generateNumbers}
              >
                Generate
              </button>
            </div>
            <a
              href="https://www.youtube.com/watch?v=KqVxvWhrYyI&list=PLBRc8och4vXULbcJY-o1LMBLS5s2gMmom&index=24"
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

        <div className="addPaddingToSection" id="javascriptQuiz">
          <h3 className="sectionTittle">Quiz</h3>
          <p className="clickHere">
            <b className="note">Note : </b> Make sure that you have read the
            introduction of every Concept we discussed about above before you
            start this Quiz. <br />
            So, when you complete all of those questions, click on{" "}
            <b className="note">i'm Done</b> button to display the result
            immediately.
          </p>

          <div className="javascriptQuiz__content">
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 1
            </h5>
            <p className="clickHere">JavaScript is a </p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="firstQuestionName"
              className="javaScriptwrongOne"
            />
            <span className="javaScriptWrongAnswerOne">
              markup language <CancelIcon className="cancelIcon" />
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="firstQuestionName"
              className="javaScriptQuestionOne"
            />
            <span className="javaScriptAnswerOne">
              programming language <DoneIcon className="doneIcon" />
            </span>

            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 2
            </h5>
            <p className="clickHere">
              which of the these we use to select html elements ?
            </p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="secondQuestionName"
              className="javaScriptwrongTwo1"
            />
            <span className="javaScriptWrongAnswerTwo1">
              select() <CancelIcon className="cancelIcon" />
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="secondQuestionName"
              className="javaScriptQuestionTwo"
            />
            <span className="javaScriptAnswerTwo">
              querySelector(); <DoneIcon className="doneIcon" />
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="secondQuestionName"
              className="javaScriptwrongTwo2"
            />
            <span className="javaScriptWrongAnswerTwo2">
              map() <CancelIcon className="cancelIcon" />
            </span>
            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 3
            </h5>
            <p className="clickHere">
              which of the folowwing is an Array function ?
            </p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="thirdQuestionName"
              className="javaScriptQuestionThree"
            />
            <span className="javaScriptAnswerThree">
              push() <DoneIcon className="doneIcon" />
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="thirdQuestionName"
              className="javaScriptwrongThree1"
            />
            <span className="javaScriptWrongAnswerThree1">
              lastIndexOf() <CancelIcon className="cancelIcon" />
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="thirdQuestionName"
              className="javaScriptwrongThree2"
            />
            <span className="javaScriptWrongAnswerThree2">
              split() <CancelIcon className="cancelIcon" />
            </span>
            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 4
            </h5>
            <p className="clickHere">
              which of the following is a string function ?
            </p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="fourthQuestionName"
              className="javaScriptwrongFour1"
            />
            <span className="javaScriptWrongAnswerFour1">
              join() <CancelIcon className="cancelIcon" />
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="fourthQuestionName"
              className="javaScriptwrongFour2"
            />
            <span className="javaScriptWrongAnswerFour2">
              shift() <CancelIcon className="cancelIcon" />
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="fourthQuestionName"
              className="javaScriptQuestionFour"
            />
            <span className="javaScriptAnswerFour">
              endsWith() <DoneIcon className="doneIcon" />
            </span>
            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 5
            </h5>
            <p className="clickHere">
              can we add style to html elements using JavaScript ?
            </p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="fifthQuestionName"
              className="javaScriptQuestionFive"
            />
            <span className="javaScriptAnswerFive">
              yes <DoneIcon className="doneIcon" />
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="fifthQuestionName"
              className="javaScriptwrongFive"
            />
            <span className="javaScriptWrongAnswerFive">
              no <CancelIcon className="cancelIcon" />
            </span>
            <br />

            <hr />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 6
            </h5>
            <p className="clickHere">
              is it possible to change elements text using JavaScript ?
            </p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="sixthQuestionName"
              className="javaScriptQuestionSix"
            />
            <span className="javaScriptAnswerSix">
              yes <DoneIcon className="doneIcon" />
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="sixthQuestionName"
              className="javaScriptwrongSix"
            />
            <span className="javaScriptWrongAnswerSix">
              no <CancelIcon className="cancelIcon" />
            </span>
            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 7
            </h5>
            <p className="clickHere">
              which of the following is a JavaScript Event ?
            </p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="seventhQuestionName"
              className="javaScriptQuestionSeven"
            />
            <span className="javaScriptAnswerSeven">
              click <DoneIcon className="doneIcon" />
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="seventhQuestionName"
              className="javaScriptwrongSeven1"
            />
            <span className="javaScriptWrongAnswerSeven1">
              type <CancelIcon className="cancelIcon" />
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="seventhQuestionName"
              className="javaScriptwrongSeven2"
            />
            <span className="javaScriptWrongAnswerSeven2">
              mouseHover <CancelIcon className="cancelIcon" />
            </span>
            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 8
            </h5>
            <p className="clickHere"> is array a data type ?</p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="eightQuestionName"
              className="javaScriptQuestionEight"
            />
            <span className="javaScriptAnswerEight">
              yes <DoneIcon className="doneIcon" />
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="eightQuestionName"
              className="javaScriptwrongEight"
            />
            <span className="javaScriptWrongAnswerEight">
              no <CancelIcon className="cancelIcon" />
            </span>
            <br />
            <hr style={{ color: "gray", margin: "5px" }} />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 9
            </h5>
            <p className="clickHere">how to transform array to string ?</p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="ninthQuestionName"
              className="javaScriptQuestionNine"
            />
            <span className="javaScriptAnswerNine">
              using join() fuction <DoneIcon className="doneIcon" />
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="ninthQuestionName"
              className="javaScriptwrongNine"
            />
            <span className="javaScriptWrongAnswerNine">
              using split() fuction <CancelIcon className="cancelIcon" />
            </span>
            <br />

            <hr />
            <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
              Question 10
            </h5>
            <p className="clickHere">
              which of these helps us to remove the duplicated elements in array
              ?
            </p>
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="tenthQuestionName"
              className="javaScriptQuestionTen"
            />
            <span className="javaScriptAnswerTen">
              Set() <DoneIcon className="doneIcon" />
            </span>
            <br />
            <input
              style={{ margin: "5px 5px 5px 25px" }}
              type="radio"
              name="tenthQuestionName"
              className="javaScriptwrongTen"
            />
            <span className="javaScriptWrongAnswerTen">
              pop() <CancelIcon className="cancelIcon" />
            </span>
            <br />
            <button
              style={{
                padding: "5px 10px",
                margin: "10px 25px",
                color: "white",
                backgroundColor: "blue",
                borderRadius: "5px",
                cursor: "pointer",
                border: "none",
                outline: "none",
              }}
              onClick={javaScriptCompletedQuiz}
            >
              i'm Done
            </button>
          </div>
        </div>
        <ContentFooter />
      </div>
    </div>
  );
}
export default JavaScript;
