import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introTextContainer}>
        <div className={styles.introName}>Manuel H Hinojosa</div>
        <div className={styles.introTitle}>Full Stack Developer</div>
      </div>
    </div>
  );
};

export default Intro;
