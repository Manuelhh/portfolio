import styles from "./Product.module.css";

const Product = ({ img, link }) => {
  return (
    <div className={styles.product}>
      <div className={styles.productBrowser}>
        <div className={styles.productCircle}></div>
        <div className={styles.productCircle}></div>
        <div className={styles.productCircle}></div>
      </div>
      <a href={link}>
        <img className={styles.productImage} src={img} alt="Project img" />
      </a>
    </div>
  );
};

export default Product;
