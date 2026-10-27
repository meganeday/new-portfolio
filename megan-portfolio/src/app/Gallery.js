"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Gallery({ photos }) {
  const [active, setActive] = useState(null);
  const dialogRef = useRef(null);

  const open = (i) => {
    setActive(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = (d) => setActive((i) => (i + d + photos.length) % photos.length);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  };

  if (!photos || photos.length === 0) {
    return (
      <div className="gallery">
        {[0, 1, 2].map((i) => (
          <div className={"shot" + (i === 0 ? " tape" : "")} key={i}>
            <div className="ph-photo">[add a photo in src/data/projects/photography.js]</div>
          </div>
        ))}
      </div>
    );
  }

  const current = active !== null ? photos[active] : null;

  return (
    <>
      <div className="gallery">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            className={"shot" + (i % 3 === 0 ? " tape" : "")}
            onClick={() => open(i)}
            aria-label={`View larger: ${p.alt}`}
          >
            <Image
              src={p.src}
              alt=""
              width={p.width || 1200}
              height={p.height || 800}
              sizes="(max-width: 700px) 90vw, (max-width: 1000px) 45vw, 330px"
              style={{ width: "100%", height: "auto" }}
            />
            {p.caption ? <span className="cap">{p.caption}</span> : null}
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Photo viewer"
        onKeyDown={onKeyDown}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <button type="button" className="lb-close" onClick={close} aria-label="Close"><span className="pin-icon" /></button>
        {/* the last photo stays rendered after closing so it can animate out */}
        {current ? (
          <div className="lb-inner">
            <div className="lb-stage has-arrows">
              <button type="button" className="mg-arrow lb-arrow prev" onClick={() => step(-1)} aria-label="Previous">
                <Image src="/icons/left.png" alt="" width={60} height={60} />
              </button>
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width || 1200}
                height={current.height || 800}
                sizes="90vw"
                style={{ width: "auto", height: "auto", maxWidth: "calc(90vw - var(--lb-room))", maxHeight: "75vh" }}
              />
              <button type="button" className="mg-arrow lb-arrow next" onClick={() => step(1)} aria-label="Next">
                <Image src="/icons/right.png" alt="" width={60} height={60} />
              </button>
            </div>
            {current.caption ? <p className="lb-cap">{current.caption}</p> : null}
            <span className="lb-count">{active + 1} of {photos.length}</span>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
