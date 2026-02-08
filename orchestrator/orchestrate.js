/**
 * Execution Orchestrator
 * Coordinates validation, execution, ledger, and state update.
 */

import { validateTransition } from "../validation/validateTransition.js";
import { executeTransition } from "../execution/executeTransition.js";
import { appendEntry } from "../ledger/appendLedger.js";
import { setState } from "../state/stateStore.js";

export function orchestrate(contract, transition) {
  validateTransition(contract, transition);
  const nextState = executeTransition(contract, transition);
  appendEntry({ contract, transition, nextState });
  setState(nextState);
  return nextState;
}
