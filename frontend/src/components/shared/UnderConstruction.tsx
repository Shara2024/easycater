const UnderConstruction = ({ title }: { title: string }) => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 bg-cream text-center px-6">
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect x="8" y="52" width="56" height="6" rx="3" fill="#1C1810" opacity="0.15" />
      <rect x="30" y="14" width="4" height="34" rx="2" fill="#1C1810" />
      <rect x="14" y="14" width="36" height="8" rx="2" fill="#C1440E">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="-18 32 18; 18 32 18; -18 32 18"
          dur="1.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>

    <div>
      <p className="font-display text-2xl text-ink">{title}</p>
      <p className="text-sm text-ink/60 mt-1">This page is under construction - check back soon.</p>
    </div>

    <div className="w-48 h-1.5 rounded-full bg-ink/10 overflow-hidden">
      <div className="h-full w-1/3 rounded-full bg-terracotta animate-[loading_1.4s_ease-in-out_infinite]" />
    </div>
  </div>
);

export default UnderConstruction;
