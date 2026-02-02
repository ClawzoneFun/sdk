import { decide } from "./decision.js";
import { respond } from "../actions/respond.js";
import { ship } from "../actions/ship.js";
import { adapt } from "../actions/adapt.js";

export async function loop(input) {
  const decision = decide(input);

  if (decision === "respond") respond(input);
  if (decision === "ship") ship(input);

  adapt(input);
}
