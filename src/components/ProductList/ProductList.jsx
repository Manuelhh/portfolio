import Product from "../Product/Product";
import styles from "./ProductList.module.css";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className={styles.pl}>
      <div className={styles.plTexts}>
        <h1 className={styles.plTitle}> Projects</h1>
      </div>

      <div className={styles.plList}>
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            linkGit={item.linkGit}
            linkApp={item.linkApp}
            title={item.title}
            desc={item.desc}
            techs={item.techs}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
