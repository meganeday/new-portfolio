import Drawer from "./Drawer";
import MediaGallery from "./MediaGallery";

// Embeds (like Instagram posts) shown side by side and playable in place,
// for projects with mediaLayout: "grid" instead of the gallery viewer.
function EmbedGrid({ media }) {
  return (
    <div className="embed-grid">
      {media.map((m, i) => (
        <div className="embed-cell" key={i} style={{ aspectRatio: m.ratio || "16 / 9" }}>
          <iframe
            src={m.src}
            title={m.alt}
            loading="lazy"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  );
}

// A details entry is either a plain paragraph (a string) or a labeled section:
// { heading, text, points }, where text and points are optional and each point
// is a string or { label, text } for a bolded lead-in.
function Detail({ d }) {
  if (typeof d === "string") return <p>{d}</p>;
  return (
    <section className="case-sec">
      <h4>{d.heading}</h4>
      {d.text ? <p>{d.text}</p> : null}
      {d.points ? (
        <ul>
          {d.points.map((pt, i) =>
            typeof pt === "string" ? (
              <li key={i}>{pt}</li>
            ) : (
              <li key={i}>
                <b>{pt.label}:</b> {pt.text}
              </li>
            )
          )}
        </ul>
      ) : null}
    </section>
  );
}

export default function CaseStudy({ p }) {
  const kpis = p.kpis || [];
  const tools = p.tools || [];
  const media = p.media || [];

  return (
    <Drawer
      className="case"
      summary={
        <>
          <span className="case-sum-text">
            <span className="proj-meta">
              <span className="chip">{p.role}</span> {p.year}
            </span>
            <h3>{p.title}</h3>
            {p.summary ? <span className="case-teaser">{p.summary}</span> : null}
          </span>
          <span className="case-toggle" aria-hidden="true"></span>
        </>
      }
    >

      <div className="case-body">
        <div className="case-grid">
          <div className="case-text">
            {(p.details || []).map((d, i) => <Detail d={d} key={i} />)}
            {p.link ? (
              <a className="btn tag" href={p.link} target="_blank" rel="noopener noreferrer">
                {p.linkLabel}
              </a>
            ) : null}
          </div>

          {kpis.length || tools.length ? (
            <aside className="case-side">
              <div className="receipt">
                {kpis.length ? (
                  <div>
                    <h4>By the numbers</h4>
                    <dl className="kpis">
                      {kpis.map((k, i) => (
                        <div className="kpi" key={i}>
                          <dt>{k.label}</dt>
                          <dd>{k.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ) : null}
                {tools.length ? (
                  <div>
                    <h4>{p.toolsLabel || "Built with"}</h4>
                    <ul className="case-tools">
                      {tools.map((t, i) => <li key={i}>{t}</li>)}
                    </ul>
                  </div>
                ) : null}
              </div>
            </aside>
          ) : null}
        </div>

        {!media.length ? null : p.mediaLayout === "grid" ? (
          <EmbedGrid media={media} />
        ) : (
          <MediaGallery media={media} />
        )}
      </div>
    </Drawer>
  );
}
