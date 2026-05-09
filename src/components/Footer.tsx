export function Footer() {
  return (
    <footer
      className="mt-32 py-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-end flex-wrap gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs tracking-wide" style={{ color: "var(--text-dim)" }}>
            Design by Dagm
          </span>
          <span className="text-[0.7rem] tracking-wide" style={{ color: "var(--text-dim)" }}>
            Copyright &copy; 2026 All rights reserved
          </span>
        </div>
        <div className="flex gap-6">
          <a
            href="https://github.com/DAGMAWI-YOSEPH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-wide lowercase relative pb-0.5 group"
            style={{ color: "var(--text-dim)" }}
          >
            github
            <span className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300" style={{ background: "var(--accent)" }} />
          </a>
          <a
            href="https://open.spotify.com/user/31qyvs2kvcb3qrlmrekz6ywidtyq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-wide lowercase relative pb-0.5 group"
            style={{ color: "var(--text-dim)" }}
          >
            spotify
            <span className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300" style={{ background: "var(--accent)" }} />
          </a>
          <a
            href="mailto:Dagmawi.yoseph@icloud.com"
            className="text-xs tracking-wide lowercase relative pb-0.5 group"
            style={{ color: "var(--text-dim)" }}
          >
            contact
            <span className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300" style={{ background: "var(--accent)" }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
