import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { skills } from "../../../data/skills";
import Gallery from "../../Gallery";
 
export const instant = false;
 
export function generateStaticParams() {
  return skills.map((s) => ({ slug: s.slug }));
}
 
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const skill = skills.find((s) => s.slug === slug);
  if (!skill) return {};
  return {
    title: `${skill.n} | Megan Hubbert`,
    description: skill.t,
  };
}
 
export default async function SkillPage({ params }) {
  const { slug } = await params;
  const i = skills.findIndex((s) => s.slug === slug);
  if (i === -1) notFound();
 
  const skill = skills[i];
  const prev = skills[(i - 1 + skills.length) % skills.length];
  const next = skills[(i + 1) % skills.length];
  const isGallery = skill.layout === "gallery";
 
  return (
    <>
      <header className="hero skill-hero">
        <div className="wrap">
          <div>
            <Link className="crumb" href="/#hand-h">back to home</Link>
            <h1>{skill.n}</h1>
            <span className="tag script">{skill.tagline}</span>
            <p>{skill.t}</p>
          </div>
          <div className="skill-card pc art">
            <Image
              src={`/cards/${skill.img}.png`}
              alt={`${skill.n} playing card`}
              width={1000}
              height={1400}
              sizes="260px"
              priority
            />
          </div>
        </div>
      </header>
      <div className="scallop" aria-hidden="true"></div>
 
      {isGallery ? (
        <section>
          <div className="wrap">
            <Gallery photos={skill.photos} />
          </div>
        </section>
      ) : (
        <section>
          <div className="wrap">
            <div className="intro">
              <h2>Projects</h2>
            </div>
 
            <div className="proj-list">
              {skill.projects.map((p, idx) => (
                <article className="proj" key={idx}>
                  <div className="proj-media tape">
                    {p.image ? (
                      <Image src={p.image} alt={p.imageAlt} width={1200} height={900} sizes="(max-width: 900px) 90vw, 440px" />
                    ) : (
                      <div className="ph">[add a project image]</div>
                    )}
                  </div>
                  <div className="proj-body">
                    <p className="proj-meta">
                      <span className="chip">{p.role}</span> {p.year}
                    </p>
                    <h3>{p.title}</h3>
                    <p>{p.summary}</p>
                    <ul className="proj-points">
                      {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                    </ul>
                    {p.link ? (
                      <a className="btn" href={p.link} target="_blank" rel="noopener noreferrer">
                        {p.linkLabel}
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
 
      <section>
        <div className="wrap">
          <div className="btns">
            <Link className="btn" href={`/skills/${prev.slug}`}>Previous card: {prev.n}</Link>
            <Link className="btn alt" href={`/skills/${next.slug}`}>Next card: {next.n}</Link>
            <Link className="btn" href="/#touch">Get in touch!</Link>
          </div>
        </div>
      </section>
 
      <div className="awning t" aria-hidden="true"></div>
      <footer>made with love in Champaign, Illinois</footer>
    </>
  );
}