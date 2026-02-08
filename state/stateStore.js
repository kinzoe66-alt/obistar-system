/**
 * OBISTAR State Store
 * Authoritative, immutable snapshots only.
 */

let currentState = {
  phase: "INITIAL",
  stage: "UNSET"
};

export function getState() {
  return { ...currentState };
}

export function setState(nextState) {
  currentState = { ...nextState };
}
