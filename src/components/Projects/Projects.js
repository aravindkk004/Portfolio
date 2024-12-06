import React from "react";
import "./Projects.css";
import Project from "./Project";
import landing from "./../../images/restaurant.png";
import simon from "./../../images/simon.png";
import quiz from "./../../images/quiz.png";
import tictactoe from "./../../images/tictactoe.png";
import drum from "./../../images/drum.png";
import Notes from "./../../images/notes.png";
import Weather from "./../../images/weather.png";
import talencrafter from "./../../images/talencrafter.png";
import picportal from "./../../images/picportal.png";
import aigen from "./../../images/aigen.png";
import budgetbuddy from "./../../images/budgetbuddy.png";
import mockMasterUI from "./../../images/mock-master-ui.png";

const Projects = () => {
  return (
    <section id="projects">
      <h3>Projects</h3>
      <div className="project-items">
        <Project
          title={"Mock Master"}
          by={"Next JS"}
          img={mockMasterUI}
          live={"https://aravindkk-mockmaster.vercel.app/"}
          git={
            "https://github.com/aravindkk004/MockMaster-Ai-Mock-Interviewer-"
          }
        />
        <Project
          title={"BudgetBuddy"}
          by={"Next JS"}
          img={budgetbuddy}
          live={"https://aravindkk-budgetbuddy.vercel.app/"}
          git={"https://github.com/aravindkk004/BudgetBuddy"}
        />
        <Project
          title={"TalenCrafter"}
          by={"EJS"}
          img={talencrafter}
          live={"https://aravindkk-talencrafter.onrender.com/"}
          git={"https://github.com/aravindkk004/TalenCrafter"}
        />

        <Project
          title={"PicPortal"}
          by={"Next JS"}
          img={picportal}
          live={"https://aravindkk-picportal.vercel.app"}
          git={"https://github.com/aravindkk004/PicPortal"}
        />

        <Project
          title={"AiGen-SaaS"}
          by={"Next Js and Flask"}
          img={aigen}
          live={"https://aravindkk-aigen-saas.vercel.app/"}
          git={"https://github.com/aravindkk004/AiGen-SaaS"}
        />

        <Project
          title={"Weather App"}
          by={"Next JS"}
          img={Weather}
          live={"https://aravindkk-weather-app.vercel.app/"}
          git={"https://github.com/aravindkk004/weather_app"}
        />

        <Project
          title={"Notes APp"}
          by={"Next JS"}
          img={Notes}
          live={"https://aravindkk-notes-next.vercel.app/"}
          git={"https://github.com/aravindkk004/Notes-app"}
        />

        <Project
          title={"Landing Page"}
          by={"HTML CSS"}
          img={landing}
          live={"https://aravind-restaurant-landing-page.vercel.app/"}
          git={"https://github.com/aravindkk004/Restaurant-Landing-Page"}
        />

        <Project
          title={"Simon Game"}
          by={"JavaScript"}
          img={simon}
          live={"https://aravind-simon-game.vercel.app/"}
          git={"https://github.com/aravindkk004/Simon-Game"}
        />

        <Project
          title={"Quiz App"}
          by={"JavaScript"}
          img={quiz}
          live={"https://quiz-app-aravind-nine.vercel.app/"}
          git={"https://github.com/aravindkk004/Quiz-App"}
        />

        <Project
          title={"Tic Tac Toe Game"}
          by={"JavaScript"}
          img={tictactoe}
          live={"https://tic-tac-toe-one-liard.vercel.app/"}
          git={"https://github.com/aravindkk004/Tic-Tac-Toe"}
        />

        <Project
          title={"Drum"}
          by={"JavaScript"}
          img={drum}
          live={"https://drum-kit-aravind.vercel.app/"}
          git={"https://github.com/aravindkk004/Drum-Kit"}
        />
      </div>
    </section>
  );
};

export default Projects;
