import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

const Project = ({ live, git, title, by, img }) => {
  return (
    <div className="project">
      <div className="pro-img">
        <img src={img} alt="project" />
      </div>
      <div className="icons-div">
        <button>
          <a href={git}>
            <FaCode fontSize={"2.2rem"} color="white" />
          </a>
        </button>
        <button>
          <a href={live}>
            <FaRegEye fontSize={"2.2rem"} color="white" />
          </a>
        </button>
      </div>
      <div className="detail">
        <h4>{title}</h4>
        <p>{by}</p>
      </div>
    </div>
  );
};

export default Project;
