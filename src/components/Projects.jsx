const projects = [
  {
    name: "LNURL Server – Lightning Network",
    type: "Rust · Bitcoin",
    desc: "Full implementation of LNURL protocols (LUD-02, LUD-03, LUD-04) on Bitcoin testnet4 using Core Lightning. Supports channel requests, withdrawals, and cryptographic auth via Lightning node keys.",
    tags: ["Rust", "Lightning Network", "Bitcoin", "LUD-02", "LUD-03", "LUD-04"],
    link: "https://github.com/alineuh/lnurl-project",
    highlight: true,
  },
  {
    name: "Cross-Chain Token Bridge",
    type: "Solidity · TypeScript",
    desc: "Bidirectional ERC20 bridge between Ethereum Holesky and Sepolia. Finality-aware event indexer, multi-token support, pause control, and swap functionality via token mappings.",
    tags: ["Solidity", "Foundry", "TypeScript", "Holesky", "Sepolia"],
    link: "https://github.com/alineuh/cross-chain-bridge",
    highlight: true,
  },
  {
    name: "MEV Arbitrage Bot – Sepolia",
    type: "Solidity · MEV",
    desc: "On-chain MEV arbitrage bot deployed on Sepolia testnet, exploiting price differences across DEXs.",
    tags: ["Solidity", "MEV", "DeFi", "Arbitrage", "Sepolia"],
    link: "https://github.com/alineuh/mev-arbitrage-sepolia",
    highlight: false,
  },
  {
    name: "ERC-4337 Smart Account",
    type: "Solidity · Account Abstraction",
    desc: "Implementation of ERC-4337 account abstraction (v0.7) on Sepolia. Explores UserOps, Bundlers, and Paymasters.",
    tags: ["Solidity", "ERC-4337", "Account Abstraction", "Sepolia"],
    link: "https://github.com/alineuh/erc4337-smart-account-v07-sepolia",
    highlight: false,
  },
  {
    name: "Hackathon CDC – CGI Front",
    type: "React · Hackathon",
    desc: "Frontend built during a CGI Hackathon for a payslip error detection and dismissal cost calculation tool.",
    tags: ["React", "JavaScript", "Hackathon", "CGI"],
    link: "https://github.com/alineuh/CDC-CGI",
    highlight: false,
  },
  {
    name: "ERC20 & ERC721 – 101",
    type: "Solidity · NFT",
    desc: "Foundational ERC20 and ERC721 token implementations — transfer, approval, minting, and metadata handling.",
    tags: ["Solidity", "ERC20", "ERC721", "NFT"],
    link: "https://github.com/alineuh/ERC20-101",
    highlight: false,
  },
  {
    name: "Big Data Cost Calculator",
    type: "React · Python · Full-stack",
    desc: "Full-stack platform to calculate and compare Big Data model costs. React/TypeScript frontend with 3 pages (Home, Model Detail, Comparison) and a Python/Flask REST API backend.",
    tags: ["React", "TypeScript", "Python", "Flask", "Big Data", "REST API"],
    link: null,
    highlight: false,
  },
];

function Projects() {
  return (
    <section id="projects">
      <p className="section-tag">// 04 — projects</p>
      <h2 className="section-title">Selected <span>Work</span></h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
      }}>
        {projects.map(({ name, type, desc, tags, link, highlight }) => (
          <div key={name} style={{
            background: highlight ? "#160d0f" : "#111111",
            border: `1px solid ${highlight ? "rgba(120,47,64,0.6)" : "rgba(255,255,255,0.08)"}`,
            borderTop: `2px solid ${highlight ? "var(--accent)" : "rgba(255,255,255,0.2)"}`,
            padding: "1.75rem",
            transition: "transform 0.2s, box-shadow 0.2s",
            position: "relative",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = highlight
              ? "0 8px 32px rgba(120,47,64,0.3)"
              : "0 8px 24px rgba(255,255,255,0.05)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
          >
            {highlight && (
              <span style={{
                position: "absolute",
                top: "1rem", right: "1rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                color: "var(--accent)",
                background: "rgba(120,47,64,0.15)",
                border: "1px solid rgba(120,47,64,0.5)",
                padding: "0.2rem 0.6rem",
                letterSpacing: "0.1em",
              }}>★ FEATURED</span>
            )}

            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: highlight ? "#c97a8a" : "#888888",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "0.75rem",
            }}>{type}</p>

            <h3 style={{
              fontSize: "1.05rem",
              fontWeight: "600",
              color: highlight ? "#ffffff" : "#e0e0e0",
              marginBottom: "0.75rem",
              lineHeight: 1.4,
            }}>{name}</h3>

            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "#a0a0a0",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}>{desc}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
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

            {link ? (
              <a href={link} target="_blank" rel="noreferrer" style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--accent)",
                textDecoration: "none",
                letterSpacing: "0.1em",
                borderBottom: "1px solid rgba(120,47,64,0.3)",
                paddingBottom: "1px",
              }}
              onMouseEnter={e => e.target.style.borderColor = "var(--accent)"}
              onMouseLeave={e => e.target.style.borderColor = "rgba(120,47,64,0.3)"}
              >
                → VIEW ON GITHUB
              </a>
            ) : (
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "#555555",
                letterSpacing: "0.1em",
              }}>⊘ PRIVATE REPO</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;