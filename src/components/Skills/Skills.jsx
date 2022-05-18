import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsTitle}>
          <h1>My Skills</h1>
        </div>
        <div className={styles.skillsColumnsContainer}>
          <div className={styles.skillsColumn}>
            <div className={styles.columntTitle}>
              <h2>Tools</h2>
            </div>
            <div className={styles.columnSkills}>
              <div>uno</div>
              <div>dos</div>
              <div>tres</div>
              <div>cuatro</div>
              <div>cinco</div>
            </div>
          </div>
          <div className={styles.skillsColumn}>
            <div className={styles.columntTitle}>
              <h2>Languages</h2>
            </div>
            <div className={styles.columnSkills}>
              <div>uno</div>
              <div>dos</div>
              <div>tres</div>
              <div>cuatro</div>
              <div>cinco</div>
            </div>
          </div>
          <div className={styles.skillsColumn}>
            <div className={styles.columntTitle}>
              <h2>Frameworks</h2>
            </div>
            <div className={styles.columnSkills}>
              <div>uno</div>
              <div>dos</div>
              <div>tres</div>
              <div>cuatro</div>
              <div>cinco</div>
            </div>
          </div>
          <div className={styles.skillsColumn}>
            <div className={styles.columntTitle}>
              <h2>Knowledge</h2>
            </div>
            <div className={styles.columnSkills}>
              <div>uno</div>
              <div>dos</div>
              <div>tres</div>
              <div>cuatro</div>
              <div>cinco</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
