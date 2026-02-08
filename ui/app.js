/**
 * OBISTAR UI App Wire
 * Read-only. Doctrine-compliant.
 * No state mutation. No side effects.
 */

import { describeSystemState } from "../runtime/runtime.js";

export function renderApp(stateSnapshot) {
  const state = describeSystemState(stateSnapshot);

  const root = document.getElementById("app");
  root.innerHTML = `
    <div class="card">
      <h2>System State</h2>
      <p><strong>Phase:</strong> ${state.phase}</p>
      <p><strong>Stage:</strong> ${state.stage}</p>
    </div>
  `;
}
