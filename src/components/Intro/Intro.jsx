import styles from "./Intro.module.css";
import Me from "../../img/me.jpg";

const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introLeftContainer}>
        <div className={styles.introLeftWrapper}>
          <h2 className={styles.introText}>Hello, My name is</h2>
          <h1 className={styles.introName}>Manuel H Hinojosa</h1>
          <div className={styles.introTitle}>
            <div className={styles.introTitleWrapper}>
              <div className={styles.introTitleItem}>Full Stack Developer</div>
              <div className={styles.introTitleItem}>Full Stack Developer</div>
              <div className={styles.introTitleItem}>Full Stack Developer</div>
              <div className={styles.introTitleItem}>Full Stack Developer</div>
              <div className={styles.introTitleItem}>Full Stack Developer</div>
            </div>
          </div>
          <p className={styles.introDescription}>
            I am passionate about programming and I have extensive knowledge of
            front-end techniques— and a flair for visual design. When I’m
            working on a project, I love structure, order and spending time with
            details for peak optimization. I’m especially in my element when I’m
            coming up with original solutions while collaborating with creative,
            talented and inspiring people.
          </p>
        </div>

        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="#59b256"
          className={styles.introScroll}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className={styles.introRightContainer}>
        <img src={Me} alt="portrait" className={styles.introImage} />
      </div>
    </div>
  );
};

export default Intro;
