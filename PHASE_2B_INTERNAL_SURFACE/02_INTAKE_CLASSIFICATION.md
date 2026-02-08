# INTAKE & CLASSIFICATION — PHASE 2B

## PURPOSE
Define how raw external inputs are ingested, normalized, and mapped
to schema-defined invariants.

This layer translates data into structure.
No decisions are made here.

---

## RAW INPUT SOURCES
Examples (environment-dependent):
- Market variance streams
- Volume and liquidity metrics
- Event feeds (halts, outages, forks)
- Correlation shifts
- Availability signals

Inputs are accepted as-is.
No filtering for desirability.

---

## NORMALIZATION
All inputs are normalized to:
- Time-aligned windows
- Comparable scales
- Known units

Missing or degraded data is explicitly marked.
No silent interpolation.

---

## CLASSIFICATION PIPELINE

### Step 1: Signal Identification
Each input is tagged as:
- Behavioral
- Structural
- Environmental

### Step 2: Invariant Mapping
Each signal must map to one or more invariants.
If no mapping exists:
- Classification = Unresolved
- Confidence = Low

### Step 3: Confidence Scoring
Every classification includes:
- Confidence level (High / Medium / Low)
- Reason for confidence assignment

---

## FAILURE MODES (EXPLICIT)
- Unknown source → Marked Unknown
- Conflicting signals → Flagged Conflict
- Insufficient data → Classification Deferred

No failure mode blocks ingestion.

---

## OUTPUT
Classification output includes:
- Signal ID
- Source
- Invariant(s) affected
- Status
- Confidence
- Timestamp

Output is read-only for downstream layers.

---

## HARD RESTRICTIONS
- No execution
- No recommendations
- No state mutation
- No authority elevation

---

## PASS CRITERIA
This layer passes if:
- Every input is either classified or explicitly unresolved
- No data is silently discarded
- Confidence is always visible
