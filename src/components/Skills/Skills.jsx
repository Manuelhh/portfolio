import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsTitle}>Skills</div>
      <div className={styles.SkillsList}>
        Npm, Terminal, Git, GitHub, Heroku, Netlify, MongoDB, Mongoose, HTML,
        CSS, JS, NodeJS, Express, React, Typescript, SASS, MERN, Public API,
        Hosting, Cloudinary
      </div>
    </div>
  );
};

export default Skills;
