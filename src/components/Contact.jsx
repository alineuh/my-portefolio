function Contact() {
  return (
    <section id="contact">
      <p className="section-tag">// 07 — contact</p>
      <h2 className="section-title">Get in <span>Touch</span></h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "start",
      }}>

        <div>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            color: "#a0a0a0",
            lineHeight: 2,
            marginBottom: "2rem",
          }}>
            I'm open to new opportunities — full-time positions, collaborations, or just a good conversation about blockchain, cybersecurity or tech. Feel free to reach out!
          </p>

          <a href="mailto:aline.p.spano@gmail.com" style={{
            display: "inline-block",
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            padding: "0.9rem 2rem",
            background: "var(--accent)",
            color: "#ffffff",
            textDecoration: "none",
            letterSpacing: "0.1em",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => e.target.style.opacity = "0.85"}
          onMouseLeave={e => e.target.style.opacity = "1"}
          >
            SEND AN EMAIL
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { label: "EMAIL", value: "aline.p.spano@gmail.com", link: "mailto:aline.p.spano@gmail.com" },
            { label: "GITHUB", value: "github.com/alineuh", link: "https://github.com/alineuh" },
            { label: "PHONE", value: "+33 7 67 96 85 03", link: "tel:+33767968503" },
            { label: "LINKEDIN", value: "Aline SPANO", link: "https://www.linkedin.com/in/aline-spano-a1493025b/" },
          ].map(({ label, value, link }) => (
            <a key={label} href={link} target={link.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "1rem 1.25rem",
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.07)",
                borderLeft: "2px solid var(--accent)",
                textDecoration: "none",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#160d0f";
                e.currentTarget.style.borderColor = "rgba(120,47,64,0.6)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#111111";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--accent)",
                minWidth: "60px",
                letterSpacing: "0.1em",
              }}>{label}</span>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: "#e0e0e0",
              }}>{value}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Contact;