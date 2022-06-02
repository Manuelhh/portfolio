import styles from "./About.module.css";
import AboutMe from "../../img/about.jpg";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutLeftContainer}>
        <div className={(styles.aboutCard, styles.bg)}></div>
        <div className={styles.aboutCard}>
          <img className={styles.aboutImage} src={AboutMe} alt="" />
        </div>
      </div>
      <div className={styles.aboutRightContainer}>
        <h1 className={styles.aboutTitle}>About Me</h1>
        <p className={styles.aboutSub}>
          I arrived in Canada with two things: fluent English and a chef’s
          diploma.
        </p>
        <p className={styles.aboutDesc}>
          What I soon learned was that, while I still loved to cook, my passion
          was not in the kitchen. A new country needed a new opportunity, so I
          decided to immerse myself in the world of programming.
        </p>
        <div className={styles.aboutAward}>
          <img src={Award} alt="" className={styles.aboutAwardImg} />
          <div className={styles.aAwardTexts}>
            <h4 className={styles.aAwardTitle}>General Assembly</h4>
            <p className={styles.aAwardDesc}>Computer Software Engineering</p>
            <p className={styles.aAwardDesc2}>June 2021 - December 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
