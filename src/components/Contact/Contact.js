import React from 'react'
import './Contact.css'
import { IoIosSend } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact">
        <div className='leftcontact'>
            <h3>Let's connect</h3>
            <p>Thanks for exploring! Whether you're curious about my work, seeking collaboration opportunities, or simply want to connect, I'm here for it all! Feel free to drop me a line. Let's turn ideas into action and make waves together.I'm excited to hear from you! </p>
            <div className='social-icon'>
              <a href="https://github.com/aravindkk004?tab=repositories"><FaGithub className="github" fontSize={"2rem"} style={{marginRight:"10px", color:"white"}}/></a>
              <a href="https://www.linkedin.com/in/aravind-k-k-b1593024a/"><FaLinkedin className="linkedin" fontSize={"2rem"} style={{marginRight:"10px", color: "white"}}/></a>
            </div>
          </div>
        <div className='rightcontact'>
            <form>
                <input type='text' placeholder='Your name' required />
                <input type='email' placeholder='Your Email' required />
                <textarea placeholder='Your Message' required ></textarea> 
                <button><IoIosSend fontSize={"2rem"} style={{marginRight:"10px"}}/>Send</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
