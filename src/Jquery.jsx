// import React, { useState, useEffect } from "react";
// import $ from "jquery";
// import "./Jquery.css";
// import DehazeIcon from "@mui/icons-material/Dehaze";
// import CloseIcon from "@mui/icons-material/Close";
// import CancelIcon from "@mui/icons-material/Cancel";
// import DoneIcon from "@mui/icons-material/Done";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useHistory,
//   useLocation,
// } from "react-router-dom";
// function Jquery() {
//   const [show, hide] = useState(false);
//   let history = useHistory();

//   //show and hide
//   const ShowHide = () => {
//     if (!show) {
//       document.querySelector(".Sidebar").style.width = "250px";
//       document.querySelector(".Sidebar ul").style.display = "block";
//       document.querySelector(".Content").style.opacity = "0.5";
//       document.querySelector(".OpenSideBar").style.float = "right";
//       document.querySelector(".OpenSideBar").style.margin = "3px";
//       hide(true);
//     } else if (show) {
//       document.querySelector(".Sidebar").style.width = "40px";
//       document.querySelector(".Sidebar ul").style.display = "none";
//       document.querySelector(".Content").style.opacity = "1";
//       document.querySelector(".OpenSideBar").style.margin = "0px";

//       hide(false);
//     } else {
//     }
//   };
//   window.addEventListener("resize", function () {
//     if (window.innerWidth > 871) {
//       if (history.push(localStorage.getItem("current")) === "JQUERY") {
//         document.querySelector(".Sidebar").style.width = "200px";
//         document.querySelector(".Sidebar ul").style.display = "block";
//       }
//       if (show) {
//         try {
//           document.querySelector(".Sidebar").style.width = "200px";
//           document.querySelector(".Sidebar ul").style.display = "block";
//         } catch (error) {}
//       }
//       if (show && window.innerWidth >= 871) {
//         try {
//           document.querySelector(".Content").style.opacity = "1";
//           hide(false);
//         } catch (error) {}
//       }
//     } else if (window.innerWidth <= 871) {
//       if (history.push(localStorage.getItem("current")) === "jquery5") {
//         document.querySelector(".Sidebar").style.width = "40px";
//         document.querySelector(".Sidebar ul").style.display = "none";
//       }
//       if (show && window.innerWidth <= 871) {
//         try {
//           document.querySelector(".Content").style.opacity = "1";
//           document.querySelector(".Sidebar").style.width = "40px";
//           document.querySelector(".Sidebar ul").style.display = "none";
//           hide(false);
//         } catch (error) {}
//       }
//     } else {
//     }
//   });
//   let jqueryQuizScore;
//   const jqueryCompletedQuiz = () => {
//     jqueryQuizScore = 0;
//     if (document.querySelector(".jqueryQuestionOne").checked) {
//       jqueryQuizScore++;
//     }

//     if (document.querySelector(".jqueryQuestionTwo").checked) {
//       jqueryQuizScore++;
//     }

//     if (document.querySelector(".jqueryQuestionThree").checked) {
//       jqueryQuizScore++;
//     }

//     if (document.querySelector(".jqueryQuestionFour").checked) {
//       jqueryQuizScore++;
//     }

//     if (document.querySelector(".jqueryQuestionFive").checked) {
//       jqueryQuizScore++;
//     }

//     if (document.querySelector(".jqueryQuestionSix").checked) {
//       jqueryQuizScore++;
//     }

//     if (document.querySelector(".jqueryQuestionSeven").checked) {
//       jqueryQuizScore++;
//     }

//     if (document.querySelector(".jqueryQuestionEight").checked) {
//       jqueryQuizScore++;
//     }

//     if (document.querySelector(".jqueryQuestionNine").checked) {
//       jqueryQuizScore++;
//     }

//     if (document.querySelector(".jqueryQuestionTen").checked) {
//       jqueryQuizScore++;
//     }

//     document.querySelectorAll(".cancelIcon").forEach((rightCancel) => {
//       rightCancel.style.setProperty("display", "inline", "important");
//     });

//     document.querySelectorAll(".doneIcon").forEach((rightCancel) => {
//       rightCancel.style.setProperty("display", "inline", "important");
//     });

//     $(".jqueryScore").text("your score is " + jqueryQuizScore);
//     return $(".Modal").show();
//   };

//   const refleshCurrentPage = () => {
//     $(".fifth").addClass("active");
//     if (show && window.innerWidth < 871) {
//       document.querySelector(".Sidebar").style.width = "40px";
//       document.querySelector(".Sidebar ul").style.display = "none";
//       document.querySelector(".Content").style.opacity = "1";
//       document.querySelector(".OpenSideBar").style.margin = "0px";
//       hide(false);
//     }
//   };

//   window.history.pushState(null, "", window.location.href);
//   window.onpopstate = function () {
//     window.history.pushState(null, "", window.location.href);
//   };
//   useEffect(() => {
//     history.push("JQUERY");
//     $(".fifth").addClass("active");
//     $(".first").removeClass("active");
//     $(".second").removeClass("active");
//     $(".third").removeClass("active");
//     $(".fourth").removeClass("active");
//   }, []);

//   //change web crowd color

//   //jsQuiz

//   const jqueryHideModal = () => {
//     $(".Modal").hide();
//     jqueryQuizScore = 0;
//   };

//   //changeH3Color
//   const changeH3Color = () => {
//     $(".h3Element").html("this is new h3 text");
//   };
//   const doubleClickEvent = () => {
//     $(".para").html("this is new h3 text");
//   };

//   const hideElement = () => {
//     $(".paragraph").hide();
//   };
//   const showElement = () => {
//     $(".hiddenPara").show();
//   };
//   const toggleElement = () => {
//     $(".toggledDiv").toggle();
//   };
//   const slideUpElement = () => {
//     $(".slideUpDiv").slideUp(2000);
//   };
//   const slidedDownElement = () => {
//     $(".slidedH1").slideDown(2000);
//   };
//   const slidedUpElement = () => {
//     $(".slidedH1").slideUp(3000);
//   };
//   const slideToggleElement = () => {
//     $(".slideToggleH1").slideToggle();
//   };
//   const fadeOutElement = () => {
//     $(".fadeOutH1").fadeOut(2000);
//   };

//   const fadedOutElement = () => {
//     $(".fadedH1").fadeOut(2000);
//   };
//   const fadedInElement = () => {
//     $(".fadedH1").fadeIn(2000);
//   };
//   const fadeToggleElement = () => {
//     $(".fadeToggleH1").fadeToggle(2000);
//   };
//   const animateElement = () => {
//     $(".animatedDiv").animate(
//       {
//         width: "200px",
//         height: "100",
//         fontSize: "30px",
//       },
//       2000
//     );
//   };

//   //showHideSideBar
//   let situation = true;
//   const showHideSideBar = () => {
//     if (situation) {
//       $(".sidebar__content").animate(
//         {
//           width: "0",
//         },
//         1000,
//         function () {
//           $(".insideUl").hide();
//         }
//       );

//       $(".showHideIcon").html("O");
//       situation = false;
//     } else {
//       $(".sidebar__content").animate(
//         {
//           width: "150px",
//         },
//         1000
//       );
//       $(".insideUl").show();
//       $(".showHideIcon").html("X");
//       situation = true;
//     }
//   };

