export default function Textarea({ label, error, id, rows = 4, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-200">
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        className={`rounded-lg border border-[#00F0FF]/40 px-3 py-2 text-sm text-white
          placeholder:text-[#00F0FF]/50 focus:outline-none focus:ring-2 focus:ring-indigo-500
          focus:border-transparent transition resize-y
          ${error ? "border-red-400 focus:ring-red-400" : ""}
          ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
