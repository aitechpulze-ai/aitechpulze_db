export default function Input({ label, error, id, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900
          placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500
          focus:border-transparent transition
          ${error ? "border-red-400 focus:ring-red-400" : ""}
          ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
