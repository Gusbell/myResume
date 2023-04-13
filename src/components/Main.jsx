import * as style from "../TailwindStyle.jsx";
import BreakLine from "./Breakline.jsx";

function Main() {
  const skillList = [
    "HTML CSS Tailwind",
    "Javascript React",
    "Node.js/Express",
    "Relation Database",
    "Non-Relation Database",
    "Supabase cloud",
    "MongoDB PostgreSQL",
    "Java Python SQL CLI Git",
  ];

  return (
    <div className={style.main}>
      <div className="ml-5 sm:ml-16">
        <div className="h-0 sm:h-16"></div>
        <h3 className={style.h3}>SKILLSET</h3>
        <ul>
          {skillList.map((item, index) => {
            return (
              <li className={style.skill} key={index}>
                {item}
              </li>
            );
          })}
        </ul>
        <BreakLine />
        <h3 className={style.h3}>PROJEECTS</h3>
        <a>link</a>
        <BreakLine />
        <h3 className={style.h3}>CAREER TRAITS</h3>
        <a>none</a>
        <BreakLine />
        <h3 className={style.h3}>RECENT WORKS</h3>
        <a>none</a>
        <div className="h-0 sm:h-16"></div>
      </div>

      <div className="ml-5 sm:ml-52 w-1/3">
        <div>
          <div className="h-0 sm:h-16"></div>
          <h2 className={`${style.h2} + mb-3`}>About Me</h2>
          <p>
            I am a Computer Science junior student in Sukhothai Thammathirat
            Open University. I will graduate in early 2024. I am interested to
            be considered for a full-time Front-End, Back-End and full-stack
            software developer. I would like to get work from anywhere. I
            willing to learn new things all the time and I'm not afraid of
            changing.
          </p>
          <BreakLine />
        </div>
        <h2 className={style.h2}>Experience</h2>
        <p>
          Now I don't have any experience as a software developer. I used to
          study online course from borntoDev. And I am studying boost camp full
          stack software developer at TechUp Thailand.I had got experience from
          my own projects. For our project, we utilized the Agile Scrum
          methodology with the help of Jira software.
        </p>
        <BreakLine />
        <h2 className={style.h2}>Education</h2>
        <div className={style.education}>
          <h3>
            Junior, Computer Science<br></br>Sukhothai Thammathirat University
          </h3>
          <h3>2020-Now</h3>
        </div>
        <div className={style.education}>
          <h3>
            Senior, Early Year, Business Administration<br></br>Assassumption
            University
          </h3>
          <h3>Resigned 2014</h3>
        </div>
        <div className={style.education}>
          <h3>Watchirathamsathid School</h3>
          <h3>Graduated 2011</h3>
        </div>
        <BreakLine />
        <h2 className={style.h2}>Experience</h2>
        <p>
          Final Project:“Merry-Match,” React and Node.js (Express) web
          application similar to Tinder, using Supabase cloud for backend
          functionality, as part of a team project in May 2023.
          <br />
          Side Project: Online Resume Page (React, TailwindCSS)
          <br />
          Mini Project - created responsive webpage (HTML, TailwindCSS)
        </p>
        <div className="h-0 sm:h-16"></div>
      </div>
    </div>
  );
}

export default Main;
