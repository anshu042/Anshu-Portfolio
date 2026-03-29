/**
 * Convert a hex color string to an "r,g,b" string.
 * @param {string} hex - e.g. "#3b82f6"
 * @returns {string} - e.g. "59,130,246"
 */
export function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
