import { accessDomains, exceptionQueue, identitySignals, principles, remediationTracks } from "./data";

const toneClassMap = {
  secure: "signal-card signal-card--secure",
  watch: "signal-card signal-card--watch",
  critical: "signal-card signal-card--critical"
} as const;

const postureClassMap = {
  stable: "posture-pill posture-pill--stable",
  watch: "posture-pill posture-pill--watch",
  critical: "posture-pill posture-pill--critical"
} as const;

function App() {
  return (
    <main className="command-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Identity Command Center</p>
          <h1>Access posture, policy exceptions, and remediation pressure in one control-plane workspace.</h1>
          <p className="hero-text">
            A recruiter-ready frontend project that treats identity governance like a real internal operating surface. Instead of static audit
            tables, it gives operators and leadership one place to see exception pressure, privilege risk, and what needs to move next.
          </p>
          <div className="hero-actions">
            <a href="#domain-map" className="action-chip">
              Review access domains
            </a>
            <a href="#exception-queue" className="action-chip action-chip--alt">
              Open exception queue
            </a>
          </div>
        </div>
        <div className="signal-grid" aria-label="Identity security signals">
          {identitySignals.map((signal) => (
            <article key={signal.id} className={toneClassMap[signal.tone]}>
              <span>{signal.label}</span>
              <strong>{signal.value}</strong>
              <p>{signal.context}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="main-grid">
        <section className="panel panel--wide" id="domain-map">
          <div className="section-heading">
            <p className="eyebrow">Access domains</p>
            <h2>Where privileged posture is healthy, drifting, or already exposing the business.</h2>
          </div>
          <div className="domain-list">
            {accessDomains.map((domain) => (
              <article key={domain.id} className="domain-card">
                <div className="domain-card__top">
                  <div>
                    <h3>{domain.name}</h3>
                    <p>{domain.owner}</p>
                  </div>
                  <span className={postureClassMap[domain.posture]}>{domain.posture}</span>
                </div>
                <p className="domain-card__summary">{domain.summary}</p>
                <div className="domain-card__metric">{domain.metric}</div>
              </article>
            ))}
          </div>
        </section>

        <aside className="panel" id="exception-queue">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">Exception queue</p>
            <h2>The policy exceptions and ownership gaps that need attention now.</h2>
          </div>
          <div className="exception-list">
            {exceptionQueue.map((item) => (
              <article key={item.title} className="exception-card">
                <div className="exception-card__meta">
                  <span>{item.owner}</span>
                  <span>{item.urgency}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="secondary-grid">
        <section className="panel">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">Remediation tracks</p>
            <h2>How risk becomes action instead of just another audit note.</h2>
          </div>
          <div className="remediation-list">
            {remediationTracks.map((track) => (
              <article key={track.title} className="remediation-card">
                <div className="remediation-card__top">
                  <h3>{track.title}</h3>
                  <span>{track.status}</span>
                </div>
                <p>{track.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">What this proves</p>
            <h2>Security tooling can look like a real product.</h2>
          </div>
          <div className="principle-list">
            {principles.map((principle) => (
              <article key={principle.title} className="principle-card">
                <p>{principle.artifact}</p>
                <h3>{principle.title}</h3>
                <span>{principle.summary}</span>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
