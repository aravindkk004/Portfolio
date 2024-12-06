import React, { useState, useRef } from "react";
import "./Contact.css";
import { IoIosSend } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const handleForm = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <section id="contact">
      <div className="leftcontact">
        <h3>Let's connect</h3>
        <p>
          Thanks for exploring! Whether you're curious about my work, seeking
          collaboration opportunities, or simply want to connect, I'm here for
          it all! Feel free to drop me a line. Let's turn ideas into action and
          make waves together. I'm excited to hear from you!
        </p>
        <div className="social-icon">
          <a href="https://github.com/aravindkk004?tab=repositories">
            <FaGithub
              className="github"
              fontSize={"2rem"}
              style={{ marginRight: "10px", color: "white" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/aravind-k-k-b1593024a/">
            <FaLinkedin
              className="linkedin"
              fontSize={"2rem"}
              style={{ marginRight: "10px", color: "white" }}
            />
          </a>
        </div>
      </div>
      <div className="rightcontact">
        <form ref={form} onSubmit={handleForm}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">
            <IoIosSend fontSize={"2rem"} style={{ marginRight: "10px" }} />
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
