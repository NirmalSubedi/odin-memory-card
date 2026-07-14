import { fetchData, waitForAllPromises, cleanData } from "./index";

export async function getCardData(amount = 15, from = 0) {
  if (typeof window === "undefined") return [];

  const batchUrl = `https://pokeapi.co/api/v2/pokemon?limit=${amount}&offset=${from}`;
  const batchEndpoints = (await fetchData(batchUrl)).results;

  const promises = batchEndpoints.map((endpoint) => fetchData(endpoint.url));
  const data = await waitForAllPromises(promises);

  return data.map(cleanData);
}
