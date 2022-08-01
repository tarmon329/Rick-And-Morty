import { useEffect, useState } from "react";
import getFirstEpisode from "../utils/getFirstEpisode";

const useFetchFirstEpisode = (episode) => {
  const [episodeData, setEpisodeData] = useState({
    episodeName: "",
    episodeId: "",
  });

  useEffect(() => {
    (async () => {
      const { name, id } = await getFirstEpisode(episode[0]);

      setEpisodeData({
        episodeName: name,
        episodeId: id,
      });
    })();
  }, [episode]);

  return episodeData;
};

export default useFetchFirstEpisode;
