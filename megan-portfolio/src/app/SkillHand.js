
"use client";
 
import Image from "next/image";
import { useState } from "react";
 
const skills = [
  { n: "Writing", img: "writing", t: "Feature articles, web stories, and newsletters that explain complex work in plain language.", x: ["[Article title and link]", "[Newsletter issue and link]"] },
  { n: "Graphic design", img: "graphic_design", t: "Layouts, social graphics, and print pieces that stay on brand.", x: ["[Design sample link]", "[Tools you used]"] },
  { n: "Photography", img: "photography", t: "Event, portrait, and documentary photography that supports the story.", x: ["[Gallery link]", "[Where it was published]"] },
  { n: "Video production", img: "video", t: "Short-form and event video, from shooting to final edit.", x: ["[Video link]", "[Where it ran]"] },
  { n: "Social media", img: "social", t: "Captions, graphics, and short video across platforms, plus the campaigns that tie them together.", x: ["[Post or campaign link]", "[Engagement result]"] },
  { n: "Web development", img: "web", t: "Writing, structuring, and building web pages, with a frontend developer’s eye for how they’re made.", x: ["[Page or site link]", "[Before and after]"] },
];
 
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
                <ul className="samples">
                  {k.x.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}