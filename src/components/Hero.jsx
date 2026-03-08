import { useEffect, useState } from "react";

const phrases = [
  "Engineer.",
  "Blockchain developer.",
  "Cybersecurity specialist.",
  "ML enthusiast.",
];

function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setPhraseIndex(i => (i + 1) % phrases.length);
        }
      }
    }, deleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      paddingTop: "5rem",
      gap: "4rem",
    }}>

      {/* TEXT */}
      <div style={{ flex: 1 }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          color: "var(--accent)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
          opacity: 0,
          animation: "fadeUp 0.6s 0.2s forwards",
        }}>
          Hi, I'm
        </p>

        <h1 style={{
          fontSize: "clamp(3rem, 8vw, 6rem)",
          fontWeight: "400",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          opacity: 0,
          animation: "fadeUp 0.6s 0.4s forwards",
        }}>
          Aline<br />
          <span style={{ color: "var(--accent)" }}>SPANO</span>
        </h1>

        <h2 style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(1rem, 2vw, 1.3rem)",
          fontWeight: "400",
          color: "#a0a0a0",
          marginTop: "1.5rem",
          minHeight: "2rem",
          opacity: 0,
          animation: "fadeUp 0.6s 0.6s forwards",
        }}>
          {displayed}
          <span style={{
            borderRight: "2px solid var(--accent)",
            marginLeft: "2px",
            animation: "blink 1s infinite",
          }}>&nbsp;</span>
        </h2>

        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.85rem",
          color: "#a0a0a0",
          marginTop: "1.5rem",
          lineHeight: 2,
          opacity: 0,
          animation: "fadeUp 0.6s 0.8s forwards",
        }}>
          Class of 2026 · Paris, France<br />
          ESILV · Crédit Agricole Assurances · Taiwan
        </p>

        <div style={{
          display: "flex",
          gap: "1rem",
          marginTop: "3rem",
          opacity: 0,
          animation: "fadeUp 0.6s 1s forwards",
        }}>
          <a href="#projects" style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            padding: "0.8rem 2rem",
            background: "var(--accent)",
            color: "#ffffff",
            textDecoration: "none",
            letterSpacing: "0.1em",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => e.target.style.opacity = "0.85"}
          onMouseLeave={e => e.target.style.opacity = "1"}
          >
            VIEW PROJECTS
          </a>
          <a href="#contact" style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            padding: "0.8rem 2rem",
            background: "transparent",
            color: "var(--accent)",
            textDecoration: "none",
            border: "1px solid rgba(120,47,64,0.4)",
            letterSpacing: "0.1em",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={e => e.target.style.borderColor = "var(--accent)"}
          onMouseLeave={e => e.target.style.borderColor = "rgba(120,47,64,0.4)"}
          >
            GET IN TOUCH
          </a>
        </div>
      </div>

      {/* PHOTO */}
      <div style={{
        opacity: 0,
        animation: "fadeUp 0.6s 0.6s forwards",
        flexShrink: 0,
      }}>
        <div style={{
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "2px solid rgba(120,47,64,0.5)",
          boxShadow: "0 0 40px rgba(120,47,64,0.2)",
        }}>
          <img
            src="/photo.png"
            alt="Aline Spano"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        </div>
      </div>

    </section>
  );
}

export default Hero;