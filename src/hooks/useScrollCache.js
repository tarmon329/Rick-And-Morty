import { useEffect } from "react";

class ScrollCache {
  static #queryMap = new Map();

  static setYOffset(page, offset) {
    this.#queryMap.set(page, offset);
  }

  static getYOffset(page) {
    return this.#queryMap.get(page);
  }

  static resetYOffset() {
    for (const key of this.#queryMap.keys()) {
      this.#queryMap.set(key, 0);
    }
  }
}

export const resetYOffset = ScrollCache.resetYOffset.bind(ScrollCache);

const useScrollCache = (page) => {
  const currentScroll = ScrollCache.getYOffset(page) ?? 0;

  useEffect(() => {
    const scrollHandler = () => ScrollCache.setYOffset(page, window.scrollY);
    setTimeout(() => {
      window.addEventListener("scroll", scrollHandler);
    }, 100);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [page]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: currentScroll, behavior: "smooth" });
    }, 100);
  }, [currentScroll]);

  return { currentScroll };
};

export default useScrollCache;
