import { handleError } from "./index.js";

async function unSafeFetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    const { status, statusText } = response;
    throw new Error(`Response Status:${{ status, statusText }}`);
  }

  return await response.json();
}

export const fetchData = handleError(unSafeFetchData);
