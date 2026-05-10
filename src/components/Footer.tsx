export function Footer() {
  return (
    <footer
      className="mt-32 py-8 w-full"
      style={{ borderTop: "1px solid rgba(0, 240, 255, 0.1)" }}
    >
      <div className="px-8 lg:px-16 flex justify-between items-end flex-wrap gap-4">
        <div className="flex flex-col gap-1">
          <span
            className="text-xs tracking-wide"
            style={{ color: "var(--text-dim)", fontFamily: "var(--font-mono), monospace" }}
          >
            <span style={{ color: "var(--accent)", opacity: 0.4 }}>◈</span> Design by Dagm
          </span>
          <span
            className="text-[0.7rem] tracking-wide"
            style={{ color: "var(--text-dim)", fontFamily: "var(--font-mono), monospace" }}
          >
            Copyright &copy; 2026 All rights reserved
          </span>
        </div>
        <div className="flex gap-6">
          {[
            { label: "github", href: "https://github.com/DAGMAWI-YOSEPH" },
            { label: "spotify", href: "https://open.spotify.com/user/31qyvs2kvcb3qrlmrekz6ywidtyq" },
            { label: "contact", href: "mailto:Dagmawi.yoseph@icloud.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="text-xs tracking-wide lowercase relative pb-0.5 group"
              style={{ color: "var(--text-dim)", fontFamily: "var(--font-mono), monospace" }}
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ background: "var(--accent)" }}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
