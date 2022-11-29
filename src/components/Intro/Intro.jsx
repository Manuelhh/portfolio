import styles from "./Intro.module.css";
import Me from "../../img/me.jpg";

const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introTextContainer}>
        <div className={styles.introName}>Manuel H Hinojosa</div>
        <div className={styles.introTitle}>
          <div className={styles.introTitleWrapper}>
            <div className={styles.introTitleItem}>Full Stack Developer</div>
            <div className={styles.introTitleItem}>Full Stack Developer</div>
            <div className={styles.introTitleItem}>Full Stack Developer</div>
            <div className={styles.introTitleItem}>Full Stack Developer</div>
            <div className={styles.introTitleItem}>Full Stack Developer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
