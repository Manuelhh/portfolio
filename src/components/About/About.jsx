import styles from "./About.module.css";
import AboutMe from "../../img/about.jpeg";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutLeftContainer}>
        <div className={styles.aboutTextContainer}>
          <div className={styles.aboutTextTitle}>
            General Assembly Software Engineer grad.
          </div>
          <div className={styles.aboutTextScript}>
            I am passionate about programming and I have extensive knowledge of
            front-end techniques and a flair for visual design. When I’m working
            on a project, I love structure, order and spending time with details
            for peak optimization. I’m especially in my element when coming up
            with original solutions while collaborating with creative, talented
            and inspiring people.
            <br />
            <br />I worked in the culinary industry for over a decade. My formal
            education as a chef and my professional experience built my work
            ethics. I seek perfection and thrive on feedback. I consider clear
            and honest communication a fundamental key when collaborating.
          </div>
        </div>
      </div>
      <div className={styles.aboutRightContainer}>
        <div className={styles.aboutImageContainer}>
          <img
            src={AboutMe}
            alt="About me image"
            className={styles.aboutImage}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
