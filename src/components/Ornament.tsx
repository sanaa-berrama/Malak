export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-gold ${className}`}>
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
      <span className="h-2 w-2 rotate-45 border border-gold" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
    </div>
  );
}
