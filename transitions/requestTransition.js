/**
 * OBISTAR Transition Request
 * Phase 12 — Declarative State Transition
 *
 * This file MAY:
 * - Declare intent to transition
 * - Describe desired next state
 *
 * This file MAY NOT:
 * - Execute transitions
 * - Mutate state
 * - Produce side effects
 */

export function requestTransition(currentState, requested) {
  return {
    type: "TRANSITION_REQUEST",
    from: {
      phase: currentState.phase,
      stage: currentState.stage
    },
    to: {
      phase: requested.phase,
      stage: requested.stage
    },
    reason: requested.reason || "unspecified",
    timestamp: new Date().toISOString()
  };
}
