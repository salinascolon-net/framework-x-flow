export function SectionLabel({ index, children, dark = false }) {
  return (
    <div className={`flex items-center gap-3 ${dark ? "text-ivory/60" : "text-teal"}`}>
      {index && (
        <span className={`text-xs font-medium tracking-[0.22em] ${dark ? "text-terracotta" : "text-terracotta"}`}>
          {index}
        </span>
      )}
      <span className="h-px w-8 bg-current opacity-40" />
      <span className="text-xs font-medium uppercase tracking-[0.22em]">{children}</span>
    </div>
  );
}