//   //slideIn__slideOut__icon
//   let headerSituation = true;
//   const animatedHeader = () => {
//     if (headerSituation) {
//       $(".animatedHeader__ul").slideUp(2000);
//       $(".slideIn__slideOut__icon").html("O");
//       headerSituation = false;
//     } else {
//       $(".animatedHeader__ul").slideDown(2000);
//       $(".slideIn__slideOut__icon").html("X");
//       headerSituation = true;
//     }
//   };

//   //show Password
//   let passwordSituation = true;
//   const showPassword = () => {
//     if (passwordSituation) {
//       $(".ourPassword").prop("type", "text");
//       $(".showHidePasswordBtn").html("hide");
//       passwordSituation = false;
//     } else {
//       $(".ourPassword").prop("type", "password");
//       $(".showHidePasswordBtn").html("show");
//       passwordSituation = true;
//     }
//   };

//   //start chaining
//   const startChaining = () => {
//     $(".animatedWebCrowd")
//       .animate({ width: "200px" }, 1000)
//       .animate({ height: "100px" }, 1000)
//       .animate({ fontSize: "40px" }, 1000);
//   };

//   return (
//     <div className="jquery">
//       <div className="Modal">
//         <CloseIcon className="closeModal" onClick={jqueryHideModal} />
//         <p className="jqueryScore"></p>
//       </div>
//       <div className="Sidebar">
//         <DehazeIcon onClick={ShowHide} className="OpenSideBar" />
//         <ul>
//           <a onClick={refleshCurrentPage} href="#introduction">
//             <li>Introduction</li>
//           </a>
//           <a onClick={refleshCurrentPage} href="#htmlFunction">
//             <li>html()</li>
//           </a>
//           <a onClick={refleshCurrentPage} href="#propFunction">
//             <li>prop()</li>
//           </a>
//           <a onClick={refleshCurrentPage} href="#clickFunction">
//             <li>click()</li>
//           </a>
//           <a onClick={refleshCurrentPage} href="#dblclickFunction">
//             <li>dblclick()</li>
//           </a>
//           <a onClick={refleshCurrentPage} href="#hideFunction">
//             <li>hide()</li>
//           </a>

//           <a onClick={refleshCurrentPage} href="#showFunction">
//             <li>show()</li>
//           </a>
//           <a onClick={refleshCurrentPage} href="#toggleFunction">
//             <li>toggle()</li>
//           </a>
//           <a onClick={refleshCurrentPage} href="#slideUpFunction">
//             <li>slideUp()</li>
//           </a>
//           <a onClick={refleshCurrentPage} href="#slideDownFunction">
//             <li>slideDown()</li>
//           </a>
//           <a onClick={refleshCurrentPage} href="#slideToggleFunction">
//             <li>slideToggle()</li>
//           </a>
//           <a onClick={refleshCurrentPage} href="#fadeOutFunction">
//             <li>fadeOut()</li>
//           </a>
//           <a onClick={refleshCurrentPage} href="#fadeInFunction">
//             <li>fadeIn()</li>
//           </a>
//           <a onClick={refleshCurrentPage} href="#fadeToggleFunction">
//             <li>fadeToggle()</li>
//           </a>
//           <a onClick={refleshCurrentPage} href="#animateFunction">
//             <li>animate()</li>
//           </a>
//           <a onClick={refleshCurrentPage} href="#jqueryExercises">
//             <li>Exercises</li>
//           </a>
//           <a onClick={refleshCurrentPage} href="#jqueryQuiz">
//             <li>Quiz</li>
//           </a>
//         </ul>
//       </div>
//       <div className="Content">
//         <div id="introduction" className="addPaddingToSection">
//           <h3 className="sectionTittle">introdution</h3>
//           <p className="clickHere">
//             Jquery is a JavaScript library that allows us to{" "}
//             <b>write less and do more</b>. all of things you do with jquery, it
//             can be done also using JavaScript, but Jquery seems shorter and more
//             powerful. <br />
//             this example shows you how to change element's color using
//             JavaScript and Jquery.
//           </p>
//           <p className="clickHere">
//             <b className="importants">important!</b> : JQUERY code won't get
//             applied unless you add this following script inside <b>head</b> tag
//             in html file : <br />
//             the script :{" "}
//             <b style={{ color: "purple" }}>
//               &lt;script
//               src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"&gt;&lt;/script&gt;
//             </b>{" "}
//             <br />
//             to watch a video explains that <a href="">click here</a>.
//           </p>
//           <p className="clickHere">
//             {" "}
//             let'sassume we have &lt;<span className="variableName">h2</span>&gt;
//             web crowd &lt;<span className="variableName">/h2</span>&gt; in html.
//             an we want to change its color to red using JQEURY and JavaScript.
//           </p>

//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">JQUERY</h4>
//             <h4 className="inhtmlcssjsbroSections">JAVASCRIPT</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">JQUERY</h4>
//             <div className="inputSection">
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "h2" </span>).
//               <span className="declarationKey">css</span>(
//               <span className="variableName"> "color" </span> ,{" "}
//               <span className="variableName"> "red" </span> ) ;
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">JAVASCRIPT</h4>
//             <div className="outputSection">
//               <span className="declarationKey">document</span>.
//               <span style={{ color: "purple" }}>querySelector</span>(
//               <span className="variableName"> "h2" </span>).
//               <span className="declarationKey">color </span>=
//               <span className="variableName"> "red" </span> ;{" "}
//             </div>
//           </div>
//           <p className="clickHere">
//             the Jquery code does the same as JavaScript, but Jquery sounds
//             shorter. but this doesn't mean that we need to give up on
//             JavaScript, because it can do many thing that Jquery can't. <br />
//             So, in this section we will discuss about the most useful functions
//             in Jqeury which help us write less and do more.
//           </p>
//         </div>
//         <div id="htmlFunction" className="addPaddingToSection">
//           <h3 className="sectionTittle">html()</h3>
//           <p className="clickHere">
//             this fuction does the same as <b>textContent</b> in JavaScript, it
//             changes the element text.
//           </p>
//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">HTML FILE</h4>
//             <h4 className="inhtmlcssjsbroSections">CSS FILE</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
//             <div className="inputSection">
//               &lt;<span className="tag">h2</span>&gt;
//               <span> web crowd </span>
//               &lt;<span className="tag">h2</span>&gt;
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
//             <div className="inputSection">
//               <span className="cssTag">h2 </span>
//               &#123; <br />{" "}
//               <span className="cssProperty">&nbsp;&nbsp; color</span> :{" "}
//               <span className="cssValue">blue</span>; <br />
//               &#125;
//               <br />
//             </div>
//           </div>
//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">JQUERY</h4>
//             <h4 className="inhtmlcssjsbroSections">BROWSER</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">JQUERY</h4>
//             <div className="inputSection">
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "h2" </span>).
//               <span className="declarationKey">html</span>(
//               <span className="variableName"> "this is new h2 text" </span> ) ;
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
//             <div className="outputSection">
//               <h2>this is new h2 text</h2>
//             </div>
//           </div>
//           <p className="clickHere">
//             for more examples and exercises <a href="">click here</a>.
//           </p>
//         </div>
//         <div id="propFunction" className="addPaddingToSection">
//           <h3 className="sectionTittle">prop()</h3>

//           <p className="clickHere">
//             this fuction allows you to change the element's properties value.
//           </p>

