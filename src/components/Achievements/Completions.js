import React from "react";
import Achievement from "./Achievement";
import { FaFireAlt } from "react-icons/fa";

const Completions = () => {
  return (
    <>
      <Achievement
        title={"SMART INDIA HACKATHON 2023 FINALIST"}
        desc={
          "I am proud to have been a finalist in the Smart India Hackathon 2023, showcasing my problem-solving skills and dedication to innovation. This esteemed competition brought together top talents nationwide to tackle real-world challenges, emphasizing my commitment to driving positive change through technology."
        }
        icon={<FaFireAlt size={"2rem"} />}
        certificate={"documents/Sih.pdf"}
      />

      <Achievement
        title={"Coding Contest - TCE"}
        desc={
          "I took part in the Coding Contest at Thiagarajar College of Engineering, showcasing my coding skills and earning a certificate in recognition of my participation."
        }
        icon={<FaFireAlt size={"2rem"} />}
        certificate={"documents/TCE.pdf"}
      />

      <Achievement
        title={"KAVACH 2023 Cyber Security Internal Hackathon"}
        desc={
          "I participated in the KAVACH 2023 Cyber Security Internal Hackathon at PSNACET, earning a certificate in recognition of my contribution and dedication to the event"
        }
        icon={<FaFireAlt size={"2rem"} />}
        certificate={"documents/Kavach.pdf"}
      />

      <Achievement
        title={"2nd Runner up in WHAT THE FIGMA EVENT"}
        desc={
          "I am honored to have secured the 2nd runner-up position in 'What the Figma,' a web development event at NIT Trichy. This achievement showcases my prowess in web development and ability to excel in competitive environments."
        }
        icon={<FaFireAlt size={"2rem"} />}
        certificate={"documents/NITT.pdf"}
      />

      <Achievement
        title={"Runner up in Code Debugging"}
        desc={"I won the 2nd prize in a code debugging event held at my college, showcasing my strong problem-solving skills and attention to detail. This achievement highlights my ability to quickly identify and resolve complex coding issues."}
        icon={<FaFireAlt size={"2rem"} />}
        certificate={"documents/psna.pdf"}
      />

      <Achievement
        title={"Circuit debugging - Hindustan"}
        desc={
          "I participated in a circuit debugging event at Hindustan College, demonstrating my adeptness in troubleshooting electronic circuits. This experience showcases my ability to solve technical challenges effectively and highlights my passion for electronics."
        }
        icon={<FaFireAlt size={"2rem"} />}
        certificate={"documents/Hindustan.pdf"}
      />
    </>
  );
};

export default Completions;
