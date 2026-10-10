"use client";

const variants = {
  primary: "bg-[#00F0FF]/10 hover:bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] focus-visible:ring-[#00F0FF]/50",
  secondary: "bg-transparent hover:bg-[#7B2CBF]/20 text-[#7B2CBF] border border-[#7B2CBF]/50 hover:shadow-[0_0_15px_rgba(123,44,191,0.4)] focus-visible:ring-[#7B2CBF]/50",
  ghost: "bg-transparent hover:bg-white/10 text-white/70 hover:text-white border border-transparent hover:border-white/20 focus-visible:ring-white/30",
  danger: "bg-[#FF003C]/10 hover:bg-[#FF003C]/20 text-[#FF003C] border border-[#FF003C]/50 hover:shadow-[0_0_15px_rgba(255,0,60,0.4)] focus-visible:ring-[#FF003C]/50",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled,
  loading,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      )}
      {children}
    </button>
  );
}
