"use client";

import Image from "next/image";
import { useRef } from "react";

// A project image that opens larger in the same lightbox the photo gallery uses.
export default function ZoomImage({ src, alt, width = 1200, height = 900, sizes }) {
  const dialogRef = useRef(null);
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        className="zoom"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`View larger: ${alt}`}
      >
        <Image src={src} alt="" width={width} height={height} sizes={sizes} />
      </button>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Image viewer"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="lb-inner">
          <button type="button" className="lb-close" onClick={close} aria-label="Close"></button>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="90vw"
            style={{ width: "auto", height: "auto", maxWidth: "90vw", maxHeight: "82vh" }}
          />
        </div>
      </dialog>
    </>
  );
}
