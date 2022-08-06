import useNavigateBack from "../../hooks/useNavigateBack";
import styles from "./FOF.module.scss";
import image from "../../assets/404.png";

const FOF = () => {
  const navigateBack = useNavigateBack();

  return (
    <div className={styles.container}>
      <img
        src={image}
        alt="Giant Head"
        className={`${styles.image} fluid-image`}
      />
      <h1 className={styles.h1}>How did you get here?</h1>
      <button
        onClick={navigateBack}
        type="submit"
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Return
      </button>
    </div>
  );
};

export default FOF;
