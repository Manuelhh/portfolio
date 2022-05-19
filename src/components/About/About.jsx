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
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className={styles.aboutDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className={styles.aboutAward}>
          <img src={Award} alt="" className={styles.aboutAwardImg} />
          <div className={styles.aAwardTexts}>
            <h4 className={styles.aAwardTitle}>
              Computer Software Engineering
            </h4>
            <p className={styles.aAwardDesc}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
