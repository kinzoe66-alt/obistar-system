/**
 * OBISTAR Ledger
 * Append-only, no mutation.
 */

const ledger = [];

export function appendEntry(entry) {
  ledger.push({
    ...entry,
    timestamp: new Date().toISOString()
  });
}

export function readLedger() {
  return [...ledger];
}
