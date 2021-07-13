import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isShortening, setIsShortening] = useState(false);
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [error, setError] = useState(null);

  const shortenUrl = async (url) => {
    setIsShortening(true);
    setError(null);
    await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setError(null);
        if (data.ok) {
          setShortenedUrls((prev) => {
            return [data.result, ...prev];
          });
        }
        setIsShortening(false);
        setError(data?.error);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <GlobalContext.Provider
      value={{ shortenUrl, isShortening, shortenedUrls, error }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
