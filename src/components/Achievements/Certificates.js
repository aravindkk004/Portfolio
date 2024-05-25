import React from "react";
import Achievement from "./Achievement";
import { FaStar } from "react-icons/fa";

const Certifictes = () => {
  return (
    <>
      <Achievement
        title={"C Programming"}
        desc={
          "I successfully completed a C Programming certification, mastering fundamental concepts, data structures, algorithms, and memory management. This certification equips me with the skills to develop efficient and robust software solutions."
        }
        icon={<FaStar size={"2rem"} />}
        certificate={"documents/c.pdf"}
      />

      <Achievement
        title={"Python"}
        desc={
          "I  completed a comprehensive Python Programming course on Udemy, focusing on essential concepts and practical skills for software development. This course has prepared me to build efficient solutions and tackle complex challenges in development projects."
        }
        icon={<FaStar size={"2rem"} />}
        certificate={"documents/python.pdf"}
      />

      <Achievement
        title={"Web Development"}
        desc={
          "I successfully completed an extensive Full Stack Web Development course, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) and PostgreSQL. This training enhanced my skills in both front-end and back-end development, enabling me to build dynamic web applications with responsive interfaces and robust server-side logic."
        }
        icon={<FaStar size={"2rem"} />}
        certificate={"documents/WebDevelopment.pdf"}
      />

      <Achievement
        title={"Microsoft Azure AI Engineer Associate"}
        desc={
          "I hold the Microsoft Azure AI Engineer Associate certificate, earned through a rigorous 5-day workshop conducted by ICT Academy at my college. I successfully passed the examination, demonstrating my proficiency in Azure AI services and solutions."
        }
        icon={<FaStar size={"2rem"} />}
        certificate={"documents/azure.pdf"}
      />
    </>
  );
};

export default Certifictes;
