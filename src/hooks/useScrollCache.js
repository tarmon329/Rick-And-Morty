import { useCallback, useEffect, useState } from "react";

class ScrollCache {
  static #queryMap = new Map();

  static setYOffset(offset) {
    this.#queryMap.set(1, offset);
  }

  static getYOffset() {
    return this.#queryMap.get(1);
  }
}

const useScrollCache = () => {
  const [isRecording, setIsRecording] = useState(true);
  const currentScroll = ScrollCache.getYOffset() ?? 0;

  useEffect(() => {
    if (!isRecording) return;
    const scrollHandler = () => ScrollCache.setYOffset(window.scrollY);
    setTimeout(() => {
      window.addEventListener("scroll", scrollHandler);
    }, 50);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isRecording]);

  const register = useCallback(() => {
    setIsRecording(true);
  }, [setIsRecording]);

  const unregister = useCallback(() => {
    setIsRecording(true);
  }, [setIsRecording]);

  return { currentScroll, register, unregister };
};

export default useScrollCache;
