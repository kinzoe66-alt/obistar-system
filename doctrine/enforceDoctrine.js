/**
 * OBISTAR Doctrine Enforcement
 * This file is authoritative.
 * No function may execute without passing this gate.
 */

export function enforceDoctrine(contract, context) {
  if (!contract || typeof contract !== 'object') {
    throw new Error("Doctrine violation: Missing or invalid function contract");
  }

  if (contract.sideEffects === true) {
    throw new Error("Doctrine violation: Side effects are not permitted");
  }

  if (!contract.inputs || !contract.outputs) {
    throw new Error("Doctrine violation: Inputs and outputs must be declared");
  }

  if (context.phase < contract.minPhase) {
    throw new Error("Doctrine violation: Phase authority insufficient");
  }

  return true;
}
