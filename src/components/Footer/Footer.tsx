// Internal Dependencies
import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <a href="#">Muhammad Usman &copy;</a>
      <br />
      {currentYear}
    </footer>
  );
};
