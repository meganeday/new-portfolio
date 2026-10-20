"use client";

export default function SmoothScrollLink({ href, className, children }) {
  function handleClick(event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !href.startsWith("#")
    ) {
      return;
    }

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, "", href);

    const scrollPadding =
      parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    const startPosition = window.scrollY;
    const destination =
      startPosition + target.getBoundingClientRect().top - scrollPadding;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: destination, behavior: "instant" });
      target.focus({ preventScroll: true });
      return;
    }

    const startTime = performance.now();
    const duration = 1400;

    function animateScroll(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress =
        progress < 0.5
          ? 4 * progress ** 3
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo({
        top: startPosition + (destination - startPosition) * easedProgress,
        behavior: "instant",
      });

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        target.focus({ preventScroll: true });
      }
    }

    requestAnimationFrame(animateScroll);
  }

  return (
    <a className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}