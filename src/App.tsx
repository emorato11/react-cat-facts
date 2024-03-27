import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

import { useCatImage } from "@/hooks/useCatImage";
import { useCatFact } from "@/hooks/useCatFact";

import "./App.css";

export const App = () => {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const getAnotherFact = () => refreshFact();

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
          <p>{fact}</p>

          <img
            src={imageUrl}
            alt={`Image extracted from cataas.com using the first three random words from ${fact}`}
          />
        </section>
      )}
    </main>
  );
};
