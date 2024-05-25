import React from "react";
import Achievement from "./Achievement";
import { FaScrewdriverWrench } from "react-icons/fa6";

const Workshops = () => {
  return (
    <>
      <Achievement
        title={"Entrepreneurship Webinar"}
        desc={
          "I participated in an engaging webinar on Entrepreneurship organized by PSNA College of Engineering and Technology, actively contributing to discussions and gaining valuable insights. I am proud to have earned a certificate."
        }
        icon={<FaScrewdriverWrench size={"2rem"} />}
        certificate={"documents/Entrepreneurship.pdf"}
      />

      <Achievement
        title={"Workshop - VLSI"}
        desc={
          "I took part in the VLSI workshop organized by the Department of Electronics and Communication Engineering (ECE) at PSNACET, gaining valuable insights into Very Large Scale Integration (VLSI) technology."
        }
        icon={<FaScrewdriverWrench size={"2rem"} />}
        certificate={"documents/vlsi.pdf"}
      />

      <Achievement
        title={"Workshop - AI"}
        desc={
          "I actively participated in the Artificial Intelligence workshop organized by NIT Trichy, gaining valuable insights into the latest advancements in the field of AI."
        }
        icon={<FaScrewdriverWrench size={"2rem"} />}
        certificate={"documents/NITT.pdf"}
      />

      <Achievement
        title={"IV Technical Program at TechVolt"}
        desc={
          "During an industrial visit organized by my college, I participated in a technical program at TechVolt, CBE, and received a certificate."
        }
        icon={<FaScrewdriverWrench size={"2rem"} />}
        certificate={"documents/Techvolt.pdf"}
      />

      <Achievement
        title={"Workshop - Biped Robot"}
        desc={
          "I took part in the Biped Robot workshop conducted by PSNACET in collaboration with Genesis EduTech, gaining hands-on experience and knowledge in the field of robotics."
        }
        icon={<FaScrewdriverWrench size={"2rem"} />}
        certificate={"documents/Genesis.pdf"}
      />
    </>
  );
};

export default Workshops;
