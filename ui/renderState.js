/**
 * OBISTAR UI — Read-only State Renderer
 * Doctrine-compliant: no mutation, no side effects
 */

export function renderState(state) {
  const pre = document.getElementById("state");
  pre.textContent = JSON.stringify(state, null, 2);
}
