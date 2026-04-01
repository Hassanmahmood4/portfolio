/**
 * Safari / WebKit (macOS + iOS) often breaks GSAP ScrollSmoother; use native scroll instead.
 * Excludes Chrome, Edge, Firefox, and embedded WebViews that identify as Chrome/CriOS.
 */
export function isLikelySafari(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  if (/CriOS|FxiOS|EdgiOS|OPiOS|DuckDuckGo/i.test(ua)) return false;
  if (/iPhone|iPad|iPod/i.test(ua)) return true;
  const iPadAsMac =
    navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  if (iPadAsMac) return true;
  const isWebKitSafari =
    /Safari/i.test(ua) &&
    !/Chrome|Chromium|Edg|OPR|Firefox/i.test(ua);
  return isWebKitSafari;
}

export function needsNativeScrollFallback(): boolean {
  return isLikelySafari();
}
