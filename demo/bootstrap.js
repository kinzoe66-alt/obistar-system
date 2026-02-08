/**
 * OBISTAR Demo Bootstrap
 * Demonstrates full lifecycle without mutation abuse.
 */

import { orchestrate } from "../orchestrator/orchestrate.js";

export function runDemo() {
  return orchestrate(
    { inputs: true, outputs: true, sideEffects: false },
    { toPhase: "COMPLETE", toStage: "READY" }
  );
}
