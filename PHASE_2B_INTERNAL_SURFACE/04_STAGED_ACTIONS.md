# STAGED ACTIONS — PHASE 2B

## PURPOSE
Define the only permitted action progression model.
This layer describes actions but never executes them.

---

## ACTION STAGES

- Stage 0: Observation (default)
- Stage 1: Proposed Action (described, not executed)
- Stage 2: Simulated Impact
- Stage 3: Awaiting Explicit Authorization

No stage may be skipped.  
All transitions are explicit.

---

## CONSTRAINTS

- No autonomous execution
- No implicit intent
- No hidden transitions
- All action intent must be human-readable
- All actions are ledger-addressable

---

## PASS CRITERIA

This layer passes if:

- Every action exists only as a description or simulation
- No execution path exists
- All transitions are traceable
- Every stage change produces a ledger entry