//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">HTML FILE</h4>
//             <h4 className="inhtmlcssjsbroSections">CSS FILE</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
//             <div className="inputSection">
//               &lt;<span className="tag">input</span>
//               {"   "}
//               <span className="cssProperty">type</span> ={" "}
//               <span className="cssValue">"text"</span>{" "}
//               <span className="cssProperty">placeholder</span> ={" "}
//               <span className="cssValue">"enter your name" </span>
//               <span className="tag"> /</span>&gt;
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
//             <div className="inputSection">
//               <span className="cssTag">input </span>
//               &#123; <br />{" "}
//               <span className="cssProperty">&nbsp;&nbsp; border</span> :{" "}
//               <span className="cssValue">1px solid black</span>; <br />
//               <span className="cssProperty">&nbsp;&nbsp; outline</span> :{" "}
//               <span className="cssValue">none</span>; <br />
//               <span className="cssProperty">&nbsp;&nbsp; padding</span> :{" "}
//               <span className="cssValue">5px</span>; <br />
//               &#125;
//               <br />
//             </div>
//           </div>
//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">JQUERY</h4>
//             <h4 className="inhtmlcssjsbroSections">BROWSER</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">JQUERY</h4>
//             <div className="inputSection">
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "h2" </span>).
//               <span className="declarationKey">prop</span>(
//               <span className="variableName"> "placeholder" </span> ,
//               <span className="variableName">
//                 {" "}
//                 "this is new placeholder value"{" "}
//               </span>{" "}
//               ) ;
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
//             <div className="outputSection">
//               <input
//                 style={{
//                   border: "1px solid black",
//                   outline: "none",
//                   padding: "5px",
//                 }}
//                 type="text"
//                 placeholder="this is new placeholder value"
//               />
//             </div>
//           </div>
//           <p className="clickHere">
//             for more examples and exercises <a href="">click here</a>.
//           </p>
//         </div>
//         <div id="clickFunction" className="addPaddingToSection">
//           <h3 className="sectionTittle">click()</h3>

//           <p className="clickHere">
//             this fuction accepts another function (callback function) that runs
//             once we click on element that we assign <b>click()</b> to.
//           </p>

//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">HTML FILE</h4>
//             <h4 className="inhtmlcssjsbroSections">CSS FILE</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
//             <div className="inputSection">
//               &lt;<span className="tag">h3</span>&gt;
//               <span> web crowd </span>
//               &lt;<span className="tag">/h3</span>&gt; <br />
//               <br />
//               &lt;<span className="tag">button</span>&gt;
//               <span> click me </span>
//               &lt;<span className="tag">/button</span>&gt;
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
//             <div className="inputSection">
//               <span className="cssTag">h3 </span>
//               &#123; <br />{" "}
//               <span className="cssProperty">&nbsp;&nbsp; color</span> :{" "}
//               <span className="cssValue">blue</span>; <br />
//               &#125;
//               <br />
//             </div>
//           </div>
//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">JQUERY</h4>
//             <h4 className="inhtmlcssjsbroSections">BROWSER</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">JQUERY</h4>
//             <div className="inputSection">
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "button" </span>).
//               <span className="declarationKey">click</span>(
//               <span style={{ color: "blue" }}> function()</span> &#123; <br />
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "h3" </span>).
//               <span className="declarationKey">html</span>(
//               <span className="variableName"> "this is new h3 text" </span> ) ;
//               <br />
//               &#125; )
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
//             <div className="outputSection">
//               <h3 className="h3Element" style={{ color: "blue" }}>
//                 web crowd
//               </h3>
//               <button onClick={changeH3Color}>click me</button>
//             </div>
//           </div>
//           <p className="clickHere">
//             for more examples and exercises <a href="">click here</a>.
//           </p>
//         </div>
//         <div id="dblclickFunction" className="addPaddingToSection">
//           <h3 className="sectionTittle">dblclick()</h3>

//           <p className="clickHere">
//             this fuction accepts another function (callback function) that runs
//             once we click on element that we assign <b>click()</b> to.
//           </p>

//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">HTML FILE</h4>
//             <h4 className="inhtmlcssjsbroSections">CSS FILE</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
//             <div className="inputSection">
//               &lt;<span className="tag">p</span>&gt;
//               <span> web crowd </span>
//               &lt;<span className="tag">/p</span>&gt; <br />
//               <br />
//               &lt;<span className="tag">button</span>&gt;
//               <span> click me </span>
//               &lt;<span className="tag">/button</span>&gt;
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
//             <div className="inputSection">
//               <span className="cssTag">p </span>
//               &#123; <br />{" "}
//               <span className="cssProperty">&nbsp;&nbsp; color</span> :{" "}
//               <span className="cssValue">purple</span>; <br />
//               &#125;
//               <br />
//             </div>
//           </div>
//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">JQUERY</h4>
//             <h4 className="inhtmlcssjsbroSections">BROWSER</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">JQUERY</h4>
//             <div className="inputSection">
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "button" </span>).
//               <span className="declarationKey">dblclick</span>(
//               <span style={{ color: "blue" }}> function()</span> &#123; <br />
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "p" </span>).
//               <span className="declarationKey">html</span>(
//               <span className="variableName"> "this is new p text" </span> ) ;{" "}
//               <br />
//               &#125; )
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
//             <div className="outputSection">
//               <p className="para" style={{ color: "purple" }}>
//                 web crowd
//               </p>
//               <button onDoubleClick={doubleClickEvent}>
//                 double click on me
//               </button>
//             </div>
//           </div>
//           <p className="clickHere">
//             for more examples and exercises <a href="">click here</a>.
//           </p>
//         </div>
//         <div id="hideFunction" className="addPaddingToSection">
//           <h3 className="sectionTittle">hide()</h3>

//           <p className="clickHere">
//             this fuction does the same as <b>display = "none"</b> in JavaScript.
//             it disappears the element.
//           </p>

//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">HTML FILE</h4>
//             <h4 className="inhtmlcssjsbroSections">CSS FILE</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
//             <div className="inputSection">
//               &lt;<span className="tag">button</span>&gt;
//               <span> click me </span>
//               &lt;<span className="tag">/button</span>&gt;
//               <br />
//               &lt;<span className="tag">p</span>&gt;
//               <span> web crowd </span>
//               &lt;<span className="tag">/p</span>&gt; <br />
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
//             <div className="inputSection">
//               <span className="cssTag">p </span>
//               &#123; <br />{" "}
//               <span className="cssProperty">&nbsp;&nbsp; color</span> :{" "}
//               <span className="cssValue">purple</span>; <br />
//               &#125;
//               <br />
//             </div>
//           </div>
//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">JQUERY</h4>
//             <h4 className="inhtmlcssjsbroSections">BROWSER</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">JQUERY</h4>
//             <div className="inputSection">
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "button" </span>).
//               <span className="declarationKey">click</span>(
//               <span style={{ color: "blue" }}> function()</span> &#123; <br />
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "p" </span>).
//               <span className="declarationKey">hide</span>() ;<br /> &#125; )
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
//             <div className="outputSection">
//               <button onClick={hideElement}>click me</button>
//               <p className="paragraph" style={{ color: "purple" }}>
//                 web crowd
//               </p>
//             </div>
//           </div>
//           <p className="clickHere">
//             for more examples and exercises <a href="">click here</a>.
//           </p>
//         </div>
//         <div id="showFunction" className="addPaddingToSection">
//           <h3 className="sectionTittle">show()</h3>

//           <p className="clickHere">
//             this fuction is the opposite of hide(), it appears the element, but
//             the element must be hidden (display: none in css).
//           </p>

