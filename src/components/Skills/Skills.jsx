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
              <div>npm</div>
              <div>Terminal</div>
              <div>git, gitHub</div>
              <div>Heroku</div>
              <div>Netlify</div>
              <div>MongoDB</div>
              <div>Mongoose</div>
            </div>
          </div>
          <div className={styles.skillsColumn}>
            <div className={styles.columntTitle}>
              <h2>Languages</h2>
            </div>
            <div className={styles.columnSkills}>
              <div>HTML</div>
              <div>CSS</div>
              <div>JS</div>
            </div>
          </div>
          <div className={styles.skillsColumn}>
            <div className={styles.columntTitle}>
              <h2>Frameworks</h2>
            </div>
            <div className={styles.columnSkills}>
              <div>Node JS</div>
              <div>Express</div>
              <div>React</div>
            </div>
          </div>
          <div className={styles.skillsColumn}>
            <div className={styles.columntTitle}>
              <h2>Knowledge</h2>
            </div>
            <div className={styles.columnSkills}>
              <div>MERN</div>
              <div>Public API</div>
              <div>Hosting</div>
              <div>NoSQL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
