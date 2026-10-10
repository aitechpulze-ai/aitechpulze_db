import LoginForm from "@/components/portal/LoginForm";

export const metadata = { title: "Portal Login | AiTechPulze", robots: { index: false } };

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden bg-[#050B14]">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#00F0FF]/20 to-[#7B2CBF]/20 rounded-full blur-[100px] opacity-30"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full flex items-center justify-center bg-[#050B14]/80 border-2 border-[#00F0FF]/60 shadow-[0_0_35px_rgba(0,240,255,0.6)] relative group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#00F0FF]/40 to-[#7B2CBF]/40 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
               {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/favicon.png" alt="AiTechPulze Logo" className="w-16 h-16 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,240,255,1)]" />
            </div>
          </div>
          
          <div className="inline-flex items-center justify-center px-3 py-1 mb-4 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse mr-2"></span>
            <span className="text-[10px] uppercase tracking-widest text-[#00F0FF] font-semibold">Secure Access</span>
          </div>
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#7B2CBF] tracking-wide">
            SYSTEM LOGIN
          </h1>
          <p className="mt-3 text-xs text-[#00F0FF]/70 font-mono uppercase tracking-[0.2em]">
            INITIALIZE SESSION
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
