export default function Select({ label, error, id, children, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-200">
          {label}
        </label>
      )}
      <select
        id={id}
        className={`rounded-lg border border-[#00F0FF]/40 px-3 py-2 text-sm text-white bg-[#050B14]/80 backdrop-blur-xl border border-[#00F0FF]/20
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition
          ${error ? "border-red-400 focus:ring-red-400" : ""}
          ${className}`}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
