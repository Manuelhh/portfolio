import Product from "../Product/Product";
import styles from "./ProductList.module.css";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className={styles.pl}>
      <div className={styles.plTexts}>
        <h1 className={styles.plTitle}>Create & Inspire</h1>
        <p className={styles.plDesc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, est
          ducimus dolorem animi laudantium magni ratione obcaecati minus
          suscipit, incidunt ipsa ea provident. Eveniet tenetur, quidem
          praesentium atque corrupti unde.
        </p>
      </div>
      <div className={styles.plList}>
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
