import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { skills } from "../../../data/skills";
import CaseStudy from "../../CaseStudy";
import Gallery from "../../Gallery";
import SkillCard from "../../SkillCard";
import ZoomImage from "../../ZoomImage";
 
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
  const isCaseStudy = skill.layout === "case-study";
 
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
          <SkillCard skill={skill} />
        </div>
      </header>
      <div className="scallop" aria-hidden="true"></div>
 
      {isGallery ? (
        <section>
          <div className="wrap">
            <Gallery photos={skill.photos} />
          </div>
        </section>
      ) : isCaseStudy ? (
        <section>
          <div className="wrap">
            <div className="intro">
              <h2>Projects</h2>
            </div>
            <div className="case-list">
              {skill.projects.map((p, idx) => <CaseStudy p={p} key={idx} />)}
            </div>
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
                    {p.video ? (
                      <div className="proj-video">
                        <iframe
                          src={p.video}
                          title={p.title}
                          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    ) : p.image && skill.zoomImages ? (
                      <ZoomImage src={p.image} alt={p.imageAlt} sizes="(max-width: 900px) 90vw, 440px" />
                    ) : p.image ? (
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
                    {p.points?.length ? (
                      <ul className="proj-points">
                        {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                      </ul>
                    ) : null}
                    {p.link ? (
                      <a className="btn tag" href={p.link} target="_blank" rel="noopener noreferrer">
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
          <div className="btns btns__skills">
            <Link className="btn tag btn-arrow" href={`/skills/${prev.slug}`} aria-label={`Previous card: ${prev.n}`}>
              <Image src="/icons/left.png" alt="" width={60} height={60} />
              {prev.n}
            </Link>
            <Link className="btn tag alt btn-arrow" href={`/skills/${next.slug}`} aria-label={`Next card: ${next.n}`}>
              {next.n}
              <Image src="/icons/right.png" alt="" width={60} height={60} />
            </Link>
          </div>
        </div>
      </section>

      <div className="awning t" aria-hidden="true"></div>
      <footer>
        <Link className="foot-link" href="/#touch">get in touch</Link>
        made with love in Champaign, Illinois
      </footer>
    </>
  );
}