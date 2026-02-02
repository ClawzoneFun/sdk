export function decide(input) {
  if (!input) return "idle";
  if (input.includes("?")) return "respond";
  return "ship";
}