//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">HTML FILE</h4>
//             <h4 className="inhtmlcssjsbroSections">CSS FILE</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
//             <div className="inputSection">
//               &lt;<span className="tag">button</span>&gt;
//               <span> click me </span>
//               &lt;<span className="tag">/button</span>&gt;
//               <br />
//               &lt;<span className="tag">div</span>&gt;
//               <span> web crowd </span>
//               &lt;<span className="tag">/div</span>&gt; <br />
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
//             <div className="inputSection">
//               <span className="cssTag">div </span>
//               &#123; <br />{" "}
//               <span className="cssProperty">&nbsp;&nbsp; color</span> :{" "}
//               <span className="cssValue">purple</span>; <br />
//               <span className="cssProperty">&nbsp;&nbsp; display</span> :{" "}
//               <span className="cssValue">none</span>; <br />
//               &#125;
//               <br />
//             </div>
//           </div>
//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">JQUERY</h4>
//             <h4 className="inhtmlcssjsbroSections">BROWSER</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">JQUERY</h4>
//             <div className="inputSection">
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "button" </span>).
//               <span className="declarationKey">click</span>(
//               <span style={{ color: "blue" }}> function()</span> &#123; <br />
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "div" </span>).
//               <span className="declarationKey">show</span>() ; <br /> &#125; )
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
//             <div className="outputSection">
//               <button onClick={showElement}>click me</button>
//               <div
//                 className="hiddenPara"
//                 style={{ color: "purple", display: "none" }}
//               >
//                 web crowd
//               </div>
//             </div>
//           </div>
//           <p className="clickHere">
//             for more examples and exercises <a href="">click here</a>.
//           </p>
//         </div>
//         <div id="toggleFunction" className="addPaddingToSection">
//           <h3 className="sectionTittle">toggle()</h3>

//           <p className="clickHere">
//             this fuction combines between show() and hide() functions. it
//             switches between them at every click on button.
//           </p>

//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">HTML FILE</h4>
//             <h4 className="inhtmlcssjsbroSections">CSS FILE</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
//             <div className="inputSection">
//               &lt;<span className="tag">button</span>&gt;
//               <span> click me </span>
//               &lt;<span className="tag">/button</span>&gt;
//               <br />
//               &lt;<span className="tag">div</span>&gt;
//               <span> web crowd </span>
//               &lt;<span className="tag">/div</span>&gt; <br />
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
//             <div className="inputSection">
//               <span className="cssTag">div </span>
//               &#123; <br />{" "}
//               <span className="cssProperty">&nbsp;&nbsp; color</span> :{" "}
//               <span className="cssValue">purple</span>; <br />
//               &#125;
//               <br />
//             </div>
//           </div>
//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">JQUERY</h4>
//             <h4 className="inhtmlcssjsbroSections">BROWSER</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">JQUERY</h4>
//             <div className="inputSection">
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "button" </span>).
//               <span className="declarationKey">click</span>(
//               <span style={{ color: "blue" }}> function()</span> &#123; <br />
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "div" </span>).
//               <span className="declarationKey">toggle</span>() ; <br /> &#125; )
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
//             <div className="outputSection">
//               <button onClick={toggleElement}>click me</button>
//               <div className="toggledDiv" style={{ color: "purple" }}>
//                 web crowd
//               </div>
//             </div>
//           </div>
//           <p className="clickHere">
//             for more examples and exercises <a href="">click here</a>.
//           </p>
//         </div>
//         <div id="slideUpFunction" className="addPaddingToSection">
//           <h3 className="sectionTittle">slideUp()</h3>

//           <p className="clickHere">
//             this fuction disappears a particular element smoothly from the
//             bottom to the top. you can also specify the sliding duration =&gt;
//             slideUp(speed in milliseconds).
//           </p>

//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">HTML FILE</h4>
//             <h4 className="inhtmlcssjsbroSections">CSS FILE</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
//             <div className="inputSection">
//               &lt;<span className="tag">h1</span>&gt;
//               <span> web crowd </span>
//               &lt;<span className="tag">/h1</span>&gt;
//               <br />
//               &lt;<span className="tag">button</span>&gt;
//               <span> click me </span>
//               &lt;<span className="tag">/button</span>&gt;
//               <br />
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
//             <div className="inputSection">
//               <span className="cssTag">h1 </span>
//               &#123; <br />{" "}
//               <span className="cssProperty">&nbsp;&nbsp; color</span> :{" "}
//               <span className="cssValue">purple</span>; <br />
//               <span className="cssProperty">
//                 &nbsp;&nbsp; background-color
//               </span>{" "}
//               : <span className="cssValue">gray</span>; <br />
//               &#125;
//               <br />
//             </div>
//           </div>
//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">JQUERY</h4>
//             <h4 className="inhtmlcssjsbroSections">BROWSER</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">JQUERY</h4>
//             <div className="inputSection">
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "button" </span>).
//               <span className="declarationKey">click</span>(
//               <span style={{ color: "blue" }}> function()</span> &#123; <br />
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "h1" </span>).
//               <span className="declarationKey">slideUp</span>(2000) ; <br />{" "}
//               &#125; )
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
//             <div className="outputSection">
//               <h1
//                 className="slideUpDiv"
//                 style={{ color: "purple", backgroundColor: "gray" }}
//               >
//                 web crowd
//               </h1>
//               <button onClick={slideUpElement}>click me</button>
//             </div>
//           </div>
//           <p className="clickHere">
//             2000 representes the amount of milliseconds that sliding takes to
//             finish.
//           </p>
//           <p className="clickHere">
//             for more examples and exercises <a href="">click here</a>.
//           </p>
//         </div>

//         <div id="slideDownFunction" className="addPaddingToSection">
//           <h3 className="sectionTittle">slideDown()</h3>

//           <p className="clickHere">
//             this fuction is the opposite of slideUp(). but you should first
//             apply <b>slideUp()</b> on the element.
//           </p>

