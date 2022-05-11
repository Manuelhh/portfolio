import styles from "./Product.module.css";

const Product = ({ img, link }) => {
  return (
    <div className={styles.product}>
      <div className={styles.productBrowser}>
        <div className={styles.productCircle}></div>
        <div className={styles.productCircle}></div>
        <div className={styles.productCircle}></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img className={styles.productImage} src={img} alt="" />
      </a>
    </div>
  );
};

export default Product;
