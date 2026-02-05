# OBISTAR — CHECKPOINT 07

## Diagnostic Card Render Skeleton

This checkpoint defines how a diagnostic card is rendered
for human observation.

### Render Mode
- Static
- Read-only
- Deterministic
- Time-aware

### Card Layout

----------------------------------
| ENVIRONMENT STATE               |
| Classification: <label>         |
| Stability: <stable/transitional/unstable> |
----------------------------------
| META-METRICS (TIME SERIES)      |
| PRUC:        ↑ / → / ↓          |
| Constraint:  ↑ / → / ↓          |
| Variance:    ↑ / → / ↓          |
| Recovery:    ↑ / → / ↓          |
----------------------------------
| INTERPRETIVE NOTES              |
| What is strengthening           |
| What is degrading               |
| What remains neutral            |
----------------------------------
| AUTHORITY BOUNDARY              |
| No recommendation               |
| No action                       |
| Human decides                   |
----------------------------------

### Rendering Rules
- No color implies neutrality
- Motion implies attention
- Flat implies patience
- Down implies observation, not alarm

### Interaction
- Expand to view history
- Collapse to view state
- No controls
- No buttons

Status: ACTIVE  
Render: ENABLED  
Execution: TERMINATED  
