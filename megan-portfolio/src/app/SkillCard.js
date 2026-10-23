"use client";

import Image from "next/image";
import { useState } from "react";

export default function SkillCard({ skill }) {
  const [flipped, setFlipped] = useState(false);
  const tools = skill.tools || [];
  const listId = `${skill.slug}-tools`;

  return (
    <div className={"skill-card" + (flipped ? " flipped" : "")}>
      <button
        className="flip"
        type="button"
        aria-pressed={flipped}
        aria-controls={tools.length ? listId : undefined}
        aria-label={`${skill.n} card. Flip to see the tools I use.`}
        onClick={() => setFlipped((f) => !f)}
      >
        <span className="inner">
          <span className="face pc art">
            <Image
              src={`/cards/${skill.img}.png`}
              alt=""
              width={1000}
              height={1400}
              sizes="260px"
              priority
            />
          </span>
          <span className="face pc art back">
            <Image
              src={`/cards/${skill.img}_back.png`}
              alt=""
              width={1000}
              height={1400}
              sizes="260px"
            />
          </span>
        </span>
      </button>
      {tools.length ? (
        <div className={"tools" + ` ${skill.n}`} id={listId}>
          <p className="tools-h">My toolbox:</p>
          <ul>
            {tools.map((tool, i) => <li key={i}>{tool}</li>)}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
