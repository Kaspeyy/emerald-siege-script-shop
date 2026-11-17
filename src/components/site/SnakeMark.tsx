export function SnakeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M22 6.5c-1.6-1.6-4-2.5-6.5-2.5C11 4 8 6.6 8 10c0 7 16 4.5 16 12 0 3.6-3.4 6-8 6-3 0-5.6-1-7.5-2.8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="22.5" cy="6.5" r="2.6" fill="currentColor" />
      <path d="M25 6.5h3.5M27 6.5l1.5-1.5M27 6.5l1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
