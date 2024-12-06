import React from "react";
import "./Home.css";
import profile from "./../../images/profile.jpg";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="left">
          <h1>Hello, I'm</h1>
          <h1>
            <TypeAnimation
            className="text-white"
              sequence={[
                "ARAVIND K K",
                1000,
                "Web Developer",
                1000, 
                "App Developer",
                1000,
                "AI Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p>
            I am a full-stack developer and passionate Python enthusiast,
            skilled in crafting innovative solutions and creating seamless user
            experiences.
          </p>
          <div className="btns">
            <button className="hire">
              <a href="#contact">Hire Me</a>
            </button>
            <button className="cv">
              <a href="documents/Resume_Aravind_K_K.pdf" download={true}>Download CV</a>
            </button>
          </div>
        </div>
        <div className="right">
          <img src={profile} alt="profile" />
        </div>
      </section>
    </>
  );
};

export default Home;
