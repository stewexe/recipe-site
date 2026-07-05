/* Shared helpers */

// Turn a decimal amount into a friendly fraction string, e.g. 1.5 -> "1½"
function formatAmount(n) {
  if (n === null || n === undefined) return "";
  const whole = Math.floor(n);
  const frac = n - whole;
  const fractions = [
    [0.125, "⅛"], [0.25, "¼"], [0.333, "⅓"], [0.375, "⅜"],
    [0.5, "½"], [0.625, "⅝"], [0.667, "⅔"], [0.75, "¾"], [0.875, "⅞"],
  ];
  let closest = null;
  let closestDiff = 0.06; // tolerance
  for (const [val, sym] of fractions) {
    const diff = Math.abs(frac - val);
    if (diff < closestDiff) { closest = sym; closestDiff = diff; }
  }
  if (frac < 0.06) return String(whole || 0);
  if (closest) return whole > 0 ? `${whole}${closest}` : closest;
  // fall back to one decimal place
  return (Math.round(n * 4) / 4).toString();
}

function categoryColor(category) {
  return CATEGORY_COLORS[category] || "var(--ink-soft)";
}
