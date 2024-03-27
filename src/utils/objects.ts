import { CATS_IMG_API_FILTERS } from "@/constants/cats";

export const transformFiltersObjectToString = (
  filtersObject: Record<string, number | string>
) => {
  return Object.keys(CATS_IMG_API_FILTERS)
    .map((filter) => `${filter}=${filtersObject[filter]}`)
    .join("&");
};
