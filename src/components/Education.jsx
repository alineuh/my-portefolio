 const education = [
  {
    school: "ESILV – Léonard de Vinci Engineering School",
    location: "Paris, France",
    degree: "Engineering Degree – Blockchain Specialization",
    date: "2023 – 2026",
    desc: "Blockchain: DeFi, Zero Knowledge Proof, Proof of Work/Stake, smart contracts, applied cryptography. Projects: Big Data cost calculator, ML price prediction, CGI Hackathon.",
    tags: ["Blockchain", "Solidity", "Python", "ML", "Cryptography"],
    highlight: true,
  },
  {
    school: "National Tsing Hua University (NTHU)",
    location: "Hsinchu, Taiwan",
    degree: "Exchange Semester – L3 Computer Science",
    date: "Sep 2022 – Jan 2023",
    desc: "2nd ranked university in Taiwan. Network Security, Advanced Databases, Discrete Mathematics, Mandarin Chinese.",
    tags: ["Network Security", "Databases", "Mandarin"],
    highlight: false,
  },
  {
    school: "Université Claude Bernard Lyon 1",
    location: "Lyon, France",
    degree: "Bachelor's Degree in Computer Science – Honours",
    date: "2019 – 2023",
    desc: "L1 double major Mathematics & Computer Science. Key project: Tower Defense game in C++, web application development.",
    tags: ["C++", "Mathematics", "Web"],
    highlight: false,
  },
];

function Education() {
  return (
    <section id="education">
      <p className="section-tag">// 02 — education</p>
      <h2 className="section-title">Academic <span>Background</span></h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {education.map(({ school, location, degree, date, desc, tags, highlight }) => (
          <div key={school} style={{
            background: highlight ? "#160d0f" : "#111111",
            border: `1px solid ${highlight ? "rgba(120,47,64,0.5)" : "rgba(255,255,255,0.07)"}`,
            borderLeft: `3px solid ${highlight ? "var(--accent)" : "rgba(255,255,255,0.15)"}`,
            padding: "1.5rem",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateX(6px)";
            e.currentTarget.style.boxShadow = highlight
              ? "0 4px 24px rgba(120,47,64,0.2)"
              : "0 4px 16px rgba(255,255,255,0.03)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateX(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.4rem" }}>
              <h3 style={{
                fontSize: "1rem",
                fontWeight: "600",
                color: highlight ? "#ffffff" : "#e0e0e0",
              }}>{school}</h3>
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
              marginBottom: "0.75rem",
            }}>{degree} · {location}</p>

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
        ))}
      </div>
    </section>
  );
}

export default Education;