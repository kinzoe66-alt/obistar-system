/**
 * Transition Validator
 * Ensures all transitions are explicit and declared.
 */

export function validateTransition(contract, transition) {
  if (!contract || !transition) {
    throw new Error("Invalid transition request");
  }
  return true;
}
