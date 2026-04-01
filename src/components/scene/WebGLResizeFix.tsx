import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";

/**
 * Syncs WebGL drawing buffer to the R3F root div on mount and on resize.
 * Prevents a 0×0 first layout where 3D only appears after DevTools/reflow.
 */
export function WebGLResizeFix() {
  const { gl, setSize, invalidate } = useThree();

  useLayoutEffect(() => {
    const root = gl.domElement.parentElement;
    if (!root) return;

    const sync = () => {
      const w = root.clientWidth;
      const h = root.clientHeight;
      if (w <= 0 || h <= 0) return;
      setSize(w, h);
      invalidate();
    };

    sync();
    const raf1 = requestAnimationFrame(sync);
    const raf2 = requestAnimationFrame(() => requestAnimationFrame(sync));
    const t1 = window.setTimeout(sync, 0);
    const t2 = window.setTimeout(sync, 100);

    const ro = new ResizeObserver(sync);
    ro.observe(root);
    window.addEventListener("resize", sync);

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      ro.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, [gl, setSize, invalidate]);

  return null;
}
