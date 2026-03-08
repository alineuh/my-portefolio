function About() {
  return (
    <section id="about me">
      <p className="section-tag">// 01 — about</p>
      <h2 className="section-title">About <span>me</span></h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "#a0a0a0", lineHeight: 2 }}>
          <p style={{ marginBottom: "1.5rem" }}>
            I'm an engineering student graduating in <span style={{ color: "var(--accent)" }}>2026</span> from ESILV, specializing in <span style={{ color: "var(--accent)" }}>Blockchain</span> and Cybersecurity.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            For 3 years, I worked as <span style={{ color: "var(--accent)" }}>Assistant International CISO</span> at Crédit Agricole Assurances, managing cybersecurity risk globally.
          </p>
          <p>
            Active member of <span style={{ color: "var(--accent)" }}>Kryptosphere / Devinci Blockchain</span> and regular hackathon participant (SUI, ETHGlobal).
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { label: "Location", value: "Paris, France" },
            { label: "Degree", value: null, custom: <span>Computer Science Bachelor, 2023<br/>Engineering – Blockchain, 2026</span> },
            { label: "Languages", value: "French · English · Chinese A2" },
            { label: "GitHub", value: "github.com/alineuh", link: "https://github.com/alineuh" },
            { label: "Chess", value: "🏆 8th in France, 2017" },
          ].map(({ label, value, link, custom }) => (
            <div key={label} style={{
              display: "flex",
              gap: "1.5rem",
              padding: "0.9rem 1.2rem",
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.07)",
              borderLeft: "2px solid var(--accent)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
            }}>
              <span style={{ color: "#e0e0e0", minWidth: "80px", fontWeight: "bold" }}>{label}</span>
              {link
                ? <a href={link} target="_blank" rel="noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>{value}</a>
                : <span style={{ color: "#a0a0a0" }}>{custom || value}</span>
              }
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;