function Interests() {
  const withPhoto = [
    { emoji: "⚽", title: "Football", sub: "Club player since 2018", photo: "/photo_foot.png" },
    { emoji: "♟️", title: "Chess", sub: "8th in France – 2017", photo: "/echecs.png" },
  ];

  const withoutPhoto = [
    { emoji: "🥋", title: "Taekwondo", sub: "Red belt" },
    { emoji: "🎌", title: "Mangas", sub: "Always one ongoing" },
    { emoji: "📖", title: "Philosophy", sub: "Passionate reader" },
    { emoji: "🎮", title: "Gaming", sub: "Story, role playing, adventure games" },
  ];

  const cardStyle = {
    background: "#111111",
    border: "1px solid rgba(255,255,255,0.07)",
    overflow: "hidden",
    transition: "transform 0.2s",
  };

  return (
    <section id="interests">
      <p className="section-tag">// 06 — beyond code</p>
      <h2 className="section-title">Interests <span>& Life</span></h2>

      {/* Top row – 2 photos */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1.25rem",
        marginBottom: "1.25rem",
      }}>
        {withPhoto.map(({ emoji, title, sub, photo }) => (
          <div key={title} style={{
            ...cardStyle,
            borderTop: "2px solid var(--accent)",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div style={{ width: "100%", height: "220px", overflow: "hidden" }}>
              <img src={photo} alt={title} style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(0.8)",
                transition: "transform 0.4s",
              }}
              onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.target.style.transform = "scale(1)"}
              />
            </div>
            <div style={{ padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ fontSize: "1.3rem" }}>{emoji}</span>
              <div>
                <p style={{ color: "#ffffff", fontSize: "0.95rem", fontWeight: "600" }}>{title}</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#888888", marginTop: "0.2rem" }}>{sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom row – 4 without photo */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1.25rem",
      }}>
        {withoutPhoto.map(({ emoji, title, sub }) => (
          <div key={title} style={{
            ...cardStyle,
            padding: "1.25rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <span style={{ fontSize: "1.3rem" }}>{emoji}</span>
            <div>
              <p style={{ color: "#e0e0e0", fontSize: "0.85rem", fontWeight: "600" }}>{title}</p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "#888888", marginTop: "0.2rem" }}>{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Interests;