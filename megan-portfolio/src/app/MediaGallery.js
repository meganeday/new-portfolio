"use client";

import Image from "next/image";
import { useRef, useState } from "react";

// A featured file with arrows, a strip of thumbnails below it, and a modal
// viewer with the caption. Items are image, video, or embed (see skills.js).

const label = (m) => m.alt || m.caption || (m.type === "image" ? "Image" : "Video");

// Images never grow past this multiple of their real pixel size,
// so small screenshots stay sharp instead of stretching to fill the space.
const MAX_ZOOM = 1.5;

// Caps an image's size at MAX_ZOOM, on top of any other limit (like "90vw").
const capped = (m, maxW, maxH) => {
  const w = (m.width || 1200) * MAX_ZOOM;
  const h = (m.height || 900) * MAX_ZOOM;
  return {
    width: "auto",
    height: "auto",
    maxWidth: `min(${maxW}, ${w}px)`,
    maxHeight: `min(${maxH}, ${h}px)`,
  };
};

// The small or featured preview. Videos and embeds only play in the modal.
function Preview({ m, sizes, featured }) {
  if (!m.src) {
    return <span className="ph">[add {m.type === "image" ? "an image" : "a video"}]</span>;
  }
  if (m.type === "video") {
    return (
      <>
        <video src={`${m.src}#t=0.1`} poster={m.poster || undefined} muted playsInline preload="metadata" />
        <span className="play-badge" />
      </>
    );
  }
  if (m.type === "embed") {
    return (
      <span className="mg-embed-tile">
        <span className="play-badge" />
      </span>
    );
  }
  if (featured) {
    return (
      <Image
        src={m.src}
        alt=""
        width={m.width || 1200}
        height={m.height || 900}
        sizes={sizes}
        style={capped(m, "100%", "100%")}
      />
    );
  }
  return <Image src={m.src} alt="" fill sizes={sizes} />;
}

// The full-size version shown in the modal.
function Full({ m }) {
  if (m.type === "video") {
    return (
      <video
        key={m.src}
        src={m.src}
        poster={m.poster || undefined}
        controls
        autoPlay
        playsInline
        aria-label={label(m)}
      />
    );
  }
  if (m.type === "embed") {
    return (
      <div className="lb-embed">
        <iframe
          key={m.src}
          src={m.src}
          title={label(m)}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <Image
      key={m.src}
      src={m.src}
      alt={m.alt}
      width={m.width || 1200}
      height={m.height || 900}
      sizes="90vw"
      style={capped(m, "calc(90vw - var(--lb-room))", "72vh")}
    />
  );
}

export default function MediaGallery({ media }) {
  const [active, setActive] = useState(0);
  const [viewing, setViewing] = useState(false);
  const dialogRef = useRef(null);
  const stripRef = useRef(null);
  const total = media.length;
  const current = media[active];

  const show = (i) => {
    const next = (i + total) % total;
    setActive(next);
    // keep the active thumbnail in view without scrolling the page
    const strip = stripRef.current;
    const thumb = strip?.children[next];
    if (strip && thumb) {
      strip.scrollTo({
        left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };
  const step = (d) => show(active + d);

  const open = () => {
    if (!current.src) return;
    setViewing(true);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  // unmount the file (stopping any video) only once the closing animation ends
  const onClose = () => {
    const dialog = dialogRef.current;
    const animations = dialog.getAnimations({ subtree: true }).map((a) => a.finished);
    Promise.allSettled(animations).then(() => {
      if (!dialog.open) setViewing(false);
    });
  };

  const onKeyDown = (e) => {
    // let a playing video keep its own arrow-key seeking
    if (e.target.tagName === "VIDEO") return;
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  };

  const counter = `${active + 1} of ${total}`;

  return (
    <div className="mg">
      <div className="mg-stage">
        {total > 1 ? (
          <button type="button" className="mg-arrow prev" onClick={() => step(-1)} aria-label="Previous file">
            <Image src="/icons/left.png" alt="" width={60} height={60} />
          </button>
        ) : null}

        <button
          type="button"
          className={"mg-feature" + (current.type === "image" ? "" : " is-video")}
          onClick={open}
          aria-label={`${current.type === "image" ? "View larger" : "Play video"}: ${label(current)}`}
        >
          <span className="mg-frame">
            <Preview m={current} sizes="(max-width: 900px) 90vw, 900px" featured />
          </span>
        </button>

        {total > 1 ? (
          <button type="button" className="mg-arrow next" onClick={() => step(1)} aria-label="Next file">
            <Image src="/icons/right.png" alt="" width={60} height={60} />
          </button>
        ) : null}
      </div>

      {total > 1 ? (
        <>
          <p className="mg-count" aria-live="polite">{counter}</p>
          <div className="mg-strip" ref={stripRef}>
            {media.map((m, i) => (
              <button
                type="button"
                className="mg-thumb"
                key={i}
                onClick={() => show(i)}
                aria-current={i === active}
                aria-label={`Show file ${i + 1}: ${label(m)}`}
              >
                <Preview m={m} sizes="80px" />
              </button>
            ))}
          </div>
        </>
      ) : null}

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Project media viewer"
        onClose={onClose}
        onKeyDown={onKeyDown}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <button type="button" className="lb-close" onClick={close} aria-label="Close"></button>
        {viewing ? (
          <div className="lb-inner">
            <div className={"lb-stage" + (total > 1 ? " has-arrows" : "")}>
              {total > 1 ? (
                <button type="button" className="btn lb-arrow prev" onClick={() => step(-1)} aria-label="Previous">
                  <Image src="/icons/left.png" alt="" width={60} height={60} />
                </button>
              ) : null}
              <Full m={current} />
              {total > 1 ? (
                <button type="button" className="btn alt lb-arrow next" onClick={() => step(1)} aria-label="Next">
                  <Image src="/icons/right.png" alt="" width={60} height={60} />
                </button>
              ) : null}
            </div>
            {current.caption ? <p className="lb-cap">{current.caption}</p> : null}
            {total > 1 ? <span className="lb-count">{counter}</span> : null}
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