//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">HTML FILE</h4>
//             <h4 className="inhtmlcssjsbroSections">CSS FILE</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
//             <div className="inputSection">
//               &lt;<span className="tag">h1</span>&gt;
//               <span> web crowd </span>
//               &lt;<span className="tag">/h1</span>&gt;
//               <br />
//               &lt;<span className="tag">button</span>&gt;
//               <span> slideUp </span>
//               &lt;<span className="tag">/button</span>&gt; <br />
//               &lt;
//               <span className="tag">button</span>{" "}
//               <span className="classProperty"> className = </span>{" "}
//               <span className="classValue"> "btn" </span> &gt;
//               <span> slideDown </span>
//               &lt;<span className="tag">/button</span>&gt;
//               <br />
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
//             <div className="inputSection">
//               <span className="cssTag">h1 </span>
//               &#123; <br />{" "}
//               <span className="cssProperty">&nbsp;&nbsp; color</span> :{" "}
//               <span className="cssValue">white</span>; <br />
//               <span className="cssProperty">
//                 &nbsp;&nbsp; background-color
//               </span>{" "}
//               : <span className="cssValue">purple</span>; <br />
//               <span className="cssProperty">&nbsp;&nbsp; padding</span> :{" "}
//               <span className="cssValue">20px 0</span>; <br />
//               &#125; <br />
//               <br />
//               <span className="cssTag">button </span>
//               &#123; <br />{" "}
//               <span className="cssProperty">&nbsp;&nbsp; margin</span> :{" "}
//               <span className="cssValue">5px</span>; <br /> &#125;
//               <br />
//             </div>
//           </div>
//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">JQUERY</h4>
//             <h4 className="inhtmlcssjsbroSections">BROWSER</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">JQUERY</h4>
//             <div className="inputSection">
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "button" </span>).
//               <span className="declarationKey">click</span>(
//               <span style={{ color: "blue" }}> function()</span> &#123; <br />
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "h1" </span>).
//               <span className="declarationKey">slideUp</span>(3000) ; <br />{" "}
//               &#125; ) <br />
//               <br />
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> ".btn" </span>).
//               <span className="declarationKey">click</span>(
//               <span style={{ color: "blue" }}> function()</span> &#123; <br />
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "h1" </span>).
//               <span className="declarationKey">slideDown</span>(2000) ; <br />{" "}
//               &#125; )
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
//             <div className="outputSection">
//               <h1
//                 className="slidedH1"
//                 style={{
//                   color: "white",
//                   backgroundColor: "purple",
//                   padding: "20px 0",
//                 }}
//               >
//                 web crowd
//               </h1>
//               <button onClick={slidedUpElement} style={{ margin: "5px" }}>
//                 slideUp
//               </button>
//               <button onClick={slidedDownElement} style={{ margin: "5px" }}>
//                 slideDown
//               </button>
//             </div>
//           </div>
//           <p className="clickHere">
//             As you can see, when we click on slideUp button it takes 3000ms (3s)
//             to finish the sliding. while slideDown takes 2000ms.
//           </p>
//           <p className="clickHere">
//             for more examples and exercises <a href="">click here</a>.
//           </p>
//         </div>
//         <div id="slideToggleFunction" className="addPaddingToSection">
//           <h3 className="sectionTittle">slideToggle()</h3>

//           <p className="clickHere">
//             this fuction combines between slideUp and slideDown functions.
//           </p>

//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">HTML FILE</h4>
//             <h4 className="inhtmlcssjsbroSections">CSS FILE</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
//             <div className="inputSection">
//               &lt;<span className="tag">h1</span>&gt;
//               <span> web crowd </span>
//               &lt;<span className="tag">/h1</span>&gt;
//               <br />
//               &lt;<span className="tag">button</span>&gt;
//               <span> click me </span>
//               &lt;<span className="tag">/button</span>&gt;
//               <br />
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
//             <div className="inputSection">
//               <span className="cssTag">h1 </span>
//               &#123; <br />{" "}
//               <span className="cssProperty">&nbsp;&nbsp; color</span> :{" "}
//               <span className="cssValue">purple</span>; <br />
//               <span className="cssProperty">
//                 &nbsp;&nbsp; background-color
//               </span>{" "}
//               : <span className="cssValue">gray</span>; <br />
//               &#125;
//               <br />
//             </div>
//           </div>
//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">JQUERY</h4>
//             <h4 className="inhtmlcssjsbroSections">BROWSER</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">JQUERY</h4>
//             <div className="inputSection">
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "button" </span>).
//               <span className="declarationKey">click</span>(
//               <span style={{ color: "blue" }}> function()</span> &#123; <br />
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "h1" </span>).
//               <span className="declarationKey">slideToggle</span>(2000) ; <br />{" "}
//               &#125; )
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
//             <div className="outputSection">
//               <h1
//                 className="slideToggleH1"
//                 style={{ color: "purple", backgroundColor: "gray" }}
//               >
//                 web crowd
//               </h1>
//               <button onClick={slideToggleElement}>click me</button>
//             </div>
//           </div>
//           <p className="clickHere">
//             for more examples and exercises <a href="">click here</a>.
//           </p>
//         </div>
//         <div id="fadeOutFunction" className="addPaddingToSection">
//           <h3 className="sectionTittle">fadeOut()</h3>

//           <p className="clickHere">
//             this fuction makes the element fades out (disappears). and it also
//             accepts the fading duration (time in miliseconds).
//           </p>

//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">HTML FILE</h4>
//             <h4 className="inhtmlcssjsbroSections">CSS FILE</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
//             <div className="inputSection">
//               &lt;<span className="tag">h1</span>&gt;
//               <span> web crowd </span>
//               &lt;<span className="tag">/h1</span>&gt;
//               <br />
//               &lt;<span className="tag">button</span>&gt;
//               <span> click me </span>
//               &lt;<span className="tag">/button</span>&gt;
//               <br />
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
//             <div className="inputSection">
//               <span className="cssTag">h1 </span>
//               &#123; <br />{" "}
//               <span className="cssProperty">&nbsp;&nbsp; color</span> :{" "}
//               <span className="cssValue">purple</span>; <br />
//               <span className="cssProperty">
//                 &nbsp;&nbsp; background-color
//               </span>{" "}
//               : <span className="cssValue">gray</span>; <br />
//               &#125;
//               <br />
//             </div>
//           </div>
//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">JQUERY</h4>
//             <h4 className="inhtmlcssjsbroSections">BROWSER</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">JQUERY</h4>
//             <div className="inputSection">
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "button" </span>).
//               <span className="declarationKey">click</span>(
//               <span style={{ color: "blue" }}> function()</span> &#123; <br />
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "h1" </span>).
//               <span className="declarationKey">fadeOut</span>(2000) ; <br />{" "}
//               &#125; )
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
//             <div className="outputSection">
//               <h1
//                 className="fadeOutH1"
//                 style={{ color: "purple", backgroundColor: "gray" }}
//               >
//                 web crowd
//               </h1>
//               <button onClick={fadeOutElement}>click me</button>
//             </div>
//           </div>
//           <p className="clickHere">
//             for more examples and exercises <a href="">click here</a>.
//           </p>
//         </div>
//         <div id="fadeInFunction" className="addPaddingToSection">
//           <h3 className="sectionTittle">fadeIn()</h3>

//           <p className="clickHere">
//             this fuction is the opposite of fadeOut(). but you should first
//             apply <b>fadeOut()</b> on the element.
//           </p>

//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">HTML FILE</h4>
//             <h4 className="inhtmlcssjsbroSections">CSS FILE</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
//             <div className="inputSection">
//               &lt;<span className="tag">h1</span>&gt;
//               <span> web crowd </span>
//               &lt;<span className="tag">/h1</span>&gt;
//               <br />
//               &lt;<span className="tag">button</span>&gt;
//               <span> fadeOut </span>
//               &lt;<span className="tag">/button</span>&gt; <br />
//               &lt;
//               <span className="tag">button</span>{" "}
//               <span className="classProperty"> className = </span>{" "}
//               <span className="classValue"> "btn" </span> &gt;
//               <span> fadeIn </span>
//               &lt;<span className="tag">/button</span>&gt;
//               <br />
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
//             <div className="inputSection">
//               <span className="cssTag">h1 </span>
//               &#123; <br />{" "}
//               <span className="cssProperty">&nbsp;&nbsp; color</span> :{" "}
//               <span className="cssValue">white</span>; <br />
//               <span className="cssProperty">
//                 &nbsp;&nbsp; background-color
//               </span>{" "}
//               : <span className="cssValue">purple</span>; <br />
//               <span className="cssProperty">&nbsp;&nbsp; padding</span> :{" "}
//               <span className="cssValue">20px 0</span>; <br />
//               &#125; <br />
//               <br />
//               <span className="cssTag">button </span>
//               &#123; <br />{" "}
//               <span className="cssProperty">&nbsp;&nbsp; margin</span> :{" "}
//               <span className="cssValue">5px</span>; <br /> &#125;
//               <br />
//             </div>
//           </div>
//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">JQUERY</h4>
//             <h4 className="inhtmlcssjsbroSections">BROWSER</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">JQUERY</h4>
//             <div className="inputSection">
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "button" </span>).
//               <span className="declarationKey">click</span>(
//               <span style={{ color: "blue" }}> function()</span> &#123; <br />
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "h1" </span>).
//               <span className="declarationKey">fadeOut</span>(2000) ; <br />{" "}
//               &#125; ) <br />
//               <br />
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> ".btn" </span>).
//               <span className="declarationKey">click</span>(
//               <span style={{ color: "blue" }}> function()</span> &#123; <br />
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "h1" </span>).
//               <span className="declarationKey">fadeIn</span>(2000) ; <br />{" "}
//               &#125; )
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
//             <div className="outputSection">
//               <h1
//                 className="fadedH1"
//                 style={{
//                   color: "white",
//                   backgroundColor: "purple",
//                   padding: "20px 0",
//                 }}
//               >
//                 web crowd
//               </h1>
//               <button onClick={fadedOutElement} style={{ margin: "5px" }}>
//                 fadeOut
//               </button>
//               <button onClick={fadedInElement} style={{ margin: "5px" }}>
//                 fadeIn
//               </button>
//             </div>
//           </div>

