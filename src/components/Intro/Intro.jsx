import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introTextContainer}>
        <div className={styles.introName}>Manuel H Hinojosa</div>
        <div className={styles.introTitle}>
          <div className={styles.introTitleWrapper}>
            <div className={styles.introTitleItem}>Full Stack Developer</div>
            <div className={styles.introTitleItem}>Mongo & Mongoose</div>
            <div className={styles.introTitleItem}>Express</div>
            <div className={styles.introTitleItem}>React</div>
            <div className={styles.introTitleItem}>NodeJS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
