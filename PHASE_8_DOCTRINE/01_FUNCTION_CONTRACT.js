/**
 * FUNCTION CONTRACT — DOCTRINE PHASE 8
 *
 * This file defines the shape of all valid functions in the system.
 * No execution occurs here.
 */

export function defineFunctionContract() {
  return {
    declaredIntent: true,
    explicitInputs: true,
    explicitOutputs: true,
    noSideEffects: true,
    noImplicitExecution: true,
    ledgerAware: true
  };
}