//           <p className="clickHere">
//             for more examples and exercises <a href="">click here</a>.
//           </p>
//         </div>
//         <div id="fadeToggleFunction" className="addPaddingToSection">
//           <h3 className="sectionTittle">fadeToggle()</h3>

//           <p className="clickHere">
//             this fuction combines between fadeIn and fadeOut functions.
//           </p>

//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">HTML FILE</h4>
//             <h4 className="inhtmlcssjsbroSections">CSS FILE</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
//             <div className="inputSection">
//               &lt;<span className="tag">h1</span>&gt;
//               <span> web crowd </span>
//               &lt;<span className="tag">/h1</span>&gt;
//               <br />
//               &lt;<span className="tag">button</span>&gt;
//               <span> click me </span>
//               &lt;<span className="tag">/button</span>&gt;
//               <br />
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
//             <div className="inputSection">
//               <span className="cssTag">h1 </span>
//               &#123; <br />{" "}
//               <span className="cssProperty">&nbsp;&nbsp; color</span> :{" "}
//               <span className="cssValue">purple</span>; <br />
//               <span className="cssProperty">
//                 &nbsp;&nbsp; background-color
//               </span>{" "}
//               : <span className="cssValue">gray</span>; <br />
//               <span className="cssProperty">&nbsp;&nbsp; width</span> :{" "}
//               <span className="cssValue">fit-content</span>; <br />
//               &#125;
//               <br />
//             </div>
//           </div>
//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">JQUERY</h4>
//             <h4 className="inhtmlcssjsbroSections">BROWSER</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">JQUERY</h4>
//             <div className="inputSection">
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "button" </span>).
//               <span className="declarationKey">click</span>(
//               <span style={{ color: "blue" }}> function()</span> &#123; <br />
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "h1" </span>).
//               <span className="declarationKey">fadeToggle</span>(2000) ; <br />{" "}
//               &#125; )
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
//             <div className="outputSection">
//               <h1
//                 className="fadeToggleH1"
//                 style={{
//                   color: "purple",
//                   backgroundColor: "gray",
//                   width: "fit-content",
//                 }}
//               >
//                 web crowd
//               </h1>
//               <button onClick={fadeToggleElement}>click me</button>
//             </div>
//           </div>
//           <p className="clickHere">
//             for more examples and exercises <a href="">click here</a>.
//           </p>
//         </div>
//         <div id="animateFunction" className="addPaddingToSection">
//           <h3 className="sectionTittle">animate()</h3>

//           <p className="clickHere">
//             this fuction allows you to add some animations in your web page.
//           </p>

//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">HTML FILE</h4>
//             <h4 className="inhtmlcssjsbroSections">CSS FILE</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">HTML FILE</h4>
//             <div className="inputSection">
//               &lt;<span className="tag">div</span>&gt;
//               <span> web crowd </span>
//               &lt;<span className="tag">/div</span>&gt;
//               <br />
//               &lt;<span className="tag">button</span>&gt;
//               <span> start animation </span>
//               &lt;<span className="tag">/button</span>&gt;
//               <br />
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">CSS FILE</h4>
//             <div className="inputSection">
//               <span className="cssTag">div </span>
//               &#123; <br />{" "}
//               <span className="cssProperty">&nbsp;&nbsp; color</span> :{" "}
//               <span className="cssValue">purple</span>; <br />
//               <span className="cssProperty">
//                 &nbsp;&nbsp; background-color
//               </span>{" "}
//               : <span className="cssValue">gray</span>; <br />
//               <span className="cssProperty">&nbsp;&nbsp; width</span> :{" "}
//               <span className="cssValue">fit-content</span>; <br />
//               &#125;
//               <br />
//             </div>
//           </div>
//           <div
//             style={{ display: "flex", justifyContent: "space-around" }}
//             className="html__css"
//           >
//             <h4 className="inhtmlcssjsbroSections">JQUERY</h4>
//             <h4 className="inhtmlcssjsbroSections">BROWSER</h4>
//           </div>
//           <div className="codeSection">
//             <h4 className="inhtmlcssjsbroSections afterMedia">JQUERY</h4>
//             <div className="inputSection">
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "button" </span>).
//               <span className="declarationKey">click</span>(
//               <span style={{ color: "blue" }}> function()</span> &#123; <br />
//               <span className="declarationKey">$</span>(
//               <span className="variableName"> "div" </span>).
//               <span className="declarationKey">animate</span>( <br /> &#123;{" "}
//               <br /> <span className="cssProperty">height</span> :{" "}
//               <span className="cssValue">"100px"</span> , <br />
//               <span className="cssProperty">width</span> :{" "}
//               <span className="cssValue">"200px"</span> , <br />
//               <span className="cssProperty">fontSize</span> :{" "}
//               <span className="cssValue">"30px"</span> <br /> &#125; ,{" "}
//               <span style={{ color: "purple" }}>2000</span> ) ; <br /> &#125; )
//             </div>
//             <h4 className="inhtmlcssjsbroSections afterMedia">BROWSER</h4>
//             <div className="outputSection">
//               <div
//                 className="animatedDiv"
//                 style={{
//                   color: "purple",
//                   backgroundColor: "gray",
//                   width: "fit-content",
//                 }}
//               >
//                 web crowd
//               </div>
//               <button onClick={animateElement}>start animation</button>
//             </div>
//           </div>
//           <p className="clickHere">
//             <b className="importants">Important!</b> : you can't apply animation
//             on all css properties, here is the list of CSS properties that you
//             can apply animations on. <br />
//             <b className="importants">the list :</b>
//             <ul style={{ marginLeft: "50px", pointerEvents: "none" }}>
//               <li disabled="true">backgroundPositionX</li>
//               <li disabled="true">backgroundPositionY</li>
//               <li disabled="true">borderWidth</li>
//               <li disabled="true">borderBottomWidth</li>
//               <li disabled="true">borderLeftWidth</li>
//               <li disabled="true">borderRightWidth</li>
//               <li disabled="true">borderTopWidth</li>
//               <li disabled="true">borderSpacing</li>
//               <li disabled="true">margin</li>
//               <li disabled="true">marginBottom</li>
//               <li disabled="true">marginLeft</li>
//               <li disabled="true">marginRight</li>
//               <li disabled="true">marginTop</li>
//               <li disabled="true">opacity</li>
//               <li disabled="true">outlineWidth</li>
//               <li disabled="true">padding</li>
//               <li disabled="true">paddingBottom</li>
//               <li disabled="true">paddingLeft</li>
//               <li disabled="true">paddingRight</li>
//               <li disabled="true">paddingTop</li>
//               <li disabled="true">height</li>
//               <li disabled="true">width</li>
//               <li disabled="true">maxHeight</li>
//               <li disabled="true">maxWidth</li>
//               <li disabled="true">minHeight</li>
//               <li disabled="true">minWidth</li>
//               <li disabled="true">fontSize</li>
//               <li disabled="true">bottom</li>
//               <li disabled="true">left</li>
//               <li disabled="true">right</li>
//               <li disabled="true">top</li>
//               <li disabled="true">letterSpecing</li>
//               <li disabled="true">wordSpacing</li>
//               <li disabled="true">lineHeight</li>
//               <li disabled="true">textIndent</li>
//             </ul>
//           </p>
//           <p className="clickHere">
//             <b className="note">Note : </b> you can also add a callback function
//             after animation duration like <a href="">this</a>
//           </p>
//           <p className="clickHere">
//             for more examples and exercises <a href="">click here</a>.
//           </p>
//         </div>
//         <div id="jqueryExercises" className="addPaddingToSection">
//           <div className="jquery__exercise">
//             <h3
//               style={{
//                 textAlign: "center",
//                 padding: "10px",
//                 fontSize: "30px",
//                 color: "blue",
//               }}
//             >
//               Animated SideBar
//             </h3>
//             <div className="fullAnimatedSideBar" style={{ flex: "1" }}>
//               <div className="sidebar__content">
//                 <ul
//                   className="insideUl"
//                   style={{
//                     color: "white",
//                     height: "100%",
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "space-around",
//                     padding: "0 10px",
//                   }}
//                 >
//                   <li className="itemItem">Home</li>
//                   <li>Pricing</li>
//                   <li>Help</li>
//                   <li>Contact</li>
//                   <li>About</li>
//                 </ul>
//               </div>
//               <div
//                 className="showHideIcon"
//                 onClick={showHideSideBar}
//                 style={{
//                   color: "red",
//                   fontSize: "30px",
//                   margin: "-7px 0 0 2px",
//                   cursor: "pointer",
//                 }}
//               >
//                 X
//               </div>
//             </div>
//             <a
//               href=""
//               style={{
//                 color: "blue",
//                 cursor: "pointer",
//                 display: "block",
//                 width: "500px",
//                 textAlign: "center",
//               }}
//             >
//               Solution
//             </a>
//           </div>
//           <div className="jquery__exercise">
//             <h3
//               style={{
//                 textAlign: "center",
//                 padding: "10px",
//                 fontSize: "30px",
//                 color: "blue",
//               }}
//             >
//               Animated Header
//             </h3>
//             <div className="headerContainer">
//               <div onClick={animatedHeader} className="slideIn__slideOut__icon">
//                 X
//               </div>
//               <ul className="animatedHeader__ul">
//                 <li>Home</li>
//                 <li>How To?</li>
//                 <li>Earn Money</li>
//                 <li>FAQ's</li>
//                 <li>About</li>
//                 <li>Contact</li>
//               </ul>
//             </div>

