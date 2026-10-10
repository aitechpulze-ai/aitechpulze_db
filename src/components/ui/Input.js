export default function Input({ label, error, id, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-[10px] font-mono text-[#00F0FF]/80 uppercase tracking-widest">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`bg-[#050B14]/50 border border-[#00F0FF]/30 rounded-lg px-4 py-2.5 text-white 
          focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] 
          transition-all font-mono text-sm placeholder-white/20 shadow-[inset_0_0_10px_rgba(0,240,255,0.05)]
          ${error ? "border-[#FF003C] focus:border-[#FF003C] focus:ring-[#FF003C]" : ""}
          ${className}`}
        {...props}
      />
      {error && <p className="text-xs font-mono text-[#FF003C] mt-1">{error}</p>}
    </div>
  );
}
