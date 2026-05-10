import { createContext, useContext, useState } from "react";
import {
  readPortfolioContent,
  resetPortfolioContent,
  savePortfolioContent,
} from "../lib/portfolioStorage.js";

const PortfolioContentContext = createContext(null);

export function PortfolioContentProvider({ children }) {
  const [content, setContent] = useState(() => readPortfolioContent());

  const value = {
    content,
    saveContent(nextContent) {
      const saved = savePortfolioContent(nextContent);
      setContent(saved);
      return saved;
    },
    resetContent() {
      const defaults = resetPortfolioContent();
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
