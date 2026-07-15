export function increaseDifficulty(difficulty) {
  switch (difficulty) {
    case "easy":
      return "medium";

    case "medium":
    default:
      return "hard";
  }
}
