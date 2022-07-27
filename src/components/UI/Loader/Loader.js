// eslint-disable-next-line no-unused-vars
import * as LottiePlayer from "@lottiefiles/lottie-player";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-start gap-4">
      <lottie-player
        autoplay
        loop
        mode="normal"
        speed="1"
        background="transparent"
        src="https://assets3.lottiefiles.com/packages/lf20_ncnqwseq.json"
        style={{ width: "300px", height: "300px" }}
      ></lottie-player>
    </div>
  );
};

export default Loader;
