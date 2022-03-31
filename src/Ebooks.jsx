import React, { useState, useEffect } from "react";
import "./Ebooks.css";
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
function Ebooks() {
  let history = useHistory();

  useEffect(() => {
    document.title = "Web Crowd - eBooks";
  }, []);

  useEffect((e) => {
    localStorage.setItem(
      "current",
      window.location.href
        .substring(window.location.href.lastIndexOf("/") + 1)
        .toLowerCase()
    );
    history.push(localStorage.getItem("current"));

    if (localStorage.getItem("current") === "") {
      $(".main__header__home").addClass("active");
    } else if (localStorage.getItem("current") === "earn") {
      $(".main__header__earn").addClass("active");
    } else if (localStorage.getItem("current") === "about") {
      $(".main__header__about").addClass("active");
    } else if (localStorage.getItem("current") === "faq") {
      $(".main__header__faq").addClass("active");
    } else {
    }
  }, []);
  return (
    <div className="ebooks">
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
          <Link to="/earn" className="main__header__earn ">
            <li>EARN</li>
          </Link>
          <Link to="/about" className="main__header__about ">
            <li>ABOUT</li>
          </Link>
          <Link to="/faq" className="main__header__faq ">
            <li>FAQ's</li>
          </Link>
        </ul>
      </div>

      <div className="Content ebooksContent">
        <p className="introToBooks">
          Audio books are pre-recorded audio files that can be downloaded and
          played on your computer or smartphone. They come in many different
          formats, but most are available as MP3s. Audio books are usually much
          longer than text-based eBooks, so they're perfect for long car trips
          or flights. Plus, unlike reading an eBook, you can listen to them
          while multitasking! The convenience and low cost of audiobooks make
          them a valuable learning tool for those with limited time on their
          hands.
        </p>
        <h1>Why it is better than reading a book ?</h1>
        <p>
          First and foremost, audio books make it easy for people who do not
          have time to read an entire book but still want valuable information.
          Audio books can be listened to, while driving or working out at a gym.
          Some audio books can be as short as 30 minutes in length which allows
          them to fit into busy schedules. Second, audio books are also
          educational and entertaining.
        </p>
        <h1>How do Audio Books impact on our Life ?</h1>
        <p>
          Audio books are really important in our life because it helps you in
          many different ways which I'm gonna tell you later. But first let me
          tell you what an audio book is and how can we listen it? Well, an
          audio book is simply a text or anything else written with words, has
          been recorded as an audio file that can be played on a computer or
          mobile phone or tablet for easy listening and better understanding.
        </p>
        <h1>EBooks I highly recommend:</h1>
        <b>Neverwhere, by Neil Gaiman: </b>
        <a
          href="https://www.audible.com/pd/Neverwhere-Audiobook/B00354ZSS2?qid=1647958740&sr=1-1&ref=a_search_c3_lProduct_1_1&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=K5V4PPQG79V2KDXVM6QZ"
          target="_blank"
        >
          get it now
        </a>
        .
        <br />
        <p>
          In the story of Richard Mayhew, a person with an ordinary normal life,
          but he has kind of pure good heart, his life will completely change
          after coming across a girl bleeding in the sidewalk, he couldn't
          ignore her, and he stopped to help her, that act of kindness will let
          him live in a world he never believed existed.
        </p>
        <b>The Emperor of all Maladies, by Siddharta Mukherjee: </b>
        <a
          href="https://www.audible.com/pd/The-Emperor-of-All-Maladies-Audiobook/B017DQS9P6?qid=1647958829&sr=1-1&ref=a_search_c3_lProduct_1_1&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=QTJTVY52BXKM2CZGZ7X4"
          target="_blank"
        >
          get it now
        </a>
        .
        <br />
        <p>
          This one is kind of medical book, the author clarified the and recount
          the story of cancer, research and treatments, also he discussed its
          development overtime, he started from the very beginning where
          humanity didn't know anything about cancer till the last thing we know
          about it today.
        </p>
        <b>The Future of Medicine, by James Temperton: </b>
        <a
          href="https://www.audible.com/search?keywords=The+Future+of+Medicine%2C+by+James+Temperton&skip_spell_correction=true&ref=a_search_t3_noResReversionUrl&pf_rd_p=7a98be95-bbf9-496e-a68c-79ce2c792da5&pf_rd_r=Y0WEXRGBABHAKAAN0WQ7"
          target="_blank"
        >
          get it now
        </a>
        .
        <br />
        <p className="lastParag">
          In this one, the author and journalist, James Temperton, mentioned all
          the medical revolutions that are transforming healthcare, He explores
          the science - and ethics - of genetic engineering and its power to
          create what we call: 'designer babies'.
        </p>
        <Footer />
      </div>
    </div>
  );
}

export default Ebooks;
