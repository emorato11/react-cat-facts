import { useEffect, useState } from "react";

import { getRandomFact } from "@/services/cats";

export const useCatFact = () => {
  const [fact, setFact] = useState<string | null>();

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };

  useEffect(refreshFact, []);

  return { fact, refreshFact };
};
