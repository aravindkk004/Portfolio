import React from 'react'
import "./About.css"
import fullstack from "./../../images/fullstack.png"

const About = () => {
  return (
    <section id="about">
        <div className='leftabout'>
            <img src={fullstack} alt="full stack" />
        </div>
        <div className='rightabout'>
            <h2>About Me</h2>
            <p>As an accomplished Full Stack Developer and App Developer proficient in leveraging the MERN stack for web development and React Native for mobile app development, I am driven by a fervent passion for innovation and relentless pursuit of growth. While boasting a robust portfolio of crafting seamless, user-centric applications, I am equally excited about delving into new territories, particularly Artificial Intelligence (AI). Though I am currently unfamiliar with AI technologies, I am eager and committed to expanding my expertise in this area. With a resolute determination to learn and adapt, I am excited about the prospect of integrating AI into my development projects, ultimately aiming to pioneer revolutionary advancements that redefine the technology landscape. Through unwavering dedication and a steadfast commitment to excellence, I am poised to embark on a journey of discovery in AI and lead the development of cutting-edge solutions that push the boundaries of innovation.</p>

            <h3>Education</h3>
            <ul>
                <li>Bachelor's Degree in Electronics and Communication Engineering <br />
                    PSNA College of Engineering and Technology,Dindigul <br />
                    2021-2025</li>
            </ul>
        </div>
    </section>
  )
}

export default About
