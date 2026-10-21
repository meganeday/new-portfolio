import Image from "next/image";
import Link from "next/link";
import { skills } from "../data/skills";

export default function SkillHand() {
  return (
    <ul className="hand">
      {skills.map((k) => (
        <li className="slot" key={k.n}>
          <Link
            className="card-link"
            href={`/skills/${k.slug}`}
            aria-label={`${k.n}: view projects`}
          >
            <span className="face pc art">
              <Image
                src={`/cards/${k.img}.png`}
                alt=""
                width={1000}
                height={1400}
                sizes="(max-width: 900px) 50vw, 280px"
              />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
