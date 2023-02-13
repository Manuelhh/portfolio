import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsTitle}>Skills</div>
      <div className={styles.SkillsList}>
        MongoDB & Mongoose, Express, React, NodeJS, HTML, CSS, Javascript,
        Typescript, SASS, CSS modules, public API, EmailJS, Heroku, Netlify,
        Cloudinary, GitHub, Git, Terminal, NPM
      </div>
    </div>
  );
};

export default Skills;
