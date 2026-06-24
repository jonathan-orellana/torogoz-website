const ANIMATION_DURATION_MAX = 1600;
const ANIMATION_DURATION_BASE = 700;
const ANIMATION_DURATION_SCALE = 0.35;

function formatCountValue(value, { hasComma, hasLeadingZero, padLength, prefix, suffix }) {
  let formatted = hasComma ? value.toLocaleString() : String(value);
  if (hasLeadingZero) formatted = String(value).padStart(padLength, '0');
  return prefix + formatted + suffix;
}

function easeOutCubic(progress) {
  return 1 - Math.pow(1 - progress, 3);
}

export function animateCountUp(element) {
  const raw = element.getAttribute('data-countup') || element.textContent.trim();
  element.setAttribute('data-countup', raw);

  const match = raw.match(/^(\D*)(\d[\d,]*)(.*)$/);
  if (!match) return; // No numeric part (e.g. "UVA") — leave as-is

  const [, prefix, numericString, suffix] = match;
  const hasComma = numericString.includes(',');
  const digits = numericString.replace(/,/g, '');
  const target = parseInt(digits, 10);
  const format = {
    hasComma,
    hasLeadingZero: digits.charAt(0) === '0',
    padLength: digits.length,
    prefix,
    suffix,
  };

  const duration = Math.min(
    ANIMATION_DURATION_MAX,
    ANIMATION_DURATION_BASE + target * ANIMATION_DURATION_SCALE
  );

  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;

    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);

    element.textContent = formatCountValue(Math.round(easedProgress * target), format);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = formatCountValue(target, format);
    }
  }

  element.textContent = formatCountValue(0, format);
  requestAnimationFrame(step);
}
