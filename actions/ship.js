import { log } from "../utils/log.js";

export function ship(task) {
  log("Shipping live:");
  log(task || "no task, still moving");
}