//             <a
//               href=""
//               style={{
//                 color: "blue",
//                 cursor: "pointer",
//                 display: "block",
//                 width: "500px",
//                 textAlign: "center",
//               }}
//             >
//               Solution
//             </a>
//           </div>
//           <div className="jquery__exercise">
//             <h3
//               style={{
//                 textAlign: "center",
//                 padding: "10px",
//                 fontSize: "30px",
//                 color: "blue",
//               }}
//             >
//               Show Password
//             </h3>
//             <div style={{ margin: "auto" }}>
//               <table>
//                 <tr>
//                   <td style={{ padding: "5px" }}>Email</td>
//                   <td>
//                     :
//                     <input
//                       type="email"
//                       style={{
//                         border: "none",
//                         outline: "none",
//                         borderRadius: "2px",
//                         padding: "5px",
//                         margin: "5px",
//                       }}
//                       placeholder="Enter Your Email..."
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td style={{ padding: "5px" }}>Password</td>
//                   <td>
//                     :
//                     <input
//                       className="ourPassword"
//                       type="password"
//                       style={{
//                         border: "none",
//                         outline: "none",
//                         borderRadius: "2px",
//                         padding: "5px",
//                         margin: "5px",
//                       }}
//                       placeholder="Enter Your Password..."
//                     />
//                     <button
//                       className="showHidePasswordBtn"
//                       onClick={showPassword}
//                       style={{
//                         border: "none",
//                         outline: "none",
//                         borderRadius: "2px",
//                         padding: "5px",
//                         backgroundColor: "gray",
//                         cursor: "pointer",
//                         width: "50px",
//                       }}
//                     >
//                       show
//                     </button>
//                   </td>
//                 </tr>
//               </table>
//               <div style={{ textAlign: "center" }}>
//                 <button
//                   style={{
//                     backgroundColor: "purple",
//                     padding: "5px 10px",
//                     margin: "5px",
//                     border: "none",
//                     outline: "none",
//                     borderRadius: "2px",
//                     color: "white",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Log in
//                 </button>

//                 <button
//                   style={{
//                     backgroundColor: "black",
//                     padding: "5px 10px",
//                     margin: "5px",
//                     border: "none",
//                     outline: "none",
//                     borderRadius: "2px",
//                     color: "white",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Sign up
//                 </button>
//               </div>
//             </div>

//             <a
//               href=""
//               style={{
//                 color: "blue",
//                 cursor: "pointer",
//                 display: "block",
//                 width: "500px",
//                 textAlign: "center",
//               }}
//             >
//               Solution
//             </a>
//           </div>
//           <div className="jquery__exercise">
//             <h3
//               style={{
//                 textAlign: "center",
//                 padding: "10px",
//                 fontSize: "30px",
//                 color: "blue",
//               }}
//             >
//               Animation Chaining
//             </h3>
//             <div style={{ flex: "1" }}>
//               <div
//                 className="animatedWebCrowd"
//                 style={{
//                   color: "white",
//                   padding: "20px",
//                   margin: "10px",
//                   backgroundColor: "purple",
//                   width: "fit-content",
//                 }}
//               >
//                 web crowd
//               </div>
//               <button onClick={startChaining}>start Chaining</button>
//             </div>

//             <a
//               href=""
//               style={{
//                 color: "blue",
//                 cursor: "pointer",
//                 display: "block",
//                 width: "500px",
//                 textAlign: "center",
//               }}
//             >
//               Solution
//             </a>
//           </div>
//         </div>
//         <div id="jqueryQuiz" className="addPaddingToSection">
//           <h3 className="sectionTittle">Quiz</h3>
//           <p className="clickHere">
//             <b className="note">Note : </b> Make sure that you have read the
//             introduction of every Concept we discussed about above before you
//             start this Quiz. <br />
//             So, when you complete all of these questions, click on{" "}
//             <b className="note">i'm Done</b> button to display the result
//             immediately.
//           </p>

