export async function waitForAllPromises(promises = []) {
  const results = await Promise.allSettled(promises);
  const data = results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);

  return data;
}
