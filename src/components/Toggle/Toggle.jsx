import styles from "./Toggle.module.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleTheme = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className={styles.toggle}>
      <img src={Sun} alt="sun" className={styles.toggleIcon} />
      <img src={Moon} alt="moon" className={styles.toggleIcon} />
      <div
        className={styles.toggleButton}
        onClick={handleTheme}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
