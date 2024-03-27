import { useEffect, useState } from "react";

import { CATS_IMG_API_FILTERS } from "@/constants/cats";
import { transformFiltersObjectToString } from "@/utils/objects";

export const useCatImage = ({ fact }: { fact: string | null | undefined }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (fact) {
      const splittedFact = fact.split(" ", 3).join(" ");

      const filters = transformFiltersObjectToString(CATS_IMG_API_FILTERS);

      setImageUrl(
        `${
          import.meta.env.VITE_CATS_IMG_API_ENDPOINT
        }${splittedFact}?${filters}`
      );
    }
  }, [fact]);

  return { imageUrl };
};
