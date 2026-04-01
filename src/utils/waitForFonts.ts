/** Ensures SplitText/GSAP measure after webfonts (Geist, etc.) — avoids Safari warnings and bad splits. */
export function waitForFonts(): Promise<void> {
  if (typeof document === "undefined") {
    return Promise.resolve();
  }
  try {
    const ready = document.fonts?.ready;
    if (ready) {
      return ready.then(
        () => undefined,
        () => new Promise((r) => setTimeout(r, 200))
      );
    }
  } catch {
    /* document.fonts unsupported */
  }
  return new Promise((r) => setTimeout(r, 200));
}
