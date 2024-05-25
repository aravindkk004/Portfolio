import React from "react";
import "./Skills.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skill from "./Skill";

const Skills = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="slider">
        <Slider {...settings} className="slide">
          <Skill
            imgs={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
            }
            lvl={95}
          />

          <Skill
            imgs={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
            }
            lvl={90}
          />

          <Skill
            imgs={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            }
            lvl={90}
          />

          <Skill
            imgs={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            }
            lvl={85}
          />

          <Skill
            imgs={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            }
            lvl={85}
          />

          <Skill
            imgs={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
            }
            lvl={90}
          />

          <Skill
            imgs={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
            }
            lvl={90}
          />

          <Skill
            imgs={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
            }
            lvl={85}
          />

          <Skill
            imgs={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            }
            lvl={85}
          />

          <Skill
            imgs={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
            }
            lvl={75}
          />

          <Skill
            imgs={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
            }
            lvl={90}
          />

          <Skill
            imgs={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
            }
            lvl={75}
          />

          <Skill
            imgs={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            }
            lvl={85}
          />
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
