import { useEffect } from "react";

class ScrollCache {
  static #queryMap = new Map();

  static setYOffset(offset) {
    this.#queryMap.set(1, offset);
  }

  static getYOffset() {
    return this.#queryMap.get(1);
  }

  static resetYOffset() {
    this.#queryMap.set(1, 0);
  }
}

export const resetYOffset = ScrollCache.resetYOffset.bind(ScrollCache);

const useScrollCache = () => {
  const currentScroll = ScrollCache.getYOffset() ?? 0;

  useEffect(() => {
    const scrollHandler = () => ScrollCache.setYOffset(window.scrollY);
    setTimeout(() => {
      window.addEventListener("scroll", scrollHandler);
    }, 100);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return { currentScroll };
};

export default useScrollCache;
