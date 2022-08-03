import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import styles from "./PageStartLink.module.scss";

const PageStartLink = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const scrollHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <div
      onClick={scrollHandler}
      data-aos="fade-up"
      data-aos-offset="800"
      className={`${styles.link} aos-init aos-animate`}
    >
      ↑
    </div>
  );
};

export default PageStartLink;
