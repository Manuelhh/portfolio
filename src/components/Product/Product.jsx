import styles from "./Product.module.css";
import GitHub from "../../img/github.png";
import AppImg from "../../img/app.jpg";

const Product = ({ img, linkGit, linkApp, title, desc, techs }) => {
  return (
    <div className={styles.product}>
      <div className={styles.imgContainer}>
        <img src={img} alt="project imgage" className={styles.projectImage} />
      </div>
      <div className={styles.descContainer}>
        <div className={styles.projectDescContainer}>
          {/*  */}

          <div className={styles.projectTitle}>{title}</div>
          <div className={styles.projectDesdcription}>{desc}</div>

          <div className={styles.ProjectTechs}>
            {techs.map((t) => (
              <div>{`--${t}`}</div>
            ))}
          </div>

          {/*  */}
        </div>
        <div className={styles.projectLinksContainer}>
          <div>
            <a href={linkGit}>code</a>
          </div>
          <div>
            <a href={linkApp}>app</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
