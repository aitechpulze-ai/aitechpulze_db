const colours = {
  gray: "bg-white/10 text-gray-200",
  indigo: "bg-indigo-100 text-indigo-700",
  green: "bg-green-100 text-green-700",
  yellow: "bg-yellow-100 text-yellow-800",
  red: "bg-red-100 text-red-700",
  blue: "bg-blue-100 text-blue-700",
};

export default function Badge({ children, colour = "gray", className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
        ${colours[colour] ?? colours.gray} ${className}`}
    >
      {children}
    </span>
  );
}
