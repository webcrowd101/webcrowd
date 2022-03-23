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
      window.location.href.substring(window.location.href.lastIndexOf("/") + 1)
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
          Recently, most of us give a lot of illogical excuses to not read books
          and get educated, they give excuses such I do not have enough time, my
          9 to 5 job cannot allow me to do so, I have to take care of my
          children, I do not feel comfortable carrying a bulky book with me in
          public places, or basically I do not see myself into it.{" "}
        </p>
        <h1>Why you should give it a shot?</h1>
        <h3>Reason 1 :</h3>
        <p>
          This first reason is so personal, when you are listening to an
          audiobook, it feels like you are having a conversation with yourself,
          like a meditation, that you can do without controlling your breath,
          maintaining good posture, or that kind of things, it just letting your
          mind go and imagine every moment with the author, which make your
          imagination power hit the floor and become a person who think outside
          the box, you might find this reason exaggerated, but once you try, you
          will know what Iam talking about mate.{" "}
        </p>
        <h3>Reason 2 : </h3>
        <p>
          E-books are super flexible, now, I'm a real fan of hardcopy books
          sitting on in the moment just pure concentration in one task on one
          task reading a hardcopy book for working student that is pure bliss
          like I will take that anytime I can get it, but the reality is often
          we are busy our lives are full we've got lots on the go and you can
          listen to podcasts and audio books while doing other things, now, I'm
          thinking specifically, chores, routines task, things like tidying the
          house cooking cleaning maybe you are commuting or doing a long drive
          and exercising you can pop that on you know it is similar to what we
          do when we have the radio on in the background or the television on
          the background, if you do the same with podcasts and audiobooks, I
          really recommend to give it z try because it does take them a not any
          out of some of these tasks and if you get a really audio book, man,
          you are going to have clean house or really tiny house, so give it a
          go you can fold this in to everyday tasks,{" "}
        </p>
        <h3>Reason 3 :</h3>
        <p>
          You get a lot of reading done really quickly if you fold it in with
          other tasks, like I said you are multitasking while you are listening
          to a book, you are going to turn through audio books like you have not
          really imagine, because you are doing two things at once, and even if
          you are super busy you can read a book week like it is possible and
          the interesting features of audio and podcasts is the different
          listening apps or programs that you can use often they will let you
          speed up the audio so it could be a tiny smidge faster like 1.1 times
          faster or it can all the way up to 2, 3, 4, 5 times speed of normal
          narration, now, I have tried this, I recommend if you have got a book
          that is not particularly complex, it is not really heavy and in-depth,
          it can be really handy to speed it up just to get through it, I just
          think ,it is just another reason you can give it a go make it a fun
          experiment,
        </p>
        <h1>HOW DO WE GO ABOUT GETTING HANDS ON THEM?</h1>
        <p>
          Then interesting things that most of them are actually free, and
          that's good news, isn't it?, we all like to read and improve our
          writing by reading other people's work, getting some inspiration, if
          you are a member of your local library, if you aren't not, I highly
          recommend you do, you're probably interested to find that the library
          has signed up to different online platforms that offer not only
          eBooks, but audiobooks ,and they're free, because the library is
          paying for this service for its own members, so all you need to do is
          just enquire with your local library and don't forget you can also
          apply to become a member of your state region library or even your
          national library they all have these different platforms so tat's
          three levels that you can get access to, probably of free audiobooks
          so check it out for example at my library they use the platform borrow
          box. Now, for podcasts, podcasts is a whole another universe there ‘s
          lots of free shows from short shows to long shows to serial shows,
          it's a whole another world to explore and most if these are free, all
          you need to do is to download an app so you can start listening
          subscribing and enjoying. Now depending on your type of phone like
          whether it's Android or Mac you are going to look for you have got
          Apple podcasts and you have also google podcast and there's other lots
          of different listening platforms including Spotify, but I would
          suggest to start there and see how you go. Now, come to the paid
          options, this is mostly for eBooks there are some paid podcasts out
          there but probably for your most relevant for you guys is the audio
          books and again you are going to go to different platforms to get
          these and you will pay for set books or you will probably pay per
          month of membership on these platforms, Apple include the plat books,
          which is google platform or you're going to have Apple books, then
          there's the amazon company Audible, which is all about audiobooks and
          amazon also has Kindle and if you buy a kindle books sometimes when
          you look in the purchasing options there's a box where you can tick
          purchase the audible version of the box xo you can do it in a
          back-back way through kindle if you've already got a kindle so there
          you go that's everything you need to know about listening to podcasts
          and audiobooks . So there you go that's everything you need to know
          about audiobooks and podcasts and just to recap, the main reason why I
          think these you are going to love it is because number one is so
          personal, it's having a direct conversation, they are also very
          flexible to do with other things in your life and thirdly it can be
          really fast you can turn through the book and there's different ways
          to get your hands on them mostly free but they are some paid options
          too, so I really hope that this gets you inspired and excited ti try
          these wonderful different listening ways of getting into life stories
          and getting into more reading and books.
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
