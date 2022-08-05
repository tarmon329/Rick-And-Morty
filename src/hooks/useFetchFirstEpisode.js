import { useEffect, useState } from "react";
import fetchFirstEpisode from "../api/fetchFirstEpisode";

const useFetchFirstEpisode = (episodes) => {
  const [episodeData, setEpisodeData] = useState({
    episodeName: "",
    episodeId: "",
  });

  useEffect(() => {
    (async () => {
      const { name, id } = await fetchFirstEpisode(episodes[0]);

      setEpisodeData({
        episodeName: name,
        episodeId: id,
      });
    })();
  }, [episodes]);

  return episodeData;
};

export default useFetchFirstEpisode;
