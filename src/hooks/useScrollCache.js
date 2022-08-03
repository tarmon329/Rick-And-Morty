import { useEffect } from "react";

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
  const currentScroll = ScrollCache.getYOffset() ?? 0;

  useEffect(() => {
    const scrollHandler = () => ScrollCache.setYOffset(window.scrollY);
    setTimeout(() => {
      window.addEventListener("scroll", scrollHandler);
    }, 50);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return { currentScroll };
};

export default useScrollCache;
