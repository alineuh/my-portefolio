function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1.2rem 3rem",
      background: "var(--bg)",
      borderBottom: "1px solid var(--border)",
      backdropFilter: "blur(10px)",
    }}>
      <span style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.9rem",
        color: "var(--accent)",
        letterSpacing: "0.05em"
      }}>
        aline.spano
      </span>

      <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
        {["about me", "education", "skills", "projects", "experience", "contact"].map(s => (
          <li key={s}>
            <a href={`#${s}`} style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--muted)",
              textDecoration: "none",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.target.style.color = "var(--accent)"}
            onMouseLeave={e => e.target.style.color = "var(--muted)"}
            >{s}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;