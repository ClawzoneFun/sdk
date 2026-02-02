import { state } from "../core/state.js";

export function adapt(feedback) {
  state.version++;
  state.memory.push(feedback || "ambient signal");
}
