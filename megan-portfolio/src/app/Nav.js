"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { skills } from "../data/skills";

const links = [
  { href: "/", label: "Home" },
  { href: "/#hand-h", label: "My skillset" },
  { href: "/#about", label: "About me" },
  { href: "/#touch", label: "Say hi" },
];

// A hamburger button that slides a menu in from the right.
// The menu is inert while closed so it can't be tabbed into.
export default function Nav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector("a")?.focus();
    document.body.classList.add("nav-open");

    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("nav-open");
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        ref={buttonRef}
        className={"burger" + (open ? " open" : "")}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen(!open)}
      >
        <span className="pin-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <div className={"nav-scrim" + (open ? " open" : "")} onClick={close} aria-hidden="true"></div>

      <nav
        id="site-menu"
        ref={menuRef}
        className={"nav-menu" + (open ? " open" : "")}
        aria-label="Site"
        inert={!open}
      >
        <ul className="nav-main">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={close}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <span className="script nav-label">the skills</span>
        <ul className="nav-skills">
          {skills.map((s) => (
            <li key={s.slug}>
              <Link href={`/skills/${s.slug}`} onClick={close}>{s.n}</Link>
            </li>
          ))}
        </ul>
        <a className="btn tag nav-resume" href="/Hubbert_Megan_Resume.pdf" target="_blank" rel="noopener" onClick={close}>
          View my resume
        </a>
      </nav>
    </>
  );
}
