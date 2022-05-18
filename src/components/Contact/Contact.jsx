import styles from "./Contact.module.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Github from "../../img/github2.webp";
import In from "../../img/in.png";
import Cv from "../../img/cv.png";
import { useContext, useRef } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const useFormRef = useRef(null);

  const userNameRef = useRef(null);
  const userSubjectRef = useRef(null);
  const userEmailRef = useRef(null);
  const userMessageRef = useRef(null);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const getUserData = (e) => {
    e.preventDefault();
    if (
      userNameRef.current.value === "" ||
      userSubjectRef.current.value === "" ||
      userEmailRef.current.value === "" ||
      userMessageRef.current.value === ""
    ) {
      alert("something is missing");
      return;
    }
    emailjs
      .sendForm(
        "service_uwmyri8",
        "template_81ytf6s",
        useFormRef.current,
        "Btd79Gvtg2pvWbjSm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    userNameRef.current.value = "";
    userSubjectRef.current.value = "";
    userEmailRef.current.value = "";
    userMessageRef.current.value = "";
    userNameRef.current.focus();
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contactBG}> </div>
      <div className={styles.contactWrapper}>
        <div className={styles.contactLeft}>
          <h1 className={styles.contactTittle}>Let's discuss your project.</h1>
          <div className={styles.contactInfo}>
            <div className={styles.contactInfoItem}>
              <img className={styles.contactIcon} src={Phone} alt="phone" />
              +1. 647.287.4494
            </div>

            <div className={styles.contactInfoItem}>
              <img className={styles.contactIcon} src={Email} alt="email" />
              mangud.hinojosa@gmail.com
            </div>

            {/*  */}

            <div className={styles.contactInfoItem}>
              <a href="https://github.com/Manuelhh">
                <img className={styles.contactIcon} src={Github} alt="github" />
              </a>
              gitHub
            </div>

            <div className={styles.contactInfoItem}>
              <a href="https://www.linkedin.com/in/manuelhh/">
                <img className={styles.contactIcon} src={In} alt="in" />
              </a>
              linkedin
            </div>

            <div className={styles.contactInfoItem}>
              <a href="">
                <img className={styles.contactIcon} src={Cv} alt="cv" />
              </a>
              CV
            </div>

            {/*  */}
            <div className={styles.contactInfoItem}>
              <img className={styles.contactIcon} src={Address} alt="address" />
              Toronto, ON. Canada
            </div>
          </div>
        </div>
        <div className={styles.contactRight}>
          <p className={styles.contactDescription}>
            <b>What's your story?</b> Get in touch. Always freelancing if the
            right project comes along
          </p>
          <form action="" className={styles.contactForm} ref={useFormRef}>
            <input
              type="text"
              placeholder="Name"
              name="userName"
              ref={userNameRef}
              style={{ backgroundColor: darkMode ? "#333" : "white" }}
              autocomplete="off"
            />
            <input
              type="text"
              placeholder="Subject"
              name="userSubject"
              ref={userSubjectRef}
              style={{ backgroundColor: darkMode ? "#333" : "white" }}
              autocomplete="off"
            />
            <input
              type="text"
              placeholder="Email"
              name="userEmail"
              ref={userEmailRef}
              style={{ backgroundColor: darkMode ? "#333" : "white" }}
              autocomplete="off"
            />
            <textarea
              name="userMessage"
              rows="5"
              placeholder="Message"
              ref={userMessageRef}
              style={{ backgroundColor: darkMode ? "#333" : "white" }}
            ></textarea>
            <button onClick={getUserData}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
