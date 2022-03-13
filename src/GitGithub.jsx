import React from "react";
import Footer from "./Footer";
import "./GitGithub.css";

function GitGithub() {
  return (

    <div className="gitGithub">
      
      <h3>Introduction :</h3>
      <p>
        Git is an open source and free distributed version control system allows
        you to save and track changes on your project on a platform called
        github. you can also work as a team so that every member works on its
        own part of project and save changes every time. so that others members
        can track the whole changes of project. So in this article we are going
        to be discussing about the whole process, but we will consider that you
        as a self-worker (work on your own project). So, using git you can
        deploy your own project on github using push command and download others
        project on your device using pull command.
      </p>
      <div className="impor">
        <span>
          <b>important</b>: before deploying or downloading projects you need to
          install git on your computer :{" "}
          <a href="" target="_blank">
            install git from here
          </a>
          .
        </span>
      </div>
      <h1>deploy your project using push command.</h1>
      <strong>
        1 : create a folder in your desktop and put html, css, javascript files
        into. ( make sure that its name has no space )
      </strong>
      <div className="git__push__explanation">
        <img src="first.png" alt="" />
      </div>
      <strong>2 : go to https://github.com and create an account.</strong>
      <strong>3 : click on create repository.</strong>
      <div className="git__push__explanation">
        <img src="second.png" alt="" />
      </div>
      <strong>
        4 : name your repository and click on create repository ( don't forget
        to check add a README file ).
      </strong>
      <div className="git__push__explanation">
        <img src="third.png" alt="" />
      </div>
      <strong>
        5 : click on main and create a new branch named master ( choose master
        instead of main ).
      </strong>
      <div className="git__push__explanation">
        <img src="fourth.png" alt="" />
      </div>
      <strong>6 : copy the link of your repository.</strong>
      <div className="git__push__explanation">
        <img src="fifth.png" alt="" />
      </div>
      <strong>7 : go to search bar and type command prompt.</strong>
      <div className="git__push__explanation">
        <img src="sixth.png" alt="" />
      </div>

      <strong>8 : right click on it and click on run as administrator.</strong>

      <strong>9 : click yes.</strong>
      <strong>
        10 : type git --version to check if it already installed on your
        computer.
      </strong>
      <div className="git__push__explanation">
        <img src="seventh.png" alt="" />
      </div>
      <strong>11 : type git config --global user.name "Your Name"</strong>
      <strong>
        12 : type git config --global user.email "Your Github Email"
      </strong>
      <div className="git__push__explanation">
        <img src="eight.png" alt="" />
      </div>
      <strong>13 : type cd .. and click enter ( do it two times ).</strong>
      <div className="git__push__explanation">
        <img src="ninth.png" alt="" />
      </div>
      <strong>
        14 : keep typing cd folderName till you reach out the targeted forder (
        the folder that includes html css js files ). ( THE FINAL PATH IS
        FOLDER'S PATH ).
      </strong>
      <div className="git__push__explanation">
        <img src="ten.png" alt="" />
      </div>
      <strong>
        15 : type git init to initialize git repository ( back to your folder
        and make sure that it includes .git folder ).
      </strong>
      <div className="git__push__explanation">
        <img src="eleven.png" alt="" />
      </div>
      <strong>
        16 : in command prompt and type git add . ( don't forget to add . at the
        end of command ).
      </strong>
      <div className="git__push__explanation">
        <img src="twelve.png" alt="" />
      </div>
      <strong>17 : type git commit -m "last changes".</strong>
      <div className="git__pull__explanation">
        <img src="thirteen.png" alt="" />
      </div>
      <p>
        for this command you can mark the changes by adding name to it. for
        example : if you add sidebar to your project and want to deploy it you
        can type at this tip : git commit -m "sidebar added successfully".
      </p>
      <strong>
        18 : git push https://github.com/hassan-amouri10575/myProject.git master
        (So that the link between push and master is the link you copied from
        github ).
      </strong>
      <div className="git__push__explanation">
        <img src="fourteen.png" alt="" />
      </div>
      <p>
        if you the following message showed up :{" "}
        <span className='error'>
          error: failed to push some refs to
          'https://github.com/hassan-amouri10575/myProject.git'
        </span>.{" "}
        try this command :{" "}
        <span className='error'>
          git push https://github.com/hassan-amouri10575/myProject.git --force
        </span>.{" "}
      </p>
      <strong>
        19 : wait a few seconds till deployment get finished then back to github
        and refresh page, and congratulation your project deployed successfully.
      </strong>

      <p>
        if you came across any issues,{" "}
        <a href="" target="_blank">
          watch out this video on Youtube
        </a>
        .
      </p>
      <h1> download github repository using pull command </h1>
      <p>
        In this section we wont use images, because we already used them in
        deployment section above.
      </p>
      
        <strong>
          1 : create a folder in your desktop. ( make sure that its name has no
          space ).
        </strong>
        <strong>2 : right click on it and click on run as administrator.</strong>
        <strong>3 : click yes.</strong>
        <strong>4 : type cd .. and click enter ( do it two times ).</strong>
        <strong>
          5: keep typing cd folderName till you reach out the targeted forder (
          the folder that includes html css js files ).
        </strong>
        <strong>
          6 : type git init to initialize git repository ( back to your folder
          and make sure that it includes .git folder ).
        </strong>
        <strong>
          7 : type the following command : git pull
          https://github.com/hassan-amouri10575/firstProject.git master
        </strong>
        <strong>8 : back to your folder and check it out.</strong>
        <p>
          if you came across any issues,{" "}
          <a href="" target="_blank">
            watch out this video on Youtube
          </a>
          .
        </p>
      
      <Footer/>
    </div>
  );
}

export default GitGithub;
