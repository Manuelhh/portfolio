import Product from "../Product/Product";
import styles from "./ProductList.module.css";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className={styles.pl}>
      <div className={styles.plTexts}>
        <h1 className={styles.plTitle}>My Projects</h1>
        <p className={styles.plDesc}>
          Below I’ve included a few samples of my recent work.
        </p>
      </div>
      <div className={styles.plList}>
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            linkGit={item.linkGit}
            linkApp={item.linkApp}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
