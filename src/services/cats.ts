export const getRandomFact = async () => {
  const res = await fetch(import.meta.env.VITE_CATS_FACTS_API_ENDPOINT);
  const data = await res.json();

  return data.fact;
};
