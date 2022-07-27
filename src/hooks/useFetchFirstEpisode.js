import { useEffect, useState } from "react";
import getFirstEpisode from "../utils/getFirstEpisode";

const useFetchFirstEpisode = (episode) => {
  const [episodeData, setEpisodeData] = useState({
    episodeName: "",
    episodeUrl: "",
  });

  useEffect(() => {
    (async () => {
      const { name, url } = await getFirstEpisode(episode[0]);

      setEpisodeData({
        episodeName: name,
        episodeUrl: url,
      });
    })();
  }, [episode]);

  return episodeData;
};

export default useFetchFirstEpisode;
