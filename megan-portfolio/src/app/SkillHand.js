"use client";
 
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { skills } from "../data/skills";
 
export default function SkillHand() {
  const [flipped, setFlipped] = useState({});
  const toggle = (name) => setFlipped((f) => ({ ...f, [name]: !f[name] }));
 
  return (
    <ul className="hand">
      {skills.map((k) => (
        <li className="slot" key={k.n}>
          <button
            className="flip"
            type="button"
            aria-pressed={!!flipped[k.n]}
            aria-label={`${k.n} card. Flip to read more.`}
            onClick={() => toggle(k.n)}
          >
            <span className="inner">
              <span className="face pc art">
                <Image
                  src={`/cards/${k.img}.png`}
                  alt=""
                  width={1000}
                  height={1400}
                  sizes="(max-width: 900px) 50vw, 280px"
                />
              </span>
              <span className="face pc back">
                <h3>{k.n}</h3>
                <p>{k.t}</p>
              </span>
            </span>
          </button>
          <Link className="skill-link" href={`/skills/${k.slug}`}>View projects</Link>
        </li>
      ))}
    </ul>
  );
}