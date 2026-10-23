"use client";

import { useRef } from "react";

const DURATION = 380;
const EASING = "cubic-bezier(0.3, 0.7, 0.2, 1)";

// A <details> dropdown that slides open and closed instead of snapping.
// The browser still handles everything else (keyboard, screen readers, find-in-page).
export default function Drawer({ className, summary, children }) {
  const detailsRef = useRef(null);
  const drawerRef = useRef(null);
  const anim = useRef(null);
  const closing = useRef(false);

  const onClick = (e) => {
    const details = detailsRef.current;
    const drawer = drawerRef.current;
    if (!details || !drawer) return;
    // with reduced motion, let the browser open and close it instantly
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    e.preventDefault();
    // start from wherever it is now, so a click mid-slide reverses smoothly.
    // A closed drawer still reports its full height, so count it as 0.
    const start = details.open ? drawer.offsetHeight : 0;
    anim.current?.cancel();
    drawer.style.overflow = "hidden";

    const opening = !details.open || closing.current;
    closing.current = !opening;
    details.classList.toggle("closing", !opening);
    details.open = true;
    const end = opening ? drawer.scrollHeight : 0;

    anim.current = drawer.animate(
      [
        { height: `${start}px`, opacity: opening ? start / end || 0 : 1 },
        { height: `${end}px`, opacity: opening ? 1 : 0 },
      ],
      { duration: DURATION, easing: EASING }
    );
    anim.current.onfinish = () => {
      anim.current = null;
      drawer.style.overflow = "";
      if (!opening) {
        details.open = false;
        details.classList.remove("closing");
        closing.current = false;
      }
    };
  };

  return (
    <details className={className} ref={detailsRef}>
      <summary className="case-sum" onClick={onClick}>
        {summary}
      </summary>
      <div className="case-drawer" ref={drawerRef}>
        {children}
      </div>
    </details>
  );
}
