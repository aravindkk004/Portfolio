import React from "react";

const Skill = ({ imgs, lvl }) => {
  return (
    <div className="skill1">
      <div className="icon-img">
        <div className="imgs" style={{ background: `conic-gradient(#7e61e7 ${lvl * 3.6}deg, #d3d3d3 0deg)` }}>
          <img src={imgs} alt="skill icons"/>
        </div>
      </div>
      <div className="level">
        <p>{lvl}%</p>
      </div>
    </div>
  );
};

export default Skill;
