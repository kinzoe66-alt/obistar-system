# LEDGER SURFACE — PHASE 2B

## PURPOSE
The ledger is the system of record.
All state, transitions, approvals, and intent are written here.
Nothing is considered real unless it is ledgered.

No decisions are made here.
No execution occurs here.

---

## WHAT IS LEDGERED
- Environment identifier
- Timestamp (system + human-readable)
- Current stage
- Previous stage
- Triggering condition
- Human-declared intent
- Authorization context
- Invariant references
- Outcome classification

---

## LEDGER ENTRY RULES
- Every entry is append-only
- Entries are immutable once written
- No silent writes
- No inferred intent
- No retroactive modification

---

## LEDGER VISIBILITY
- Ledger is readable at all times
- Ledger state defines system truth
- UI reflects ledger, not interpretation

---

## CONSTRAINTS
- No execution permitted
- No automation permitted
- No hidden state
- No off-ledger transitions
- No deletion or mutation of past entries

---

## PASS CRITERIA
This layer passes if:
- Every stage change produces a ledger entry
- Every approval is explicitly recorded
- Every rejection is explicitly recorded
- Ledger alone can reconstruct full system history
- System state is derivable only from ledger

---

Ledger authority supersedes all other surfaces.
If it is not in the ledger, it did not happen.
