import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatbotWidget from "@/components/layout/ChatbotWidget";
import ScrollToTop from "@/components/ScrollToTop";

export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-[90px]" id="main-content">{children}</main>
      <Footer />
      <ChatbotWidget />
      <ScrollToTop />
    </>
  );
}
