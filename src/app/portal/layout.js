export const metadata = {
  robots: { index: false, follow: false },
};

export default function PortalLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
