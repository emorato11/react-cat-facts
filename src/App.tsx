import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

const CATS_FACTS_API_ENDPOINT = "https://catfact.ninja/fact";
const CATS_IMG_API_ENDPOINT = "https://cataas.com/cat/says/";
const CATS_IMG_API_FILTERS = {
  width: 300,
  height: 300,
  fontColor: "aqua",
};

const transformFiltersObjectToString = (
  filtersObject: Record<string, number | string>
) => {
  return Object.keys(CATS_IMG_API_FILTERS)
    .map((filter) => `${filter}=${filtersObject[filter]}`)
    .join("&");
};

export const App = () => {
  const [fact, setFact] = useState<string | null>();
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const getFact = () => {
    fetch(CATS_FACTS_API_ENDPOINT)
      .then((res) => res.json())
      .then((result) => {
        setFact(result.fact);
      });
  };

  const getAnotherFact = () => {
    setFact(null);
    setImageUrl(null);

    getFact();
  };

  useEffect(() => {
    getFact();
  }, []);

  useEffect(() => {
    if (fact) {
      const splittedFact = fact.split(" ", 3).join(" ");

      const filters = transformFiltersObjectToString(CATS_IMG_API_FILTERS);

      setImageUrl(`${CATS_IMG_API_ENDPOINT}${splittedFact}?${filters}`);
    }
  }, [fact]);

  return (
    <main>
      <header>
        <h1>Cats random fact & image</h1>

        <button onClick={getAnotherFact}>
          <span>Get other fact</span>
          <FontAwesomeIcon icon={faRotateRight} />
        </button>
      </header>
      {fact && imageUrl && (
        <section className="container">
          <span>{fact}</span>

          <img
            src={imageUrl}
            alt={`Image extracted from cataas.com using the first three random words from ${fact}`}
          />
        </section>
      )}
    </main>
  );
};
