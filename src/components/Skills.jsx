const skills = [
  {
    category: "Programming",
    items: ["Python", "JavaScript", "C++", "TypeScript", "Rust", "Java", "C#", "Shell", "PHP", "R"],
    strong: ["Python", "JavaScript", "C++", "TypeScript"],
  },
  {
    category: "Web & Frontend",
    items: ["React", "HTML", "CSS", "Vue", "Bootstrap", "Functional programming"],
    strong: ["React", "HTML", "CSS"],
  },
  {
    category: "Blockchain",
    items: ["Solidity", "Smart contracts", "DeFi", "ZKP", "PoW / PoS", "Rust", "SUI"],
    strong: ["Solidity", "Smart contracts"],
  },
  {
    category: "Data & ML",
    items: ["Machine Learning", "SQL", "NoSQL", "Big Data", "Remote Sensing"],
    strong: ["Machine Learning", "SQL"],
  },
  {
    category: "Cybersecurity",
    items: ["ISO 27001", "EBIOS RM", "Risk Management", "SSIP", "Phishing campaigns"],
    strong: ["ISO 27001", "EBIOS RM"],
  },
  {
    category: "Tools",
    items: ["Git", "Linux", "Excel (macros)", "LaTeX", "Vercel"],
    strong: ["Git", "Linux"],
  },
];

function Skills() {
  return (
    <section id="skills">
      <p className="section-tag">// 03 — skills</p>
      <h2 className="section-title">Tech <span>Stack</span></h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1.5rem",
      }}>
        {skills.map(({ category, items, strong }) => (
          <div key={category} style={{
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.07)",
            padding: "1.5rem",
            borderTop: "2px solid var(--accent)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(120,47,64,0.2)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
          >
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--accent)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "1rem",
            }}>{category}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {items.map(item => (
                <span key={item} style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  padding: "0.3rem 0.6rem",
                  background: strong.includes(item) ? "rgba(120,47,64,0.25)" : "#1e1e1e",
                  border: `1px solid ${strong.includes(item) ? "rgba(120,47,64,0.6)" : "rgba(255,255,255,0.1)"}`,
                  color: strong.includes(item) ? "#e8899a" : "#e0e0e0",
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;