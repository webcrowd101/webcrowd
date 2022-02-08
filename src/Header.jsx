import React, { useEffect, useState, useRef } from "react";
import "./Header.css";
import $ from "jquery";
import DehazeIcon from "@mui/icons-material/Dehaze";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";

function Header() {
  const [situation, setSituation] = useState(true);
  let history = useHistory();
  let location = useLocation();

  $("li").on("click", function () {
    $("li").removeClass("active");
    $(this).addClass("active");
  });

  localStorage.setItem(
    "current",
    window.location.href.substring(window.location.href.lastIndexOf("/") + 1)
  );

  useEffect((e) => {
    history.push(localStorage.getItem("current"));
    if (localStorage.getItem("current") === "OVERVIEW") {
      $(".first").addClass("active");
    } else if (localStorage.getItem("current") === "HTML5") {
      $(".second").addClass("active");
    } else if (localStorage.getItem("current") === "CSS3") {
      $(".third").addClass("active");
    } else if (localStorage.getItem("current") === "JAVASCRIPT") {
      $(".fourth").addClass("active");
    } else if (localStorage.getItem("current") === "JQUERY") {
      $(".fifth").addClass("active");
    } else if (localStorage.getItem("current") === "TEMPLATES") {
      $(".sixth").addClass("active");
    } else {
    }
  }, []);

  const showHeader = () => {
    document.querySelector(".items").style.display = "flex";
    document.querySelectorAll(".sections").forEach(section => {
      section.style.margin = "12px 0";
    
    })
    setSituation(false);
  };
  const hideHeader = (e) => {
    history.push(`${e.target.textContent}`);
    document.querySelector(".items").style.display = "none";

    setSituation(true);
    if (window.innerWidth > 1000) {
      document.querySelector(".items").style.display = "flex";
    }
    document.querySelectorAll(".sections").forEach((section) => {
      section.style.margin = "0";
    });
  };
  const hideHeaderFromIcon = () => {
    document.querySelector(".items").style.display = "none";
    setSituation(true);
    if (window.innerWidth > 1000) {
      document.querySelector(".items").style.display = "flex";
    }
    document.querySelectorAll(".sections").forEach((section) => {
      section.style.margin = "0";
    });
  };

  $(window).resize(function () {
    try {
      if (window.innerWidth > 1000) {
        document.querySelector(".items").style.display = "flex";
      }
      if (window.innerWidth <= 1000) {
        document.querySelector(".items").style.display = "none";
      }
    } catch {}
  });

  return (
    <div className="header">
      <Route>
        <div className="header__logo__list">
          <Link className="header__logo" to="/">
            {/* <img src="logo.png" alt="" /> */}
            <font
              className="nameOfWeb"
              color="white"
              size="6"
              face=" a astro space"
            >
              web crowd
            </font>
          </Link>
          <DehazeIcon
            className="list"
            onClick={situation ? showHeader : hideHeaderFromIcon}
          />
        </div>

        <ul className="items">
          <li className="sections first" onClick={hideHeader}>
            OVERVIEW
          </li>
          <li className="sections second" onClick={hideHeader}>
            HTML5
          </li>
          <li className="sections third" onClick={hideHeader}>
            CSS3
          </li>
          <li className="sections fourth" onClick={hideHeader}>
            JAVASCRIPT
          </li>
          <li className="sections fifth" onClick={hideHeader}>
            JQUERY
          </li>
          <li className="sections sixth" onClick={hideHeader}>
            TEMPLATES
          </li>
        </ul>
      </Route>
    </div>
  );
}

export default Header;
