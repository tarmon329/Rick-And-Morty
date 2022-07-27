// eslint-disable-next-line no-unused-vars
import * as LottiePlayer from "@lottiefiles/lottie-player";

const NoCharacters = ({ error }) => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-start gap-4">
      <h1 className="text-danger">No Characters Found</h1>
      {error && <h2 className="fs-5">{error.message}</h2>}
      <lottie-player
        autoplay
        loop
        mode="normal"
        speed="1"
        background="transparent"
        src="https://assets4.lottiefiles.com/packages/lf20_4jsnlwpe.json"
        style={{ width: "300px", height: "300px" }}
      ></lottie-player>
    </div>
  );
};

export default NoCharacters;
