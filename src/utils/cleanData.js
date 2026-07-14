export function cleanData(data) {
  const spriteSource = data.sprites.other;
  const imgUrl = (spriteSource["dream_world"] ??
    spriteSource["official-artwork"])["front_default"];

  return {
    desc: data.name,
    img: imgUrl,
    id: crypto.randomUUID(),
  };
}