//           <div className="jqueryQuiz__content">
//             <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
//               Question 1
//             </h5>
//             <p className="clickHere">Jquery is a programming language </p>
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="firstQuestionName"
//               className="jquerywrongOne"
//             />
//             <span className="jqueryWrongAnswerOne1">
//               yes <CancelIcon className="cancelIcon" />
//             </span>
//             <br />
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="firstQuestionName"
//               className="jqueryQuestionOne"
//             />
//             <span className="jqueryAnswerOne">
//               no <DoneIcon className="doneIcon" />
//             </span>

//             <br />
//             <hr style={{ color: "gray", margin: "5px" }} />
//             <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
//               Question 2
//             </h5>
//             <p className="clickHere">
//               which jquery function we use to change element's property value ?
//             </p>
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="secondQuestionName"
//               className="jquerywrongTwo1"
//             />
//             <span className="jqueryWrongAnswerTwo1">
//               slideIn() <CancelIcon className="cancelIcon" />
//             </span>
//             <br />
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="secondQuestionName"
//               className="jqueryQuestionTwo"
//             />
//             <span className="jqueryAnswerTwo">
//               prop() <DoneIcon className="doneIcon" />
//             </span>
//             <br />
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="secondQuestionName"
//               className="jquerywrongTwo2"
//             />
//             <span className="jqueryWrongAnswerTwo2">
//               html() <CancelIcon className="cancelIcon" />
//             </span>
//             <br />
//             <hr style={{ color: "gray", margin: "5px" }} />
//             <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
//               Question 3
//             </h5>
//             <p className="clickHere">
//               which jquery function we use to switch hide() and show() ?
//             </p>
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="thirdQuestionName"
//               className="jqueryQuestionThree"
//             />
//             <span className="jqueryAnswerThree">
//               toggle() <DoneIcon className="doneIcon" />
//             </span>
//             <br />
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="thirdQuestionName"
//               className="jquerywrongThree1"
//             />
//             <span className="jqueryWrongAnswerThree1">
//               fadeToggle() <CancelIcon className="cancelIcon" />
//             </span>
//             <br />
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="thirdQuestionName"
//               className="jquerywrongThree2"
//             />
//             <span className="jqueryWrongAnswerThree2">
//               slideToggle() <CancelIcon className="cancelIcon" />
//             </span>
//             <br />
//             <hr style={{ color: "gray", margin: "5px" }} />
//             <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
//               Question 4
//             </h5>
//             <p className="clickHere">
//               which of the following used to change element's text ?
//             </p>
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="fourthQuestionName"
//               className="jquerywrongFour1"
//             />
//             <span className="jqueryWrongAnswerFour1">
//               animate() <CancelIcon className="cancelIcon" />
//             </span>
//             <br />
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="fourthQuestionName"
//               className="jquerywrongFour2"
//             />
//             <span className="jqueryWrongAnswerFour2">
//               shift() <CancelIcon className="cancelIcon" />
//             </span>
//             <br />
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="fourthQuestionName"
//               className="jqueryQuestionFour"
//             />
//             <span className="jqueryAnswerFour">
//               html() <DoneIcon className="doneIcon" />
//             </span>
//             <br />
//             <hr style={{ color: "gray", margin: "5px" }} />
//             <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
//               Question 5
//             </h5>
//             <p className="clickHere">can we animate elements using jquery ?</p>
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="fifthQuestionName"
//               className="jqueryQuestionFive"
//             />
//             <span className="jqueryAnswerFive">
//               yes <DoneIcon className="doneIcon" />
//             </span>
//             <br />
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="fifthQuestionName"
//               className="jquerywrongFive"
//             />
//             <span className="jqueryWrongAnswerFive">
//               no <CancelIcon className="cancelIcon" />
//             </span>
//             <br />

//             <hr style={{ color: "gray", margin: "5px" }} />
//             <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
//               Question 6
//             </h5>
//             <p className="clickHere">is fadeIn() a jquery function ?</p>
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="sixthQuestionName"
//               className="jqueryQuestionSix"
//             />
//             <span className="jqueryAnswerSix">
//               yes <DoneIcon className="doneIcon" />
//             </span>
//             <br />
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="sixthQuestionName"
//               className="jquerywrongSix"
//             />
//             <span className="jqueryWrongAnswerSix">
//               no <CancelIcon className="cancelIcon" />
//             </span>
//             <br />
//             <hr style={{ color: "gray", margin: "5px" }} />
//             <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
//               Question 7
//             </h5>
//             <p className="clickHere">we can disappears html element using </p>
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="seventhQuestionName"
//               className="jqueryQuestionSeven"
//             />
//             <span className="jqueryAnswerSeven">
//               hide() function
//               <DoneIcon className="doneIcon" />
//             </span>
//             <br />
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="seventhQuestionName"
//               className="jquerywrongSeven1"
//             />
//             <span className="jqueryWrongAnswerSeven1">
//               click() function <CancelIcon className="cancelIcon" />
//             </span>
//             <br />
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="seventhQuestionName"
//               className="jquerywrongSeven2"
//             />
//             <span className="jqueryWrongAnswerSeven2">
//               html() function <CancelIcon className="cancelIcon" />
//             </span>
//             <br />
//             <hr style={{ color: "gray", margin: "5px" }} />
//             <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
//               Question 8
//             </h5>
//             <p className="clickHere">
//               it's not possible to change element's color using animate().
//             </p>
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="eightQuestionName"
//               className="jqueryQuestionEight"
//             />
//             <span className="jqueryAnswerEight">
//               yes
//               <DoneIcon className="doneIcon" />
//             </span>
//             <br />
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="eightQuestionName"
//               className="jquerywrongEight"
//             />
//             <span className="jqueryWrongAnswerEight">
//               no <CancelIcon className="cancelIcon" />
//             </span>
//             <br />
//             <hr style={{ color: "gray", margin: "5px" }} />
//             <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
//               Question 9
//             </h5>
//             <p className="clickHere">
//               can we apply as many animation as we want to html element.
//             </p>
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="ninthQuestionName"
//               className="jqueryQuestionNine"
//             />
//             <span className="jqueryAnswerNine">
//               yes <DoneIcon className="doneIcon" />
//             </span>
//             <br />
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="ninthQuestionName"
//               className="jquerywrongNine1"
//             />
//             <span className="jqueryWrongAnswerNine1">
//               no <CancelIcon className="cancelIcon" />
//             </span>
//             <br />

//             <hr style={{ color: "gray", margin: "5px" }} />
//             <h5 style={{ color: "blue", fontSize: "18px", margin: "5px 25px" }}>
//               Question 10
//             </h5>
//             <p className="clickHere">is jquery a jquery library ?</p>
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="tenthQuestionName"
//               className="jqueryQuestionTen"
//             />
//             <span className="jqueryAnswerTen">
//               yes <DoneIcon className="doneIcon" />
//             </span>
//             <br />
//             <input
//               style={{ margin: "5px 5px 5px 25px" }}
//               type="radio"
//               name="tenthQuestionName"
//               className="jquerywrongTen1"
//             />
//             <span className="jqueryWrongAnswerTen1">
//               no <CancelIcon className="cancelIcon" />
//             </span>
//             <br />
//             <button
//               style={{
//                 padding: "5px 10px",
//                 margin: "10px 25px",
//                 color: "white",
//                 backgroundColor: "blue",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 border: "none",
//                 outline: "none",
//               }}
//               onClick={jqueryCompletedQuiz}
//             >
//               i'm Done
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Jquery;
