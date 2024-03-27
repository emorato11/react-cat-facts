import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

import { useCatImage } from "@/hooks/useCatImage";

import "./App.css";

export const App = () => {
  const [fact, setFact] = useState<string | null>();
  const { imageUrl } = useCatImage({ fact });

  const getFact = () => {
    fetch(import.meta.env.VITE_CATS_FACTS_API_ENDPOINT)
      .then((res) => res.json())
      .then((result) => {
        setFact(result.fact);
      });
  };

  const getAnotherFact = () => {
    setFact(null);

    getFact();
  };

  useEffect(() => {
    getFact();
  }, []);

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
