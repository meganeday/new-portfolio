import Drawer from "./Drawer";
import MediaGallery from "./MediaGallery";

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
            {(p.details || []).map((d, i) => <p key={i}>{d}</p>)}
            {p.link ? (
              <a className="btn" href={p.link} target="_blank" rel="noopener noreferrer">
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
                    <h4>Built with</h4>
                    <ul className="case-tools">
                      {tools.map((t, i) => <li key={i}>{t}</li>)}
                    </ul>
                  </div>
                ) : null}
              </div>
            </aside>
          ) : null}
        </div>

        {media.length ? <MediaGallery media={media} /> : null}
      </div>
    </Drawer>
  );
}
