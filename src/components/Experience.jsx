const experiences = [
  {
    role: "Assistant International CISO",
    company: "Crédit Agricole Assurances Solutions",
    location: "Paris, France",
    date: "Sep 2023 – 2026",
    desc: "3-year apprenticeship managing cybersecurity risk at international scale. Risk analyses, phishing campaigns, security training across France and abroad, coordination with IT security officers across multiple countries.",
    tags: ["ISO 27001", "EBIOS RM", "Risk Management", "Governance"],
    highlight: false,
  },
  {
    role: "Research Intern – ML & Remote Sensing",
    company: "Chung Yuan Christian University (CYCU)",
    location: "Taoyuan, Taiwan",
    date: "May – Jul 2026",
    desc: "Processed and organized large-scale satellite data (TROPOMI, MODIS) to support air pollutant analysis. Applied machine learning models to downscale satellite observations and establish a high-resolution emission inventory for Taiwan.",
    tags: ["Python", "Machine Learning", "Remote Sensing", "Big Data"],
    highlight: true,
  },
  {
    role: "IT & Network Support Intern",
    company: "DOMINO Interim",
    location: "Lyon, France",
    date: "May – Jul 2023",
    desc: "IT support, user account creation and access rights provisioning. Applied system and network administration knowledge in a professional environment.",
    tags: ["IT Support", "Linux", "Network", "Access Management"],
    highlight: false,
  },
];

function Experience() {
  return (
    <section id="experience">
      <p className="section-tag">// 05 — experience</p>
      <h2 className="section-title">Work <span>History</span></h2>

      <div style={{ position: "relative", paddingLeft: "2rem" }}>
        <div style={{
          position: "absolute",
          left: 0, top: 0, bottom: 0,
          width: "1px",
          background: "rgba(255,255,255,0.08)",
        }} />

        {experiences.map(({ role, company, location, date, desc, tags, highlight }) => (
          <div key={role} style={{
            position: "relative",
            paddingBottom: "3rem",
            paddingLeft: "2rem",
          }}>
            {/* dot on timeline */}
            <div style={{
              position: "absolute",
              left: "-2.35rem",
              top: "0.4rem",
              width: "10px", height: "10px",
              borderRadius: "50%",
              background: highlight ? "var(--accent)" : "#333333",
              border: `2px solid ${highlight ? "var(--accent)" : "rgba(255,255,255,0.2)"}`,
              boxShadow: highlight ? "0 0 12px rgba(120,47,64,0.6)" : "none",
            }} />

            <div style={{
              background: highlight ? "#160d0f" : "#111111",
              border: `1px solid ${highlight ? "rgba(120,47,64,0.5)" : "rgba(255,255,255,0.07)"}`,
              borderLeft: `3px solid ${highlight ? "var(--accent)" : "rgba(255,255,255,0.15)"}`,
              padding: "1.5rem",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <h3 style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: highlight ? "#ffffff" : "#e0e0e0",
                }}>{role}</h3>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: highlight ? "var(--accent)" : "#888888",
                  border: `1px solid ${highlight ? "rgba(120,47,64,0.4)" : "rgba(255,255,255,0.1)"}`,
                  padding: "0.2rem 0.6rem",
                  whiteSpace: "nowrap",
                }}>{date}</span>
              </div>

              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: highlight ? "#c97a8a" : "#888888",
                marginBottom: "1rem",
              }}>{company} · {location}</p>

              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                color: "#a0a0a0",
                lineHeight: 1.8,
                marginBottom: "1rem",
              }}>{desc}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    padding: "0.25rem 0.5rem",
                    background: highlight ? "rgba(120,47,64,0.15)" : "#1e1e1e",
                    border: `1px solid ${highlight ? "rgba(120,47,64,0.4)" : "rgba(255,255,255,0.1)"}`,
                    color: highlight ? "#e8899a" : "#c0c0c0",
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;