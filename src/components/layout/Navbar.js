"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import PulseLogo from "@/components/svg/PulseLogo";
import MagneticButton from "@/components/MagneticButton";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Academy", href: "/academy" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-4 px-4 transition-all duration-500">
      <nav
        className={`mx-auto flex items-center justify-between w-full max-w-7xl transition-all duration-500 rounded-full backdrop-blur-2xl ${
          scrolled
            ? "bg-[#03040b]/85 border border-white/8 shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04),0_0_30px_rgba(0,240,255,0.05)] px-4 py-1.5"
            : "bg-white/[0.02] border border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.3)] px-5 py-2"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <PulseLogo />

        <ul className="hidden lg:flex items-center gap-1 list-none relative" role="menubar">
          {navLinks.map((l) => {
            const isActive = l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
            return (
              <li key={l.href} className="relative px-2.5 py-1 group" role="none">
                <Link
                  href={l.href}
                  className={`relative inline-block z-10 text-[11px] font-bold uppercase tracking-widest transition-colors py-1 ${
                    isActive ? "text-[#00F0FF]" : "text-white/60 hover:text-[#00F0FF]"
                  }`}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                >
                  {l.label}
                  {/* Hover underline (shows on hover if not active) */}
                  {!isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00F0FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true" />
                  )}
                  {/* Active indicator (sliding underline) */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00F0FF]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href="https://wa.me/917868846399" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(37,211,102,0.3)]"
              aria-label="Chat on WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </a>
            <MagneticButton 
              href="/get-quote" 
              className="py-1.5 px-4 text-[10px] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(123,44,191,0.5)]"
              aria-label="Get a quote for your project"
            >
              Get Quote
            </MagneticButton>
          </div>
          <button
            className="flex lg:hidden items-center justify-center p-2.5 text-[#00F0FF] rounded-xl hover:bg-[#00F0FF]/10 transition-colors z-50 relative"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <div className="relative flex flex-col justify-center items-center w-6 h-5">
              <span className={`absolute h-[2px] w-full bg-current transform transition-all duration-300 ease-in-out ${open ? "rotate-45" : "-translate-y-2"}`} />
              <span className={`absolute h-[2px] w-full bg-current transition-all duration-300 ease-in-out ${open ? "opacity-0 scale-x-0" : "opacity-100"}`} />
              <span className={`absolute h-[2px] w-full bg-current transform transition-all duration-300 ease-in-out ${open ? "-rotate-45" : "translate-y-2"}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "circle(0px at calc(100% - 40px) 40px)", opacity: 0 }}
            animate={{ clipPath: "circle(150vh at calc(100% - 40px) 40px)", opacity: 1 }}
            exit={{ clipPath: "circle(0px at calc(100% - 40px) 40px)", opacity: 0 }}
            transition={{ type: "spring", stiffness: 40, damping: 15 }}
            className="fixed top-0 right-0 w-full sm:w-[350px] h-screen bg-[#03040B]/95 backdrop-blur-3xl border-l border-white/10 shadow-2xl lg:hidden flex flex-col pt-24 px-6 z-[-1]"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <motion.ul 
              className="flex flex-col gap-4"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
            >
              {navLinks.map((l) => (
                <motion.li 
                  key={l.href} 
                  role="none"
                  variants={{
                    closed: { opacity: 0, x: 50, scale: 0.8 },
                    open: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-lg font-bold text-white/80 hover:bg-[#00F0FF]/20 hover:text-[#00F0FF] hover:border-[#00F0FF]/30 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md"
                    role="menuitem"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              
              <motion.li 
                className="mt-6 flex flex-col gap-4" 
                role="none"
                variants={{
                  closed: { opacity: 0, x: 50, scale: 0.8 },
                  open: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
                }}
              >
                <div className="flex gap-3">
                  <a 
                    href="https://wa.me/917868846399" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all shadow-[0_8px_32px_rgba(37,211,102,0.2)]"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  </a>
                  <MagneticButton 
                    href="/get-quote" 
                    className="flex-1 py-4 text-sm font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(123,44,191,0.5)] flex items-center justify-center" 
                    onClick={() => setOpen(false)}
                    aria-label="Get a quote for your project"
                  >
                    Get a Quote
                  </MagneticButton>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
