import styles from "./Product.module.css";
import GitHub from "../../img/github.png";
import AppImg from "../../img/app.jpg";

const Product = ({ img, linkGit, linkApp }) => {
  return (
    <div className={styles.product}>
      <div className={styles.productBrowser}>
        <div className={styles.productCircle}></div>
        <div className={styles.productCircle}></div>
        <div className={styles.productCircle}></div>
      </div>
      <div className={styles.text}>
        <a href={linkGit}>
          <img className={styles.img} src={GitHub} alt=""></img>
        </a>
        <a href={linkApp}>
          <img className={styles.img} src={AppImg} alt="" />
        </a>
      </div>

      <img className={styles.productImage} src={img} alt="Project img" />
    </div>
  );
};

export default Product;
