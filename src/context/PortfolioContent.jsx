import { createContext, useContext, useEffect, useState } from "react";
import {
  loadPortfolioContent,
  readPortfolioContent,
  resetPortfolioContent,
  savePortfolioContent,
} from "../lib/portfolioStorage.js";

const PortfolioContentContext = createContext(null);

export function PortfolioContentProvider({ children }) {
  const [content, setContent] = useState(() => readPortfolioContent());

  useEffect(() => {
    let active = true;

    loadPortfolioContent().then((remoteContent) => {
      if (active) {
        setContent(remoteContent);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  const value = {
    content,
    async saveContent(nextContent, options) {
      const saved = await savePortfolioContent(nextContent, options);
      setContent(saved);
      return saved;
    },
    async resetContent(options) {
      const defaults = resetPortfolioContent();

      if (options?.remote) {
        const saved = await savePortfolioContent(defaults, options);
        setContent(saved);
        return saved;
      }

      setContent(defaults);
      return defaults;
    },
  };

  return (
    <PortfolioContentContext.Provider value={value}>
      {children}
    </PortfolioContentContext.Provider>
  );
}

export function usePortfolioContent() {
  const value = useContext(PortfolioContentContext);

  if (!value) {
    throw new Error("usePortfolioContent must be used inside PortfolioContentProvider");
  }

  return value;
}
