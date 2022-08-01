import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://www.tomer-almog.com/" className={styles["footer__link"]}>
        &#169; Tomer Almog
      </a>
    </footer>
  );
};

export default Footer;
