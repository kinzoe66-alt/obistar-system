# APPROVAL GATE — PHASE 2B

## PURPOSE
Define the explicit human authority boundary.
No system action may proceed beyond this point without approval.

---

## WHAT REQUIRES APPROVAL
- Transition from observation to action
- Authorization to write to the ledger
- Escalation of invariant violations
- Entry into staged execution

---

## APPROVAL STATES
- Pending
- Approved
- Rejected
- Deferred

Each state change is:
- Timestamped
- Attributed to a human authority
- Ledger-addressable

---

## HUMAN CONTROLS
Available actions:
- Approve
- Reject
- Defer
- Request clarification

No bulk approval.
No automatic approval.
No default state advancement.

---

## VISIBILITY REQUIREMENTS
Before approval, the reviewer must see:
- Inputs involved
- Invariants affected
- Classification confidence
- Potential downstream impact

---

## HARD RESTRICTIONS
- No auto-approval
- No implicit consent
- No execution from this layer
- No bypass paths

---

## PASS CRITERIA
This gate passes if:
- All authority transitions are explicit
- No action occurs without approval
- Every decision can be written to the ledger
