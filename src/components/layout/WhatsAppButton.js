import { site } from "@/content/site";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${site.contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
    >
      {/* WhatsApp icon */}
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7" aria-hidden="true">
        <path d="M16 3C8.82 3 3 8.82 3 16c0 2.38.64 4.6 1.75 6.53L3 29l6.64-1.74A12.93 12.93 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.75c-2.12 0-4.1-.58-5.8-1.6l-.42-.25-4.32 1.13 1.16-4.2-.28-.43A10.74 10.74 0 015.25 16c0-5.93 4.82-10.75 10.75-10.75S26.75 10.07 26.75 16 21.93 26.75 16 26.75zm5.89-7.93c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.26-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6a9.7 9.7 0 01-1.79-2.23c-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.75-.99-2.4-.26-.63-.53-.54-.73-.55l-.62-.01c-.22 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.67s1.15 3.1 1.31 3.31c.16.21 2.26 3.45 5.48 4.84.77.33 1.37.52 1.83.67.77.25 1.47.21 2.02.13.62-.09 1.9-.77 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.14-.3-.22-.62-.38z" />
      </svg>
    </a>
  );
}
